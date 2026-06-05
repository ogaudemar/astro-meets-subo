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
- All user-facing copy lives in `src/content/translations/en.json` (and language siblings). Components receive a `translations` prop and render from it — no hardcoded strings in components.

See detailed docs:
- **[docs/i18n.md](docs/i18n.md)** — languages (EN/FR/ES/DE), translation file structure, add-language checklist, BaseHead redirect logic pitfalls
- **[docs/components.md](docs/components.md)** — component guide, page notes, styling, layouts, constants
- **[docs/content.md](docs/content.md)** — blog posts (draft status), Subo product facts, content collections

## Homepage Sections (index.astro)

Order: Hero → Features → UseCases → Testimonials → DeveloperAPI → CTA

| Component | Translation key | Notes |
|-----------|----------------|-------|
| `Hero.astro` | `hero` | Rotating word animation |
| `Features.astro` | `features` | 3 feature cards |
| `UseCases.astro` | (root-level keys) | Random use case picker |
| `Testimonials.astro` | (root-level keys) | |
| `DeveloperAPI.astro` | `developerApi` | Developer/API audience; links to `api.subo.gg/docs` and `app.subo.gg/app/account` |
| `CTA.astro` | (root-level keys) | |

## Navigation & Footer

- Header Resources dropdown: items support `external: true` → rendered with `target="_blank" rel="noopener noreferrer"` via `HeaderLink` props
- Footer sections are data-driven from `footer.sections` in translations; same `external` flag pattern
- When adding nav or footer links, add them to `en.json` only (translations for other languages handled separately)

## Developer & LLM Discovery

- `public/llms.txt` — Static file served at `subo.gg/llms.txt`; describes the product and API for LLM/AI agent discoverability. Update when the API or major features change.
- API docs live at `api.subo.gg/docs` (Scalar UI); OpenAPI spec at `api.subo.gg/v1/openapi.json`
- API key generation: `app.subo.gg/app/account`

## Related Repositories

The Subo web app (bot backend + web admin) lives at:
- `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\survey`
- Web admin (React): `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\survey\web2\react`
- Public API: `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\survey\web2\public_api\`

When reviewing or updating feature descriptions, cross-reference the actual components and copy in that repo for accuracy.

## Deployment

Deployed as a Cloudflare Workers static site. `wrangler.json` is minimal — no secrets or env vars needed for the frontend. The `@astrojs/cloudflare` adapter with `platformProxy` enabled handles the build.
