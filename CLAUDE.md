# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Local dev server (Vite)
npm run build      # Generate RSS + Vite production build
npm run deploy     # Build + deploy to gh-pages branch
```

## Architecture

React 19 SPA deployed to GitHub Pages. Tailwind v4 (config via `@theme` in `src/index.css`, no tailwind.config). Vite 8 with `@tailwindcss/vite` plugin.

### Routing & GH Pages SPA Trick

React Router v7 with BrowserRouter. GitHub Pages only serves index.html for `/`, so `public/404.html` catches all routes, encodes the path into a query param, and redirects to `/`. A script in `index.html` reads that param via sessionStorage and does `history.replaceState` to restore the URL before React mounts.

### Blog System

- Posts live in `src/posts/*.md` with YAML frontmatter (title, date, description, tags, image)
- `src/data/posts.js` auto-discovers posts via `import.meta.glob('../posts/*.md', { eager: true, query: '?raw' })`, parses frontmatter, renders with `marked`
- Blog routes: `/blog` (list) and `/blog/:slug` (single post)
- RSS generated at build time by `scripts/generate-rss.js`

### Main Page Sections (in order)

Hero (interactive terminal with commands including `increase-speed` easter egg) → Experience (tabbed) → Projects → Skills → Interactive Demos → Blog (latest 3) → Contact

### Interactive Demos

`src/components/Interactive.jsx` hosts tabbed demos: ZipDemo, TTMcDemo, PrefetchDemo. Each is a standalone component in `src/components/`.

### Visual System

- Dark glassmorphism theme (`.glass` class in index.css)
- `ParticleField.jsx` — full-page canvas particle animation (rendered behind all content)
- IntersectionObserver pattern used across Projects, Skills, Experience for scroll-triggered fade-in
- Color palette defined in `@theme` block: indigo accent, dark surfaces, zinc text hierarchy

### Deploy

`gh-pages` package pushes `dist/` to the `gh-pages` branch. Main branch is `main`; deploy target branch is `gh-pages`.
