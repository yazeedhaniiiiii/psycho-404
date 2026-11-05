/**
 * PSYCHO 404 - Single Admin Dashboard Application Logic
 * Pure ES6 Client-side Engine - 100% Synchronized with Ground-Truth Course Data
 */

class AdminApp {
  constructor() {
    this.data = null;
    this.currentView = 'view-overview';
    this.init();
  }

  async init() {
    const user = await window.PSYCHO404_DB.getAdminUser();
    if (!user) {
      window.location.replace('login.html');
      return;
    }
    try {
      this.data = await window.PSYCHO404_DB.loadAdminData();
    } catch (error) {
      console.error('Could not load admin data from Supabase.', error);
      document.body.innerHTML = '<main style="padding:2rem;color:#fff;font-family:sans-serif">Could not load the dashboard data. Check your connection and try again.</main>';
      return;
    }
    const accountEmail = document.getElementById('settingsEmail');
    if (accountEmail) accountEmail.value = user.email || '';
    this.renderAll();
    this.initSidebarNavigation();
    this.initMobileSidebar();
    this.initLogout();

    if (window.location.hash) {
      const hashView = window.location.hash.replace('#', '');
      if (document.getElementById(hashView)) this.navigate(hashView);
    }
  }

  renderAll() {
    this.renderOverview();
    this.renderLectures();
    this.renderNotes();
    this.renderReports();
    this.renderFlashcards();
    this.renderQuickVideos();
    this.renderFreeLectures();
    this.renderHomepageEditor();
    this.renderMediaLibrary();
  }

  async saveToSupabase(save, successMessage) {
    try {
      await save();
      this.data = await window.PSYCHO404_DB.loadAdminData();
      this.renderAll();
      this.showToast(successMessage);
    } catch (error) {
      console.error('Supabase save failed.', error);
      this.showToast('Could not save. Check your connection and admin access.');
    }
  }

