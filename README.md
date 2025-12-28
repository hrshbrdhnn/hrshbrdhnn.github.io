# hrshbrdhnn.github.io ✨

A personal portfolio website built with **Astro** and **Tailwind CSS**. This site showcases projects, blogs (MDX), work experience, and other details using a component-driven structure.

---

## 🚀 Quick Overview

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Blog format:** MDX via `@astrojs/mdx`
- **Code & syntax:** rehype plugins for pretty code blocks
- **Purpose:** A fast, modern, and easily maintainable portfolio site

---

## 🔧 Features

- Responsive layout and components (Header, Projects, Blogs, WorkExperience, Education, Socials)
- MDX-powered blog content in `src/content/blog`
- Reusable components under `src/components` and `src/components/shared`
- Localized utility functions in `src/utils`

---

## 🧭 Project Structure (important files)

- `src/pages/` — Site routes and pages (`index.astro`, `blogs/index.astro`, `blogs/[slug].astro`)
- `src/components/` — Reusable UI components
- `src/content/` — Blog content (`.mdx`) and site config
- `src/styles/global.css` — Global styles
- `astro.config.mjs` — Astro configuration
- `package.json` — Scripts & dependencies

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (recommended v18 or newer)

### Install

```bash
npm install
```

### Development

Start the local dev server:

```bash
npm run dev
```

Open http://localhost:4321 to view the site.

### Build & Preview

```bash
npm run build
npm run preview
```

The production build is output to the `dist/` directory and can be deployed to static hosts such as Vercel, Netlify, or GitHub Pages.