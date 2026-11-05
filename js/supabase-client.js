/* Shared Supabase client and content adapter for PSYCHO 404. */
(function () {
  const client = window.supabase.createClient(
    "https://dniewruwrswlgbatvnfk.supabase.co",
    "sb_publishable_mx1RWmrF4XzYkpdAJidJRg_34-pnlps"
  );

  async function fetchRows() {
    const results = await Promise.all([
      client.from("site_settings").select("*").eq("id", 1).maybeSingle(),
      client.from("lectures").select("*").order("sort_order"),
      client.from("lecture_resources").select("*").order("sort_order"),
      client.from("resource_categories").select("*").order("sort_order"),
      client.from("resource_subsections").select("*").order("sort_order"),
      client.from("category_items").select("*").order("sort_order"),
      client.from("free_lecture_parts").select("*").order("sort_order")
    ]);
    const failed = results.find((result) => result.error);
    if (failed) throw failed.error;
    return results.map((result) => result.data);
  }

  function mapContent(rows) {
    const [settings, lectures, resources, categories, subsections, items, freeParts] = rows;
    const fallback = window.COURSE_DATA || {};
    const resourcesByLecture = new Map();
    resources.forEach((row) => {
      if (!resourcesByLecture.has(row.lecture_id)) resourcesByLecture.set(row.lecture_id, []);
      resourcesByLecture.get(row.lecture_id).push({
        id: row.resource_key, name: row.name, type: row.resource_type,
        url: row.url, description: row.description, format: row.format,
        placeholder: row.placeholder, thumbnail: row.thumbnail_url, links: row.links || []
      });
    });
    const numberById = new Map(lectures.map((row) => [row.id, row.lecture_number]));
    const courseLectures = lectures.map((row) => ({
      id: row.id, dbId: row.id, number: String(row.lecture_number).padStart(2, "0"),
      title: row.title, badge: row.badge,
      slug: row.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      status: row.is_published ? "Published" : "Draft",
      resources: resourcesByLecture.get(row.id) || []
    }));
    const mappedItems = items.map((row) => ({
      dbId: row.id, subsectionId: row.subsection_id, lectureId: row.lecture_id,
      number: row.item_number,
      lectureNumber: row.lecture_id ? String(numberById.get(row.lecture_id) || "").padStart(2, "0") : "",
      title: row.title,
      description: row.display_title && row.description
        ? row.display_title + " • " + row.description
        : (row.display_title || row.description),
      type: row.resource_type,
      url: row.url, thumbnail: row.thumbnail_url, links: row.links || []
    }));
    const navigationCategories = categories.map((row) => {
      const subs = subsections.filter((sub) => sub.category_id === row.id).map((sub) => ({
        id: sub.id, title: sub.title, badge: sub.badge, icon: sub.icon,
        description: sub.description,
        items: mappedItems.filter((item) => item.subsectionId === sub.id)
      }));
      return {
        id: row.id, title: row.title, shortDesc: row.short_description,
        icon: row.icon, badge: row.badge,
        items: mappedItems.filter((item) => item.subsectionId == null && items.find((it) => it.id === item.dbId)?.category_id === row.id),
        subsections: subs
      };
    });
    const bio = Array.isArray(settings?.instructor_bio) ? settings.instructor_bio : [];
    return {
      course: {
        code: settings?.course_code || fallback.course?.code || "PSYCHO 404",
        name: settings?.course_name || fallback.course?.name || "",
        badge: settings?.course_badge || fallback.course?.badge || "",
        semester: settings?.semester || fallback.course?.semester || ""
      },
      instructor: {
        name: settings?.instructor_name || fallback.instructor?.name || "",
        roleBadge: settings?.instructor_role_badge || "Course Instructor & Creator",
        bioParagraph1: bio[0] || fallback.instructor?.bioParagraph1 || "",
        bioParagraph2: bio[1] || fallback.instructor?.bioParagraph2 || "",
        tags: settings?.instructor_tags || fallback.instructor?.tags || [],
        photoUrl: settings?.instructor_photo_url || fallback.instructor?.photoUrl || "",
        photoAlt: settings?.instructor_photo_alt || fallback.instructor?.photoAlt || ""
      },
      navigationCategories,
      freeLectures: {
        ...(fallback.freeLectures || {}),
        parts: freeParts.map((row) => ({
          id: row.id, partNumber: row.part_number, title: row.title,
          description: row.description, thumbnail: row.thumbnail_url,
          videoUrl: row.video_url, duration: row.duration,
          placeholderLabel: row.placeholder_label
        }))
      },
      courseLectures
    };
  }

  async function loadCourseData() {
    return mapContent(await fetchRows());
  }

  async function loadAdminData() {
    const rows = await fetchRows();
    const content = mapContent(rows);
    const [settings, lectures, resources, categories, subsections, items, freeParts] = rows;
    const fallback = typeof ADMIN_REAL_DATA !== "undefined" ? ADMIN_REAL_DATA : {};
    const reportRows = items.filter((row) => row.category_id === "cat-reports");
    const videoRows = items.filter((row) => row.category_id === "cat-quickvids");
    const lectureTitle = (row) =>
      content.courseLectures.find((lecture) => lecture.number === row.item_number)?.title || row.title;
    return {
      profile: {
        name: settings?.instructor_name || "",
        roleBadge: settings?.instructor_role_badge || fallback.profile?.roleBadge || "COURSE INSTRUCTOR & CREATOR",
        headline: settings?.instructor_name || "",
        bio: settings?.instructor_bio || [],
        tags: settings?.instructor_tags || [],
        photo: settings?.instructor_photo_url || "",
        telegramUrl: settings?.telegram_url || "",
        primaryCtaText: settings?.primary_cta_text || "",
        secondaryCtaText: settings?.secondary_cta_text || ""
      },
      lectures: lectures.map((row) => ({
        dbId: row.id, id: row.id,
        number: String(row.lecture_number).padStart(2, "0"),
        title: row.title, badge: row.badge,
        status: row.is_published ? "Published" : "Draft",
        lastUpdated: row.updated_at || "Active",
        resources: resources.filter((res) => res.lecture_id === row.id).map((res) => ({
          dbId: res.id, id: res.resource_key, name: res.name,
          type: res.resource_type, url: res.url, description: res.description,
          format: res.format, placeholder: res.placeholder, links: res.links || []
        }))
      })),
      reports: reportRows.map((row) => ({
        dbId: row.id, number: row.item_number, lectureTitle: lectureTitle(row),
        title: row.title, url: row.url, description: row.description,
        status: row.url ? "published" : "empty"
      })),
      quickVideos: videoRows.map((row) => ({
        dbId: row.id, number: row.item_number, topic: row.title,
        title: row.display_title || row.description || row.title,
        description: row.description, videoUrl: row.url,
        thumbnail: row.thumbnail_url ? "../" + row.thumbnail_url : "",
        status: row.url ? "published" : "empty"
      })),
      freeLectures: {
        ...(fallback.freeLectures || {}),
        parts: freeParts.map((row) => ({
          id: row.id, partNumber: row.part_number, title: row.title,
          description: row.description,
          thumbnail: row.thumbnail_url.startsWith("http") || row.thumbnail_url.startsWith("../")
            ? row.thumbnail_url : "../" + row.thumbnail_url,
          videoUrl: row.video_url, platform: row.duration || "Telegram Video"
        }))
      },
      mediaLibrary: fallback.mediaLibrary || [],
      stats: fallback.stats || {}
    };
  }

  async function saveLecture(lecture) {
    const num = Number.parseInt(lecture.number, 10);
    const { data, error } = await client.from("lectures").upsert({
      id: lecture.dbId || undefined, lecture_number: num, title: lecture.title,
      badge: lecture.badge || "", sort_order: num,
      is_published: lecture.status !== "Draft", updated_at: new Date().toISOString()
    }, { onConflict: "lecture_number" }).select("id").single();
    if (error) throw error;
    const rows = lecture.resources.map((row, index) => ({
      lecture_id: data.id, resource_key: row.id, name: row.name,
      resource_type: row.type || "", url: row.url || "",
      description: row.description || "", format: row.format || "",
      placeholder: row.placeholder || "", thumbnail_url: row.thumbnail || "",
      links: row.links || [], sort_order: index + 1, is_published: true,
      updated_at: new Date().toISOString()
    }));
    const result = await client.from("lecture_resources").upsert(rows, {
      onConflict: "lecture_id,resource_key"
    });
    if (result.error) throw result.error;
  }

  async function saveCategoryItem(item, categoryId) {
    const number = Number.parseInt(item.number, 10);
    const found = await client.from("lectures").select("id").eq("lecture_number", number).maybeSingle();
    if (found.error) throw found.error;
    const row = {
      category_id: categoryId, subsection_id: null, lecture_id: found.data?.id || null,
      item_number: String(item.number), title: item.topic || item.lectureTitle || item.title || "",
      display_title: categoryId === "cat-quickvids" ? (item.title || "") : "",
      description: item.description || "", resource_type: categoryId === "cat-quickvids" ? "quickvids" : "reports",
      url: item.url || item.videoUrl || "",
      thumbnail_url: (item.thumbnail || "").startsWith("../") ? item.thumbnail.slice(3) : (item.thumbnail || ""),
      links: item.links || [], sort_order: number,
      is_published: true, updated_at: new Date().toISOString()
    };
    if (item.dbId) row.id = item.dbId;
    const result = await client.from("category_items").upsert(row, {
      onConflict: "category_id,subsection_id,item_number"
    });
    if (result.error) throw result.error;
  }

  async function saveFreePart(part, index) {
    const thumbnail = (part.thumbnail || "").startsWith("../") ? part.thumbnail.slice(3) : (part.thumbnail || "");
    const result = await client.from("free_lecture_parts").upsert({
      id: part.id || "free-part-" + (index + 1),
      part_number: String(part.partNumber || String(index + 1).padStart(2, "0")),
      title: part.title || "", description: part.description || "",
      thumbnail_url: thumbnail, video_url: part.videoUrl || "",
      duration: part.platform || part.duration || "Telegram",
      placeholder_label: part.placeholderLabel || "",
      sort_order: index + 1, is_published: true, updated_at: new Date().toISOString()
    });
    if (result.error) throw result.error;
  }

  async function saveProfile(profile) {
    const result = await client.from("site_settings").upsert({
      id: 1, course_code: "PSYCHO 404",
      course_name: window.COURSE_DATA?.course?.name || "Advanced Psychology Course",
      course_badge: window.COURSE_DATA?.course?.badge || "Interactive Course Platform",
      semester: window.COURSE_DATA?.course?.semester || "",
      instructor_name: profile.name || "", instructor_bio: profile.bio || [],
      instructor_role_badge: profile.roleBadge || "Course Instructor & Creator",
      instructor_tags: profile.tags || [], instructor_photo_url: profile.photo || "",
      instructor_photo_alt: profile.name || "", telegram_url: profile.telegramUrl || "",
      primary_cta_text: profile.primaryCtaText || "",
      secondary_cta_text: profile.secondaryCtaText || "",
      updated_at: new Date().toISOString()
    }, { onConflict: "id" });
    if (result.error) throw result.error;
  }

  const bootstrapAdminEmail = "yazeed.zeezo10@gmail.com";

  async function ensureBootstrapAdmin(user) {
    if (!user || user.email?.toLowerCase() !== bootstrapAdminEmail) return { user };
    if (user.app_metadata?.role === "admin") return { user };
    if (user.app_metadata?.admin_bootstrap_consumed) {
      return { error: "Administrator setup has already been used for this account." };
    }

    const result = await client.functions.invoke("bootstrap-psycho-admin", { body: {} });
    if (result.error || !result.data?.ok) {
      return { error: "Could not finish administrator setup. Please contact the project owner." };
    }
    const refreshed = await client.auth.refreshSession();
    if (refreshed.error) return { error: "Administrator role was set, but the session could not refresh. Sign in again." };
    const current = await client.auth.getUser();
    if (current.error || current.data.user?.app_metadata?.role !== "admin") {
      return { error: "Administrator role was set. Sign out and sign in again to refresh access." };
    }
    return { user: current.data.user };
  }

  window.PSYCHO404_DB = {
    client, loadCourseData, loadAdminData, saveLecture,
    saveCategoryItem, saveFreePart, saveProfile,
    async signInAdmin(email, password) {
      const result = await client.auth.signInWithPassword({ email, password });
      if (result.error) return { error: result.error.message };
      const bootstrap = await ensureBootstrapAdmin(result.data.user);
      if (bootstrap.error) {
        await client.auth.signOut();
        return { error: bootstrap.error };
      }
      if (bootstrap.user?.app_metadata?.role !== "admin") {
        await client.auth.signOut();
        return { error: "This account is not authorized as a PSYCHO 404 administrator." };
      }
      return { user: bootstrap.user };
    },
    async sendPasswordRecovery(email) {
      const result = await client.auth.resetPasswordForEmail(email, {
        redirectTo: new URL("../", window.location.href).toString()
      });
      if (result.error) return { error: "Could not send recovery email. Please wait a while and try again." };
      return { success: true };
    },
    async getAdminUser() {
      const result = await client.auth.getUser();
      if (result.error || !result.data.user) return null;
      const bootstrap = await ensureBootstrapAdmin(result.data.user);
      if (bootstrap.error || bootstrap.user?.app_metadata?.role !== "admin") return null;
      return bootstrap.user;
    },
    async signOut() {
      const result = await client.auth.signOut();
      if (result.error) throw result.error;
    }
  };
})();

