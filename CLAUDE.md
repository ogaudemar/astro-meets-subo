# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Marketing/landing page site for **Subo** (a Discord survey and poll bot) deployed on Cloudflare Workers. Built with Astro 5, pure `.astro` components (no React/Vue/Svelte), with MDX blog support.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Build + local Cloudflare Workers preview via wrangler
npm run deploy     # Deploy to Cloudflare Workers via wrangler
npm run check      # Build + tsc + wrangler dry-run (full validation)
npm run cf-typegen # Regenerate Cloudflare Workers types (worker-configuration.d.ts)
```

## Architecture

### i18n (Internationalization)

The site supports English (default), French (`/fr`), and Spanish (`/es`). The pattern used:

- Root-level pages (`src/pages/index.astro`, `src/pages/pricing.astro`, etc.) are the **English** versions.
- Translated pages live under `src/pages/fr/` and `src/pages/es/`.
- Translation strings are stored as JSON in `src/content/translations/en.json`, `fr.json`, `es.json`.
- Each page imports the appropriate JSON and passes it as a `translations` prop to components.
- Client-side language detection in `BaseHead.astro` redirects users to their preferred language on the homepage and pricing page using `localStorage` and `navigator.language`.

### Translation Props Pattern

Components receive translated strings as a `translations` prop (or a sub-key like `translations.header`). Components do not import translation files directly — the page does and passes it down.

### Global Constants

`src/consts.ts` holds site-wide values:
- `SITE_TITLE`, `SITE_DESCRIPTION`
- `DISCORD_STORE_URL` — single source of truth for the Discord upgrade link

### Tracked Redirects

`src/config/redirects.js` defines outbound links (Discord, Stripe, top.gg, etc.) with analytics names. The dynamic page `src/pages/[redirect].astro` renders a redirect page for each key (e.g., `/invite`, `/support`, `/portal`). These track `gtag` events before redirecting.

### Styling

- `src/styles/global.css` defines CSS custom properties (design tokens): `--primary` (#e1287e pink), `--accent` (#9eff00 green), `--secondary` (#745399 purple), `--secondary-dark` (#3C2B50), etc.
- `BaseHead.astro` imports `global.css` and is included on every page — it is the only place to add global head tags.
- Fonts: **Figtree** (body text) and **IBM Plex Mono** (titles/mono, use class `.mono`) loaded from Google Fonts.

### Content Collections

`src/content.config.ts` defines a `blog` collection loading from `src/content/blog/`. Blog frontmatter schema requires: `title`, `description`, `pubDate`, `author`; optional: `updatedDate`, `heroImage`, `tags`, `draft`.

### Layouts

- `BlogPost.astro` — wraps blog post content
- `LegalLayout.astro` — wraps legal pages (privacy, terms, cookies)

### Related Repositories

The Subo web app (bot backend + web admin) lives at:
- `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\survey`
- Web admin (React): `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\survey\web2\react`

When reviewing or updating feature descriptions, cross-reference the actual components and copy in that repo for accuracy.

### Deployment

Deployed as a Cloudflare Workers static site. `wrangler.json` is minimal — no secrets or env vars needed for the frontend. The `@astrojs/cloudflare` adapter with `platformProxy` enabled handles the build.
