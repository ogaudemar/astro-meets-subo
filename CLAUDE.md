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

- **Astro 5** static site, deployed as a **Cloudflare Workers** static site via `@astrojs/cloudflare` adapter
- Pages in `src/pages/`, components in `src/components/`, styles in `src/styles/global.css`
- `src/consts.ts` — site-wide constants (`SITE_TITLE`, `SITE_DESCRIPTION`, `DISCORD_STORE_URL`)
- `src/config/redirects.js` — tracked outbound redirect pages (invite, support, portal, etc.)

See detailed docs:
- **[docs/i18n.md](docs/i18n.md)** — languages (EN/FR/ES/DE), translation file structure, add-language checklist, BaseHead redirect logic pitfalls
- **[docs/components.md](docs/components.md)** — component guide, page notes, styling, layouts, constants
- **[docs/content.md](docs/content.md)** — blog posts (draft status), Subo product facts, content collections

## Related Repositories

The Subo web app (bot backend + web admin) lives at:
- `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\survey`
- Web admin (React): `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\survey\web2\react`

When reviewing or updating feature descriptions, cross-reference the actual components and copy in that repo for accuracy.

## Deployment

Deployed as a Cloudflare Workers static site. `wrangler.json` is minimal — no secrets or env vars needed for the frontend. The `@astrojs/cloudflare` adapter with `platformProxy` enabled handles the build.
