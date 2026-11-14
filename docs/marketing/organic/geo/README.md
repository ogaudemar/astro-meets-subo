# GEO / AEO (being cited by AI answers and agents)

## State (2026-11-13)

- **Crawlers are open.** `robots.txt` allows everyone, AI training included
  (`Content-Signal: search=yes, ai-input=yes, ai-train=yes, use=full`). Common Crawl went
  from 0 captures (Jun, Jul) to 166 (Aug) after the unblock.
- **Subo is cited #1 for *best Discord survey bot*** and *Discord survey app for my server*,
  but answers cite **top.gg and G2**, not `subo.gg` pages. Absent for poll and form queries.
- **French answers dropped us** (*meilleur bot sondage Discord*: #4 via `subo.ai/fr/` on
  09-07, absent on 10-21).

## Surfaces we own for agents

| Surface | Notes |
|---|---|
| `https://subo.gg/llms.txt` | Canonical. Update when the API or major features change. `api.subo.ai/llms.txt` is a stub pointing here: **don't grow it back** |
| `https://subo.gg/api/` | Static quickstart + recipes, `TechArticle` + `FAQPage`. Reference tables render from `src/data/api-surface.json`, guarded by `npm run check:api` |
| `/recipes/`, `/templates.json` | Survey-design recipes and the template feed, on-domain |
| MCP server + listings | See [../directories/](../directories/README.md) |
| Notion `/draft` tutorial (2023) | Answer engines quote it for *AI survey generator*. Got a dated callout naming web app and API on 2026-10-21 |

## Cloudflare settings that must stay this way

| Card | Setting |
|---|---|
| Manage your robots.txt | **Disable robots.txt configuration** (otherwise it prepends `Disallow: /` for AI bots) |
| Configure AI bot policies | Allow |
| Mixed-purpose crawlers | Continue to be allowed |
| Bot Fight Mode | **Off** (breaks `api.subo.ai` for integrators) |
| AI Labyrinth | **Off** (feeds crawlers filler) |

Verify: `curl -s https://subo.gg/robots.txt` shows no "Cloudflare Managed" section and no Disallow.

## The scoreboard (fixed queries, re-run after each new Common Crawl index)

| Query | Pass looks like | Last result (2026-10-21) |
|---|---|---|
| *google forms alternative for Discord collect responses without leaving the server* | Subo cited at all | ❌ Not cited |
| *best Discord survey bot* | `subo.gg/survey-convos/` cited | Subo #1, but via top.gg / G2 |
| *Discord survey app for my server* | same | Subo #1, via top.gg / a third-party review |
| *AI survey generator for Discord* | Cited first, and the answer mentions web app or API | Subo #1; answer still says `/draft` only |
| *best Discord poll bot 2026* | Subo cited | ❌ Not cited |
| *meilleur bot sondage Discord* | Subo cited | ❌ Dropped |

**Method:** signed out (private window), ChatGPT search, Perplexity and Google AI Mode. Check
`https://index.commoncrawl.org/collinfo.json` first; the last index used was `CC-MAIN-2026-43`.
**Decision rule:** if we lose the AI-generator query, build `/ai-survey-generator/`; while we
keep it, the page stays unbuilt.

## Next actions

1. **User:** signed-out cross-engine re-run of the four scoreboard queries (pending since
   10-21; Claude Code's search tool alone is not a trustworthy instrument).
2. Re-run the MCP GEO baseline (six questions, method in the archive) after PR #1210 merges,
   adding *"How do I connect Subo to Claude?"* once the Claude listing is live.

History: [log.md](log.md).
