# Authority / SEO / GEO / AEO Roadmap

Living plan to build authority and high-value backlinks for **subo.gg** without
the SearchAtlas model (~$3.5k/yr platform + per-link/per-PR fees). Ordered
**highest ROI first**. Everything here is free or near-free.

## Guiding principles

- **Relevance beats raw Domain Rating.** For a Discord bot, a link from a
  Discord/community-tools context is worth more than a generic high-DR news site.
- **Measure before you spend.** No paid tactic gets a yes until the funnel
  (see [analytics.md](analytics.md)) gives a **visit → paid** rate to price it against.
- **Own channels compound; rented ones don't.** Directories, own content, and
  ecosystem showcases keep paying; syndicated PR links decay.
- **GEO/AEO = be the citable source.** Structured, specific, well-marked-up
  content is what LLMs quote. We already have `llms.txt` + schema; feed it content.
- **Discord-hero + platform spokes.** Discord is our entity/SEO equity — keep it
  the flagship. Add per-platform landing pages + content as *spokes* as each
  platform ships. Broaden reach without diluting what already ranks.
- **Ship-gated promotion.** Only actively market a platform once it's genuinely
  usable for that audience (esp. non-Discord admin onboarding). Until then: prep,
  don't promote. Don't market what a user can't yet do.

## Current product state (as of 2026-07)

Live today: **Discord** (core) + **web survey links for respondents** (any
audience can answer without a Discord account). Admin/creator onboarding is still
**Discord-auth only**. The **Beyond-Discord-Platform-Expansion** project (web +
Google auth, then YouTube/Twitch/Steam, then Patreon/Roblox/Reddit) is in
development in the app — its marketing lives in **P6**, gated on each platform
shipping. Priority new segments: **streamers (Twitch/YouTube), game communities
(Steam/Roblox), creators (Patreon/YouTube)**.

### Recently shipped (2026-07)

- **Homepage hero demo** — replaced the old YouTube walkthrough with a
  self-playing, looping **Discord-conversation demo** (survey-as-chat: friendly
  ask → reaction tap → follow-ups → XP + role reward). Fully **localized in all 6
  languages** (EN/FR/ES/DE/IT/PT-BR), with a per-locale member persona. A
  stronger, on-brand conversion asset than the video — and the **best thing to
  screen-capture for directory listings (P1: top.gg video/screenshots) and
  launches (P4: Product Hunt)**. Also a small GEO/international win (native-language
  on-page content per hreflang locale). Worth watching its effect on visit→paid (P0).

## Foundation — DONE ✅

- [x] `llms.txt` (product + API, machine-readable)
- [x] Structured data: Organization, WebSite, SoftwareApplication (+Top.gg rating), FAQPage, BlogPosting
- [x] Sitemap hygiene, canonical, hreflang, OG/Twitter
- [x] Conversion funnel wired (PostHog) — data accruing to enable ROI math

---

## P0 — Measurement (in progress)

**Why first:** unlocks ROI math for everything below. See [analytics.md](analytics.md).

- [ ] App-side `subscription_activated` shipped (waiting on app deploy)
- [ ] Build PostHog funnel: `pageview → /pricing → checkout_intent → subscription_activated`
- [ ] Record baseline **visit → paid** rate + per-step drop-off
- [ ] Note top organic landing pages (GA4 / Search Console) to prioritize content

**Success metric:** a known visit→paid % and a list of page-2 keywords to target.

---

## P1 — Own the bot directories  ⭐ highest ROI, free

These are the *app stores* for your category: high-authority, topically perfect,
where buyers actually discover bots. This likely beats every paid link on the
SearchAtlas list.

**Canonical copy for every listing lives in
[directory-listing-kit.md](directory-listing-kit.md)** — paste from there so name
(Subo), domain (subo.gg), and description stay consistent (entity consistency
reinforces the Organization schema). It replaces the stale 2023 Notion block
(0xSurvey/SurveyBot, subo.ai, 10-question cap).

### Status (audit 2026-07)
- [x] **Discord App Directory** — maintained, URL current
- [x] **top.gg** — maintained + updated regularly, URL current. *Soft refresh
      due* (add templates + prediction polls) — but it carries curated
      screenshots, so it's a manual edit, not a kit copy/paste. Not urgent.
