# Decisions

One row per strategic call, newest first. When a decision changes, add a new row that names
the one it **replaces**, then edit the READMEs to match. Don't edit old rows except to add
"replaced by YYYY-MM-DD" in the last column. Reasoning longer than a few lines goes in the
workstream's `log.md` or, for anything before 2026-11-13, already sits in the archive.

| Date | Decision | Why | Replaces / replaced by |
|---|---|---|---|
| 2026-11-13 | **Pages ship when they serve users**: feature docs, guides, improvements to existing pages. **No page is built only for SEO.** Quality over quantity. Thin pages get reviewed for noindex or improvement. (User decision.) | Two months of "build the page per intent" produced 142 sitemap URLs and 5 indexed. There is no evidence that new pages hurt, so pausing them would only starve users of docs. There is evidence that volume did not help. | Replaces the roadmap's volume framing: P2 "one page per intent", P7 "templates as an SEO surface", per-locale parity as a ranking lever. A proposal the same day to pause new pages until indexing moved was **rejected by the user**. |
| 2026-11-13 | **Authority is the binding constraint on organic search**, not plumbing or copy. | At five months after the move, "Google is still processing" no longer explains 5 indexed / 163 not indexed. Plumbing re-verified live the same day. 86 URLs "discovered, not crawled" is a site-importance signal. | Replaces 2026-09-08 "migration still processing, wait" as the main explanation. "Do not re-architect" still stands. |
| 2026-11-13 | **Marketing docs split into `docs/marketing/`** (organic, paid, launches, decisions); roadmap archived. | The roadmap was 420 KB and held contradictory advice with no record of which won. | Replaces `docs/authority-roadmap.md` as the working document. |
| 2026-10-21 | ChatGPT directory: reviewer sign-in via an **app-side login that skips Discord**; publisher **ClearSwell LLC** with business verification; test server **`Plugged In`**. | Discord sign-in from a reviewer's clean network is unreliable. | |
| 2026-10-14 | **One test server per directory** under `connect_the_connectors` (`Connecting` for Claude, `Muse_Connector_Test` for Meta). Never handle its credentials. | Reviewers never see another platform's name. | |
| 2026-10-02 | MCP registry name **`gg.subo/survey-bot`** (renamed from `gg.subo/subo`). Permanent. | Platform-neutral, matches the brand line, no hard "discord". | |
| 2026-09-28 | DE and ES brought to French parity (12 pages each). **B2B pricing only in EN and FR.** No DE/ES blog. | We can't sell B2B in other languages; no door-word data to write DE/ES posts against. | |
| 2026-09-14 | **French content resumed** (`/fr/forms/` shipped). | Content written during the wait is ready when indexing comes. | Replaces 2026-09-08 French content hold. |
| 2026-09-08 | Migration read as **"still processing; do not re-architect."** French held until a `/fr/` URL is indexed. | Cliff on 2026-06-10 matches the move; plumbing green. | Hold replaced 2026-09-14; the diagnosis replaced 2026-11-13. |
| 2026-09-07 | **Ecosystem "built-with" links (P3) closed.** | Cloudflare's showcase is dead, Astro's is nofollow, Stripe is invitation-only, Discord already done. | |
| 2026-09-05 | Entry test for any priority: **name the URL it changes, the link it earns, or the number it measures.** | Work had drifted onto surfaces no crawler sees. | |
| 2026-08-26 | **Terminology framework T1-T11**: borrowed words are the door, product words are the room. | Canonical text: [organic/terminology.md](organic/terminology.md). | |
| 2026-08-11 | Locale priority by **revenue, not traffic**: DE, then IT, verify BR/ES before spending, NL/PL last. | Brazil and Spain were top traffic with $0 revenue. | |
| 2026-08-04 | **Robots fully open**, AI crawlers and training included. Cloudflare's managed robots.txt off, Bot Fight Mode off, AI Labyrinth off. | Being read and cited is the point of a marketing site. | |
| 2026-08-04 | **`api.subo.ai` stays the API host permanently.** Its docs canonicalize to `subo.gg/api/`. | Moving the host breaks every integration for ~zero SEO gain. | |
| 2026-07-29 | **Keep `subo.ai` verified and redirecting; never sunset it.** Change of Address filed. | It still holds the only rankings we had. | |
| 2026-07 | No paid SEO platform (SearchAtlas). Free channels first: directories, own content, outreach. | ~$3.5k/yr not justified at current revenue. | |
| 2026-06-04 | Domain moved **`subo.ai` → `subo.gg`**, 301 path-for-path. | Discord/gaming brand fit, away from the `.ai` connotation. | |