  // ------------------------------------------------------------------------
  // Navigation & View Switching
  // ------------------------------------------------------------------------
  initSidebarNavigation() {
    const links = document.querySelectorAll('.sidebar-link[data-view]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = link.getAttribute('data-view');
        this.navigate(targetView);
      });
    });
  }

  navigate(viewId) {
    this.currentView = viewId;

    // Update active class on sidebar links
    document.querySelectorAll('.sidebar-link').forEach(link => {
      if (link.getAttribute('data-view') === viewId) {
        link.classList.add('active');
        const viewName = link.querySelector('span:not(.sidebar-link-icon)').textContent;
        const breadcrumb = document.getElementById('currentViewBreadcrumb');
        if (breadcrumb) breadcrumb.textContent = viewName;
      } else {
        link.classList.remove('active');
      }
    });

    // Toggle active view
    document.querySelectorAll('.admin-view').forEach(view => {
      if (view.id === viewId) {
        view.classList.add('active-view');
      } else {
        view.classList.remove('active-view');
      }
    });

    // Close mobile sidebar if open
    this.closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  initMobileSidebar() {
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.getElementById('adminSidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (toggleBtn && sidebar && overlay) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-open');
        overlay.classList.toggle('active');
      });

      overlay.addEventListener('click', () => {
        this.closeMobileSidebar();
      });
    }
  }

  closeMobileSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('sidebar-open');
    if (overlay) overlay.classList.remove('active');
  }

  // ------------------------------------------------------------------------
  // Helper: Count active resources
  // ------------------------------------------------------------------------
  getActiveResourceCount(lec) {
    return lec.resources.filter(r => (r.url && r.url.trim() !== '') || (r.links && r.links.length > 0)).length;
  }

  // ------------------------------------------------------------------------
  // Section 1: Overview Render
  // ------------------------------------------------------------------------
  renderOverview() {
    // 1. Recalculate stats dynamically
    const totalLectures = this.data.lectures.length;
    let totalActiveResources = 0;
    this.data.lectures.forEach(lec => {
      totalActiveResources += this.getActiveResourceCount(lec);
    });

    const publishedQuickVids = this.data.quickVideos.filter(v => v.status === 'published').length;

    const statLecturesEl = document.getElementById('statTotalLectures');
    const statResourcesEl = document.getElementById('statTotalResources');
    const statQuickVidsEl = document.getElementById('statQuickVideos');
    const statFlashcardsEl = document.getElementById('statFlashcards');

    if (statLecturesEl) statLecturesEl.textContent = totalLectures;
    if (statResourcesEl) {
      statResourcesEl.innerHTML = `${totalActiveResources} <span style="font-size:1.1rem; color:var(--text-muted); font-weight:500;">/ ${totalLectures * 7}</span>`;
    }
    if (statQuickVidsEl) {
      statQuickVidsEl.innerHTML = `${publishedQuickVids} <span style="font-size:1.1rem; color:var(--text-muted); font-weight:500;">/ ${this.data.quickVideos.length}</span>`;
    }
    if (statFlashcardsEl) statFlashcardsEl.textContent = this.data.stats.notebookLmDecks;

    // 2. Render Audit Matrix Table (No fake activities)
    const tbody = document.getElementById('overviewActivityTbody');
    if (!tbody) return;

    tbody.innerHTML = this.data.lectures.map(lec => {
      const getResStatus = (id) => {
        const r = lec.resources.find(item => item.id === id);
        if (!r) return `<span class="badge badge-empty">Empty</span>`;
        if (r.links && r.links.length > 0) {
          return `<span class="badge badge-primary">${r.links.length} Links</span>`;
        }
        if (r.url && r.url.trim() !== '') {
          return `<span class="badge badge-success">Active</span>`;
        }
        return `<span class="badge badge-empty">Empty</span>`;
      };

      const qv = this.data.quickVideos.find(v => v.number === lec.number);
      const qvStatus = (qv && qv.status === 'published')
        ? `<span class="badge badge-success">Active</span>`
        : `<span class="badge badge-empty">Empty</span>`;

      return `
        <tr>
          <td><strong style="color:var(--text-primary); font-size:0.8rem;">${lec.number}. ${lec.title}</strong></td>
          <td>${getResStatus('ppt')}</td>
          <td>${getResStatus('doctors')}</td>
          <td>${getResStatus('mindmaps')}</td>
          <td>${getResStatus('flashcards')}</td>
          <td>${getResStatus('quizzes')}</td>
          <td>${getResStatus('transcription')}</td>
          <td>${getResStatus('notes')}</td>
          <td>${qvStatus}</td>
        </tr>
      `;
    }).join('');
  }

  // ------------------------------------------------------------------------
  // Section 2: Lectures Management Render
  // ------------------------------------------------------------------------
  renderLectures() {
    const tbody = document.getElementById('lecturesTableTbody');
    if (!tbody) return;

    tbody.innerHTML = this.data.lectures.map((lec, idx) => {
      const activeCount = this.getActiveResourceCount(lec);
      const isComplete = activeCount === 7;

      return `
        <tr>
          <td><span class="lecture-num-pill">${lec.number}</span></td>
          <td>
            <div class="lecture-row-title">
              <span>${lec.title}</span>
            </div>
            <span style="font-size:0.75rem; color:var(--accent-secondary);">${lec.badge}</span>
          </td>
          <td>
            <span class="badge ${isComplete ? 'badge-success' : 'badge-primary'}">
              ${activeCount} / 7 Active
            </span>
          </td>
          <td>
            <span class="badge badge-success"><span class="badge-dot"></span> ${lec.status}</span>
          </td>
          <td style="font-family:var(--font-family-mono); font-size:0.8rem; color:var(--text-muted);">${lec.lastUpdated}</td>
          <td>
            <div class="table-actions">
              <button class="btn btn-secondary btn-sm" onclick="adminApp.openEditLectureModal(${idx})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                <span>Edit Resources</span>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  openEditLectureModal(lectureIndex) {
    const lec = this.data.lectures[lectureIndex];
    document.getElementById('modalTitle').textContent = `Edit Module ${lec.number}: ${lec.title}`;

    const modalBody = document.getElementById('modalBody');

    let resourcesHtml = lec.resources.map((res, rIdx) => {
      const isMulti = res.links && res.links.length > 0;
      const isEmpty = !isMulti && (!res.url || res.url.trim() === '');

      let subLinksHtml = '';
      if (isMulti) {
        subLinksHtml = `
          <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.35rem; padding-left:0.5rem; border-left:2px solid var(--accent-primary);">
            <div style="font-size:0.75rem; color:var(--accent-secondary); font-weight:600;">Sub-Links (${res.links.length}):</div>
            ${res.links.map((link, lIdx) => `
              <div style="display:grid; grid-template-columns:1fr 2fr; gap:0.4rem;">
                <input type="text" class="form-control" id="res-${rIdx}-link-title-${lIdx}" value="${link.title || ''}" placeholder="Deck/Part Title" style="padding-left:0.6rem; font-size:0.78rem;">
                <input type="text" class="form-control" id="res-${rIdx}-link-url-${lIdx}" value="${link.url || ''}" placeholder="URL Destination" style="padding-left:0.6rem; font-size:0.78rem; font-family:var(--font-family-mono);">
              </div>
            `).join('')}
          </div>
        `;
      }

      return `
        <div style="background:rgba(16,24,39,0.7); border:1px solid ${isEmpty ? 'rgba(130,146,170,0.25)' : 'var(--border-subtle)'}; border-radius:var(--radius-sm); padding:0.85rem; display:flex; flex-direction:column; gap:0.4rem;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="color:var(--text-primary); font-size:0.85rem;">
              ${rIdx + 1}. ${res.name}
              <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">(${res.format})</span>
            </strong>
            <span class="badge ${isEmpty ? 'badge-empty' : 'badge-primary'}" style="font-size:0.68rem;">
              ${isEmpty ? 'Empty / Not Added' : (isMulti ? `${res.links.length} Links` : 'Active')}
            </span>
          </div>
          ${!isMulti ? `
            <input type="text" class="form-control" id="res-url-${rIdx}" value="${res.url || ''}" placeholder="${res.placeholder || 'Paste URL destination'}" style="padding-left:0.85rem; font-size:0.82rem; font-family:var(--font-family-mono);">
          ` : subLinksHtml}
        </div>
      `;
    }).join('');

    modalBody.innerHTML = `
      <div class="form-group">
        <label class="form-label">Module Title</label>
        <input type="text" class="form-control" id="modalLectureTitle" value="${lec.title}" style="padding-left:1rem;">
      </div>
      <div style="font-size:0.85rem; font-weight:700; color:var(--text-primary); margin-top:0.5rem; display:flex; justify-content:space-between;">
        <span>7 Dedicated Resources:</span>
        <span style="font-size:0.75rem; color:var(--accent-secondary);">${this.getActiveResourceCount(lec)} / 7 Currently Active</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.65rem; max-height:48vh; overflow-y:auto; padding-right:0.35rem;">
        ${resourcesHtml}
      </div>
    `;

    document.getElementById('modalSaveBtn').onclick = () => {
      lec.title = document.getElementById('modalLectureTitle').value;
      lec.resources.forEach((res, rIdx) => {
        if (res.links && res.links.length > 0) {
          res.links.forEach((link, lIdx) => {
            const titleEl = document.getElementById(`res-${rIdx}-link-title-${lIdx}`);
            const urlEl = document.getElementById(`res-${rIdx}-link-url-${lIdx}`);
            if (titleEl) link.title = titleEl.value;
            if (urlEl) link.url = urlEl.value;
          });
        } else {
          const inp = document.getElementById(`res-url-${rIdx}`);
          if (inp) res.url = inp.value.trim();
        }
      });
      lec.lastUpdated = "Updated Just Now";
      this.closeModal();
      this.saveToSupabase(
        () => window.PSYCHO404_DB.saveLecture(lec),
        `Updated Module ${lec.number} resources successfully!`
      );
    };

    this.openModal();
  }

  // ------------------------------------------------------------------------
  // Section 3: Notes Render
  // ------------------------------------------------------------------------
  renderNotes() {
    const tbody = document.getElementById('notesTableTbody');
    if (!tbody) return;

    tbody.innerHTML = this.data.lectures.map((lec, idx) => {
      const noteRes = lec.resources.find(r => r.id === 'notes') || {};
      const isMulti = noteRes.links && noteRes.links.length > 0;
      const isEmpty = !isMulti && (!noteRes.url || noteRes.url.trim() === '');

      let urlDisplay = '';
      if (isMulti) {
        urlDisplay = noteRes.links.map(l => `
          <a href="${l.url}" target="_blank" class="badge badge-primary" style="margin-right:0.3rem;">
            ${l.title}: ${l.url}
          </a>
        `).join('');
      } else if (!isEmpty) {
        urlDisplay = `<a href="${noteRes.url}" target="_blank" style="color:var(--accent-secondary); text-decoration:none;">${noteRes.url}</a>`;
      } else {
        urlDisplay = `<span class="badge badge-empty">Empty / Not Added</span>`;
      }

      return `
        <tr>
          <td><strong style="color:var(--text-primary);">${lec.number}. ${lec.title}</strong></td>
          <td>${lec.title} Notes</td>
          <td><span class="badge badge-primary">Summary PDF / Telegram</span></td>
          <td style="font-family:var(--font-family-mono); font-size:0.75rem; max-width:350px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
            ${urlDisplay}
          </td>
          <td>
            <button class="btn btn-secondary btn-sm" onclick="adminApp.openEditLectureModal(${idx})">Edit Link</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // ------------------------------------------------------------------------
  // Section 4: Reports Render (9 Independent Slots Matching course-data.js)
  // ------------------------------------------------------------------------
  renderReports() {
    const grid = document.getElementById('reportsCardsGrid');
    if (!grid) return;

    grid.innerHTML = this.data.reports.map((rep, idx) => {
      const hasReport = Boolean(rep.url && rep.url.trim());
      const status = hasReport
        ? '<span class="badge badge-success"><span class="badge-dot"></span> Report available</span>'
        : '<span class="badge badge-empty">No HTML uploaded yet</span>';
      const currentLink = hasReport
        ? `<a href="${this.escapeHtml(rep.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Open current report</a>`
        : '';

      return `
        <article class="media-item-card report-upload-card">
          <div class="media-item-details">
            <span class="badge badge-primary">Lecture ${this.escapeHtml(rep.number)}</span>
            <h3 class="media-file-name">${this.escapeHtml(rep.lectureTitle)}</h3>
            <p class="report-upload-status">${status}</p>
            ${rep.description ? `<p class="report-upload-description">${this.escapeHtml(rep.description)}</p>` : ''}
            <input type="file" id="reportFile-${idx}" accept=".html,text/html" hidden onchange="adminApp.uploadReport(${idx}, this.files && this.files[0])">
            <div class="report-upload-actions">
              ${currentLink}
              <button class="btn btn-primary btn-sm" type="button" onclick="document.getElementById('reportFile-${idx}').click()">
                ${hasReport ? 'Replace HTML' : 'Choose HTML file'}
              </button>
            </div>
            <p class="report-upload-hint">HTML only · Up to 10 MB · Opens from the student site</p>
          </div>
        </article>
      `;
    }).join('');
  }

  async uploadReport(index, file) {
    if (!file) return;
    const rep = this.data.reports[index];
    if (!rep) return;
    if (!/\.html?$/i.test(file.name) || (file.type && file.type !== 'text/html')) {
      alert('Please choose an .html or .htm file.');
      this.renderReports();
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('The HTML file must be 10 MB or smaller.');
      this.renderReports();
      return;
    }

    const grid = document.getElementById('reportsCardsGrid');
    const button = grid?.querySelector(`#reportFile-${index}`)?.parentElement?.querySelector('button.btn-primary');
    if (button) {
      button.disabled = true;
      button.textContent = 'Uploading…';
    }

    try {
      const url = await window.PSYCHO404_DB.uploadLectureReport(file, rep.number, rep.lectureTitle);
      rep.url = url;
      rep.description = `HTML report for ${rep.lectureTitle}`;
      rep.status = 'published';
      await window.PSYCHO404_DB.saveCategoryItem(rep, 'cat-reports');
      this.renderReports();
      this.showToast(`HTML report for Lecture ${rep.number} is ready on the student site.`);
    } catch (error) {
      console.error('Report upload failed:', error);
      alert(error?.message || 'Could not upload this report. Please try again.');
      this.renderReports();
    }
  }

  openEditReportModal(index) {
    const rep = this.data.reports[index];
    document.getElementById('modalTitle').textContent = `Reports: Module ${rep.number} - ${rep.lectureTitle}`;
    document.getElementById('modalBody').innerHTML = `
      <div class="form-group">
        <label class="form-label">Module Name</label>
        <input type="text" class="form-control" value="${rep.lectureTitle}" disabled style="opacity:0.75; padding-left:1rem;">
      </div>
      <div class="form-group">
        <label class="form-label">Report Destination URL (Telegram / Audio / PDF)</label>
        <input type="url" class="form-control" id="repUrlInput" value="${rep.url || ''}" placeholder="https://t.me/psycho404public/..." style="padding-left:1rem; font-family:var(--font-family-mono);">
      </div>
      <div class="form-group">
        <label class="form-label">Report Label / Description</label>
        <input type="text" class="form-control" id="repDescInput" value="${rep.description || ''}" placeholder="e.g. By Doctors words • Summary Notes" style="padding-left:1rem;">
      </div>
    `;

    document.getElementById('modalSaveBtn').onclick = () => {
      const url = document.getElementById('repUrlInput').value.trim();
      const desc = document.getElementById('repDescInput').value.trim();
      rep.url = url;
      if (desc) rep.description = desc;
      rep.status = url ? 'published' : 'empty';

      this.closeModal();
      this.saveToSupabase(
        () => window.PSYCHO404_DB.saveCategoryItem(rep, 'cat-reports'),
        `Updated Reports for Module ${rep.number}!`
      );
    };

    this.openModal();
  }

  // ------------------------------------------------------------------------
  // Section 5: Flashcards & Mind Maps Render
  // ------------------------------------------------------------------------
  renderFlashcards() {
    const tbody = document.getElementById('flashcardsTableTbody');
    if (!tbody) return;

    tbody.innerHTML = this.data.lectures.map((lec, idx) => {
      const mm = lec.resources.find(r => r.id === 'mindmaps') || {};
      const fc = lec.resources.find(r => r.id === 'flashcards') || {};

      let detailsHtml = '';
      if (mm.url) {
        detailsHtml += `<div><span style="color:var(--accent-secondary); font-weight:600;">Mind Map:</span> <a href="${mm.url}" target="_blank" style="color:var(--text-muted); font-family:var(--font-family-mono); font-size:0.75rem;">${mm.url}</a></div>`;
      }
      if (fc.links && fc.links.length > 0) {
        detailsHtml += `<div style="margin-top:0.25rem;"><span style="color:var(--status-success); font-weight:600;">Flashcards (${fc.links.length} Decks):</span> ${fc.links.map(l => `<a href="${l.url}" target="_blank" class="badge badge-primary" style="margin-left:0.25rem; font-size:0.7rem;">${l.title}</a>`).join('')}</div>`;
      } else if (fc.url) {
        detailsHtml += `<div style="margin-top:0.25rem;"><span style="color:var(--status-success); font-weight:600;">Flashcards:</span> <a href="${fc.url}" target="_blank" style="color:var(--text-muted); font-family:var(--font-family-mono); font-size:0.75rem;">${fc.url}</a></div>`;
      }

      return `
        <tr>
          <td><strong style="color:var(--text-primary);">${lec.number}. ${lec.title}</strong></td>
          <td><span class="badge badge-success">Mind Maps &amp; Active Recall</span></td>
          <td style="max-width:380px;">${detailsHtml}</td>
          <td>
            <button class="btn btn-secondary btn-sm" onclick="adminApp.openEditLectureModal(${idx})">Manage Decks</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  openAddDeckModal() {
    document.getElementById('modalTitle').textContent = "Add New NotebookLM Deck";
    document.getElementById('modalBody').innerHTML = `
      <div class="form-group">
        <label class="form-label">Select Course Lecture</label>
        <select class="form-control" id="deckLectureSelect" style="padding-left:1rem;">
          ${this.data.lectures.map((l, i) => `<option value="${i}">${l.number} - ${l.title}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Deck Title</label>
        <input type="text" class="form-control" id="deckTitle" placeholder="e.g. Brain and NT, Hormones" style="padding-left:1rem;">
      </div>
      <div class="form-group">
        <label class="form-label">Google NotebookLM Destination URL</label>
        <input type="url" class="form-control" id="deckUrl" placeholder="https://notebooklm.link.google/..." style="padding-left:1rem; font-family:var(--font-family-mono);">
      </div>
    `;

    document.getElementById('modalSaveBtn').onclick = () => {
      const selIdx = document.getElementById('deckLectureSelect').value;
      const title = document.getElementById('deckTitle').value;
      const url = document.getElementById('deckUrl').value;
      if (!title || !url) {
        alert("Please provide both title and URL");
        return;
      }
      const lec = this.data.lectures[selIdx];
      const fc = lec.resources.find(r => r.id === 'flashcards');
      if (fc) {
        if (!fc.links) fc.links = [];
        fc.links.push({ title, url, label: "NotebookLM Deck" });
      }
      this.closeModal();
      this.saveToSupabase(
        () => window.PSYCHO404_DB.saveLecture(lec),
        `New deck added to Lecture ${lec.number}!`
      );
    };

    this.openModal();
  }

  // ------------------------------------------------------------------------
  // Section 6: Quick Videos Render (9 Lecture Slots)
  // ------------------------------------------------------------------------
  renderQuickVideos() {
    const container = document.getElementById('quickVidsCardsGrid');
    if (!container) return;

    container.innerHTML = this.data.quickVideos.map((vid, idx) => {
      const isPublished = vid.status === 'published' && vid.videoUrl;

      if (isPublished) {
        return `
          <div class="media-item-card">
            <div class="media-thumb-preview">
              <img src="${vid.thumbnail}" alt="${vid.title}" class="media-thumb-img" onerror="this.src='../free-lecture-thumb.jpg'">
              <div style="position:absolute; top:8px; left:8px; background:rgba(40,123,255,0.9); padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; color:#fff;">
                Slot ${vid.number}
              </div>
              <div style="position:absolute; bottom:8px; right:8px; background:rgba(16,185,129,0.9); padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:600; color:#fff;">
                Published
              </div>
            </div>
            <div class="media-item-details">
              <span style="font-size:0.7rem; color:var(--accent-secondary); font-weight:700; text-transform:uppercase;">${vid.topic}</span>
              <h4 class="media-file-name" title="${vid.title}">${vid.title}</h4>
              <p style="font-size:0.75rem; color:var(--text-muted); line-height:1.4;">${vid.description}</p>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem; border-top:1px solid var(--border-subtle); padding-top:0.6rem;">
                <a href="${vid.videoUrl}" target="_blank" class="btn btn-secondary btn-sm" style="font-size:0.72rem;">Preview Telegram</a>
                <button class="btn btn-primary btn-sm" onclick="adminApp.openEditQuickVidModal(${idx})" style="font-size:0.72rem;">Edit Slot</button>
              </div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="media-item-card empty-card">
            <div class="media-thumb-preview">
              <div class="empty-thumb-placeholder">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                  <line x1="7" y1="2" x2="7" y2="22"></line>
                  <line x1="17" y1="2" x2="17" y2="22"></line>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                </svg>
                <span style="font-size:0.75rem; font-weight:600; color:var(--text-muted);">Slot ${vid.number} • Available</span>
              </div>
              <div style="position:absolute; top:8px; left:8px; background:rgba(21,34,56,0.9); border:1px solid var(--border-subtle); padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; color:var(--text-muted);">
                Slot ${vid.number}
              </div>
              <div style="position:absolute; bottom:8px; right:8px; background:rgba(130,146,170,0.2); padding:2px 8px; border-radius:4px; font-size:0.68rem; color:var(--text-muted);">
                Not Published
              </div>
            </div>
            <div class="media-item-details">
              <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">${vid.topic}</span>
              <h4 class="media-file-name" style="color:var(--text-muted); font-style:italic;">Video Slot Not Published</h4>
              <p style="font-size:0.75rem; color:var(--text-muted); line-height:1.4;">Ready for Telegram video link &amp; cover thumbnail.</p>
              <div style="display:flex; justify-content:flex-end; margin-top:0.5rem; border-top:1px solid var(--border-subtle); padding-top:0.6rem;">
                <button class="btn btn-primary btn-sm" onclick="adminApp.openEditQuickVidModal(${idx})" style="font-size:0.72rem; width:100%;">+ Add Video</button>
              </div>
            </div>
          </div>
        `;
      }
    }).join('');
  }

  openEditQuickVidModal(index) {
    const vid = this.data.quickVideos[index];
    const isPublished = vid.status === 'published';

    document.getElementById('modalTitle').textContent = `Quick Video: Module ${vid.number} (${vid.topic})`;
    document.getElementById('modalBody').innerHTML = `
      <div class="form-group">
        <label class="form-label">Module / Topic</label>
        <input type="text" class="form-control" id="qvTopic" value="${vid.topic}" disabled style="opacity:0.75; padding-left:1rem;">
      </div>
      <div class="form-group">
        <label class="form-label">Video Title</label>
        <input type="text" class="form-control" id="qvTitle" value="${vid.title || ''}" placeholder="e.g. 7 Lenses of Development" style="padding-left:1rem;">
      </div>
      <div class="form-group">
        <label class="form-label">Short Description</label>
        <input type="text" class="form-control" id="qvDesc" value="${vid.description || ''}" placeholder="e.g. Cognitive, Growth, Behavior, and Evolution" style="padding-left:1rem;">
      </div>
      <div class="form-group">
        <label class="form-label">Telegram Destination URL</label>
        <input type="url" class="form-control" id="qvUrl" value="${vid.videoUrl || ''}" placeholder="https://t.me/psycho404public/..." style="padding-left:1rem; font-family:var(--font-family-mono);">
      </div>
      <div class="form-group">
        <label class="form-label">Thumbnail Asset Relative Path</label>
        <input type="text" class="form-control" id="qvThumb" value="${vid.thumbnail || '../assets/'}" placeholder="../assets/quickvid-name.jpg" style="padding-left:1rem; font-family:var(--font-family-mono);">
      </div>
      ${isPublished ? `
        <div style="border-top:1px solid var(--border-subtle); padding-top:0.75rem; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.75rem; color:var(--status-danger);">Need to reset this slot to empty?</span>
          <button type="button" class="btn btn-danger btn-sm" onclick="adminApp.resetQuickVidSlot(${index})">Reset to Empty</button>
        </div>
      ` : ''}
    `;

    document.getElementById('modalSaveBtn').onclick = () => {
      const title = document.getElementById('qvTitle').value.trim();
      const desc = document.getElementById('qvDesc').value.trim();
      const url = document.getElementById('qvUrl').value.trim();
      const thumb = document.getElementById('qvThumb').value.trim();

      if (!url) {
        alert("Please provide at least a Telegram URL for the video.");
        return;
      }

      vid.title = title || `${vid.topic} Breakdown`;
      vid.description = desc || "Psychology Insights & High-Yield Breakdown";
      vid.videoUrl = url;
      vid.thumbnail = thumb || "../free-lecture-thumb.jpg";
      vid.status = 'published';

      this.closeModal();
      this.saveToSupabase(
        () => window.PSYCHO404_DB.saveCategoryItem(vid, 'cat-quickvids'),
        `Module ${vid.number} Quick Video updated!`
      );
    };

    this.openModal();
  }

  resetQuickVidSlot(index) {
    if (confirm("Reset this Quick Video slot to Empty / Not Published?")) {
      const vid = this.data.quickVideos[index];
      vid.status = 'empty';
      vid.videoUrl = '';
      vid.thumbnail = '';
      vid.title = `${vid.topic} Video Slot`;
      vid.description = "High-yield video slot not yet published";
      this.closeModal();
      this.saveToSupabase(
        () => window.PSYCHO404_DB.saveCategoryItem(vid, 'cat-quickvids'),
        `Module ${vid.number} reset to empty slot.`
      );
    }
  }

  // ------------------------------------------------------------------------
  // Section 7: Free Lectures Render (No fake duration)
  // ------------------------------------------------------------------------
  renderFreeLectures() {
    const container = document.getElementById('freeLecturesCardsGrid');
    if (!container) return;

    container.innerHTML = this.data.freeLectures.parts.map((part, idx) => `
      <div class="media-item-card">
        <div class="media-thumb-preview">
          <img src="${part.thumbnail}" alt="${part.title}" class="media-thumb-img">
          <div style="position:absolute; top:8px; left:8px; background:rgba(40,123,255,0.9); padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; color:#fff;">
            ${part.title}
          </div>
          <div style="position:absolute; bottom:8px; right:8px; background:rgba(0,0,0,0.75); padding:2px 8px; border-radius:4px; font-size:0.7rem; color:#fff;">
            ${part.platform || 'Telegram Video'}
          </div>
        </div>
        <div class="media-item-details">
          <h4 class="media-file-name">${part.description}</h4>
          <span style="font-family:var(--font-family-mono); font-size:0.75rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
            ${part.videoUrl}
          </span>
          <div style="display:flex; justify-content:space-between; margin-top:0.5rem; border-top:1px solid var(--border-subtle); padding-top:0.6rem;">
            <a href="${part.videoUrl}" target="_blank" class="btn btn-secondary btn-sm" style="font-size:0.72rem;">Preview Telegram</a>
            <button class="btn btn-primary btn-sm" onclick="adminApp.openEditFreePartModal(${idx})" style="font-size:0.72rem;">Edit Part</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  openEditFreePartModal(index) {
    const part = this.data.freeLectures.parts[index];
    document.getElementById('modalTitle').textContent = `Edit Free Lecture: ${part.title}`;
    document.getElementById('modalBody').innerHTML = `
      <div class="form-group">
        <label class="form-label">Part Title</label>
        <input type="text" class="form-control" id="fpTitle" value="${part.title}" style="padding-left:1rem;">
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <input type="text" class="form-control" id="fpDesc" value="${part.description}" style="padding-left:1rem;">
      </div>
      <div class="form-group">
        <label class="form-label">Telegram Video Destination URL</label>
        <input type="url" class="form-control" id="fpUrl" value="${part.videoUrl}" style="padding-left:1rem; font-family:var(--font-family-mono);">
      </div>
    `;

    document.getElementById('modalSaveBtn').onclick = () => {
      part.title = document.getElementById('fpTitle').value;
      part.description = document.getElementById('fpDesc').value;
      part.videoUrl = document.getElementById('fpUrl').value;
      this.closeModal();
      this.saveToSupabase(
        () => window.PSYCHO404_DB.saveFreePart(part, index),
        `Updated ${part.title} successfully!`
      );
    };

    this.openModal();
  }

  // ------------------------------------------------------------------------
  // Section 8: Homepage Editor Render & Live Binding
  // ------------------------------------------------------------------------
  renderHomepageEditor() {
    const p = this.data.profile;

    const nameInput = document.getElementById('editorName');
    const badgeInput = document.getElementById('editorRoleBadge');
    const bio1Input = document.getElementById('editorBio1');
    const bio2Input = document.getElementById('editorBio2');
    const tagsInput = document.getElementById('editorTags');

    if (nameInput) nameInput.value = p.name;
    if (badgeInput) badgeInput.value = p.roleBadge;
    if (bio1Input) bio1Input.value = p.bio[0] || '';
    if (bio2Input) bio2Input.value = p.bio[1] || '';
    if (tagsInput) tagsInput.value = p.tags.join(', ');

    // Live binding to preview card
    const updatePreview = () => {
      const nameEl = document.getElementById('previewName');
      const badgeEl = document.getElementById('previewRoleBadge');
      const bioEl = document.getElementById('previewBio1');
      const tagsContainer = document.getElementById('previewTags');

      if (nameEl) nameEl.textContent = nameInput.value;
      if (badgeEl) badgeEl.textContent = badgeInput.value;
      if (bioEl) bioEl.textContent = bio1Input.value;

      if (tagsContainer) {
        const tagsArray = tagsInput.value.split(',').map(t => t.trim()).filter(Boolean);
        tagsContainer.innerHTML = tagsArray.map(t => `<span class="badge badge-primary">${t}</span>`).join('');
      }
    };

    [nameInput, badgeInput, bio1Input, bio2Input, tagsInput].forEach(inp => {
      if (inp) inp.addEventListener('input', updatePreview);
    });

    updatePreview();
  }

  async saveProfile() {
    const p = this.data.profile;
    p.name = document.getElementById('editorName').value;
    p.roleBadge = document.getElementById('editorRoleBadge').value;
    p.bio[0] = document.getElementById('editorBio1').value;
    p.bio[1] = document.getElementById('editorBio2').value;
    p.tags = document.getElementById('editorTags').value.split(',').map(t => t.trim()).filter(Boolean);
    await this.saveToSupabase(
      () => window.PSYCHO404_DB.saveProfile(p),
      "Homepage Profile updated successfully!"
    );
  }

  // ------------------------------------------------------------------------
  // Section 9: Media Library Render (Only Physical Image Assets)
  // ------------------------------------------------------------------------
  renderMediaLibrary() {
    const container = document.getElementById('mediaLibraryGrid');
    if (!container) return;

    container.innerHTML = this.data.mediaLibrary.map(item => `
      <div class="media-item-card">
        <div class="media-thumb-preview">
          <img src="${item.path}" alt="${item.name}" class="media-thumb-img">
          <div style="position:absolute; top:8px; left:8px; background:rgba(0,0,0,0.75); padding:2px 8px; border-radius:4px; font-size:0.68rem; color:#fff;">
            ${item.tag}
          </div>
        </div>
        <div class="media-item-details">
          <h4 class="media-file-name" title="${item.name}">${item.name}</h4>
          <div class="media-file-meta">
            <span style="font-weight:600; color:var(--accent-secondary);">${item.size}</span>
            <span style="font-size:0.7rem; color:var(--text-muted);">${item.status}</span>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText('${item.path}'); adminApp.showToast('Copied path: ${item.path}')" style="margin-top:0.4rem; font-size:0.75rem;">
            Copy Relative Path
          </button>
        </div>
      </div>
    `).join('');
  }

  // ------------------------------------------------------------------------
  // Reusable Modal Utilities
  // ------------------------------------------------------------------------
  openModal() {
    const modal = document.getElementById('editItemModal');
    if (modal) modal.classList.add('open');
  }

  closeModal() {
    const modal = document.getElementById('editItemModal');
    if (modal) modal.classList.remove('open');
  }

  // ------------------------------------------------------------------------
  // Toast Notifications
  // ------------------------------------------------------------------------
  showToast(message) {
    const container = document.getElementById('adminToastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#65D9FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // ------------------------------------------------------------------------
  // Backup / Export JSON
  // ------------------------------------------------------------------------
  exportDataJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "course-data-backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast("Exported course-data-backup.json successfully!");
  }

  // ------------------------------------------------------------------------
  // Auth Logout
  // ------------------------------------------------------------------------
  initLogout() {
    const btn = document.getElementById('btnLogout');
    if (btn) {
      btn.addEventListener('click', () => {
        if (confirm("Sign out of PSYCHO 404 Admin Dashboard?")) {
          window.PSYCHO404_DB.signOut().finally(() => {
            window.location.href = 'login.html';
          });
        }
      });
    }
  }
}

// Instantiate Global Dashboard Instance
const adminApp = new AdminApp();
