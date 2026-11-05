# PSYCHO 404 — Minimal Interactive Course Website

A modern, minimal, elegant, and interactive educational platform and portfolio designed for **PSYCHO 404**, instructed by **Yazeed Hani**.

---

## 🎨 Visual Identity & Color Palette

* **Background:** `#101827` (Dark Navy)
* **Secondary Background:** `#1B2940` (Surface Navy)
* **Primary Accent:** `#287BFF` (Electric Blue)
* **Secondary Accent:** `#65D9FF` (Subtle Cyan Highlight)
* **Main Text:** `#F4F6FA` (Crisp Off-White)
* **Aesthetic:** Minimal UI, soft neon glow effects, cinematic typography, low-contrast interactive canvas wavy background pattern.

---

## 🚀 Running the Site

The website is Supabase-backed. Open it through an HTTP server at `http://localhost:3000/`; opening `index.html` directly as a file will not load the connected data. The local preview is available only while its server is running.

## Live Site

https://yazeedhaniiiiii.github.io/psycho-404/

The repository includes a GitHub Actions workflow for GitHub Pages. After the project files are committed to a public repository and Pages is set to use GitHub Actions, pushes to `main` deploy the site. Add the final Pages URL to Supabase Auth's allowed redirect URLs so password recovery returns to the site.

---

## 📂 Project Structure

```
PSYCHO 404/
├── index.html                  # Public website
├── admin/login.html            # Admin sign-in
├── admin/index.html            # Admin dashboard
├── css/                        # Public site styles
├── js/supabase-client.js       # Supabase data and authentication adapter
├── js/course-data.js           # Bundled fallback content
├── js/app.js                   # Public site interactions and rendering
└── README.md                   # Project guide
```

---

## 📝 Managing Course Content

The connected Supabase database is the live source for course content. Sign in at `admin/login.html` with an authorized administrator account, then use the dashboard to edit lecture resources, category links, Quick Vids, free lecture parts, and profile details. Save changes from the dashboard to update the live site.

`js/course-data.js` remains as bundled fallback content; edits to that file do not update Supabase. Empty links and slots are intentional placeholders until the administrator adds the actual files or URLs. Never put a Supabase secret or service-role key in browser code.

---

## 🧠 Curriculum Index (9 Modules)

1. **BIOLOGICAL BASES OF BEHAVIOUR**
2. **Developmental Psychology**
3. **Emotions**
4. **Motivation**
5. **Learning**
6. **Personality**
7. **Stress**
8. **Attention**
9. **Perception**

Each lecture contains the 7 interactive resources:
* PowerPoint
* Doctors' Explanations
* Mind Maps
* Flashcards
* Quizzes
* Handwritten Transcription
* Notes

---

## ⚡ Interactive Features

* **Smooth Accordions:** Silky CSS Grid-based expansion with chevron animation and electric blue glow.
* **Canvas Wavy Background:** Hardware-accelerated, harmonic sine waves that subtly respond to cursor coordinates.
* **Category Highlighting:** Selecting any of the 4 main categories (*Notes, Reports, Flashcards & Mind Maps, Quick Vids*) highlights matching resources across all 9 modules with electric blue neon aura.
* **Live Search & Filter:** Real-time search bar to instantly filter modules by title.
* **Interactive Placeholders:** Clicking any resource card displays its current configuration status and lets you quickly copy placeholder keys.
* **Fully Responsive:** Perfectly balanced across ultra-wide monitors, laptops, iPads, tablets, and smartphones.
