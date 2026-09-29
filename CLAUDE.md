# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Local dev server (astro dev)
npm run build      # astro build -> dist/
npm run preview    # Preview the production build locally
npm run deploy     # Build + push dist/ to gh-pages branch (gh-pages -d dist --nojekyll)
```

`--nojekyll` is required: without it GitHub Pages runs Jekyll, which hides Astro's `_astro/` asset folder.

The build reads DSA notes from `../dsa/notes`, a sibling repo (the Obsidian vault). It must be checked out next to this repo for `npm run build`/`deploy` to work.

## Architecture

Astro 7 static site, no client framework. Content-first: every blog post and DSA note renders as its own static HTML page with a real title, description, and canonical URL (see `src/layouts/Base.astro`).

### Site URL

The only place the domain lives is `astro.config.mjs` (`site: 'https://navknight.github.io'`). Moving to a custom domain later is a one-line change there.

### Content

- `src/content.config.ts` defines two collections:
  - `blog` — glob loader over `src/content/blog/*.md` (title, date, description, tags, optional image).
  - `dsa` — glob loader over `../dsa/notes/{Problems,Topics,Reference}/**/*.md`. Entry id is `<kind>/<slug>` where kind comes from the top-level folder (problems/topics/reference); schema is loose since Obsidian frontmatter varies.
- `src/lib/obsidian.mjs` is a remark plugin (wired in `astro.config.mjs`) that resolves `[[Note]]`/`[[Note|alias]]` wikilinks into real links, strips ` ```dataview ` blocks and `![[Pasted image ...]]` embeds, and renders inline `$…$` as `<code>`.
- Code highlighting is Astro's built-in Shiki, no extra dependency.

### Pages (`src/pages/`)

| Route | Content |
|---|---|
| `/` | Name, intro, links, latest 3 posts, DSA entry point |
| `/about` | Condensed roles and selected projects |
| `/blog`, `/blog/[slug]` | Post list and single post |
| `/dsa`, `/dsa/[slug]` | Problem list and single problem note |
| `/dsa/reference/[slug]` | Reference notes (the vault's topics) with linked problems |
| `/rss.xml` | RSS feed over the `blog` collection (`@astrojs/rss`) |
| `/404` | Not-found page |

`src/layouts/Base.astro` is the only layout: per-page title/description/canonical, OpenGraph/Twitter tags, RSS link, and JSON-LD (`Person` on the home page, `BlogPosting` on posts).

### Styling & scripts

One hand-written `src/styles/global.css`, no framework. The look is borrowed from the Rituals/Tally apps: untinted white (pure black in dark), one teal accent, Nunito from Google Fonts, and a solid "lip" under anything pressable (`.btn`, `.key`, `.chip`; pressed = sunk). Layout is a 12-column grid: the header spreads small text across it, and home sections hang off column 4. The hero name is sized in container units to span the column. Color tokens on `:root` with dark overrides (`prefers-color-scheme` unless `html[data-theme]` is set by the toggle). Shiki uses dual themes (`github-light`/`github-dark-dimmed`, switched in CSS). No ambient motion: only press feedback and a short cross-document view transition, off under reduced motion.

Client JS is small, independent modules in `src/scripts/`, imported from a `<script>` in `Base.astro` or the page that needs it: `theme` (light/dark via `html[data-theme]`, `setTheme()` shared by the toggle and palette), `palette` (Ctrl/Cmd+K or `/`; lazily fetches `/search.json` from `src/pages/search.json.js`), `clock` (IST in the header), `dsa-filter`. Base.astro's scripts are bundled into one module, so a throw in one stops the rest. The no-flash theme read and the `html.js` class stay inline in `<head>`.

Shared data: `src/data/site.js` (projects, themes, `vtName`), `src/data/now.txt` (the footer "Right now:" line). DSA helpers live in `src/lib/dsa.js`; the problem table is `src/components/ProblemTable.astro`, and `Insight.astro` renders a vault insight line with `backtick` code.

### Sitemap

`@astrojs/sitemap` generates `sitemap-index.xml` at build time; `public/robots.txt` points to it.
