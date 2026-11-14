# Organic acquisition

What we earn rather than buy: search, AI answers, directories, links and content. Free or
near-free by design (no paid SEO platform, see [../decisions.md](../decisions.md)).

## Workstreams

| Workstream | State (2026-11-13) | Next |
|---|---|---|
| [search/](search/README.md) | 🔴 5 indexed / 163 not indexed on `subo.gg`. Plumbing verified correct | Monthly reading of both properties; act on the thin-page review |
| [geo/](geo/README.md) | 🟢 Cited first for *best Discord survey bot* (via directories). Crawlers open | User's signed-out cross-engine re-run of the scoreboard queries |
| [directories/](directories/README.md) | 🟡 Bot lists done. MCP registry live, Claude in review, ChatGPT parked | ChatGPT after the app-side reviewer login ships |
| [links/](links/README.md) | 🟡 Outreach partly sent (3 of 6, 2026-09-14), Slashdot pending | Next sends on the user's cadence; repoint listings still on `subo.ai` |
| [content/](content/README.md) | 🟢 Feature posts on release cadence. 142 URLs in the sitemap | Thin-page review (noindex or improve) |
| [terminology.md](terminology.md) | ✅ Rulings T1-T11 canonical, guarded by `npm run check:lexicon` | Paid down via `knownViolations`; app half in `subo/docs/terminology-migration.md` |

## Standing rules

- **Verify the premise before planning against it.** Open the URLs, run the `curl`. Stale
  research in a confident document is the most expensive failure this project has had.
- **Relevance beats raw Domain Rating.** A link from a Discord or community-tools context is
  worth more than a generic high-DR site.
- **Don't re-architect the plumbing without new evidence.** Redirects, canonicals, hreflang,
  robots and sitemap were verified on 2026-09-07, 09-08 and 11-13.
- **Trailing slashes are load-bearing** on every internal link and `https://subo.gg/…` URL
  (see the root `CLAUDE.md`).
- **Answer-engine tests only count signed out.** Signed-in Google invents from the user's history.
- **This repo is public on GitHub**, docs included. Nothing private goes here.
- **The user's terminal doesn't make markdown links clickable:** write URLs out in full in chat.

## Monthly check (first week of each month, user in Search Console)

1. **Both properties, Performance, last 28 days:** clicks and impressions for `subo.ai` and
   `subo.gg`, summed. Compare with the same window before June 2026.
2. **`subo.gg` Page indexing:** indexed / discovered / crawled counts.
3. **Locales:** has any `/fr/`, `/de/` or `/es/` URL left "Crawled - currently not indexed"?
4. Log the numbers in [search/log.md](search/log.md), one line.

Common Crawl (for GEO): check `curl -s https://index.commoncrawl.org/collinfo.json` for a new
index before re-running citation tests. A test on a stale index measures nothing.
