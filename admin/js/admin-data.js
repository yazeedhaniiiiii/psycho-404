/**
 * PSYCHO 404 - Admin Dashboard Ground-Truth Data Store
 * 100% synchronized with js/course-data.js
 * No mock URLs, no fake view counts, no fictitious students or activity logs.
 */

const ADMIN_REAL_DATA = {
  // Real stats overview
  stats: {
    totalLectures: 9,
    activeResources: 52,
    totalResourceSlots: 63,
    emptyResourceSlots: 11,
    notebookLmDecks: 18,
    quickVideosPublished: 4,
    quickVideosTotal: 9,
    freeVideoParts: 3,
    reportsPublished: 0,
    reportsTotal: 9
  },

  // Instructor Homepage Profile (Exact match with COURSE_DATA.instructor)
  profile: {
    name: "Yazeed Hani",
    roleBadge: "COURSE INSTRUCTOR & CREATOR",
    headline: "Yazeed Hani",
    bio: [
      "I'm a Psychology Instructor, Photographer, and Video Editor with 3 years of experience teaching Psychology.",
      "I combine my passion for psychology, visual creativity, and teaching to make complex concepts easier to understand and more engaging to learn."
    ],
    tags: ["Teaching", "Photography", "Video Editing"],
    photo: "../profile.jpg",
    telegramUrl: "https://t.me/psycho404public",
    primaryCtaText: "View 9 Course Modules",
    secondaryCtaText: "Free Open Lectures"
  },

  // Lectures Management (9 Modules & their 7 dedicated resources)
  lectures: [
    {
      id: "lecture-01",
      number: "01",
      title: "BIOLOGICAL BASES OF BEHAVIOUR",
      badge: "Module 01",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/113", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/AMZZgV0Zz8uH", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        {
          id: "flashcards",
          name: "Flashcards",
          type: "flashcards",
          url: "https://notebooklm.link.google/iZ9v4W4pC9s4",
          format: "Interactive Decks",
          links: [
            { title: "Flash Cards", url: "https://notebooklm.link.google/iZ9v4W4pC9s4", label: "NotebookLM Deck" },
            { title: "Another one", url: "https://notebooklm.link.google/bg664Ed3hhON", label: "NotebookLM Deck" }
          ],
          placeholder: "2 NotebookLM Flashcard Decks"
        },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/Uvh4In4InrIG", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        {
          id: "transcription",
          name: "Handwritten Transcription",
          type: "transcription",
          url: "https://t.me/psycho404public/81",
          format: "PDF Notes",
          links: [
            { title: "Part 1", url: "https://t.me/psycho404public/81", label: "Telegram Notes Part 1" },
            { title: "Part 2", url: "https://t.me/psycho404public/89%E2%9C%8D%EF%B8%8F", label: "Telegram Notes Part 2" },
            { title: "Part 3", url: "https://t.me/psycho404public/110", label: "Telegram Notes Part 3" }
          ],
          placeholder: "Handwritten Transcription (3 Parts)"
        },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/111", format: "Summary PDF", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-02",
      number: "02",
      title: "Developmental Psychology",
      badge: "Module 02",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/102", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/8rHrGjUjATGr", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/x441axUQfwwo", format: "Interactive Decks", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/biuoxpWWMGbT", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "", format: "PDF Notes", placeholder: "[Handwritten Transcription PDF/notes link placeholder]" },
        {
          id: "notes",
          name: "Notes",
          type: "notes",
          url: "https://t.me/psycho404public/99",
          format: "Summary PDF",
          links: [
            { title: "Part 1", url: "https://t.me/psycho404public/99", label: "Telegram Notes Part 1" },
            { title: "Part 2", url: "https://t.me/psycho404public/100", label: "Telegram Notes Part 2" }
          ],
          placeholder: "Telegram Notes (2 Parts)"
        }
      ]
    },
    {
      id: "lecture-03",
      number: "03",
      title: "Emotions",
      badge: "Module 03",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/135", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/J8RWmWrlFO83", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/h5dZ39eZNxAg", format: "Interactive Decks", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/LK0WTliSvE8B", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/132", format: "PDF Notes", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/134", format: "Summary PDF", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-04",
      number: "04",
      title: "Motivation",
      badge: "Module 04",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/140", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/DDPB6Yc8ggaB", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/vBbMejLHSIRW", format: "Interactive Decks", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/wNn8Af3fYCT5", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/138", format: "PDF Notes", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/140", format: "Summary PDF", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-05",
      number: "05",
      title: "Learning",
      badge: "Module 05",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/189", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/cjBrT2nLtWrB", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/kXHHdAT99s8f", format: "Interactive Decks", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/wrVXowI7hU0w", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/155", format: "PDF Notes", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/154", format: "Summary PDF", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-06",
      number: "06",
      title: "Personality",
      badge: "Module 06",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/189", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/8dxuXAdw9laO", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/xBRPFrGNPpcd", format: "Interactive Decks", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/vhO1pABqFlyi", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/192?single", format: "PDF Notes", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/145", format: "Summary PDF", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-07",
      number: "07",
      title: "Stress",
      badge: "Module 07",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/171", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/KMe0Z9Xo1q5F", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/jyiXHNYNe2n0", format: "Interactive Decks", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/2laBuxEaDu44", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/167", format: "PDF Notes", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "", format: "Summary PDF", placeholder: "[Notes placeholder - Link coming soon]" }
      ]
    },
    {
      id: "lecture-08",
      number: "08",
      title: "Attention",
      badge: "Module 08",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/174", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/KDdrubLZqDgb", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/DaMBZKeVxJ1Y", format: "Interactive Decks", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/E9WfnFYgPRAi", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/173", format: "PDF Notes", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/175", format: "Summary PDF", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-09",
      number: "09",
      title: "Perception",
      badge: "Module 09",
      status: "Published",
      lastUpdated: "Active",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/178", format: "PPTX / Slides", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", format: "Audio / Video", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/G3XjTzGvj0fn", format: "NotebookLM Map", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/BHWVj7Q3DEUu", format: "Interactive Decks", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/lZ54aZ9Imdp0", format: "Online Quiz", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/177", format: "PDF Notes", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/180", format: "Summary PDF", placeholder: "Telegram Notes" }
      ]
    }
  ],

  // Free Lectures (3 Video Parts with authentic Telegram links)
  freeLectures: {
    sectionTitle: "Free Lectures",
    lectureTitle: "Biological Bases of Behaviour",
    badge: "Open Access Preview",
    parts: [
      {
        id: "free-part-1",
        partNumber: "01",
        title: "Part 1",
        description: "Introduction and regulatory mechanisms",
        thumbnail: "../free-lecture-thumb.jpg",
        videoUrl: "https://t.me/psycho404public/80",
        platform: "Telegram Video"
      },
      {
        id: "free-part-2",
        partNumber: "02",
        title: "Part 2",
        description: "Neuroanatomy and Neurotransmitters",
        thumbnail: "../free-lecture-thumb.jpg",
        videoUrl: "https://t.me/psycho404public/83",
        platform: "Telegram Video"
      },
      {
        id: "free-part-3",
        partNumber: "03",
        title: "Part 3",
        description: "Subcortical Nuclei and Hormones",
        thumbnail: "../free-lecture-thumb.jpg",
        videoUrl: "https://t.me/psycho404public/108",
        platform: "Telegram Video"
      }
    ]
  },

  // Quick Videos Hub (9 Lecture slots: 4 published, 5 empty/pending)
  quickVideos: [
    {
      id: "qv-1",
      number: "01",
      topic: "BIOLOGICAL BASES OF BEHAVIOUR",
      title: "Menstrual Cycle & Mood",
      description: "Psychology Insights & Neurochemical Shifts",
      thumbnail: "../assets/quickvid-menstrual-cycle.jpg",
      videoUrl: "https://t.me/psycho404public/114",
      status: "published"
    },
    {
      id: "qv-2",
      number: "02",
      topic: "Developmental Psychology",
      title: "7 Lenses of Development",
      description: "Cognitive, Growth, Behavior, and Evolution",
      thumbnail: "../assets/quickvid-developmental-psychology.jpg",
      videoUrl: "https://t.me/psycho404public/106",
      status: "published"
    },
    {
      id: "qv-3",
      number: "03",
      topic: "Emotions",
      title: "Theories of Emotions",
      description: "Freud, Cannon-Bard, James-Lange, Plutchik",
      thumbnail: "../assets/quickvid-emotions.jpg",
      videoUrl: "https://t.me/psycho404public/136",
      status: "published"
    },
    {
      id: "qv-4",
      number: "04",
      topic: "Motivation",
      title: "Motivation Breakdown",
      description: "High-yield video slot not yet published",
      thumbnail: "",
      videoUrl: "",
      status: "empty"
    },
    {
      id: "qv-5",
      number: "05",
      topic: "Learning",
      title: "Learning Principles",
      description: "High-yield video slot not yet published",
      thumbnail: "",
      videoUrl: "",
      status: "empty"
    },
    {
      id: "qv-6",
      number: "06",
      topic: "Personality",
      title: "Psychology Personality",
      description: "Traits, Theories, and Behavior Foundations",
      thumbnail: "../assets/quickvid-personality.jpg",
      videoUrl: "https://t.me/psycho404public/204",
      status: "published"
    },
    {
      id: "qv-7",
      number: "07",
      topic: "Stress",
      title: "Stress Mechanisms",
      description: "High-yield video slot not yet published",
      thumbnail: "",
      videoUrl: "",
      status: "empty"
    },
    {
      id: "qv-8",
      number: "08",
      topic: "Attention",
      title: "Attention Systems",
      description: "High-yield video slot not yet published",
      thumbnail: "",
      videoUrl: "",
      status: "empty"
    },
    {
      id: "qv-9",
      number: "09",
      topic: "Perception",
      title: "Perception Theories",
      description: "High-yield video slot not yet published",
      thumbnail: "",
      videoUrl: "",
      status: "empty"
    }
  ],

  // Reports (9 Modules corresponding to cat-reports in course-data.js, all starting as empty)
  reports: [
    { number: "01", lectureTitle: "BIOLOGICAL BASES OF BEHAVIOUR", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" },
    { number: "02", lectureTitle: "Developmental Psychology", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" },
    { number: "03", lectureTitle: "Emotions", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" },
    { number: "04", lectureTitle: "Motivation", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" },
    { number: "05", lectureTitle: "Learning", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" },
    { number: "06", lectureTitle: "Personality", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" },
    { number: "07", lectureTitle: "Stress", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" },
    { number: "08", lectureTitle: "Attention", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" },
    { number: "09", lectureTitle: "Perception", badge: "By Doctors words", description: "Reports placeholder – Click to edit or add link", url: "", status: "empty" }
  ],

  // Real Media Library (Physical image assets verified on disk)
  mediaLibrary: [
    {
      id: "m-1",
      name: "profile.jpg",
      type: "image/jpeg",
      size: "7.26 MB",
      path: "../profile.jpg",
      tag: "Instructor Profile Photo",
      status: "Active on Homepage"
    },
    {
      id: "m-2",
      name: "free-lecture-thumb.jpg",
      type: "image/jpeg",
      size: "165 KB",
      path: "../free-lecture-thumb.jpg",
      tag: "Free Lecture Cover",
      status: "Used in 3 Video Parts"
    },
    {
      id: "m-3",
      name: "quickvid-menstrual-cycle.jpg",
      type: "image/jpeg",
      size: "161 KB",
      path: "../assets/quickvid-menstrual-cycle.jpg",
      tag: "Quick Vid 01 Thumbnail",
      status: "Assigned to Module 01"
    },
    {
      id: "m-4",
      name: "quickvid-developmental-psychology.jpg",
      type: "image/jpeg",
      size: "143 KB",
      path: "../assets/quickvid-developmental-psychology.jpg",
      tag: "Quick Vid 02 Thumbnail",
      status: "Assigned to Module 02"
    },
    {
      id: "m-5",
      name: "quickvid-emotions.jpg",
      type: "image/jpeg",
      size: "363 KB",
      path: "../assets/quickvid-emotions.jpg",
      tag: "Quick Vid 03 Thumbnail",
      status: "Assigned to Module 03"
    },
    {
      id: "m-6",
      name: "quickvid-personality.jpg",
      type: "image/jpeg",
      size: "145 KB",
      path: "../assets/quickvid-personality.jpg",
      tag: "Quick Vid 06 Thumbnail",
      status: "Assigned to Module 06"
    }
  ],

  // Verified Content Integrity Audit Table (Replaces fictitious activities)
  contentAudit: [
    { module: "01. Biological Bases", ppt: true, doctors: false, mindmaps: true, flashcards: "2 Decks", quizzes: true, transcription: "3 Parts", notes: true, quickVid: true },
    { module: "02. Developmental Psych", ppt: true, doctors: false, mindmaps: true, flashcards: "1 Deck", quizzes: true, transcription: false, notes: "2 Parts", quickVid: true },
    { module: "03. Emotions", ppt: true, doctors: false, mindmaps: true, flashcards: "1 Deck", quizzes: true, transcription: true, notes: true, quickVid: true },
    { module: "04. Motivation", ppt: true, doctors: false, mindmaps: true, flashcards: "1 Deck", quizzes: true, transcription: true, notes: true, quickVid: false },
    { module: "05. Learning", ppt: true, doctors: false, mindmaps: true, flashcards: "1 Deck", quizzes: true, transcription: true, notes: true, quickVid: false },
    { module: "06. Personality", ppt: true, doctors: false, mindmaps: true, flashcards: "1 Deck", quizzes: true, transcription: true, notes: true, quickVid: true },
    { module: "07. Stress", ppt: true, doctors: false, mindmaps: true, flashcards: "1 Deck", quizzes: true, transcription: true, notes: false, quickVid: false },
    { module: "08. Attention", ppt: true, doctors: false, mindmaps: true, flashcards: "1 Deck", quizzes: true, transcription: true, notes: true, quickVid: false },
    { module: "09. Perception", ppt: true, doctors: false, mindmaps: true, flashcards: "1 Deck", quizzes: true, transcription: true, notes: true, quickVid: false }
  ],

  // System Settings
  settings: {
    siteTitle: "PSYCHO 404 — Interactive Course Platform",
    instructorEmail: "yazeed@psycho404.com",
    telegramChannel: "https://t.me/psycho404public",
    databaseReady: "Supabase Schema Ready",
    singleAdminMode: true
  }
};

// Backwards compatibility alias
const ADMIN_MOCK_DATA = ADMIN_REAL_DATA;
