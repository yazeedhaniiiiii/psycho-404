/**
 * PSYCHO 404 - Course Configuration & Content Data
 * 
 * ============================================================================
 * INSTRUCTOR GUIDE:
 * All content, links, file paths, and descriptions can be customized right here.
 * When you have your actual files or links ready (e.g. Google Drive, YouTube,
 * PDF files, Notion, or local documents), simply replace the empty strings ("")
 * or placeholder text with your real URLs or file paths.
 * ============================================================================
 */

const COURSE_DATA = {
  course: {
    code: "PSYCHO 404",
    name: "Advanced Psychology Course",
    badge: "Interactive Course Platform",
    semester: "Editable Semester / Year",
  },

  instructor: {
    name: "Yazeed Hani",
    bioParagraph1: "I'm a Psychology Instructor, Photographer, and Video Editor with 3 years of experience teaching Psychology.",
    bioParagraph2: "I combine my passion for psychology, visual creativity, and teaching to make complex concepts easier to understand and more engaging to learn.",
    tags: ["Teaching", "Photography", "Video Editing"],
    photoUrl: "profile.jpg",
    photoAlt: "Yazeed Hani - Psychology Instructor, Photographer, Video Editor"
  },

  navigationCategories: [
    {
      id: "cat-notes",
      title: "Notes",
      shortDesc: "Course notes & summaries",
      icon: "notes",
      badge: "Notes Hub",
      items: [
        { number: "01", title: "BIOLOGICAL BASES OF BEHAVIOUR", description: "Telegram Notes - Click to open", type: "notes", url: "https://t.me/psycho404public/111" },
        {
          number: "02",
          title: "Developmental Psychology",
          description: "Telegram Notes (2 Parts)",
          type: "notes",
          url: "https://t.me/psycho404public/99",
          links: [
            {
              title: "Part 1",
              url: "https://t.me/psycho404public/99",
              label: "Telegram Notes Part 1"
            },
            {
              title: "Part 2",
              url: "https://t.me/psycho404public/100",
              label: "Telegram Notes Part 2"
            }
          ]
        },
        { number: "03", title: "Emotions", description: "Telegram Notes - Click to open", type: "notes", url: "https://t.me/psycho404public/134" },
        { number: "04", title: "Motivation", description: "Telegram Notes - Click to open", type: "notes", url: "https://t.me/psycho404public/140" },
        { number: "05", title: "Learning", description: "Telegram Notes - Click to open", type: "notes", url: "https://t.me/psycho404public/154" },
        { number: "06", title: "Personality", description: "Telegram Notes - Click to open", type: "notes", url: "https://t.me/psycho404public/145" },
        { number: "07", title: "Stress", description: "[Notes placeholder - Link coming soon]", type: "notes", url: "" },
        { number: "08", title: "Attention", description: "Telegram Notes - Click to open", type: "notes", url: "https://t.me/psycho404public/175" },
        { number: "09", title: "Perception", description: "Telegram Notes - Click to open", type: "notes", url: "https://t.me/psycho404public/180" }
      ]
    },
    {
      id: "cat-reports",
      title: "Reports",
      shortDesc: "By Doctors words",
      icon: "reports",
      badge: "By Doctors words",
      items: [
        { number: "01", title: "BIOLOGICAL BASES OF BEHAVIOUR", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" },
        { number: "02", title: "Developmental Psychology", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" },
        { number: "03", title: "Emotions", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" },
        { number: "04", title: "Motivation", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" },
        { number: "05", title: "Learning", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" },
        { number: "06", title: "Personality", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" },
        { number: "07", title: "Stress", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" },
        { number: "08", title: "Attention", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" },
        { number: "09", title: "Perception", description: "[Reports placeholder – Click to edit or add link]", type: "reports", url: "" }
      ]
    },
    {
      id: "cat-flashcards-mindmaps",
      title: "Flashcards & Mind Maps",
      shortDesc: "Visual structures & active recall",
      icon: "mindmaps",
      badge: "Visual & Active Recall",
      subsections: [
        {
          id: "sub-mindmaps",
          title: "Mind Maps",
          badge: "Visual Maps",
          icon: "mindmaps",
          description: "Visual conceptual maps and structural diagrams",
          items: [
            { number: "01", title: "BIOLOGICAL BASES OF BEHAVIOUR", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/AMZZgV0Zz8uH" },
            { number: "02", title: "Developmental Psychology", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/8rHrGjUjATGr" },
            { number: "03", title: "Emotions", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/J8RWmWrlFO83" },
            { number: "04", title: "Motivation", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/DDPB6Yc8ggaB" },
            { number: "05", title: "Learning", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/cjBrT2nLtWrB" },
            { number: "06", title: "Personality", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/8dxuXAdw9laO" },
            { number: "07", title: "Stress", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/KMe0Z9Xo1q5F" },
            { number: "08", title: "Attention", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/KDdrubLZqDgb" },
            { number: "09", title: "Perception", description: "NotebookLM Mind Maps - Click to open", type: "mindmaps", url: "https://notebooklm.link.google/G3XjTzGvj0fn" }
          ]
        },
        {
          id: "sub-flashcards",
          title: "Flashcards",
          badge: "Active Recall",
          icon: "flashcards",
          description: "Active recall flashcard decks and study materials",
          items: [
            {
              number: "01",
              title: "BIOLOGICAL BASES OF BEHAVIOUR",
              description: "2 NotebookLM Flashcard Decks available",
              type: "flashcards",
              url: "https://notebooklm.link.google/2eyeI6lub1Fb",
              links: [
                {
                  title: "Brain and NT,Hormones",
                  url: "https://notebooklm.link.google/2eyeI6lub1Fb",
                  label: "NotebookLM Deck"
                },
                {
                  title: "Biological Bases Flashcards",
                  url: "https://notebooklm.link.google/IOLapZ3Vdj6Y",
                  label: "NotebookLM Deck"
                }
              ]
            },
            { number: "02", title: "Developmental Psychology", description: "NotebookLM Flashcards - Click to open", type: "flashcards", url: "https://notebooklm.link.google/x441axUQfwwo" },
            { number: "03", title: "Emotions", description: "NotebookLM Flashcards - Click to open", type: "flashcards", url: "https://notebooklm.link.google/h5dZ39eZNxAg" },
            { number: "04", title: "Motivation", description: "NotebookLM Flashcards - Click to open", type: "flashcards", url: "https://notebooklm.link.google/vBbMejLHSIRW" },
            { number: "05", title: "Learning", description: "NotebookLM Flashcards - Click to open", type: "flashcards", url: "https://notebooklm.link.google/kXHHdAT99s8f" },
            { number: "06", title: "Personality", description: "NotebookLM Flashcards - Click to open", type: "flashcards", url: "https://notebooklm.link.google/xBRPFrGNPpcd" },
            { number: "07", title: "Stress", description: "NotebookLM Flashcards - Click to open", type: "flashcards", url: "https://notebooklm.link.google/jyiXHNYNe2n0" },
            { number: "08", title: "Attention", description: "NotebookLM Flashcards - Click to open", type: "flashcards", url: "https://notebooklm.link.google/DaMBZKeVxJ1Y" },
            { number: "09", title: "Perception", description: "NotebookLM Flashcards - Click to open", type: "flashcards", url: "https://notebooklm.link.google/BHWVj7Q3DEUu" }
          ]
        }
      ]
    },
    {
      id: "cat-quickvids",
      title: "Quick Vids",
      shortDesc: "High-yield video breakdowns",
      icon: "quickvids",
      badge: "Quick Vids Hub",
      items: [
        {
          number: "01",
          title: "BIOLOGICAL BASES OF BEHAVIOUR",
          description: "Menstrual Cycle and Mood • Psychology Insights",
          type: "quickvids",
          thumbnail: "assets/quickvid-menstrual-cycle.jpg",
          url: "https://t.me/psycho404public/114"
        },
        {
          number: "02",
          title: "Developmental Psychology",
          description: "7 Lenses of Development • Psychology Insights",
          type: "quickvids",
          thumbnail: "assets/quickvid-developmental-psychology.jpg",
          url: "https://t.me/psycho404public/106"
        },
        {
          number: "03",
          title: "Emotions",
          description: "Theories of Emotions • Psychology Insights",
          type: "quickvids",
          thumbnail: "assets/quickvid-emotions.jpg",
          url: "https://t.me/psycho404public/136"
        },
        { number: "04", title: "Motivation", description: "[Quick Vids placeholder – Click to edit]", type: "quickvids", url: "" },
        { number: "05", title: "Learning", description: "[Quick Vids placeholder – Click to edit]", type: "quickvids", url: "" },
        {
          number: "06",
          title: "Personality",
          description: "Psychology Personality • Traits & Theories",
          type: "quickvids",
          thumbnail: "assets/quickvid-personality.jpg",
          url: "https://t.me/psycho404public/204"
        },
        { number: "07", title: "Stress", description: "[Quick Vids placeholder – Click to edit]", type: "quickvids", url: "" },
        { number: "08", title: "Attention", description: "[Quick Vids placeholder – Click to edit]", type: "quickvids", url: "" },
        { number: "09", title: "Perception", description: "[Quick Vids placeholder – Click to edit]", type: "quickvids", url: "" }
      ]
    }
  ],

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
        thumbnail: "free-lecture-thumb.jpg",
        videoUrl: "https://t.me/psycho404public/80",
        duration: "Telegram",
        placeholderLabel: "Telegram Video Link"
      },
      {
        id: "free-part-2",
        partNumber: "02",
        title: "Part 2",
        description: "Neuroanatomy and Neurotransmitters",
        thumbnail: "free-lecture-thumb.jpg",
        videoUrl: "https://t.me/psycho404public/83",
        duration: "Telegram",
        placeholderLabel: "Telegram Video Link"
      },
      {
        id: "free-part-3",
        partNumber: "03",
        title: "Part 3",
        description: "Subcortical Nuclei and Hormones",
        thumbnail: "free-lecture-thumb.jpg",
        videoUrl: "https://t.me/psycho404public/108",
        duration: "Telegram",
        placeholderLabel: "Telegram Video Link"
      }
    ]
  },

  courseLectures: [
    {
      id: "lecture-1",
      number: "01",
      title: "BIOLOGICAL BASES OF BEHAVIOUR",
      slug: "biological-bases-of-behaviour",
      badge: "Module 1",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/113", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/AMZZgV0Zz8uH", placeholder: "NotebookLM Mind Maps" },
        {
          id: "flashcards",
          name: "Flashcards",
          type: "flashcards",
          url: "https://notebooklm.link.google/iZ9v4W4pC9s4",
          links: [
            {
              title: "Flash Cards",
              url: "https://notebooklm.link.google/iZ9v4W4pC9s4",
              label: "NotebookLM Deck"
            },
            {
              title: "Another one",
              url: "https://notebooklm.link.google/bg664Ed3hhON",
              label: "NotebookLM Deck"
            }
          ],
          placeholder: "2 NotebookLM Flashcard Decks"
        },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/Uvh4In4InrIG", placeholder: "NotebookLM Quizzes" },
        {
          id: "transcription",
          name: "Handwritten Transcription",
          type: "transcription",
          url: "https://t.me/psycho404public/81",
          links: [
            {
              title: "Part 1",
              url: "https://t.me/psycho404public/81",
              label: "Telegram Notes Part 1"
            },
            {
              title: "Part 2",
              url: "https://t.me/psycho404public/89%E2%9C%8D%EF%B8%8F",
              label: "Telegram Notes Part 2"
            },
            {
              title: "Part 3",
              url: "https://t.me/psycho404public/110",
              label: "Telegram Notes Part 3"
            }
          ],
          placeholder: "Handwritten Transcription (3 Parts)"
        },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/111", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-2",
      number: "02",
      title: "Developmental Psychology",
      slug: "developmental-psychology",
      badge: "Module 2",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/102", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/8rHrGjUjATGr", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/x441axUQfwwo", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/biuoxpWWMGbT", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "", placeholder: "[Handwritten Transcription PDF/notes link placeholder]" },
        {
          id: "notes",
          name: "Notes",
          type: "notes",
          url: "https://t.me/psycho404public/99",
          links: [
            {
              title: "Part 1",
              url: "https://t.me/psycho404public/99",
              label: "Telegram Notes Part 1"
            },
            {
              title: "Part 2",
              url: "https://t.me/psycho404public/100",
              label: "Telegram Notes Part 2"
            }
          ],
          placeholder: "Telegram Notes (2 Parts)"
        }
      ]
    },
    {
      id: "lecture-3",
      number: "03",
      title: "Emotions",
      slug: "emotions",
      badge: "Module 3",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/135", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/J8RWmWrlFO83", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/h5dZ39eZNxAg", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/LK0WTliSvE8B", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/132", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/134", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-4",
      number: "04",
      title: "Motivation",
      slug: "motivation",
      badge: "Module 4",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/140", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/DDPB6Yc8ggaB", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/vBbMejLHSIRW", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/wNn8Af3fYCT5", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/138", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/140", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-5",
      number: "05",
      title: "Learning",
      slug: "learning",
      badge: "Module 5",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/189", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/cjBrT2nLtWrB", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/kXHHdAT99s8f", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/wrVXowI7hU0w", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/155", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/154", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-6",
      number: "06",
      title: "Personality",
      slug: "personality",
      badge: "Module 6",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/189", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/8dxuXAdw9laO", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/xBRPFrGNPpcd", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/vhO1pABqFlyi", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/192?single", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/145", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-7",
      number: "07",
      title: "Stress",
      slug: "stress",
      badge: "Module 7",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/171", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/KMe0Z9Xo1q5F", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/jyiXHNYNe2n0", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/2laBuxEaDu44", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/167", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "", placeholder: "[Notes placeholder - Link coming soon]" }
      ]
    },
    {
      id: "lecture-8",
      number: "08",
      title: "Attention",
      slug: "attention",
      badge: "Module 8",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/174", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/KDdrubLZqDgb", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/DaMBZKeVxJ1Y", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/E9WfnFYgPRAi", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/173", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/175", placeholder: "Telegram Notes" }
      ]
    },
    {
      id: "lecture-9",
      number: "09",
      title: "Perception",
      slug: "perception",
      badge: "Module 9",
      resources: [
        { id: "ppt", name: "PowerPoint", type: "powerpoint", url: "https://t.me/psycho404public/178", placeholder: "Telegram PowerPoint Slides" },
        { id: "doctors", name: "Doctors' Explanations", type: "doctors", url: "", placeholder: "[Doctors' Explanations placeholder - Add audio/video/doc link]" },
        { id: "mindmaps", name: "Mind Maps", type: "mindmaps", url: "https://notebooklm.link.google/G3XjTzGvj0fn", placeholder: "NotebookLM Mind Maps" },
        { id: "flashcards", name: "Flashcards", type: "flashcards", url: "https://notebooklm.link.google/BHWVj7Q3DEUu", placeholder: "NotebookLM Flashcards" },
        { id: "quizzes", name: "Quizzes", type: "quizzes", url: "https://notebooklm.link.google/lZ54aZ9Imdp0", placeholder: "NotebookLM Quizzes" },
        { id: "transcription", name: "Handwritten Transcription", type: "transcription", url: "https://t.me/psycho404public/177", placeholder: "Telegram Handwritten Transcription" },
        { id: "notes", name: "Notes", type: "notes", url: "https://t.me/psycho404public/180", placeholder: "Telegram Notes" }
      ]
    }
  ]
};

// Export for module systems if used, or attach to global window
if (typeof window !== "undefined") {
  window.COURSE_DATA = COURSE_DATA;
}