- [x] **discordbotlist.com** — refreshed with kit copy + 10-Q FAQ
- [x] **discord.bots.gg** — refreshed with kit copy
- [x] **DiscordForge** — new directory; their team invited us on our server, listed
- [x] **Void Bots**, **botlist.me** (on .gg domains), **Discord Extreme List** — refreshed
- [x] **DiscordMe** — description updated (website backlink is Premium-only, so skipped)
- [x] **Disforge** — done (now redirects to **discordbots.net** — likely rebrand)
- [x] ~~**Infinity Bots** (infinitybots.gg)~~ — DEAD (404 login, broken links) despite green ping
- [x] ~~**discord-botlist.eu**~~ — DEAD despite green ping
- [~] **discords.com** — PARKED: can edit but Save hangs ("Please Wait" forever);
      stuck on old subo.ai copy. Low authority + buggy; not worth fighting.
- [x] ~~**discadia**~~ — DROPPED: now servers-only, no bot section anymore

### The long tail — deliberately NOT chasing
Reference: **[mezotv/Discord-Bot-Lists](https://github.com/mezotv/Discord-Bot-Lists)**
auto-tracks ~36 bot lists — but its 🟢 is only a **server ping**, not a working,
SEO-worthy listing (infinitybots.gg / discord-botlist.eu ping green yet are dead).
P1's ROI is concentrated in the top ~5 (done). Mass-submitting to tiny lists is the
low-quality, footprint-spammy link-building this roadmap set out to avoid.
- [~] **Opportunistic-only shortlist** — PARKED for later in the plan. Evaluate for
      real authority before listing; skip if thin: discordlist.gg, TopCord,
      discordbots.app. (Lower priority — check when idle.)
- [x] **Confirmed DEAD (2026-07, don't re-check):** Wumpus.store, Vipercord,
      Yet Another Bot List (yabl.xyz), Carbonitex — plus infinitybots.gg &
      discord-botlist.eu (above). Green pings on the mezotv tracker are unreliable.
- **Skip (thin/closed, per 2023 notes):** Wonderbot, Discord Services, Discord Labs,
      Motion Development, Fate's List, etc.

### Optional polish (batch later)
- [ ] **Commands lists via API** for directories that support it (top.gg,
      discordbotlist.com) — one-time JSON POST of slash-command defs (from the app
      repo). Low, listing-local value; do as a pass once core listings are correct.

### ✅ P1 COMPLETE (core) — 2026-07
Core directories listed + refreshed with the kit copy (Subo / subo.gg): top.gg,
Discord App Directory, discordbotlist.com (+FAQ), discord.bots.gg, DiscordForge,
Void Bots, botlist.me, Discord Extreme List, DiscordMe, Disforge. Dead/parked ones
documented above. Remaining = optional only (top.gg soft refresh, commands-API
polish, parked shortlist).

**Success metric:** listed + optimized on the top directories; referral traffic
visible in PostHog.

---

## P2 — High-intent content on our own blog  ⭐ compounding GEO/AEO

Target the queries buyers actually search. This is where the schema + `llms.txt`
groundwork converts into citations and organic traffic. One page per intent.

> ### ▶ RESUME HERE (next session) — P2 content refresh in progress
>
> **Done (2026-07):**
> - **Poll & survey how-tos refreshed** (`how-to-create-a-discord-poll-with-or-without-a-bot.md`,
>   `how-to-create-a-survey-with-subo-the-survey-bot-877951089.md`). ⚠️ **User is
>   finalizing option names/copy in these two manually — do NOT re-edit them.**
> - **Privacy modes folded into `complete-guide-anonymous-surveys-discord.md`** —
>   the draft had the modes wrong; rewritten to real Transparent/Semi-Private/
>   Anonymous + mechanics.
> - **Text Analysis reconciled** in `ai-powered-survey-summaries-subo.md` (real
>   `/settings` toggle + auto-in-reports + Refresh; OpenAI transparency; unverified
>   AI-credit numbers removed).
> - **`blog-writing` skill** created (`.claude/skills/blog-writing/`) — rule: no em
>   dashes. Apply to all blog edits. `content.md` updated with privacy-mode facts.
>
> **Published (2026-07-28):** both `complete-guide-anonymous-surveys-discord.md`
> and `ai-powered-survey-summaries-subo.md` are now `draft:false` and live. Both
> passed an anti-AI-tell pass against the expanded `blog-writing` skill.
> Two product-fact corrections landed on the anonymous-surveys guide (and mirrored
> in `content.md`):
> - **Default privacy mode is Anonymous**, not Semi-Private (user-confirmed against
>   the app). Fixed everywhere in the guide + `content.md`.
> - **Rewards DO work in Anonymous mode** (respondents are authenticated). The
>   nuance now documented: a completion reward reveals who *participated* (not what
>   they said), so it can undercut anonymity with a small respondent pool.
>
> **Still open (non-blocking):**
> 1. ~~Exact AI-credit allowances per plan~~ — **RESOLVED.** The exact per-plan
>    credit numbers live in the **/pricing** comparison table (Free: 10k one-off
>    trial; then 500k/mo, 1M/mo, 1M/mo by tier). The article links to /pricing and
>    keeps its own copy qualitative, so there's a single source of truth and no
>    table to duplicate/maintain in the post.
> 2. **Standalone `/draft` page?** Currently only covered inside other posts.
>
> **Next work items (roughly in order):**
> - Refresh the **`discord-native-polls-vs-subo` comparison** post + write the
>   **"Best Discord poll/survey bots"** and **"[competitor] alternative"** pages
>   (the three P2 bullets just below).
> - **Skip Logic** search-intent page (Bucket A, deferred as "later").
> - **Build the on-domain `subo.gg/tutorials` hub + repoint the Notion `tutorial`
>   redirect** (see "the hub plan" below) — the next structural piece.
> - Decide on a **`FAQPage` schema** mechanism for blog posts (layout injects
>   `BlogPosting` only today).

- [ ] "**Best Discord poll bots**" (and "best Discord survey bots") — honest comparison, include Subo
- [ ] "**[Competitor] alternative**" pages (e.g. Simple Poll, native Discord polls, MEE6 polls)
- [ ] "**How to create a Discord poll / survey**" (with and without a bot) — capture how-to intent (some of this exists; expand + interlink)
- [ ] "**Anonymous surveys in Discord**" (exists — keep fresh, add FAQ schema)
- [ ] Add `FAQPage` schema to each new content page (pattern in `TemplatePage.astro`)
- [ ] Interlink: content → templates → pricing (internal linking lifts the whole cluster)

### Bring the public Tutorials on-domain (off Notion)

Today `subo.gg/tutorial` 302-redirects to `suboai.notion.site`. That builds
**Notion's** authority (not ours) on exactly the high-intent how-to content that
should compound on subo.gg, and Notion is a weak SEO/GEO surface: heavy
client-side render, no control over meta/canonical/schema, **no hreflang** (so no
localization possible there), and it's a funnel dead-end (no PostHog, no
interlink to templates/pricing). Only the **public pages under Tutorials** move;
everything else in the workspace is **private team docs and stays in Notion**.

- [x] **Audit the public Tutorials + split by intent — DONE (2026-07).** The
      Notion `📚 Tutorials` index holds **~40 published pages** (Discord-bot
      commands + a new March-2026 Web App guide) plus **8 unpublished "working
      drafts"** (Web App how-tos, not yet public — out of scope until published).
      Split below.

  **Bucket A — search-intent how-tos → MIGRATE ON-DOMAIN FIRST** (external
  Google/LLM demand; overlap the how-to bullets above):
  - `/poll: how to create a poll in Discord` → *"how to create a Discord poll"* ⭐
  - `/survey: how to create a multi-question survey in Discord` → *"…survey"* ⭐
    (poll + survey cross-link each other — migrate as a **pair**)
  - `Privacy modes` (anonymous/confidential/transparent) → fold into the existing
    **anonymous-surveys** page rather than a standalone page
  - `/draft: use AI to generate a survey draft` → *"AI survey generator"*
  - `Text Analysis: summarize open responses with AI` → *"summarize open-ended
    responses"*
  - `Comparing Subo polls and Discord native polls` → feeds the **[Competitor]
    alternative / native-Discord-polls** bullet above (alternative-intent)
  - `Skip Logic` → *"survey skip logic / conditional questions"* (moderate; later)

  **Bucket B — operational/support docs → LEAVE ON NOTION for now** (existing-user
  reference, low external search): List of All Commands, `/edit`, `/results`,
  `/home`, `/repost`, `/settings`, `/premium`, Permissions (`/permissions`
  redirect), change bot name, Custom Bot, Custom/Thank-You invitation, question
  reordering, max selections, form-submission logging, XP (`/xp` redirect),
  clone, where-can-it-post, open XLSX, get image link, Creator Network, batch
  role assign, vote-change, reveal-results, emoji-only buttons, the Web App
  Script Builder / Invite Tab tours. Revisit as a lightweight on-site `/docs`
  section later, if ever.

- [x] **Import via Notion MCP — first pass tested (2026-07).** Verdict: **usable,
      but images are the real cost.**
      - ✅ **Text ports clean**: headings, ordered lists, tables (with colgroups),
        callouts, columns, cross-page mentions, and YouTube `<video>` embeds all
        arrive as structured markdown — good raw material for Astro.
      - ⚠️ **Images are the blocker**: every image is an **expiring AWS S3 signed
        URL** (`X-Amz-Expires=300` → 5-min TTL). Can't hotlink or reliably
        download — each screenshot must be **re-captured + re-hosted** in
        `public/images` per page. This, not the prose, is the per-page effort.
      - ⚠️ **Stale entity refs throughout**: `subo.ai/app`, `subo.ai/invite`,
        `subo.ai/support`, old dates ("Update: March-28, 2023"). Scrub to
        **subo.gg** on migration (same entity-consistency fix P1 did for
        directories).
      - ⚠️ **Internal links** (`<mention-page>` / relative `/…?pvs=25` Notion
        links) must be rewritten to on-domain routes or they'll point back to
        Notion. Because the how-tos cross-link, migrate a **cluster** (poll +
        survey + draft + edit) together, not one at a time.
      - **Recommended sequence:** poll + survey pair first → fold Privacy modes
        into anonymous-surveys → then `/draft` + Text Analysis.
      - **PROGRESS (2026-07):** ✅ poll + survey refreshed. ✅ Privacy modes folded
        into `complete-guide-anonymous-surveys-discord.md` (which had the modes
        *wrong*: invented "Identified/More Anonymous/Full Anonymous" → rewritten to
        real Transparent/Semi-Private/Anonymous + mechanics). ✅ Text Analysis
        reconciled in `ai-powered-survey-summaries-subo.md` (fixed the mechanism to
        the real `/settings` toggle + auto-in-reports + Refresh, added OpenAI data
        transparency, and **removed unverified AI-credit numbers** — the pricing
        page keeps credits qualitative; verify exact allowances before re-adding).
        `/draft` is covered inside that post + both how-tos (no standalone page
        yet). All three edited posts are `draft:true` **except** the two how-tos;
        the two guides are **ready for review + publish**. All blog edits follow
        the new `blog-writing` skill (no em dashes).
      - **CORRECTION (2026-07):** the poll + survey how-tos **already exist
        on-domain** as blog posts — `how-to-create-a-discord-poll-with-or-without-
        a-bot.md` and `how-to-create-a-survey-with-subo-the-survey-bot-*.md` (both
        `draft:false`, live). So step 1 isn't "port from Notion" — it's **refresh
        the existing posts** against the current product (they're 2022–23 vintage:
        stale 10-Q free cap, no web app / templates / scoring / blocks, stale
        language list incl. Russian, old `/poll` command flags), then repoint the
        Notion tutorial at them. All feature posts to interlink are published
        except `content-blocks` (still `draft:true` → link `action-blocks`
        instead). **FAQ-schema gap:** blog layout injects `BlogPosting` only; no
        `FAQPage` on markdown posts yet — separate enhancement if we want it.
- [ ] **Finish + publish the 8 Web App "working drafts"** (Viewing Results &
      Analytics, Browsing Individual Responses, Respondent guide, Server Settings,
      Skip Logic — Web App, Managing Members & Access, Managing Subscription,
      Cloning — Web App). Drafted post-web-app-launch, never proofed/published.
      **Independent of SEO** — even if they stay on Notion and add no authority,
      they're the current-product docs and should be *finished and made public*.
      Proof → edit → publish (decide per page whether it's Bucket A search-intent,
      in which case migrate on-domain instead of publishing to Notion).
- [x] **Scrub every `subo.ai` link → `subo.gg` — DONE (2026-07)** via Notion MCP
      (`notion-update-page` search-and-replace). Swept all ~40 Tutorials pages
      (published + the 8 drafts); **38 had `subo.ai` links and were fixed**
      (`/app`, `/invite`, `/support`). `/premium`'s stale `subo.ai/subscriptions`
      was repointed to the live `subo.gg/upgrade` redirect, not the legacy
      `subscriptions` page. **Left untouched on purpose** (historical brand refs,
      not live links): "Bot listing description" (annotated `old subo.ai copy`),
      "Booster! by subo", "Zealy fka crew3" (both cite `subo.ai` as the old
      unicorn-platform host). Brand/entity consistency, same rationale as the P1
      kit.
- [ ] On migration: interlink (tutorial → templates → pricing) and add `FAQPage`
      schema. NB: Google deprecated **HowTo** rich results (2023) and restricted
      FAQ snippets — the win here is **crawlable/fast on-domain content + GEO/LLM
      citability + funnel interlinking**, not rich snippets.
- [ ] **Localize selectively:** only migrated search-intent pages, only for
      locales P0 shows real traffic for — not all 6 by default, and never the
      operational docs.
- [ ] **Authoring workflow (decide after the import):** recent tutorials were
      drafted in Claude → posted to Notion via MCP (only manual step: screenshots).
      Once pages live in Astro, decide whether Notion stays in the loop for new
      tutorials or we draft straight into the repo. We lose Notion's WYSIWYG
      either way — worth it for stable, high-value pages; not for churny docs.

### How the on-domain Tutorials section is organized (the hub plan)

We don't migrate all ~40 pages — we migrate the ~7 that earn authority and give
the rest an on-domain home to *point* to. Structure:

- [ ] **Build an on-domain `subo.gg/tutorials` hub** (Astro index page) and
      **repoint the `tutorial` redirect** (`redirects.js`) at it — stop 302-ing to
      Notion. The hub is the highest-value real estate: it captures the branded
      *"Subo tutorials"* query, distributes internal link equity, and is a funnel
      node (PostHog + interlink to templates/pricing) that Notion can't be.
- [ ] **Route links by bucket:** search-intent how-tos → on-domain pages;
      operational docs → out to Notion (`target="_blank"`) for now. As each doc
      migrates, swap its link Notion → on-domain — no re-architecture needed.
- [ ] **Lead with the Web App** guide (the recommended path today); keep the
      Discord-command tutorials as a clearly-labeled secondary section (they still
      work). Mirrors the current Notion index's own ordering.
- [ ] Endgame (optional, "if ever"): once enough operational docs have moved, the
      Notion-linked remainder becomes a lightweight on-site `/docs` section and the
      hub links entirely on-domain.

**Success metric:** ranking/impressions growth in Search Console; LLM citations
when asking "best Discord survey bot".

---

## P3 — Free ecosystem / "built-with" links  (the legit "Cloudstack")

The honest version of SearchAtlas's cloud-vendor links — real editorial mentions
you *qualify for* because Subo actually uses these tools. Free.

- [ ] **Cloudflare** — Workers showcase / built-with / case-study opportunities (Subo runs on Workers)
- [ ] **Astro** — "Built with Astro" showcase (site is Astro)
- [ ] **Stripe** — partner/directory listing if eligible
- [ ] **Discord** — any developer showcase / community spotlight opportunities
- [ ] Any other tool in the stack with a customers/showcase page

**Success metric:** 2–3 genuine ecosystem backlinks from tools we already use.

---

## P4 — Launches & community  (free referral + links)

- [ ] **Product Hunt** launch (or re-launch on a major feature, e.g. templates / API)
- [ ] **Reddit**: genuine, non-spammy presence in r/discordapp, r/Discord_Bots, r/discordservers (value first, link second)
- [ ] Relevant **Discord communities** (bot/community-management servers)
- [ ] Announce major features on own blog first (newsroom effect), then syndicate socially

> Platform-specific communities (r/Twitch, r/gamedev, creator spaces, etc.) are
> covered in **P6** — they turn on as each platform ships.

**Success metric:** referral spikes + a few natural backlinks per launch.

---

## P5 — Editorial guest posts & digital PR-lite  (free, replaces paid PR)

- [ ] Direct outreach to **Discord/community-management blogs** — offer a genuinely
      useful guest post (dofollow, in-content). Skip the exchange markup.
- [ ] **HARO / Connectively** (and similar journalist-request services) — answer
      queries in the community/SaaS/Discord space for "as seen on" credibility, free.
- [ ] Own **newsroom**: keep the blog's announcements crawlable and shareable so
      any organic press has something to cite.

**Success metric:** 1–2 relevant editorial placements/quarter, zero spend.

---

## P6 — Beyond-Discord expansion  (phased with product, ship-gated)

Positioning: **Discord-hero + platform spokes**. Keep subo.gg's Discord entity;
add per-platform spokes as each ships. **Prep now, promote on launch** — never
market a platform a user can't yet onboard to.

### Prep now (free, no overpromising)
- [ ] **Keyword/audience research per priority segment** — the queries they
      actually search: streamers ("Twitch chat poll", "poll my stream"), game
      communities ("Steam playtest feedback survey", "Roblox community poll"),
      creators ("survey my YouTube members", "Patreon member feedback survey")
- [ ] **Build the target list** of per-platform directories + communities (below)
- [ ] **Draft spoke-page + content skeletons** so launch day is fast
- [ ] **Ship a content piece for the angle that's already true today:** a
      Discord-using creator can already survey a Twitch/YouTube/Steam audience via
      **web survey links** (respondents need no Discord). Honest, live, and it
      seeds the cross-platform narrative before integrations land.

### Per-platform spoke playbook (run as each platform goes live)
In priority-segment order — streamers → game communities → creators:
- [ ] **Spoke landing page** (e.g. `/twitch-poll`, `/youtube-survey`,
      `/steam-community-survey`, `/patreon-member-survey`) — platform-intent
      title + FAQ schema, interlinked to the Discord core (spoke → hub)
- [ ] **Platform-intent content**: "how to poll your Twitch chat", "survey your
      YouTube community", "run a Steam playtest survey", "Patreon member feedback"
- [ ] **Directories beyond bot lists**: creator-tool / no-code / SaaS directories,
      alternativeto.com, Product Hunt topics, relevant tool roundups
- [ ] **Communities (value-first)**:
      - Streamers → r/Twitch, r/NewTubers, r/letsplay, streamer Discords
      - Game communities → r/gamedev, r/roblox / r/robloxgamedev, r/Steam, playtest groups
      - Creators → r/patreon, r/youtubers, creator-economy newsletters/Discords
- [ ] **Ecosystem/partner showcases** Subo qualifies for once integrated with the platform

### Success metric
Per platform: a ranking spoke page + first referral traffic from that platform's
communities within a quarter of its launch.

---

## Free alternatives to the SearchAtlas model

| SearchAtlas offering | What it really is | Free/near-free alternative here |
|----------------------|-------------------|---------------------------------|
| **PR distribution** (USAToday, TheStreet, NewsRamp…) | Syndicated, mostly nofollow, low ranking value; not where bot buyers are | P5: HARO/Connectively + own newsroom + Product Hunt (P4) |
| **Cloudstack** (Scaleway, Cloudflare, Vercel…) | Resold cloud-vendor profile links | P3: ecosystem showcases we qualify for (Cloudflare/Astro/Stripe), direct + free |
| **Editorial guest posts** (paid exchange) | In-content links, real value *if relevant* | P5: direct outreach to Discord/community blogs, no markup |
| **OTTO / on-page AI** | LLM wrapper for schema/meta/AEO | Already done in-repo for $0 (schema, `llms.txt`, meta) |

**Bottom line:** at current revenue, the $3.5k platform + per-link fees are hard
to justify — especially since the highest-ROI channels for a Discord bot
(directories, own content, ecosystem links) are free and not what the platform sells.

---

## Backlog / revisit later

- [ ] Compress/replace remaining heavy images (audit `public/images`)
- [ ] Clean up legacy dead pages (`success.astro`, `subscriptions.astro`, `StripeSub.astro`)
- [ ] Revisit paid tactics **only** once P0 shows a visit→paid rate that makes the math work
- [ ] As platforms ship (P6), evolve homepage/hero messaging from "Discord survey bot" toward "community & creator surveys/polls" **without** dropping the Discord keyword equity — test incrementally, watch rankings
- [ ] **Bridge the language gap for SEO/GEO reach.** The bot + web app already
      ship in **10 languages**; the marketing site only in **6** (EN/FR/ES/DE/IT/
      PT-BR). **Dutch, Polish, Russian, Turkish** are live in-product but have no
      localized marketing surface — untapped organic traffic in markets where the
      product already works. Evaluate adding hreflang locales for them (start with
      whichever P0/Search-Console signals show demand). Lower priority; revisit
      when core content clusters are in place.
