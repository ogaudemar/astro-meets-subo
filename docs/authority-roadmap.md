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
- **Don't only chase what you already rank for.** Search Console history is
  backward-looking — it shows demand for terms our *current* (bot-framed) content
  already surfaces for, and is structurally blind to intent we've never targeted. SEO
  is circular (content → ranking → traffic → more content), so keyword data is one
  input, not the whole map: deliberately seed adjacent clusters we *don't* yet rank for
  (e.g. the no-"bot" / "app" / "form" framings in P2). The data can't ask for what
  isn't there yet.

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

### ⚠️ Domain migration subo.ai → subo.gg is MID-TRANSFER (diagnostic 2026-07-29)

The domain moved ~2026-06. **Redirects are technically correct** (verified 2026-07-29
via `curl`): `subo.ai/*` and `www.subo.ai/*` 301 → `subo.gg/*` path-for-path, single
hop, no chain. But Google has **not finished re-associating equity** with the new
domain, and this **gates all content ROI for ~2–3 months**:

- **Branded terms already transferred** — subo.gg ranks **#1.0** for "subo the survey
  bot", "subo discord bot", "subo discord", "subo bot".
- **Non-branded commercial terms have NOT** — same queries that ranked well on subo.ai
  now sit at position ~40–55 on subo.gg: *survey bot* 6.4→51.6, *discord poll bot*
  9.96→53.1, *best discord poll bot* 8.33→43. This branded-recovers-first,
  non-branded-lags pattern is the **textbook signature of a correct migration Google
  is still processing** — not a broken one.

**Actions:**
- [x] **Change of Address filed in Search Console — CONFIRMED DONE (2026-07-29).**
- [x] **Keep subo.ai verified + redirects live — CONFIRMED (2026-07-29).** Staying up
      for the foreseeable future. Do NOT sunset until non-branded rankings have moved.
- [ ] **Consolidate the API docs onto subo.gg (loose end).** `api.subo.ai/docs` is
      still live on the **old registrable domain** and does **not** 301 (it serves the
      real Scalar docs), so any links/authority it earns accrue to subo.ai and it splits
      the brand entity across two domains (against the P1 entity-consistency logic).
      Migrate to **api.subo.gg** with its own 301 map + update `llms.txt`, `CLAUDE.md`,
      `DeveloperAPI.astro`, and any references. Low traffic = low urgency, but it's the
      last piece of "one entity = subo.gg." Feeds the **API/agent GEO** subsection in P2.
- [x] **App user-facing messages scrubbed subo.ai → subo.gg (2026-08-01).** The bot's
      in-Discord/DM messages were still emitting old-domain links. Runtime precedence is
      **DB row wins, code default is fallback** (`getMessageByEnum`: `user_messages` row
      OR `defaultMessages.py` value). Status:
      - ✅ **`user_messages` DB table — updated + LIVE (user, 2026-08-01).** The last
        stale `subo.ai` was `WebApp_Button_link` (`subo.ai/app` → `subo.gg/app`, all
        locales — the "🖥️ Web App" end-of-survey button); plus the tutorial links
        repointed to the new hub (`subo.gg/tutorial` → `/tutorials` in
        `HelpMessage_content`, `Welcome_dm_text`, `Edit_survey_edit_question_logic_prompt`).
      - [~] **Code fallback `surveyLib/model/defaultMessages.py` — EDITED, not yet
        deployed.** 17 refs swept subo.ai → subo.gg (incl. a `subo.ai.gg/support` typo +
        tutorial links → `/tutorials`). App repo = edit-only here; user ships it with
        other app work. **Low priority — the live DB overrides it**, so users already see
        subo.gg. Dormant only as the fallback for any locale missing a DB row.
      This closes the **app half** of "one entity = subo.gg" (site nav/redirects,
      directories, and the ~40 Notion Tutorials pages were already scrubbed).
- **Don't misread content ROI before ~2026-Q4** — an early "our new content isn't
  ranking" is migration lag, not the content. The subo.ai 6-month history (below) is
  the map of what will recover.

### ⚠️ robots.txt was blocking the AI crawlers — GEO/AEO gate (found 2026-08-04)

Found while auditing the API subdomain. **Cloudflare's managed robots.txt** prepends a
block ahead of `public/robots.txt` on the live site, and it contains `Disallow: /` for
**ClaudeBot, GPTBot, CCBot, Google-Extended**, plus Bytespider, Applebot-Extended,
meta-externalagent and Amazonbot. Our repo file (`Allow: /` + sitemap) survives but is
appended *after*, and a crawler matching its own named group ignores the `*` group — so
the blocks were live and binding.

This directly contradicts the **"GEO/AEO = be the citable source"** guiding principle.
We shipped `llms.txt` — a file whose only audience is AI agents — and then `/api` for the
same audience, on a domain telling several of those agents not to crawl.

**Scope, stated precisely (don't over-read this):**
- **Google Search is unaffected.** `search=yes`, Googlebot not blocked. Rankings, the
  migration recovery and everything in P2's Search Console story are untouched.
- **Google-Extended blocked** → excluded from Gemini grounding / AI Overviews use.
- **ClaudeBot blocked** → Anthropic can't fetch the site.
- **CCBot blocked** → out of Common Crawl, an input to many models and tools.
- **GPTBot blocked** → OpenAI *training* only. ChatGPT live browsing uses `OAI-SearchBot`
  and `ChatGPT-User`, which are **not** in the block list, so that path may still reach us.

**Root cause (user checked the dashboard, 2026-08-04):** *not* the WAF. **"Configure AI
bot policies" was already set to Allow** — nothing was being blocked at the firewall. The
`Disallow:` lines came from the separate **"Manage your robots.txt"** card, set to
*"Instruct AI bots to not scrape content."* Worth internalising: robots.txt is **advisory**,
so it only stops **well-behaved** crawlers — Googlebot, ClaudeBot, GPTBot, CCBot. The net
effect was letting the badly-behaved bots through the firewall while politely turning away
the ones we want.

**Decision (user, 2026-08-04): fully open. All crawlers welcome, AI included, training
included.** This is a marketing site; being read, indexed, cited and trained on is the
point. The only concern is abuse/DDoS, which belongs at the network layer, not in
robots.txt.

- [x] **`public/robots.txt` rewritten to state the open policy** —
      `Content-Signal: search=yes, ai-input=yes, ai-train=yes, use=full`, with a header
      comment explaining the Cloudflare interaction so this isn't rediscovered. (An earlier
      2026-08-04 commit had `ai-train=no` from a wrong inference about intent; corrected.)
- [x] **Cloudflare dashboard settings — DONE, VERIFIED LIVE (2026-08-05).**
      `curl -s https://subo.gg/robots.txt` now returns **only** our repo file: no
      `Cloudflare Managed` section, no `Disallow` lines anywhere, and the
      `Content-Signal: search=yes, ai-input=yes, ai-train=yes, use=full` line intact.
      `subo.ai/robots.txt` **301s to `subo.gg/robots.txt`**, so the second zone needs no
      separate setting. **ClaudeBot, GPTBot, CCBot and Google-Extended are no longer being
      turned away.** The GEO/AEO gate is open; recrawl lag now starts running.
      Settings applied (kept here as the record of what the correct state is):
      | Card | Set to | Why |
      |---|---|---|
      | Manage your robots.txt | **Disable robots.txt configuration** | Repo file becomes authoritative. Preferred over "Content Signals Policy", which still prepends a framework asserting `ai-train=no` — now a contradiction. |
      | Configure AI bot policies | Allow (already correct) | WAF-level; was never the problem. |
      | Mixed-purpose crawlers (Sept 15 change) | **Continue to be allowed** | These index *and* train in one fetch. Blocking them costs search visibility to buy a training restriction we don't want. |
      | Bot Fight Mode | **Off** | Challenges non-browser traffic. On `subo.ai` that breaks `api.subo.ai` for curl/SDK/server-to-server integrators. |
      | AI Labyrinth | **Off** | Feeds AI-generated filler to crawlers. Directly poisons the accurate-citation goal. |
      Verify: `curl -s https://subo.gg/robots.txt` shows no `Cloudflare Managed` section
      and no `Disallow` lines.
- [ ] **DDoS, done properly:** Cloudflare's L3/L4 protection is always-on and unaffected by
      every toggle above. The application-layer lever is **Rate Limiting Rules**, not bot
      heuristics. The public API already rate-limits per key in code (60/300/600/1000 rpm by
      tier — `check:api` verifies those numbers); a Cloudflare rate-limit rule in front of
      `api.subo.ai` is reasonable defense in depth. Bot Fight Mode is the wrong tool.
- [ ] After unblocking, this is the moment to re-read P2's success metric ("LLM citations
      when asking 'best Discord survey bot'") — it was never testable while the block was on.
      **Expect lag:** those crawlers were turned away, so there is nothing cached to draw
      on; recrawl and reappearance in AI answers runs weeks-to-months, similar to the domain
      migration curve.

### Keyword intel from the 6-month Search Console history (2026-07-29)

Pulled subo.ai (history) + subo.gg (post-switch) Queries/Pages + GA4 organic landing
pages. Full analysis drove the P2 targets below. Highlights:

- **Poll intent >> survey intent in organic.** Top content page by far is the **poll
  how-to (477 GA4 sessions/6mo)** vs the survey how-to (141). The **comparison post is
  already #4 (135 sessions, 28s engagement)** — validates the P2 comparison bet before
  we expand it.
- **The "poll bot" money cluster (~2,700 imp/6mo @ pos ~8–16):** `discord poll bot`
  (1,003 @ 9.96), `poll bot discord` (788 @ 9.93), `best discord poll bot(s) [2026]`
  (~186 @ ~8.2), `best poll bot for discord` (146 @ 13.1), `poll bot` (167 @ 15.7). →
  the P2 "Best Discord poll bots" page + a stronger `/polls`.
- **Anonymous cluster:** `are discord polls anonymous` (355 @ 5.2), `discord anonymous
  poll` (307 @ 6.9) → feeds the existing anonymous-surveys guide.
- **"Native polls" informational cluster:** `discord native polls` (139 @ 3.5), poll
  limits (`maximum number of answers/options` 261+214), `do discord polls show who
  voted`, `can you make discord polls anonymous` → raw material for the comparison
  refresh ("what native polls can't do → Subo").
- **French is a real, underexploited market:** `sondage discord` **756 imp @ 8.5** (a
  top-5 non-branded term overall) + many variants. FR pages exist; French *poll*
  content is the gap. (Note for the localization backlog item: this is FR depth, not a
  new locale.)
- **⚠️ Junk intent to exclude:** survey-*farming* seekers (`auto survey completer`,
  `survey filler bot`, `automatic survey answerer`) inflate the "survey bot" cluster
  but are the opposite of our ICP — don't let them skew content framing or sizing.

## Foundation — DONE ✅

- [x] `llms.txt` (product + API, machine-readable)
- [x] Structured data: Organization, WebSite, SoftwareApplication (+Top.gg rating), FAQPage, BlogPosting
- [x] Sitemap hygiene, canonical, hreflang, OG/Twitter
- [x] Conversion funnel wired (PostHog) — data accruing to enable ROI math

---

## P0 — Measurement (in progress)

**Why first:** unlocks ROI math for everything below. See [analytics.md](analytics.md).

- [x] App-side `subscription_activated` shipped + **confirmed landing in PostHog
      (2026-07-29)** — a real `subscription_activated` event fired ~2 days prior,
      matching an actual new subscription (PostHog → Activity → Events). The event works.
- [x] **Build PostHog funnel — DONE (2026-07-29).** Two funnels built + pinned to
      the app dashboard: **A "Visit → Paid (headline)"** (`$pageview` → `$pageview`
      @ `$pathname=/pricing` → `checkout_intent` → `subscription_activated`, 90-day
      range, 14-day conversion window) and **B "…(upgrade-intent only)"** (same, but
      step 3 `checkout_intent` filtered to `href` contains `settings#plan` to strip
      plain open-the-app clicks). The gap between A and B = app-clicks that weren't
      upgrade intent.
- [ ] **Record baseline visit → paid rate + per-step drop-off — PENDING DATA.**
      Conversion events (`checkout_intent`/`subscription_activated`) only went live
      ~2026-07-27, so purchases are still low-single-digit. The funnel is correct but
      **directional only** until a few weeks accrue; don't over-read an early %.
- [ ] **Break funnel down by channel — revisit when data accrues.** Breakdown by
      `$referring_domain` (then `utm_source` once campaign links are tagged) is the
      actual ROI lever — it tells you which P1 directories / P2 content *convert*,
      not just drive traffic. NB **Breakdown is free-tier** (it's a control on the
      insight, near the steps); **Correlation analysis** is the paid feature — don't
      confuse them. Premature now (splitting near-zero purchases); do it once Funnel
      A has a meaningful purchase count.
- [x] **Note top organic landing pages + page-2 keywords — DONE (2026-07-29).** GA4
      organic landing pages + Search Console Queries/Pages (both domains, 6mo) pulled
      and analyzed → see the **Keyword intel** and **Domain migration** blocks near the
      top. Top organic pages: home, poll how-to (477), survey how-to (141), the
      native-polls comparison (135), `/polls` (121). Page-2/striking-distance targets
      feed the P2 comparison bullets below.

> **GA4 is NOT capturing conversions (Jul 2026 country export):** every country
> shows `Key events` and `Total revenue` at 0 (US has a single stray key event).
> The paid event lands in **PostHog only** — treat **PostHog as the system of
> record** for visit→paid, and do not trust GA4's key-event/revenue columns. GA4 is
> still fine for geo/traffic (used for the language item in the backlog).

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

> ### ▶ RESUME HERE — next session starts with the two French content items
>
> **End of session 2026-08-25.** Ten commits, pushed (`3fe5506..1e1fda1`). `npm run check`
> green with both guards. Nothing half-finished.
>
> **▶ START HERE, in this order. Both come straight out of the French search data.**
>
> 1. **The "vote" edit.** ~815 FR impressions sit on *vote* phrasing ("comment faire un vote
>    sur discord" 323, "faire un vote sur discord" 282, "discord vote" 148, "bot vote discord"
>    62) and the shipped post says *sondage* throughout. **This is an edit to
>    `src/content/blog/fr/comment-creer-un-sondage-sur-discord.md`, not a new post**: work the
>    vote wording in naturally plus a section, and add an explicit "sondage Discord sans bot"
>    section and FAQ entry (28 imp, already answered in substance). Cheapest win on the board.
> 2. **The "questionnaire Discord" post.** The FR `questionnaire` / `enquête` cluster is 314
>    imp at **2.55% CTR, the best of any non-commercial cluster**. French separates
>    *questionnaire* (multi-question) from *sondage* (one vote), which is what makes this
>    safe: it resolves the cannibalization trap that blocked translating the survey how-to.
>    Source post: `how-to-create-a-survey-with-subo-the-survey-bot-877951089`. **Frame it as
>    "questionnaire", never compete for "sondage".**
>
> Then the **SEO CHECKBACK on/after 2026-09-08** (its own block below, with the exact regex).
>
> **✅ SHIPPED THIS SESSION (2026-08-25), in one line each:**
> - **FR blog infrastructure** — one collection, `locale` + `translationOf`, `/fr/blog/…`.
> - **Two French posts** — the poll how-to (the 7,363-impression cluster) and the native-polls
>   comparison.
> - **hreflang fixed sitewide** — 42 of 52 pages had a canonical absent from their own cluster.
> - **`check:hreflang`** — guards self-reference, reciprocity, live targets, duplicates.
> - **Language switcher emits real links** — 0 → 86 English pages linking into `/fr/`.
> - **Sitemap `lastmod`** — 0 → 122 URLs, 37 real distinct dates.
> - **Internal links** — 7,893 → 0 pointing at non-canonical URLs.
> - **`docs/content.md`** — corrected (8 question types, not 5; the rest in its own commit).
>
> ---
>
> ### ⏰ SEO CHECKBACK — run on or after 2026-09-08 (set 2026-08-25)
>
> Two weeks after the 2026-08-25 SEO work. **Everything needed to run this is in this block;
> do not try to reconstruct the regex from memory.**
>
> ⏰ **A scheduled cloud agent fires 2026-09-08 16:00 UTC (9am PT)** and will read this block
> back, quote the regex verbatim, and report whether the two French content items shipped:
> [routine trig_012M6rN4Gw7rpLdGG5skitrg](https://claude.ai/code/routines/trig_012M6rN4Gw7rpLdGG5skitrg).
> It is a reminder, not an executor: **it cannot reach Search Console**, so steps A-D are the
> user's to run. If that routine is ever deleted, this block is still the source of truth.
>
> **A. Re-run the French query export, this time on the `subo.gg` property.**
>
> Search Console → property **subo.gg** → Performance → Search results → Date: last 16 months
> → **+ New filter → Query → Custom (regex) → Matches regex**, paste exactly:
>
> ```
> (?i)sondage|questionnaire|formulaire|enqu[êe]te|meilleur|anonyme|gratuit|comment (cr[ée]er|faire)
> ```
>
> Then **QUERIES** tab, sort by Impressions, **Export**. `(?i)` = case-insensitive; `[êe]`
> catches unaccented typing. Repeat on **subo.ai** to see whether the old domain is still
> holding the impressions.
>
> **The one number that matters: does subo.gg return anything at all?** On 2026-08-25 it
> returned **nothing**, while subo.ai held 15,048 impressions over 16 months.
>
> **B. Re-inspect two URLs** (URL Inspection, exact form, trailing slash included):
> - `https://subo.gg/fr/polls/` — was **Crawled - currently not indexed**, last crawl Aug 23.
> - `https://subo.gg/fr/blog/comment-creer-un-sondage-sur-discord/` — published Aug 25, never
>   yet crawled. This is the real test: a purpose-built page for the biggest FR cluster.
>
> **C. Check the Page indexing report** for movement on: **54 Crawled - currently not indexed**,
> and the **1 "Duplicate, Google chose different canonical than user"** (`/pricing/`, which the
> hreflang fix should resolve).
>
> **D. Check Sitemaps.** Resubmitted 2026-08-25. Before: last read **Jul 30**, **78 pages**
> known against 122 live. Expect a fresh read and 122.
>
> **Baselines to compare against (subo.ai, 16mo, as of 2026-08-25):**
>
> | | Impressions | Clicks | CTR | Avg pos |
> |---|---|---|---|---|
> | HOW-TO cluster | 7,363 | 5 | 0.07% | 7.0 |
> | Head terms | 5,763 | 10 | 0.17% | 6.8 |
> | Commercial ("bot sondage discord") | 1,215 | 59 | 4.86% | 4.5 |
> | **Total (61 queries)** | **15,048** | **82** | | |
>
> `/fr/` monthly impressions on subo.ai: **2,577 (May) → 581 (Jun) → 11 (Jul) → 336 (Aug)**.
>
> **How to read the result, decided in advance so it isn't rationalized after the fact:**
> - **subo.gg starts showing French impressions** → migration recovery is under way. Keep
>   going on French content; the plan is working.
> - **Still nothing on subo.gg AND subo.ai still holds them** → the migration is still
>   processing. Expected, not alarming; the roadmap has said ~Q4 since July. Do not start
>   re-architecting.
> - **Nothing on either** → the impressions are genuinely gone, not moved. That is the only
>   outcome that justifies re-opening the technical investigation.
> - **`/fr/polls/` still not indexed but the new blog post IS** → confirms the read that this
>   was a page-value verdict, not a plumbing one, and that content is the right lever.
>
> ---
>
> ### ▶ Previous resume note — FR blog infrastructure BUILT, first French post live
>
> **Session 2026-08-25 (earlier).** The decision that had sat open since 2026-08-11 is made and
> shipped. `npm run check` green.
>
> **✅ DONE: the FR blog decision, ruled and implemented.** The shape, so nobody re-derives it:
> **one collection, `locale` + `translationOf` frontmatter, locale-prefixed URLs.** Rejected
> alternative: a separate `blogFr` collection, which forks the schema, the layout plumbing and
> both changelog derivations, so every future collection-wide pass (the FAQ backfill, the
> em-dash sweeps, the draft ruling) would have had two places to go. Full spec in
> **[i18n.md](i18n.md#blog--one-collection-many-languages)**; the parts worth carrying forward:
> - **`locale` defaults to `"en"`**, so all 30 existing posts needed zero frontmatter edits and
>   their URLs did not move. Nothing about adding French touched an indexed English URL.
> - **French slugs, not translated English ones.** `/fr/blog/comment-creer-un-sondage-sur-discord`.
>   Ranking for `sondage discord` was the whole reason this decision existed.
> - **⚠️ The one thing that will bite: every `getCollection('blog')` caller must filter by
>   locale.** There were six, including **both** changelog pages, and an unfiltered read now
>   puts French posts in the English listing, the English feed and the changelog. That filter
>   lives in **`src/utils/blog.ts`** (`getBlogPosts` / `postUrl` / `postAlternates`) precisely so
>   it can't be forgotten at one call site out of six. Use it; don't read the collection raw.
> - **hreflang only for a linked pair.** A post with no counterpart emits none, on purpose:
>   hreflang must be reciprocal, and French-first originals with no English twin are the
>   expected common case, not the exception. Verified reciprocal in `dist/` in both directions.
> - **One feed per language.** `/rss.xml` EN-only, `/fr/rss.xml` FR-only. **Caught in passing:
>   the English feed had been syndicating drafts** (it read the collection unfiltered), so
>   subscribers were getting posts `/blog` deliberately hid. Fixed; 30 items → 29.
> - **Sitemap needs no change, and `@astrojs/sitemap`'s `i18n` option must stay OFF** — it
>   assumes every URL exists in every locale, which is false here, and would emit hreflang
>   pointing at 404s.
>
> **✅ DONE: the first French post**, `fr/comment-creer-un-sondage-sur-discord`, aimed straight
> at `sondage discord` (756 imp @ pos 8.5). Written as a French-native adaptation of the EN poll
> how-to rather than a flat translation, and paired to it via `translationOf`, so both pages
> now reinforce each other through hreflang. 6 FAQ entries in French, no em dashes.
> **`/fr/polls` links into it first**, above its English links, via a new guarded
> `blogLinkLocal` key, so the one link a French reader can actually read is not third in the list.
> FR nav and footer "Blog" now point at `/fr/blog` instead of the English listing.
> **`/fr/changelog` also upgraded itself**: rows now prefer a real French translation (French
> copy, French link) over `changelog-blog-fr.ts` (French copy, English link) over the English
> post, so publishing a French translation improves its changelog row for free.
>
> **▶ Follow-ons this opened, none blocking:**
> - **French screenshots.** The FR post reuses the English poll-tutorial images, which show
>   English bot UI. The bot itself is localized, so these are re-shootable in French. **Yours,
>   not the repo's.**
> - **`LanguageSwitcher` 404s on blog posts.** It swaps the locale prefix and keeps the path,
>   and blog slugs differ by language by design. Same path-preserving behavior that already
>   404s on any page missing in a locale (`/de/polls` → `/it/polls`); the blog makes it certain
>   rather than likely. Left alone deliberately: fixing it well means a locale-aware URL map,
>   which is a site-wide change, not a blog one.
> - **More FR posts — prioritized below. Don't re-derive this.**
>
> **▶ FRENCH TRANSLATION BACKLOG (analysis 2026-08-25)**
>
> **The corpus is smaller than it looks. 30 posts: 1 draft, 29 published English.** But only
> **13** are evergreen how-to / guide / comparison material. The rest: **12 announcements**
> (~zero SEO value in any language, and `/fr/changelog` already carries French row labels for
> them), 2 competitor-"alternative" posts (brand-name intent, effectively language-agnostic,
> the EN page already serves it), 2 dated/meta. **Realistic target is ~10 French posts, not 29**,
> and the first four carry most of the value.
>
> **⚠️ SUPERSEDED BY REAL FR DATA (2026-08-25). The ranking below is kept only as the record of
> what English-derived inference predicted, and how wrong it was.** The export arrived the same
> day and **falsified everything below rank 0.** Read the FRENCH SEARCH DATA block underneath it.
>
> <details><summary>Superseded English-inferred ranking (do not act on)</summary>
>
> | # | Post | Predicted | Reality |
> |---|---|---|---|
> | 0 | poll how-to | ✅ shipped | **Vindicated.** Biggest FR cluster by far. |
> | 1 | native-polls comparison | ✅ shipped | **Zero FR query support.** No "sondage natif" query exists at all. |
> | 2 | `complete-guide-anonymous-surveys-discord` | "next" | **23 impressions.** Dropped from the wave. |
> | 3 | `how-to-make-a-discord-form` | queued | **24 impressions @ pos 20.8.** Dropped. |
> | 4 | `best-discord-poll-bots` | queued | "meilleur bot discord" = **7 impressions.** Dropped. |
>
> </details>
>
> ### ▶ FRENCH SEARCH DATA — the real numbers (exports 2026-08-25, subo.ai, 16 months)
>
> Three exports: query-regex, country=France, and page-contains-`/fr/`. **The same regex on
> subo.gg returns nothing at all** (see the migration flag at the bottom of this block).
>
> **Clustered, 61 French-matching queries, 15,048 impressions, 82 clicks:**
>
> | Cluster | Impressions | Clicks | CTR | Avg pos |
> |---|---|---|---|---|
> | **HOW-TO** ("comment faire / créer un sondage…") | **7,363** | 5 | 0.07% | 7.0 |
> | **Head terms** ("sondage discord", "sondage sur discord") | **5,763** | 10 | 0.17% | 6.8 |
> | **Commercial** ("bot sondage discord") | 1,215 | **59** | **4.86%** | **4.5** |
> | questionnaire / enquête | 314 | 8 | 2.55% | 6.9 |
> | PT-BR leakage (see below) | 279 | 0 | 0% | 10.3 |
> | junk / off-ICP | 67 | 0 | 0% | 39.2 |
> | form intent ("formulaire discord") | 24 | 0 | 0% | 20.8 |
> | anonymity ("sondage anonyme discord") | 23 | 0 | 0% | 8.0 |
>
> **The three findings that should drive everything:**
>
> 1. **Position 7 earns nothing in French.** Where we sit at pos 4.5 the CTR is 4.86%; at pos ~7
>    it is 0.07%. That is a 70x difference, and 13,126 impressions (how-to + head) sit on the
>    wrong side of it. **French is not a content-volume problem, it is a rank problem on one
>    cluster.**
> 2. **Every one of those impressions was being answered by the French HOMEPAGE.** The page
>    export is brutal: only **four** `/fr/` URLs have ever received traffic, and they are `/fr/`
>    (44,608 imp across www + non-www) and `/fr/pricing/` (1,161). Nothing else existed to rank.
>    "comment faire un sondage sur discord" (1,674 imp) landed on the homepage at pos 7.33 and
>    got **0 clicks**, which is what a homepage deserves for a how-to query.
> 3. **The demand is how-to, not comparison and not "best bot".** Which means depth on one
>    cluster beats breadth into new topics. This inverts the English-derived plan.
>
> **▶ REVISED PLAN: deepen the cluster we just entered, don't open new ones.**
>
> - **A. "Vote" is a separate French wording we do not target.** "comment faire un vote sur
>   discord" (323), "faire un vote sur discord" (282), "discord vote" (148), "bot vote discord"
>   (62) ≈ **815 impressions** on *vote* rather than *sondage*. The shipped post says "sondage"
>   throughout. **Cheapest win on the board: work the vote phrasing into the existing post**
>   (a section and some natural phrasing), not a new post.
> - **B. "Sondage Discord sans bot"** (28 imp) is a real sub-intent the post already answers in
>   substance; make it findable with an explicit section and FAQ entry.
> - **C. The questionnaire/enquête cluster (314 imp, 2.55% CTR) resolves the cannibalization
>   trap.** French uses *questionnaire* / *enquête* for the multi-question thing and *sondage*
>   for the one-question vote. So the survey how-to CAN be translated after all, if it is framed
>   as **"questionnaire Discord"** and never competes for "sondage". Best CTR of any non-commercial
>   cluster. **This is the next actual post.**
> - **D. Nothing else clears the bar.** Anonymity (23), form (24) and best-bots (7) are noise in
>   French. Revisit only if a later export moves them.
>
> **▶ UNPLANNED FINDING: Brazilian Portuguese has the same demand, unserved.** `enqu[êe]te` in the
> regex caught **279 impressions of PT-BR** ("como fazer enquete no discord" 123, "enquete no
> discord" 60, "como criar enquete no discord" 42, …) at avg pos 10.3. PT-BR currently has **2
> pages and no hreflang entry anywhere on the site.** This is now the strongest argument in the
> IT/PT-BR routes item: **PT-BR has demonstrated demand, Italian has none measured.** Do PT-BR
> first, and its first blog post is the how-to, same as French.
>
> **⚠️ MIGRATION FLAG, needs checking.** `/fr/` impressions on subo.ai: **2,577 (May) → 581 (Jun)
> → 11 (Jul) → 336 (Aug)**, and the French regex on **subo.gg returns nothing**. So ~2,500
> monthly French impressions have left the old domain and have **not** reappeared on the new one.
> That is consistent with the documented branded-recovers-first / non-branded-lags pattern (French
> here is 100% non-branded), but it is worth **verifying rather than assuming**: run URL Inspection
> on `https://subo.gg/fr/` in Search Console and check whether it is indexed or sitting in the
> **54 "Crawled - currently not indexed"** bucket. The sitemap is fine (122 URLs, 14 French, no
> noindex), so if it is not indexed the cause is elsewhere.
>
> **Also worth remembering: France searches in English too.** The country=France export has
> "survey bot" (80), "poll bot discord" (219), "discord survey bot", "discord ai survey" ranking
> for us there. Don't over-rotate to French-only; the English corpus serves France as well.
> - **✅ `docs/content.md` cleaned up (2026-08-25), after the FR commit.** It had drifted badly.
>   Fixed: **5 question types → 8** (now a table, pointing at `api-surface.json`'s `blockTypes`
>   as the machine-checked source, since `check:api` guards it and a hand-maintained twin just
>   drifts again); the **repo cross-reference path** pointed at `Code\survey\web2\react`, a
>   directory that does not exist, instead of `Code\subo\`; the **draft list** named four posts
>   when only `scheduling-recurring-surveys-community-pulse` is still a draft, so it is now a
>   `grep` recipe plus the record of what each of the other three was ruled; the **Content
>   Collections** section knew only about `blog` and missed `templates` and `recipes` entirely.
>   Added the drafts-are-crawlable warning and the note that command names resolve from
>   `user_messages` before `defaultMessages.py`, so the Python constant is not proof of the live
>   name (`Wizard_comamnd_name` is still `"wizard"` in code while published copy says `/draft`).
>   **Correction to what this note said earlier: the Skip Logic section was NOT wrong.** Checked
>   against `priceTable` in `en.json`: "simple on all plans, Advanced Expression Editor on VIP
>   and Custom" matches the table exactly (✓✓✓✓ and ✗✗✓✓). The 2026-08-12 falsehood was in a
>   blog post, not in this doc. It now carries that verification inline so the next reader does
>   not re-suspect it.
>
> **Everything below this line is the previous resume note**, still accurate for items 1, 3, 4
> and 5 of its *Next moves* list. **Item 2 (FR blog infrastructure) is now done** — the next
> highest-value item on that list is **item 3, IT + PT-BR routes**, which has a written playbook.
>
> ---
>
> ### ▶ Previous resume note — the scale-family launch is CLOSED; the board is reopened
>
> **End of session 2026-08-24 (b). Working tree clean, `npm run check` green, both commits
> pushed to `origin/main` (`7822f41`, `a281b08`). Nothing is half-finished, and for the first
> time since 2026-08-14 nothing in the repo is blocked on the scale family.**
>
> **⭐ THE LAUNCH IS FINISHED IN-REPO.** Its plan and full progress log stay in their own
> section, **[SCALE-FAMILY LAUNCH](#-scale-family-launch--cross-cutting-site-plan-opened-2026-08-14)**
> below P7, as the record. **You do not need to start there any more.** Start at *Next moves*
> at the bottom of this note. Read the launch section only if you are writing more of that
> content, in which case **L5 and L6 bind** (below).
>
> **Final shipped state:** brief 2 landed (it is brief 1 updated in place, not a second file);
> **PHASE S1 COMPLETE** (S1.6 closed 2026-08-24 in EN/FR/DE), with nineteen images now in
> `public/images/blog/scale-family/` (S1.7's seventeen, the mascot hero, and shot 19 below);
> **S2 COMPLETE** across all four conversion batches; **S3 HAS ITS THREE POSTS LIVE** —
> `blog/discord-rating-scale-nps-ranking-questions` (the hub),
> `blog/discord-ranking-questions-rank-what-you-build-next` (Spoke 1, ranking) and
> `blog/discord-likert-scale-one-statement-at-a-time` (Spoke 2, Likert + the grid answer);
> **S4 drafted, with the changelog half shipped.**
> **Spoke 3 (NPS) is held by decision, not outstanding work**, and everything else left in S4
> is the user's to send.
>
> **⚠️ ONE CAVEAT ON THE WAITING S4 COPY** (the sends themselves are move 1 below). The kit at
> **[scale-family-launch-channels.md](scale-family-launch-channels.md)** states the tier line
> **"all plans, free included"** in every channel. That was **confirmed by the user on
> 2026-08-18 and the confirmation is session-scoped**: re-confirm it before pasting, and before
> reusing the line in any new copy. It is the one claim in the kit that a pricing change would
> turn into a public falsehood.
>
> **⚠️ Read L5 and L6 in the decisions table before writing any more of this content.** They
> amend L2 and they are the two things most likely to be re-derived wrongly from scratch:
> - **The shape is a hub plus instrument spokes**, and three of the four slots are filled.
>   Post 1 doubles as the permanent *rating* page; ranking and Likert each have their own.
>   **Spoke 3 (NPS) is deliberately HELD** until the promoter/detractor rollup ships app-side,
>   because
>   what we have today is the instrument and not the metric, and ranking a page that then
>   hands the reader a subtraction is worse than not ranking it.
> - **Rating and ranking polls must not be teased at all** (user, 2026-08-16), which also
>   removes *"rank options poll Discord"* from the keyword list. The poll-framed page is a
>   deferred slot, and a valuable one, since polls are the site's biggest organic cluster.
>
> **✅ DONE this session (2026-08-24 b): SPOKE 2 SHIPPED**, which closes the launch in-repo.
> `blog/discord-likert-scale-one-statement-at-a-time`, ~1,700 words, 8 FAQ entries, `FAQPage`
> JSON-LD verified, reciprocal link added from Post 1. Full log on the S3 item; the three
> things worth carrying forward:
> - **The grid answer is now a section, not an FAQ line**, written in the brief's constructive
>   form (a grid is a layout, its replacement is one Opinion Scale per statement, and only then
>   why the replacement is better). No competitor is named anywhere.
> - **The post concedes where a grid wins** (replicating an established battery item-for-item).
>   `blog-writing` bans manufactured both-sides, not an honest limit, and a survey-literate
>   reader trusts the straightlining argument more for it.
> - **A screenshot gap was found and closed in the same session.** The eighteen-shot set had
>   no respondent-POV opinion scale as a button row, so the first draft's three images were
>   all shared with Post 1. The user shot **`agreement-scale-respondent-pov-discord.png`**
>   (shot 19), which shows **two agreement statements in a row with the same preset**, and it
>   is now the hero: the grid argument as an image. Post rearranged so the results card sits
>   inline reporting the exact statement the hero asks.
>
> **✅ DONE earlier the same day: S1.6 in EN, FR and DE, which closes Phase S1**, plus a
> follow-on the pass surfaced. Both are logged in full on the S1.6 item; the two things worth
> carrying forward without re-deriving them:
> - **The engagement page deliberately has no rating card.** A drafted "One-tap ratings" card
>   was cut (user) because that page's spine is polls and the family is not in polls yet. That
>   is **L6 read forward, and it governs the deferred poll-framed slot too**: don't sell the
>   scale family on a surface that cannot yet deliver it.
> - **FR and DE use-case example chips now link to templates.** They were plain strings
>   rendering as inert chips while EN's were `{ text, template }` objects, so six high-intent
>   pages sent nothing into the template library. 81 links across the three locales, all
>   verified to resolve. **Pattern worth remembering: when EN and a locale disagree, check the
>   data *shape*, not only the strings.** The renderer already tolerated both forms.
>
> **▶ NEXT MOVES — start here. The launch no longer sets the agenda.**
>
> Nothing below is blocked by anything else, so the order is by value, not by dependency.
> **Items 1 and 2 want the user before code.**
>
> 1. **⚠️ YOURS, NOT THE REPO'S — the S4 sends.** The Discord `@Updates` message, the five-post
>    X thread and the top.gg news post are written and waiting in
>    **[scale-family-launch-channels.md](scale-family-launch-channels.md)**. Send in the
>    canonical order (Support Server → X → top.gg), then do the **top.gg listing soft refresh**
>    (a separate thing from the news post: a manual edit, because the listing carries curated
>    screenshots). **Re-confirm the tier line before pasting** (below). Log outcomes in the kit.
> 2. **▶ DECISION WANTED, and it is the biggest thing on the board: FR blog infrastructure.**
>    `sondage discord` is **756 imp @ pos 8.5**, a top-5 non-branded term, and French how-to
>    content has **nowhere to live**: the blog collection has no locale field and
>    `src/pages/blog/` has no FR route, so every FR page's outbound content link currently
>    points at an English post marked "(en anglais)". The call is a schema/routing one, not a
>    copy one: locale field vs. separate entries, hreflang on posts, and how RSS and the
>    sitemap treat translations. **It wants a deliberate answer rather than a shape chosen
>    mid-task**, which is why it has sat open since 2026-08-11. Once it lands, **a French
>    ranking or Likert post is the obvious first FR post** (open question 2 in the launch
>    section).
> 3. **~~ES/IT/PT-BR routes~~ — ✅ ES IS DONE (2026-08-24 c), IT and PT-BR remain.** Spanish
>    went **2 → 10 pages**, full parity with German, in one pass: six new blocks in `es.json`,
>    eight routes, hreflang reciprocal across all 32 files, the `/survey-convos` form-intent
>    retune, and 17 em dashes cleared. Full log in the language backlog. **IT and PT-BR are
>    still at 2 pages each** and their cheap half is unchanged: `surveyConvos` and `about` are
>    fully translated in `it.json` and `pt-br.json` and rendered by no page at all. Both carry
>    **pre-retune** copy (IT "Sondaggi che sembrano conversazioni", PT-BR "Pesquisas que
>    parecem conversas", neither saying *modulo* / *formulário*), so it is create-the-route
>    then tune title, description and H1 for form intent. Both also still carry their em
>    dashes (IT 18, PT-BR 20). **⭐ Read the LOCALE-PARITY PLAYBOOK in the language backlog
>    before starting** — the German and Spanish passes are distilled there into an order of
>    operations and five traps that have each bitten at least once. Do not re-derive the shape.
>    **Also noted there: `pt-br` has no hreflang entry anywhere on the site**, so its two live
>    pages are orphaned from the language graph regardless of the routes work.
> 4. **German changelog** — the last page for FR parity. Needs `legacy-releases.ts` widened off
>    its bilingual `titleFr`/`summaryFr` schema plus a new `changelog-blog-de.ts`. Note the
>    live trap that FR already hit: **a slug missing from the locale's changelog map falls back
>    to the English title and description**, so the page silently mixes languages.
> 5. **The last unruled draft post**, `scheduling-recurring-surveys-community-pulse`. It is the
>    only one of the four crawlable drafts never read. Note the pattern in the three rulings
>    before it: content blocks published, community types rebuilt as a hub, skip logic merged
>    away. **None was "deindex it."**
>
> **Two follow-ons the launch generated, now free-standing:** the **per-audience spokes** off
> the community-types hub (game studios first, the ICP the original draft missed), and the
> **`/templates` question-type filter UI** (open question 3 in the launch section: the
> instrument vocabulary is already in the data as `features` values, only the filter is
> missing, so it is cheap now).
>
> **Standing context that has not changed:** content ROI is still **migration-gated to ~Q4**
> (branded recovered, non-branded lagging), so an early "the new posts aren't ranking" is
> migration lag and not the content. The AI crawlers were unblocked 2026-08-04 and recrawl runs
> weeks-to-months, so **P2's "LLM citations for best Discord survey bot" metric is testable
> now** and worth checking cold.
>
> Two follow-ons the launch generated that are now free-standing: the **per-audience spokes**
> off the community-types hub (game studios first), and **`/templates` question-type filter
> UI** (open question 3 below: the vocabulary is already in the data, only the UI is missing).
>
> ---
>
> ### ▶ Previous resume note — P7 unblocking; ES/IT/PT-BR routes
>
> **State at end of session 2026-08-12 (b).** House cleaning done, repo committed and pushed,
> nothing half-finished on the site side. Two things to know before picking up:
>
> **1. ⭐ THE P7 GATE HAS OPENED — the scale family shipped.** `rating`, `opinion_scale`, `nps`
> and `ranking` are **merged into the app repo's `master`** and **deployed to Stage** (user,
> 2026-08-12). Remaining app-side before Production: **translations + a release brief.** This
> ends the hard constraint that has frozen P7 since 2026-07-29.
> **Agreed plan once the brief lands (user, 2026-08-12):** *templates head-on* — **first
> rewrite the existing 22 templates to use the rating/scale question types, then build new
> ones.* That ordering matters: it is the "don't build templates you'll rebuild" constraint
> read forward, so the existing set stops being pre-scale-family legacy before the library grows.
> **Do not document the four block types on the site until the release brief lands** (the
> standing rule, and Production hasn't shipped either). When it does, this unlocks together:
> `src/data/api-surface.json` + the `/api` block-type table, the template rewrites, and P7's
> `/templates/*` landing pages.
> **`npm run check` is red right now, and it is honest.** `check:api` reports the four
> undocumented block types. Previously that red meant "the app repo is on a feature branch";
> it no longer does. See the revised guard note in P7.
>
> **2. Site-side next move, already scoped and verified: ES / IT / PT-BR routes.** The German
> Tier 1 trick has three unspent copies. Verified 2026-08-12: `surveyConvos` and `about` are
> **fully translated with zero missing keys against EN** in `es.json`, `it.json` *and*
> `pt-br.json`, and rendered by **no page at all** — the route `.astro` files were never
> created. Six new pages, no translation spend, taking ES/IT/PT-BR from 2 → 4 pages each.
> - **Not a copy-paste job.** All three carry **pre-retune** copy, exactly as FR and DE did:
>   ES H1 "Encuestas que se sienten como conversaciones", IT "Sondaggi che sembrano
>   conversazioni", PT-BR "Pesquisas que parecem conversas" — **none says *formulario* /
>   *modulo* / *formulário***. So it is the two-pass job this doc keeps insisting on: create
>   the route, then tune title/description/H1 for form intent in that language.
> - **hreflang must be reciprocal** across every existing copy of both pages (~10 files), the
>   part DE got right.
> - **On the BR/ES revenue gate:** the revised order says "verify BR/ES before spending." That
>   gate was about **spending on translation**, and this slice spends none, so it does not bind.
>   It is also the cheapest way to *get* the verification the gate asks for: those markets have
>   no localized commercial page to convert on today, so their Stripe $0 is currently
>   unfalsifiable.
>
> **Also still open, unchanged:** the **German changelog** (last page for FR parity; needs
> `legacy-releases.ts` widened off its bilingual `titleFr`/`summaryFr` schema plus a new
> `changelog-blog-de.ts`), **P5 roundup outreach** (yours to send), and the **FR blog
> infrastructure decision** (see below) which is the real blocker on `sondage discord`.
>
> **▶ DECISION WANTED: FR blog infrastructure.** Flagged 2026-08-11, still unmade, and it is
> the largest single non-English opportunity on the board: `sondage discord` is **756 imp @
> pos 8.5**, a top-5 non-branded term, and French how-to content has **nowhere to live** — the
> blog collection has no locale field and `src/pages/blog/` has no FR route. Every FR page's
> outbound content link currently goes to an English post marked "(en anglais)". This is a
> schema/routing decision (locale field vs. separate entries, hreflang on posts, how the RSS
> and sitemap treat translations), not copy, so it wants a deliberate call rather than a shape
> chosen mid-task.
>
> **✅ DONE (o) skip-logic tier claim RULED and fixed across EN/FR/DE (2026-08-12).** The open
> question from (n) below is closed; the ruling and the lesson are recorded there. Chasing the
> same fact through the blog turned up **a second, live falsehood in a published post**:
> `mastering-skip-logic-...` (the post `/features` links to) said *"The Skip Logic option is
> available for all Premium, VIP and Custom bot subscribers"*, which excludes Free and
> contradicts the pricing table's ✓ on all four tiers. Fixed, and both editors named. Its
> `draft: true` sibling `how-to-use-skip-logic-...` said *"advanced skip logic on Premium and
> above"* in the intro while its own closing line said *VIP and Custom Bot* — the post
> disagreed with itself two screens apart. Also fixed, plus its remaining 10 prose em dashes
> (repo precedent: clear them across any post you touch).
>
> **▶ FOUND, NOT FIXED — `draft: true` posts are built, crawlable and IN THE SITEMAP.**
> Discovered while fixing the above, and it needs a ruling rather than a quiet fix, because it
> is a traffic decision.
> - **Mechanism:** `src/pages/blog/index.astro:15` filters drafts out of the *listing*
>   (`posts.filter(post => !post.data.draft)`), but `src/pages/blog/[...slug].astro`'s
>   `getStaticPaths` maps **every** entry in the collection with no draft filter. So each draft
>   gets a real page at its public URL, and `@astrojs/sitemap` picks it up.
> - **Confirmed in `dist/`:** all four drafts are built *and* present in `sitemap-0.xml` —
>   `5-discord-community-types-surveys-they-should-run`,
>   `content-blocks-new-way-to-design-survey-flows`,
>   `how-to-use-skip-logic-smarter-discord-surveys`,
>   `scheduling-recurring-surveys-community-pulse`.
> - **This invalidates an assumption written into this doc.** The 2026-08-05 FAQ-schema entry
>   skipped the Google-Forms post while it was a draft on the grounds that *"schema on an
>   unpublished post renders nowhere."* It renders, and it is submitted to Google. The 2026-07
>   note that `content-blocks` is `draft:true` so posts should *"link `action-blocks` instead"*
>   was also protecting against a link that in fact resolves.
> - **`/tutorials` links straight into a draft.** `src/pages/tutorials/index.astro:43` points
>   its skip-logic card at `/blog/how-to-use-skip-logic-smarter-discord-surveys/`, the draft,
>   rather than the published `mastering-skip-logic-...` that `/features` uses.
> - **Why this is your call, not a hygiene fix.** Filtering drafts out of `getStaticPaths` is
>   one line and is almost certainly what `draft: true` was meant to do, but it **deindexes
>   four live URLs**, and at least one (`5-discord-community-types-...`) is the kind of
>   listicle that may already earn impressions. Deleting indexed pages to honor a flag is a
>   real trade, especially mid-migration while non-branded rankings are still recovering.
>   **Options:** (i) filter drafts from `getStaticPaths` and repoint the `/tutorials` card at
>   the published post — cleanest, costs whatever those four currently earn; (ii) check Search
>   Console for the four first, then promote any that perform to `draft: false` after a proof
>   pass and filter the rest; (iii) leave the build alone and just repoint `/tutorials`.
>   **(ii) is the honest one** given the whole point of P2 is compounding content: two of these
>   four are finished-looking posts that were never proofed, not junk.
>
> **✅ DONE (p) `subo-glossary` skill vendored into this repo (2026-08-12).** It lived at
> user level, so the rules travelled with the *machine* rather than with the code that follows
> them. Now `.claude/skills/subo-glossary/`, byte-identical to the app repo's copy (diffed both
> ways), and the **user-level copy deleted** after confirming all ten referrers live inside the
> two repos. CLAUDE.md's House style section gained the **edit one, copy to the other in the
> same change** rule, since two-copy drift is the failure mode this creates. The app repo
> carries the matching commit (`8eacffe4`), which also added a **US-English-everywhere rule for
> code comments and `docs/`** to its Important Patterns — written because `docs/recipes/` was
> later published on this site, i.e. internal prose is not safe from becoming marketing copy.
>
> **✅ DONE (u) the two skip-logic posts MERGED, and the draft 301'd (2026-08-14).** They were
> one article written twice (what-is-it → when → examples → getting-started, same intent), and
> the split was doing real damage: **`/features` linked to one and `/tutorials` to the other**,
> so a single intent's internal link equity was divided across two URLs, one of them an unlisted
> draft.
> - **Survivor: `mastering-skip-logic-...`** (Sep 2024, `draft:false`, has a hero). Kept because
>   it is the URL with indexing history and `/features` already pointed at it. Its slug is worse
>   for the query, but **moving URLs mid-migration to buy a slug is the wrong trade**; retitled
>   instead ("Skip Logic for Discord Surveys: Show, Hide, and Reward Based on Answers").
> - **`how-to-use-skip-logic-...` deleted and 301'd** to the survivor. `/tutorials` repointed,
>   which also closes the "links straight into a draft" item from the drafts block below.
> - **New mechanism: `public/_redirects`.** First retired-URL redirect on the site. It is *not*
>   in `astro.config.mjs`'s `redirects` block, and the comment in both files records why: Astro
>   emits each config redirect as `<path>/index.html`, so the with-slash and without-slash forms
>   of one path **collide as duplicate static routes** (verified: build warns and it is slated to
>   become a hard error). Both forms need to work and the indexed one is with-slash. The
>   Cloudflare adapter **appends** its own entries to `public/_redirects`, so nothing is lost by
>   owning the file. Use it for future retirements.
> - **Content, all verified against the app:** the operator table per block type
>   (`OPERATORS_BY_BLOCK_TYPE` / `OPERATOR_LABELS` in `types/skipLogic.ts`), the two panel names
>   (**"Who should see this?"** on question/content blocks, **"When should this fire?"** on
>   action blocks, `CanvasPanel.tsx:1094`/`1530`), conditional rewards keyed on
>   `correct_answers`, and the Expression Editor's one-way Expert Mode. 6 FAQ questions, the
>   user's three screenshots, no new hero needed (another reason merging beat keeping two).
> - **Scale family documented** (Rating / Opinion Scale / NPS / Ranking): allowed now, brief
>   `2026-08-13-scale-family-blocks.md` exists and it is **live on production**. Only the skip-
>   logic-relevant facts are used: scales compare numerically (so NPS `<= 6` is one visual
>   condition), and ranking gets **two** readings, *top choice is* and *ranked*. Likert is
>   deliberately **not** called a block type, per the brief.
> - **Precision worth keeping: polls.** Question-block skip logic is **hidden** for polls
>   (`!isPoll` at `CanvasPanel.tsx:1530`); what a poll gets is a **conditional action block** in
>   the outro (`isPoll && isActionBlock`). "Skip logic works in polls" is true only in that
>   narrower sense, and the post says so.
>
> **▶ Brief 2 is the templates brief.** `2026-08-13-scale-family-blocks.md` is **version 1 of
> 2** and states plainly that the built-in templates still fake scales with choice/numeric
> questions and that **no copy may promise updated templates yet**. That is the next session's
> work (the agreed "templates head-on" ordering), and brief 2 arrives with it.
>
> **✅ DONE (t) `5-discord-community-types-...` rebuilt as a three-pillar hub (2026-08-13).**
> Ruled per the recommendation: **split by audience, don't expand the matrix, and keep the URL.**
> Five types on the Understand pillar only became six audiences read across Understand / Engage /
> Get things done, 1,692 → 1,249 words, with the sample-question lists replaced by **27 internal
> links** (all resolving) into the templates and recipes that already hold them. **Game studios
> and indie developers** added as its own section, the ICP the draft missed; it maps onto the
> existing `audiences: ["Gamers", "Businesses"]` facet, so no new taxonomy was invented. Title
> now names polls and forms too, which feeds the P2 form-intent cluster. 4 FAQ questions,
> `draft: false`.
> **Reasoning kept, because it generalizes:** the draft was *a hub in the wrong taxonomy*. The
> site's real axes are audience × pillar (encoded in the templates collection as `audiences` ×
> `dimension`), "5 community types" cuts across that grain, and that is why the post had nothing
> to link to and nothing linking in. **Per-audience spokes are the follow-on work**, one post per
> ICP covering all three pillars, starting with game studios. Not started; P2 remains
> migration-gated to ~Q4 and templates come first.
>
> **✅ DONE (s) `content-blocks-new-way-to-design-survey-flows` revised and PUBLISHED
> (2026-08-13).** First of the four crawlable drafts to get a ruling: the user judged it a good
> article, so it went `draft: false` with `updatedDate` rather than being deindexed. Rewritten
> against the current `blog-writing` skill (9 em dashes cleared, the nine identical
> numbered-section-plus-blockquote units broken up, stock phrasing cut) and against the app
> source. **Three product facts were wrong and are now right:**
> - **Button-label and typing-delay customization is Premium+, not "VIP and above."**
>   `CanvasPanel.tsx` gates both behind `hasPremiumAccess(serverTier)`. Same class of error as
>   (n): a real gate, named at the wrong tier.
> - **Content blocks work in polls too**, not just "surveys and web convos"
>   (`POLL_ALLOWED_BLOCK_TYPES` in `types/project.ts`). The image field is the survey-only part.
> - **The welcome screen is a server setting, not an unconditional default.** `Default Survey
>   Intro` (`defaultIntroEnabled`) seeds an intro block into new non-poll surveys; deleting it
>   collapses the INTRO section to a **Restore default** button. Post says so, with the user's
>   screenshot.
>
> **New material, which is why the revise was worth more than a proof pass:** a full
> **variables** section (the `[` / `@` / `:` pickers, the eight picker categories out of
> `variableRegistry.py` + `useVariables.ts`, answer piping, and score buckets resolving to
> `[score_<bucket>]` / `[correct_answers]` per `_variable_catalog` in `routes/script.py`), built
> around the user's two Discord screenshots. Plus **5 FAQ questions** (schema + visible),
> interlinks to `/templates`, `/recipes` and the published skip-logic post, and a third image
> lifted from the chat screenshot into `public/images/blog/content-blocks/`.
>
> **⚠️ App-side inconsistency spotted, not fixed:** `defaultIntroEnabled` resolves a NULL column
> to **True** in `serverSurveyLogic.py:663` and `dto/settings.py`, but to **False** in
> `model/serverSetting.py` and `web2/public_api/routes/projects.py:678`. A community that never
> touched the setting therefore gets a seeded intro from the app and no intro from the API. The
> post is written to be true either way (it says "if your community has the setting on"), but
> the app should pick one.
>
> **▶ STILL OPEN — one draft left.** Three of the four crawlable drafts are now ruled: content
> blocks published (s), community types rebuilt as a hub (t), skip logic merged away (u). Only
> **`scheduling-recurring-surveys-community-pulse`** is unread and unruled. Note the pattern in
> the three verdicts: none of them was "deindex it." Each was worth more revised than deleted,
> which is evidence for option (ii) on the remaining one rather than the blanket
> `getStaticPaths` filter.
>
> **✅ DONE (q) API anonymous-mode redaction — site copy restored to the truth (2026-08-13).**
> The user fixed the leak app-side, so the (k) finding — *"the API does not honor privacy modes
> on the responses endpoint, and `/api` claimed the opposite"* — is closed from both ends. What
> the app now does, read out of the working tree
> (`web2/public_api/routes/responses.py`, `schemas/response.py`, `openapi_spec.py`,
> `surveyLib/domain/surveyEvents/baseEvents.py`):
> - On `privacy_mode: anonymous`, `user_id` / `platform_id` / `session_number` are `null` on
>   both the REST read path and the `response.submitted` webhook. `provider` is kept on
>   purpose (the admitting source is not treated as identifying, same rule as the XLSX exports).
> - Respondent filters are **refused, not ignored**: `?user_id=`, `?platform_id=`,
>   `?session_number=` return `400` on an anonymous project. Blanking the fields while still
>   answering the filter would have been cosmetic — a caller who filters and reads back a
>   non-empty page has learned who answered.
> - Grouping survives: `id` still identifies one submission, and the webhook gained a
>   **`response_id`** field precisely so a pipeline keeps a join key.
>
> **Site side:** the "Privacy modes do not redact this endpoint" paragraph in
> `src/pages/api.astro` and its `llms.txt` twin rewritten to state the redaction, the 400, and
> what survives it.
> **Guard extended, same reasoning as (i).** This is the highest-consequence sentence on `/api`
> — it tells an integrator that *Subo*, not their ingestion code, keeps the anonymity promise —
> and a regression is invisible from this repo. `check:api` now reads the redacted field set out
> of `schemas/response.py` (`<field>=None if anonymous else …`) and the refused-filter tuple out
> of `routes/responses.py` (`_RESPONDENT_FILTER_ARGS`), against new
> `anonymousRedactedFields` / `anonymousRefusedFilters` keys in `api-surface.json`. Verified by
> inducing drift in both directions.
> **⚠️ The app-side fix is UNCOMMITTED in the app repo working tree** (8 modified files, nothing
> on `master`), so it is **not on Stage or Production**. The site copy is therefore true of the
> code but **ahead of the deploy** until that ships — worth pairing with the scale-family
> release rather than sitting on the site alone.
>
> **✅ DONE (r) footer Bluesky link repointed subo.ai → subo.gg (2026-08-13)**, all six locale
> files. Last stray `subo.ai` in site nav.
>
> **✅ DONE (c) API/agent GEO — `subo.gg/api` built and live in-repo (2026-08-04).** Static,
> crawlable quickstart + 7 recipes + reference tables + FAQ, written against the real
> `web2/public_api` routes. `llms.txt` repointed at it (and its **wrong endpoint paths
> fixed** — see the P2 API subsection). Homepage `DeveloperAPI` + footer interlinked.
> Clean `npm run build`. **First `FAQPage` schema on the site** — reuse the pattern for
> the open schema gaps.
>
> **▶ THREAD 1 (user action, still open): P5 roundup outreach.** The kit
> **[roundup-outreach-kit.md](roundup-outreach-kit.md)** is built (2026-08-03): tiered
> targets, pitch templates A/B/C, ready-to-paste Subo entry. **Subo is ALREADY listed in
> CommunityOne** but mislabeled "Fun bots," so the warmest lead is an *upgrade* (template C),
> not a cold pitch. **Sending is yours.** Tier 1 first (CommunityOne reclassify →
> Stickers.gg / Space-node / BotGhost), then Tier 2 (Beebom, Rumie). Log outcomes in the
> kit; feed each live placement's `$referring_domain` into the P0 funnel breakdown.
>
> **✅ DONE (d) `FAQPage` schema for blog posts — SHIPPED (2026-08-05).** Frontmatter-driven
> injector on the blog collection + visible on-page Q&A, **backfilled across eight posts
> (35 questions)**. See the `[x]` bullet in the P2 list below for the full detail. Timed
> deliberately: the AI crawlers were unblocked 2026-08-04, so this landed before their
> first pass rather than after it.
>
> **✅ DONE (f) `llms.txt` split-brain — FIXED in the app repo (2026-08-05), awaiting the
> user's next app deploy.** `api.subo.ai/llms.txt` is now a stub pointing at the canonical
> `subo.gg/llms.txt`. Detail in the API loose-ends bullet.
>
> **✅ DONE (g) Google Forms / Typeform comparison — PUBLISHED (2026-08-05, `ce696ca`).**
> `subo-vs-google-forms-typeform-discord-communities.md` is `draft: false`, shipped with 6
> FAQ questions and zero em dashes, which closes the "deliberately skipped" caveat on the
> FAQ-schema item below. All nine FAQ-bearing posts are now live.
>
> **✅ DONE (h) recipe corpus brought on-domain — SHIPPED (2026-08-06, `0d361cc`).**
> All ten now live at **`subo.gg/recipes`** as a real content collection. See the
> dedicated `[x]` bullet below for the full detail. Headline: the authority leak to
> `api.subo.ai` is closed, and the **templates ↔ recipes** pair the templates schema
> always anticipated is finally wired.
>
> **✅ DONE (j) the interlink pass — SHIPPED (2026-08-07, `6ebad15`).** Closes P2's oldest
> unchecked bullet (content → templates → recipes → pricing) and the "Read the walkthrough"
> buttons that landed on the recipes index. Full detail in the two `[x]` bullets below.
> Headline: `/recipes` went from **zero inbound blog links to 16**, every published post now
> has at least one internal link, and four broken or wrong links were fixed, including **two
> 404-ing API paths in `public-api-launch`** (the same missing-`/communities/{communityId}`
> bug `llms.txt` had, still live in a published post).
>
> **✅ DONE (l) FR poll + form retune — SHIPPED (2026-08-11).** The two FR pages were still
> carrying the *pre-retune* EN structure, so the 2026-07-31 `/polls` tune and the 2026-08-01
> `/survey-convos` tune had never reached French at all. Full detail in the dedicated `[x]`
> bullet below. Headline: `sondage discord` (756 imp @ 8.5) had exactly one FR page aimed at
> it and that page's H1 didn't say "bot de sondage."
>
> **✅ DONE (m) German to 10 pages — Tier 1 + Tier 2 SHIPPED (2026-08-12).** Six new blocks
> in `de.json` and six new routes; German went 2 → 10 pages, one short of FR (changelog is
> the only gap, and it needs a `legacy-releases.ts` schema change). Full detail in the
> German-parity bullet in the language backlog. Written deliberately rather than translated
> flat, because there is no native reviewer and the LLM pass is the only pass.
>
> **✅ DONE (n) two stale product facts corrected across EN/FR/DE (2026-08-12).** Found while
> translating `featuresPage` into German, and fixed at the source before propagating:
> - **Invented privacy-mode names.** `/features` and `/use-cases/research` called them
>   "Identified, More Anonymous, Fully Anonymous" in both EN and FR (4 strings), and the DE
>   `/about` page had a German equivalent. The real modes, per `src/data/api-surface.json`
>   and the anonymous-surveys guide, are **Transparent / Semi-Private / Anonymous**. All 5
>   strings now match. A broader grep confirmed the remaining "fully anonymous" hits are
>   descriptive prose about the anonymous mode, not the invented triple.
> - **Skip-logic tier claim.** `/features` said "Simple logic on all plans; advanced syntax
>   on VIP+" (EN + FR). The pricing table marks "Skip Logic & Conditional Rewards" **✓ on
>   all four tiers**, and no tier gate on skip logic or preconditions exists anywhere in the
>   app repo's Python or React admin. Replaced with "Available on every plan." **Worth a
>   user ruling:** the app repo was on the unmerged `feat/scale-blocks` branch when searched,
>   and the pricing table *does* gate a separate "Erweiterter Ausdruckseditor / advanced
>   expression editor" to VIP. If that editor is what "advanced syntax" meant, the original
>   claim was clumsy rather than false and the card could name that feature explicitly.
>   **RULED + FIXED (user, 2026-08-12).** That is exactly what it meant, so the original was
>   clumsy, not false, and "Available on every plan" was an over-correction: the two editors
>   are **Visual Editor (all plans)** and **Expression Editor (VIP + Custom)**, the split
>   being GUI-built conditions vs. open syntax. Confirmed in the app:
>   `web2/react/.../builder/SkipLogicBuilder.tsx:276` gates the "Switch to Expression Editor"
>   button behind `hasVIPAccess(serverTier)` with a `PremiumBadge`, while the visual condition
>   rows are ungated; the pricing table's `Advanced Expression Editor` row is ✗/✗/✓/✓ across
>   FREE/PREMIUM/VIP/CUSTOM. The `/features` card now names both editors, in **EN, FR and DE**.
>   Also corrected `how-to-use-skip-logic-smarter-discord-surveys.md`, which had the shape
>   right but not the names ("Simple logic" / "Advanced logic (VIP only)", understating Custom)
>   plus a `for yous` typo and two em dashes on the lines touched.
>   **Lesson worth keeping:** the audit was right that the copy was wrong and wrong about which
>   direction. A vague claim ("advanced syntax on VIP+") failed to match a real gate whose
>   product name it never used, and the fix deleted the gate instead of naming it. When a tier
>   claim doesn't verify, check whether the *feature name* is the thing that's missing before
>   concluding the tier is.
>
> **Remaining in Thread 2 after (h), (j) and (l):**
> - **(a) Form/no-"bot" follow-ons** — more "app"/"form" vocabulary in existing titles/H2s,
>   standalone `/draft` page. Migration-gated to ~Q4. (FR `/survey-convos` now done, see (l).)
> - **(e) Localize `/api`?** — probably not. Developer docs in EN is the norm and the
>   samples don't translate. Noted so it isn't re-litigated.
> - **✅ DONE (k) prose audit of `/api`, `llms.txt`, `/recipes`, `/templates` (2026-08-11).**
>   The premise held: **four false statements, every one of them behind a URL that resolves.**
>   Full detail in the dedicated `[x]` bullet below. Headline: the API **does not honor privacy
>   modes on the responses endpoint**, and `/api` claimed the opposite.
>
> **✅ DONE (i) API privacy-mode default — FIXED APP-SIDE, site copy now matches (2026-08-05).**
> The API no longer hardcodes Semi-Private when `privacy_mode` is omitted:
> `web2/public_api/routes/projects.py` resolves `settings.defaultAnonymousMode` and falls
> back to `AnonymousModes.MoreAnonymous` (= Anonymous), so an API-created survey is now as
> private as the identical survey created in the app. It also 400s on an unrecognized
> `privacy_mode` instead of guessing.
> **Site side (this repo):** `privacyDefaultOnCreate: "semi-private"` in
> `src/data/api-surface.json` renamed to `privacyFallbackOnCreate: "anonymous"`, with the
> prose in `src/pages/api.astro` and `public/llms.txt` rewritten from "the API applies
> semi-private" to "inherits the community's configured default, `anonymous` for a
> community that never changed it."
> **Guard extended, because this is exactly the drift class the guard missed.** The old
> checker verified privacy-mode *names* but never the *default*, so the wrong value sat in
> published copy while `check:api` reported OK — the documented "names and numbers only"
> limit, in the wild. `scripts/check-api-drift.mjs` now parses the
> `defaultAnonymousMode ... or AnonymousModes.X` fallback out of the route and maps it back
> through `_PRIVACY_TO_ANON_KEY`. Both failure modes verified by inducing them: a wrong
> documented value, and the route regressing to a hardcoded mode (which fails loudly rather
> than silently passing).
> - **Still open, latent (app side):** `discordSurvey/main.py:2186` falls back to
>   `AnonymousModes.Confidential`, which **is not a member of that enum** and would raise
>   `AttributeError`. Only reachable when `settings.defaultAnonymousMode` is `None` (enum
>   members are always truthy), so it is dormant, not live. Worth a look on the app side.
>
> **Note:** content ROI stays **migration-gated to ~Q4** (branded recovered, non-branded
> still lagging). API/agent GEO was picked partly because **LLM citation doesn't wait on
> Search Console re-association**. See the migration block up top.
>
> **Also shipped since the last RESUME edit (2026-08-01 → 08-03), not otherwise logged here:**
> the **`/changelog` page** with legacy archive, EN + FR (`2672d2d`); the **XP History**
> feature announcement + site copy (`1dfd539`) and its FR mirror (`e1a0e06`); the
> **`feature-launch` project skill** (`973ecbd`).
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
> **Notion synced (2026-07-28):** the Notion **Privacy modes** tutorial carried the
> same stale default (Semi-Private) in two spots — fixed to **Anonymous** via Notion
> MCP (mode bullet moved to the Anonymous section + the "server defaults" step).
>
> **Shipped to `main`:** all of the above committed + pushed (commit `b327028`,
> 2026-07-28) after a clean `npm run build`. Marketing workflow = push to main.
>
> **Still open (non-blocking):**
> 1. ~~Exact AI-credit allowances per plan~~ — **RESOLVED.** The exact per-plan
>    credit numbers live in the **/pricing** comparison table (Free: 10k one-off
>    trial; then 500k/mo, 1M/mo, 1M/mo by tier). The article links to /pricing and
>    keeps its own copy qualitative, so there's a single source of truth and no
>    table to duplicate/maintain in the post.
> 2. **Standalone `/draft` page?** Currently only covered inside other posts.
>
> **Poll cluster progress — COMPLETE + LIVE on `main` (2026-07-30 → 07-31):**
> - ✅ **"Best Discord poll bots"** page shipped (commit `91bae44`).
> - ✅ **`discord-native-polls-vs-subo` comparison refreshed** to 2026 (house style +
>   current facts + crawlable markdown table + the power-user reuse/management angle +
>   broadened survey/forms/quizzes framing). Pushed in commit `d28af16`.
> - ✅ **Poll cluster interlinked** (best-poll-bots was orphaned): comparison ↔
>   best-poll-bots ↔ how-to ↔ /polls ↔ anonymous-surveys.
> - ✅ **New on-brand hero for the comparison** — the "poll toolkit" mascot
>   illustration ("GO PRO" neon; poll = one tool among lock/form/trophy vs a plain
>   NATIVE POLL card). Metaphor added to the `mascot-illustration` skill canon. Pushed
>   in commit `2fb8a8f` (2026-07-31); old `subo-vs-native-discord-polls.webp` removed.
> - See the two `[x]` bullets below for detail.
>
> **Next work items (roughly in order):**
> - ✅ **Strengthen `/polls`** — **DONE (2026-07-31).** Page-level SEO tune toward the
>   `discord poll bot` money cluster (~2,700 imp/6mo, already a top-5 organic page).
>   The money term "poll bot" was only in the `pageTitle`; wove it into the
>   `pageDescription` ("Subo is a Discord poll bot that…"), the **H1** ("The Discord
>   poll bot that scores, grades, and rewards"), and the hero subtitle — kept the four
>   feature-framed H2s untouched (no keyword stuffing). Added a **3rd outro interlink**
>   (`blogLink3` → `best-discord-poll-bots`) to catch the "best poll bot" intent and
>   finish the cluster. All in `pollsPage` (`en.json`) + conditional render in
>   `polls.astro`. Clean `npm run build`.
> - ✅ **"[competitor] alternative" pages — EasyPoll + Simple Poll SHIPPED (2026-07-31, on `main`).**
>   Honest alternative-intent pages, interlinked into the poll cluster with reciprocal links from
>   best-poll-bots. **MEE6 deliberately skipped:** "MEE6 alternative" intent wants a full
>   moderation/leveling replacement, which Subo is not, so we'd rank without converting. Both use
>   the new **alternative-series hero template** (one shared `alt-hero-base.webp` of
>   Subo-as-investigative-journalist + a live `heroHeadline` text overlay; documented in the
>   `mascot-illustration` + `blog-writing` skills). Next alt page = reuse the base image + one
>   `heroHeadline` line.
> **Tutorials hub — SHIPPED (2026-07-31):** built the on-domain `subo.gg/tutorials`
> hub (`src/pages/tutorials/index.astro`) + repointed the `tutorial` redirect off
> Notion → the hub + updated nav (header/footer). Bucketed: Bucket-A how-tos
> on-domain, Bucket-B command/ops docs still out to Notion. See the "hub plan"
> `[x]` bullets below. **Still open on the hub (non-blocking):** add `FAQPage`
> schema; localize selectively per P0 traffic; publish the 8 Web App Notion drafts
> and swap those Bucket-B links on-domain as they land; the optional `/docs` endgame.
>
> **Next content bet DECIDED (2026-08-01): the "Discord survey/form without 'bot'" cluster**
> (over more alternative pages) — it's the one bet that executes the anti-circularity
> principle (seeds intent our bot-framed history is blind to), sits in our Discord moat vs
> Google Forms, and reuses the existing `/survey-convos` "convos beat forms" positioning.
> **Strategy locked:** Discord-*qualified* form intent now (`discord form`, `google forms
> for discord`, `discord survey app`, `typeform alternative for discord`); build the asset
> web-*extensible* but do NOT promote generic non-Discord form intent yet (ship-gated —
> non-Discord admin onboarding isn't live; that's a P6 seed).
> - [x] **`/survey-convos` retune — DONE (2026-08-01).** Closed the form-intent
>   eligibility gap on an asset that was positioned *against* forms but never *said*
>   "form": new `pageTitle` ("Discord Survey & Form App, Reinvented as a Conversation"),
>   `pageDescription` (form/questionnaire/applications/Google Forms alt/web), **H1 →
>   "The Discord form that feels like a conversation"** (owns + reframes `discord form`),
>   +1 `whatBody` sentence catching the form/questionnaire/Google-Forms-for-Discord
>   searcher. Opinionated "convos beat forms" stance kept; the FORMS-vs-CONVOS table now
>   doubles as form-intent content. All in `surveyConvos` (`en.json`). Clean build. FR
>   counterpart deferred to a localization pass (`sondage discord` is a real FR market).
> - [x] **Forms/"no-bot" blog post — SHIPPED (2026-08-01, commit `320d25f`).**
>   `how-to-make-a-discord-form.md` (`/blog/how-to-make-a-discord-form`): problem-framed
>   ("run a form or survey in Discord" without thinking "bot"), **poll dropped on purpose**
>   (poll cluster already owns it; this page owns longer-form data collection). Opinionated
>   that a **structured conversation** beats a form (the qualifier: not a free-form human
>   chat, a fixed script at scale; "guided conversation" reserved for the GenAI adaptive-
>   interviewing era). Discord-qualified, honest Discord-OR-web mode framing (exclusive,
>   clone-to-switch). Interlinked to `/survey-convos` (+ reciprocal link back) +
>   `/use-cases/get-things-done` + `/templates` + anonymous-surveys guide. New
>   "conversation-vs-form" mascot hero (metaphor added to skill canon).
>   **Application/contact-form template links DEFERRED** (no such templates exist + P7
>   freeze) — logged in the master roadmap Stage 3, just after the scale-family/rating
>   bullet, to build + interlink once the new block types ship.
> - [ ] **Next form/no-bot moves (optional, when idle):** FR counterpart of the
>   `/survey-convos` retune (`sondage discord` is a real market); weave "app"/"form"
>   vocabulary into other existing pages' titles/H2s; a dedicated `/draft` (AI generator)
>   page still doesn't exist. Or move to a different P2 cluster.
> - **New angles added 2026-07-29 (see P2 bullets + subsections):**
>   - **"Discord survey/form without 'bot'"** cluster — untapped intent + the Discord
>     "app" rebrand vocabulary.
>   - **API/agent GEO** — crawlable on-domain API recipes + `llms.txt` API examples +
>     (later) an MCP-server listing. Batches with the `api.subo.ai → api.subo.gg`
>     consolidation.
>   - **Best-bots roundup inclusion** (P5) — pitch Subo into third-party "best Discord
>     bots" listicles; editorial backlinks without writing the page.
> - **Skip Logic** search-intent page (Bucket A, deferred as "later").
> - ✅ **Build the on-domain `subo.gg/tutorials` hub + repoint the `tutorial`
>   redirect** — **DONE (2026-07-31).** See the "hub plan" `[x]` bullets below.
> - Decide on a **`FAQPage` schema** mechanism for blog posts (layout injects
>   `BlogPosting` only today).

- [x] "**Best Discord poll bots**" — **SHIPPED (commit `91bae44`, 2026-07-30).**
      `best-discord-poll-bots.md`, honest 5-way comparison (native, Simple Poll, MEE6,
      EasyPoll, Subo) targeting the ~2,700 imp/6mo poll-bot cluster. Frames EasyPoll +
      Subo as the two real contenders; keeps Subo's edge to the honest set (conditional
      rewards/action blocks, scoring, full surveys) + a longevity note. Interlinked into
      the poll cluster (2026-07-30). `/polls` page-level SEO for the same cluster **DONE
      (2026-07-31)** — see the RESUME HERE block.
- [x] "**Discord native polls vs Subo**" comparison — **REFRESHED (2026-07-30).** The
      Apr-2024 post (a top-5 organic page, ~135 sessions/6mo) rewritten to 2026: house
      style (killed em dashes + boast/robust/elevate + flowery both-sides conclusion),
      current product facts (3 privacy modes anon-by-default, action blocks, scoring, skip
      logic, AI summaries, web app/API, free tier), reframed native polls as 2-yr
      established (not "uncertain first iteration"), **replaced the stale image feature
      table with a crawlable markdown table** (GEO win). Bumped `pubDate`/`updatedDate`.
      **Poll cluster now interlinked** (was orphaned): comparison ↔ best-poll-bots ↔
      how-to ↔ /polls ↔ anonymous-surveys guide. `/polls` outro got a 2nd blog link
      (added optional `blogLink2` to the data model). **New "poll toolkit" hero**
      (`subo-poll-toolkit.webp`, "GO PRO" neon) replaced the old vs-image; toolkit
      metaphor added to the `mascot-illustration` skill canon. Live on `main` (commits
      `d28af16` + `2fb8a8f`).
- [x] "**[Competitor] alternative**" pages — **EasyPoll + Simple Poll SHIPPED (2026-07-31).**
      Honest alternative-intent pages (`easypoll-alternative.md`, `simple-poll-alternative.md`),
      interlinked into the poll cluster with reciprocal links from best-poll-bots. Introduced the
      reusable **alternative-series hero template**: one shared base illustration
      (`alt-hero-base.webp`, Subo as investigative journalist, reserved dark left third) + a live
      `heroHeadline` text overlay via a new optional blog frontmatter field + `BlogPost.astro`
      overlay. Documented in the `mascot-illustration` (alt-series mode) + `blog-writing` (alt-series
      post conventions) skills. **MEE6 skipped on purpose** (its "alternative" intent wants a full
      mod/leveling bot, a mismatch for Subo). native-Discord-polls stays covered by the refreshed
      comparison.
- [ ] "**How to create a Discord poll / survey**" (with and without a bot) — capture how-to intent (some of this exists; expand + interlink)
- [ ] "**Anonymous surveys in Discord**" (exists — keep fresh, add FAQ schema).
      Target the informational cluster that already ranks well: `are discord polls
      anonymous` (355 imp @ 5.2), `discord anonymous poll` (307 @ 6.9) + variants.
- [~] "**Discord survey / form — without the word 'bot'**" ⭐ **FIRST WAVE SHIPPED
      (2026-08-01, commit `320d25f`; see RESUME block):** action (a) done via the
      `how-to-make-a-discord-form` blog post; action (b) partially done via the
      `/survey-convos` retune. **Remaining:** more "app"/"form" vocabulary across *other*
      existing pages' titles/H2s, FR `/survey-convos`, standalone `/draft` page.
      Original rationale (keep for context): **untapped intent, and
      absent from our keyword history precisely because we've only ever framed as a
      'bot'** (see the circularity principle). Many admins who want to collect data from
      their community don't think "bot" — they search *discord form*, *discord survey
      app*, *google forms for discord*, *collect responses in discord*, *discord
      questionnaire*, *typeform alternative for discord*. And **Discord itself rebranded
      bots → "apps"** in-product, so the "app" vocabulary is now *correct*, not loose.
      Actions: (a) a landing/blog page on the no-"bot" + "app"/"form" framings,
      interlinked with the existing **/use-cases/get-things-done** ("forms, reinvented")
      page; (b) work the "app"/"form" vocabulary into titles/H2s/copy on existing pages
      so we're eligible at all. Pairs with the homepage messaging-evolution backlog item.
- [x] **`FAQPage` schema for blog posts — MECHANISM SHIPPED (2026-08-05).** Optional
      `faq: [{q, a}]` field on the blog collection (`content.config.ts`);
      `BlogPost.astro` now emits `[BlogPosting, FAQPage]` instead of a bare
      `BlogPosting`, and **renders the Q&A visibly** at the end of the post. Visible
      rendering is required, not decorative: Google's guidelines say FAQ markup must
      match on-page content, and for GEO the visible Q&A is the thing that actually gets
      quoted. Answers accept inline HTML for links; it is stripped for the JSON-LD.
      Posts without the field are byte-for-byte unchanged (verified). **Backfilled on
      eight posts, 35 questions total**, taken from the Search Console clusters above:
      anonymous-surveys (5 Qs: *are discord polls anonymous*, *can you make discord polls
      anonymous*, default mode, duplicate-blocking, the rewards/anonymity trade-off),
      native-polls comparison (5: *do discord polls show who voted*, option/character
      caps, duration, native anonymity, do-I-still-need-a-bot), best-poll-bots (4),
      how-to-make-a-discord-form (4: *discord form*, *google forms for discord*, web
      mode), **poll how-to (5: *how to create a poll in discord*, without-a-bot, option
      limits, anonymous polls, the three ways to start one), survey how-to (4:
      poll-vs-survey, Discord-vs-web-app, free tier), easypoll-alternative (4),
      simple-poll-alternative (4)** — the last four added 2026-08-05 once the user
      confirmed the two how-tos were finished. All eight validated by parsing the built
      JSON-LD (question counts, exactly one visible FAQ section each, HTML correctly
      stripped from answer text). Clean `npm run build`.
      **Ninth post added on publish (2026-08-05):**
      `subo-vs-google-forms-typeform-discord-communities.md` was skipped in the backfill
      while it was `draft: true` (schema on an unpublished post renders nowhere); it
      shipped in `ce696ca` with its own 6 questions and its em dashes cleared, so that
      caveat is closed.
      **Same mechanism now closes the open FAQ-schema items in the tutorials-hub and P7
      sections** for anything rendered through `BlogPost.astro`; page-level Astro routes
      (`/tutorials`, `/templates/*`) still build their own, as `/api` and
      `TemplatePage.astro` already do.
- [x] **Survey-design recipes on-domain (`subo.gg/recipes`) — SHIPPED (2026-08-06,
      `0d361cc`).** The ten recipes were only ever served as raw markdown from
      `api.subo.ai/v1/recipes`, so all the authority they earned went to the **old
      registrable domain**; linking them from `llms.txt` (`e823b32`) increased that flow
      rather than fixing it. Now a real `recipes` content collection: a `/recipes` hub
      grouped by the same three dimensions `/templates` uses, plus `/recipes/[slug]`
      carrying **`TechArticle` + `BreadcrumbList` + `FAQPage`**, with **41 FAQ questions**
      written against intent our bot-framed history is blind to (*discord welcome quiz*,
      *moderator application form*, *discord trivia quiz with XP*, *prediction contest*).
      Same visible-Q&A contract as blog and templates.
      **It also wired the templates ↔ recipes pair the templates schema already
      anticipated.** `templates.recipeUrl` (documented in `content.config.ts` as the
      "developer walkthrough twin") pointed **all 17** template pages at a generic
      `api.subo.ai/docs` placeholder, behind a button labelled *"Read the walkthrough"*
      that actually landed on the Scalar reference. Eight now point at their specific
      recipe, the rest at the hub, and on-domain ones stopped opening in a new tab.
      `onboarding-certification` had no `recipeUrl` at all and gained one.
      **The port was editorial, not a copy:** 144 prose em dashes cleared per the
      `blog-writing` skill (**code fences deliberately left alone** — inside the ASCII
      flow diagrams an em dash is one column of box art, and the JSON payloads are kept
      verbatim against the app repo), 13 range en dashes to hyphens, sibling links
      rewritten to `/recipes/*`, and repo-internal references dropped (Bruno collections,
      `progress.md`, `PROJECT_PLAN.md` — all of which had no public URL). Stale **"Phase 6
      scoring will support this"** roadmap language rewritten to present tense, since
      scoring shipped and other recipes in the same set use it.
      `llms.txt` now names `subo.gg/recipes` canonical and keeps the API markdown
      endpoints as an explicitly **non-canonical** agent convenience. Nav: Recipes added to
      the header Resources dropdown and the footer Product section.
      **Verified:** clean build; 41 FAQ questions parsed back out of the built JSON-LD with
      visible-count parity on all ten; **2,563 internal hrefs link-checked, zero broken and
      zero relative leftovers** (this check is what caught eight repo-relative links the
      port script missed); all 11 pages in the sitemap.
      **Open follow-ups:** the app host still serves its own markdown copy at
      `api.subo.ai/v1/recipes/{slug}`, so the two are **duplicate content across domains**
      until the app side either 301s those to `subo.gg/recipes/*` or sends a
      `Link: <…>; rel="canonical"` header. `llms.txt` states the canonical, which is the
      cheap half of the fix. Not localized (EN-only, same call as `/api` and `/tutorials`).
- [x] **Interlink: content → templates → recipes → pricing — DONE (2026-08-07, `6ebad15`).**
      The oldest unchecked P2 bullet. Measured before touching anything: of 23 published
      posts, **`/templates` appeared in 6, `/pricing` in 6, and `/recipes` in zero** (the
      ten pages shipped the day before had no inbound blog links at all). Now **18 / 13 /
      16**, and **every published post carries at least one internal link** (five had none).
      Links were placed where a post already described the thing in prose, not bolted on as
      a CTA row: the scoring post already walked through the Hogwarts argmax build and a
      pre/post design, action-blocks already listed three recipes' worth of examples, the
      cloning post already explained the mechanism that makes a two-wave assessment
      comparable.
      **Four broken or wrong links found on the way, none of them cosmetic:**
      - `public-api-launch` documented **two API paths that 404**: `GET /v1/projects/{id}/responses`
        and `POST /v1/generate` were both missing the `/communities/{communityId}` prefix.
        This is **exactly the bug fixed in `llms.txt` on 2026-08-04**, sitting in a
        published post the whole time. Corrected against `api-surface.json`. Same post
        still pointed agents at `api.subo.ai/llms.txt`; now the subo.gg canonical. *(The
        `check:api` guard does not read blog prose, so this class stays human-caught.)*
      - `dawn-of-convos` had `[Discord server]("../../support")`, quotes inside the href.
      - `subo-template-library-launch` linked `/app/templates`, an on-domain 404 (the web
        app route is `app.subo.gg/app/templates`).
      - **18 blog-to-blog links used `../slug`**, which only resolved because blog URLs
        carry a trailing slash. All rewritten to absolute `/blog/` paths, matching the
        "zero relative leftovers" standard the recipes port set.
      **House style:** 41 em dashes cleared across the 9 posts touched. Only
      `discord-survey-clyde-mysterious-disappearance` still has 5 (a 2023 PR-style research
      post using them as heading separators; left alone since nothing else in it changed).
      **Verified:** `check:api` OK, clean build, `tsc` + wrangler dry-run clean, and
      **7,487 internal hrefs link-checked with zero broken links and zero missing anchors**
      (this is what caught the `/app/templates` 404).
- [x] **Templates → recipes buttons were lying — FIXED (2026-08-07, same commit).** Found
      by the user: template pages rendered a button labelled **"Read the walkthrough"** that
      landed on the `/recipes` **index**, not a walkthrough. Nine did that and five had no
      button at all. **None of those 14 has a genuine recipe twin** among the ten (there is
      no bug-report, suggestion-box or this-or-that recipe), so remapping was not the fix.
      What shipped: `TemplatePage.astro` now derives the label from the URL shape, so only a
      real `/recipes/<slug>` says "Read the walkthrough" and everything else says **"Browse
      survey recipes"**; the hub's three dimension sections gained `id` anchors and the 14
      point at their own group (`/recipes#engage` etc.). **All 22 templates now route into
      `/recipes`**, 8 to a specific walkthrough.
      **One pairing was outright wrong:** `lore-trivia-quiz` (a graded right/wrong quiz with
      an achievement on pass) pointed at the **Sorting Hat recipe, which explicitly has no
      correct answers**. Repointed to `world-capitals-quiz`, whose `templateSlugs` already
      claimed it. `hogwarts-house-sorting-quiz.templateSlugs` emptied, since no
      personality-quiz template exists and the section promises the template "sets up the
      same thing."
      **Schema comment corrected too:** `recipes.templateSlugs` was documented as "the
      templates whose `recipeUrl` points here," which the data never satisfied. The relation
      is many-to-many and not the inverse of `templates.recipeUrl` (one recipe serves several
      templates; each template's button picks one best twin). Now says so, with an
      instruction to leave it empty rather than reach for a loose match.
- [x] **FR poll + form retune (`/fr/polls`, `/fr/survey-convos`) — DONE (2026-08-11).**
      Item (l). The keyword intel has flagged `sondage discord` (**756 imp @ pos 8.5**, a
      top-5 non-branded term overall) as an underexploited market since 2026-07-29, and the
      FR `/survey-convos` retune has sat on the "remaining" list since 2026-08-01. Both FR
      pages turned out to be running the **pre-retune EN copy**: the EN `/polls` tune
      (2026-07-31) and the EN `/survey-convos` tune (2026-08-01) were never mirrored, so
      French had the old structure in both places.
      **`/fr/polls`** — the money term "bot de sondage Discord" was only in the `pageTitle`.
      Woven into the `pageDescription` ("Subo est le bot de sondage Discord qui…"), the
      **H1** ("Le bot de sondage Discord qui note, évalue et récompense", was "Des sondages
      Discord qui…") and the hero subtitle. The four feature-framed section headings were
      left alone, same no-stuffing call the EN page made. The outro carried **one** blog
      link where EN carries three; `blogLink2` (native-polls comparison) and `blogLink3`
      (best-poll-bots) added, and `fr/polls.astro` gained the same conditional render the EN
      page has had since 2026-07-31 (it never got the `blogLink2`/`blogLink3` blocks, so
      adding keys alone would have rendered nothing).
      **`/fr/survey-convos`** — closed the same form-intent eligibility gap the EN page
      closed: `pageTitle` ("Formulaire et sondage Discord, réinventés en conversation"),
      `pageDescription` (formulaire / questionnaire / candidatures / alternative à Google
      Forms / web), **H1 → "Le formulaire Discord qui ressemble à une conversation"** (was
      "Des enquêtes qui ressemblent à des conversations", which never said *formulaire*),
      one added `whatBody` sentence catching the formulaire/questionnaire/Google-Forms
      searcher, and the walkthrough link to `how-to-make-a-discord-form`.
      **Honest limit, worth stating:** all four of those outbound links go to **English**
      posts, because there is no French blog. Each is now marked "(en anglais)" rather than
      dropping a French reader into English unannounced. **The real FR gap is still open:**
      the blog collection has no locale field and `src/pages/blog/` has no FR route, so
      French how-to content has nowhere to live. That is infrastructure, not copy, and it is
      the thing standing between us and actually winning `sondage discord`. Decide it
      separately.
      **Verified:** clean `npm run build`; FR title/description/H1 and all three outro links
      confirmed in `dist/fr/polls/` and `dist/fr/survey-convos/`.
- [x] **Prose audit of `/api`, `llms.txt`, `/recipes`, `/templates` — DONE (2026-08-11).**
      Item (k), the deliberate read of the surfaces the link checker cannot judge. Read
      against the app repo's **`master`**, not the working tree, which matters here: the app
      was checked out on an unmerged branch (see the scale-blocks note in P7). Most of the
      corpus held up. Verified true and left alone: `max_blocks` 5/20, `per_page` 20/100,
      the response shape, the retry schedule (30s/5m/30m/2h/8h) and 10s timeout, the
      `sbo_live_` prefix, idempotency semantics, the three audience combinations, the
      template deep-clone list, `response.submitted` being paid-tier, and every block type
      and `action_kind` in all ten recipes.
      **Four false statements found, each behind a URL that resolves.**
      1. **`/api` claimed privacy modes redact the responses endpoint. They do not.** The
         bullet read "in anonymous mode the answers still come back, but they are not
         attributable to a member." `routes/responses.py` contains **no privacy handling at
         all**: it returns `user_id`, `platform_id` (the raw Discord snowflake) and
         `session_number` on every project regardless of `privacy_mode`, and accepts
         `user_id` / `platform_id` **filters**. The `response.submitted` webhook payload
         (`surveyEvents.py`) carries the same fields, also unguarded. Anonymity in Subo is
         enforced **at read time, per surface**: the XLSX export blanks id/name/session/nick
         (`exportResultFileCommandHandler.py`, `web2/app.py`), `ResponsesTab.tsx` hides the
         identity header and skips the member fetch, and Discord result summaries render
         `anon{n}`. The public API is the one surface that never got that treatment.
         Rewritten to say so plainly, with the same note added to `llms.txt`.
         **This is a product decision, not just a copy fix** — the honest options are to
         redact API-side (matching every other surface) or to keep the behavior and keep
         documenting it. Flagged for the app repo; the site now states the truth either way.
      2. **`llms.txt` sent developers to a settings page that does not exist.** "Generate
         keys in Community Settings → Developer → API Keys" — wrong on both hops. The UI is
         `pages/Account.tsx`, tab **Community account**, section **API Access**. `/api` had
         it right, so the two on-domain surfaces disagreed and one was unusable.
      3. **`llms.txt` advertised a `yes/no` block type the API rejects.** Listed twice as
         part of the script system. `YesNo` is real *inside the bot* (`QuestionTypes.YesNo`,
         the `/survey` command type the blog documents correctly), but `schemas/script.py`
         maps it **outward** to `single_punch` and there is no `yes_no` public type: an agent
         sending one gets `400 Unknown block type`. Same failure class as the wrong endpoint
         paths fixed on 2026-08-04, in the same file, whose only audience is agents.
      4. **`event-prediction-contest.md` was the last page carrying the stale privacy
         default**, and reversed the XP fact in the same sentence: "XP needs a member
         profile, so fully anonymous mode isn't compatible with the reward. The default
         semi-private mode…". Both halves were corrected sitewide on 2026-07-28 (default is
         **Anonymous**; rewards **do** work there because respondents are authenticated) —
         every blog post says so, this one template page did not. Rewritten, including the
         real nuance (paying out XP reveals who *scored*, which narrows the picks on a small
         contest). The one place anonymity genuinely does disable XP is **open-web link
         mode**, where `setupCommands.py` forces anonymous and sets `useXP = False`; that is
         about unauthenticated respondents, not about the privacy mode.
      **Verified:** clean `npm run build`; all four fixes confirmed in `dist/` (the template
      answer in the built `FAQPage` JSON-LD and the visible Q&A, the `/api` bullet, the three
      `llms.txt` lines).
      **Noted, not changed:** `llms.txt` carries 15 em dashes in its `**Term** — definition`
      list formatting. It is agent-facing rather than marketing copy, so whether the house
      rule reaches it is a call worth making once rather than drifting into.
      **Method note worth keeping:** all four errors were *plausible* sentences. Three of them
      restated a fact that is true somewhere else in the product (yes/no is a real bot question
      type; XP-and-anonymity really do conflict, but in open-web mode; identity really is
      masked, but only on the surfaces that implement it) and became false when carried into a
      context where it does not hold. That is the shape to look for, and it is why the guard
      cannot catch it: every name and number involved is correct.

### Make the Public API discoverable to AI agents (GEO/AEO for developers)

New angle (2026-07-29): buyers increasingly ask an LLM/agent to "add a survey bot to
my Discord" or to wire one up programmatically, so the **citable, agent-usable surface
matters as much as human-facing pages.** We already have `llms.txt` + the API; feed the
agent path deliberately.

- [x] **On-domain, crawlable API recipes — SHIPPED (2026-08-04).** `src/pages/api.astro`
      → **`subo.gg/api`**, a static quickstart + seven end-to-end recipes written against
      the real `web2/public_api` source (not the announcement post): AI script generation
      via `intent`, hand-written scripts + skip logic, opening to a Discord/web/open-web
      audience, paginated responses, AI analysis, **webhook signature verification with a
      working Node snippet**, template cloning. Plus crawlable reference tables (block
      types, privacy modes, per-tier rate limits, error codes) and a 6-question FAQ.
      Schema: **`TechArticle` + `FAQPage`** (first `FAQPage` on the site — the pattern the
      open schema-gap items below can copy). EN-only and outside the translations file on
      purpose, same call as the `/tutorials` hub (it is code samples, not marketing copy).
      Interlinked: homepage `DeveloperAPI.astro` got an "API Quickstart" primary CTA
      (conditional on a new `ctaGuide` key so un-translated locales keep the old two
      buttons), footer Resources now lists **API Quickstart (on-domain)** + API Reference,
      and the page links out to `/templates`, `/templates.json`, `/tutorials`, `/pricing`,
      `/llms.txt`. The Scalar UI stays the exhaustive field-level reference; this is the
      quotable surface. **Also de-risks the `api.subo.gg` move** — the canonical
      human/agent entry point is now on subo.gg regardless of where Scalar ends up.
- [x] **Point `llms.txt` explicitly at the API — DONE (2026-08-04).** Added the
      `subo.gg/api` link as the *first* Docs entry and appended block types, privacy
      modes and the error table to the footer facts.
      **⚠️ Fixed a real bug while doing it:** the "Most Useful Endpoints for AI Agents"
      block had **wrong paths** — script/open/responses/analysis were listed as
      `/projects/{projectId}/…` when every one of them is nested under
      `/communities/{communityId}/projects/{projectId}/…`. An agent following `llms.txt`
      would have built 404-ing requests. All paths corrected against the route table,
      plus a note to resolve `{communityId}` via `GET /communities` first, the real
      audience combinations, the full webhook event list, signature header format, retry
      schedule, and a template-clone entry.
- [x] **Keep `/api` from rotting — DONE (2026-08-04).** The page mirrors a surface in
      another repo, which is the classic setup for silent decay. Three layers, weakest
      last:
      1. **Automated guard.** `scripts/check-api-drift.mjs` (`npm run check:api`, wired
         into `npm run check`) re-derives routes, block types, privacy modes, webhook
         events/headers, tier limits, the signature scheme and the retry schedule from the
         app repo's Python and fails if `src/data/api-surface.json` disagrees. The page's
         reference tables now **render from that JSON**, so the checked data and the
         published page cannot diverge. Verified by inducing six kinds of drift and
         confirming each was caught. Skips cleanly (exit 0) when the app repo isn't
         checked out.
      2. **Edit-time reminder.** `subo/web2/public_api/CLAUDE.md` — a directory-level
         CLAUDE.md loads when a session touches files there, so it fires while someone is
         editing a route, not at session start when it would be forgotten.
      3. **Release handoff.** The `release-brief` template gained an **API surface changes
         to mirror on the site** section, aimed squarely at what the guard can't catch.
      **Known limit:** the guard verifies names and numbers, never whether the prose is
      still true. A field that keeps its name and changes its meaning gets through all
      three layers unless a human says so — which is why layer 3 asks for it explicitly.
- [ ] **MCP server = the agent-era "directory" play.** The app's master roadmap has a
      standing **Subo MCP server** (agent-orchestration track). When it ships, list it
      in the emerging **MCP registries/directories** and give it a spoke landing page —
      P1's "bot directories" logic, applied to the agent ecosystem.
- [~] **Migrate API docs onto subo.gg — RESOLVED as "don't, not this way" (2026-08-04).**
      Analysed on the user's question of whether `subo.gg/api` makes the domain move moot.
      **It largely does, and the move was framed wrong.**
      - **This is an API *host* migration, not a docs migration.** `api.subo.ai` serves
        `/docs` *and* `/v1/*`, the live endpoint integrators have hardcoded. 301-ing
        authenticated API traffic is genuinely risky: many HTTP clients don't replay
        request bodies across a redirect and several drop custom headers like `X-API-Key`
        on a cross-host hop. Real breakage for paying integrators.
      - **SEO gain is ~zero.** The Scalar UI is a JS shell (a `data-url` attribute + a CDN
        script). It can't rank or be cited on *any* domain, so moving it between domains
        changes nothing about indexability.
      - **Recommended instead:** leave `api.subo.ai/v1` serving indefinitely as a
        compatibility surface; if the new domain is wanted, add **`api.subo.gg` as an
        alias, never a replacement** (both live, document subo.gg for new integrations, no
        redirect); and **move the docs without moving the host** — `/openapi.json` already
        sends `Access-Control-Allow-Origin: *`, so a Scalar page hosted on subo.gg pointing
        at the existing spec URL works today and puts 100% of docs on-domain.
      - Priority: below the robots.txt fix and below P5 outreach.
- [ ] **Loose ends found on `api.subo.ai` while analysing the above (2026-08-04):**
      - [x] **A second, divergent `llms.txt` — FIXED IN THE APP REPO (2026-08-05), awaiting
        deploy.** `_LLMS_TXT` in `web2/public_api/docs.py` cut from ~300 lines to a short
        stub (461 → 190 lines in the file) that points at `https://subo.gg/llms.txt` as
        canonical and keeps only genuinely host-local facts: the API base URL, the
        `X-API-Key` rule, the string-IDs note, and links to `/docs`, the OpenAPI spec and
        `subo.gg/api`. Also **repointed `openapi_spec.py`**, whose "For AI agents" line
        sent agents to the old `api.subo.ai/llms.txt`, and recorded the decision in
        `web2/public_api/CLAUDE.md` with a **"do not grow it back"** note so the next
        person adds agent prose to subo-site instead. `docs.py` verified to parse.
        **The stub deliberately does NOT advertise `/v1/recipes/{slug}`** (still 404s in
        production, re-confirmed 2026-08-05 — see the bullet below), so it no longer
        points agents at dead URLs. Ships on the user's next app deploy; verify after with
        `curl -s https://api.subo.ai/llms.txt`.
        Original diagnosis, for context:
        `api.subo.ai/llms.txt` returns **200** with content that disagrees with
        `subo.gg/llms.txt`, including `Base URLs → Production: https://api.subo.ai`. Two
        `llms.txt` for one entity, disagreeing on the canonical domain, is the same
        split-brain the entity-consistency work exists to kill — and it now matters more,
        since the AI crawlers that were blocked until 2026-08-04 are about to read both
        for the first time. Served from `_LLMS_TXT` in `web2/public_api/docs.py`.
        Consolidate: cut the API one to a minimal stub pointing at `subo.gg/llms.txt`.
        **App-repo edit (edit-only from here; ships on the user's deploy cycle), which is
        why it does not gate site-side work.** Next in line after the FAQ injector.
      - [x] **`/v1/recipes/{slug}` 404 — FIXED AND VERIFIED LIVE (2026-08-05).** The index
        returned 200 listing slugs while every slug 404'd, so agents following it hit a
        wall. Diagnosis held: the handler resolved to the repo-root `docs/recipes/`, which
        the deploy didn't ship. Fixed app-side in `f169287e` (`upgrade.sh` now rsyncs the
        directory; `_RECIPES_DIR` uses `realpath` so both sides of the containment check
        agree; the whitelist grew from 4 to all 10 recipes).
        **Verified on prod:** index lists 10, all 10 slugs return 200 with real
        `text/markdown` (9–21KB each). *Note for future diagnosis:* the first index call
        after the deploy still returned the old 4 while slugs already served 200. That was
        a mid-rollout race, not a cache (`cf-cache-status: DYNAMIC` on both); repeated
        calls settled at 10. Worth re-testing rather than theorising if it recurs.
      - [x] **The 10-file recipe corpus is now linked from `llms.txt` (2026-08-05).** All
        ten (welcome quiz, volunteer/moderator funnel, event RSVP streaks, playtester
        selection, hogwarts sorting, member segmentation, study quiz, world capitals,
        prediction poll, pre/post assessment) are listed with one-line mechanism summaries
        under a new **Recipes** section, plus the index/slug endpoints and a footer line.
        Held back until the 404s were fixed, on the principle that pointing agents at dead
        URLs is worse than not linking them. Every URL in `llms.txt` was link-checked after
        the edit: 24 real URLs, all resolving.
        These are survey-*design* recipes, so they don't overlap `/api`'s API-mechanics
        recipes — `llms.txt` now says so explicitly, to route agents to the right one.
      - [x] **The corpus is now ON-DOMAIN — SHIPPED (2026-08-06, `0d361cc`).** See the
        `/recipes` bullet immediately below; this closes the authority leak noted here.

### Bring the public Tutorials on-domain (off Notion)

Until 2026-07-31, `subo.gg/tutorial` 302-redirected straight to `suboai.notion.site`
(now it redirects to the on-domain `/tutorials` hub — see below). That was building
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
        yet). **UPDATE (2026-07-28): both guides are now `draft:false` and live** —
        see the RESUME HERE block for the publish + product-fact corrections. All
        blog edits follow the `blog-writing` skill (no em dashes + anti-AI-tell rules).
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

- [x] **Build an on-domain `subo.gg/tutorials` hub — DONE (2026-07-31).**
      `src/pages/tutorials/index.astro` (modeled on `templates/index.astro`:
      Header/Footer/CTA, hero, curated card sections, `CollectionPage` + `ItemList`
      JSON-LD). **`tutorial` redirect repointed** off Notion → `subo.gg/tutorials`
      in `redirects.js`, so legacy/external `/tutorial` links now land on the hub
      (still tracked via the redirect interstitial). Nav updated: header Resources
      dropdown + footer "Tutorials" now point at `/tutorials` directly (footer
      `external` flag dropped) in `en.json`. Other-language nav still uses `/tutorial`
      → redirects to the hub (fine; hub not localized yet). Clean `npm run build`.
      The hub is deliberately **curated, not auto-generated** from the blog
      collection — only the Bucket-A how-tos are featured.
- [x] **Route links by bucket — DONE.** Search-intent how-tos → on-domain blog
      posts (Start here: survey + poll; Guides: anonymous, AI summaries, skip logic;
      Compare & choose: native-polls comparison + best-poll-bots). Operational docs →
      out to Notion (`target="_blank"`): "All commands" → Notion Tutorials index,
      plus Permissions + XP via their tracked redirects. As each Bucket-B doc
      migrates on-domain, swap its link Notion → on-domain, no re-architecture.
- [x] **Lead with the Web App — DONE.** The "Start here" section opens by pointing
      at the web app (`/app`) as the easiest path, then the two core how-tos (which
      cover both the web-app builder and the Discord `/survey` `/poll` commands).
      NB: standalone on-domain Web App how-tos don't exist yet (the 8 Notion drafts
      are still unpublished), so the hub links to the app itself, not a guide.
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

- [~] **Get Subo into third-party "best Discord bots" / "must-have bots" roundups —
      IN PROGRESS (kit built 2026-08-03).** Subo is a **4-year-old, established niche
      utility** — it belongs in listicles like communityone.io's best-Discord-bots
      roundups (and "best Discord poll/survey bots", "must-have bots for your server",
      category roundups). These already rank for the high-intent discovery queries our own
      comparison page targets, so inclusion = an **editorial backlink + referral traffic
      without writing the page ourselves** — and it's **not migration-gated**. Distinct
      from the P2 "Best Discord poll bots" page — that's *our* asset; this is getting into
      *theirs*.
      - **[roundup-outreach-kit.md](roundup-outreach-kit.md)** built: tiered target list
        (research 2026-08-03), pitch templates A/B/C, ready-to-paste Subo entry.
      - **Subo is ALREADY in CommunityOne** (added 2026-07-09) — but under "Fun bots" with
        a thin blurb. Warm lead = reclassify to polls/surveys/engagement + get into their
        leveling/AI sub-roundups (template C). P5 is validated by this alone.
      - **Sending is the user's step.** Tier 1 first (CommunityOne → Stickers.gg →
        Space-node → BotGhost), then Tier 2 (Beebom, Rumie). Track in the kit; feed live
        placements' `$referring_domain` into the P0 funnel breakdown.
      - **Skipping** competitor vendor blogs (EasyPoll/PeakBot/PollBotPlus/Formeer/Votex)
        and AI content farms (Skywork, npprteam) — no value / won't feature a rival.
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

## P7 — Survey templates as an SEO surface  (product-gated, cross-repo)

New **survey templates** in the marketing site's `/templates/` section (and their
counterparts in the web app) are dual-purpose: real product value *and* a set of
indexable, high-intent landing pages — each template is a query-matching page
("customer feedback survey template", "gaming community poll template", etc.) that
slots into the P2 content → templates → pricing internal-link cluster.

**Gated on the web app roadmap** (`~/.claude/plans/master-roadmap-2026-h2.md`):

> **⭐⭐ Status (2026-08-14): SHIPPED TO PRODUCTION, brief 1 landed, and the site-side plan
> now lives in its own section — [SCALE-FAMILY LAUNCH](#-scale-family-launch--cross-cutting-site-plan-opened-2026-08-14),
> directly below.** Everything in the 2026-08-12 note beneath is superseded on status but
> kept for its reasoning. The standing "do not document the four block types until the brief
> lands" rule is **now satisfied and lifted**: the brief is
> `subo/docs/releases/2026-08-13-scale-family-blocks.md`. The guard note below is still
> correct about *why* `check:api` cannot tell "unreleased" from "undocumented" — the useful
> signal is the release-brief file, and it now exists. Template work runs as **Phase S2**
> against the app's conversion list (`subo/docs/template-library-plan.md` §14.1), which
> replaces the vaguer "rewrite the existing 22 templates" framing below: **only 9 of the 22
> convert**, and the plan says which and why the rest are deliberately left alone.
>
> **⭐ Status (2026-08-12): THE GATE HAS OPENED.** The scale family is **merged into app-repo
> `master`** (`8cb1ecfa`, `24ca387c`, `732de663`, `c81e1436`, `5eed9c18` — ranking on both
> surfaces, star ratings in Discord results, skip-logic parsing, and a `survey-authoring`
> skill update teaching the shipped family) and **deployed to Stage** (user). **Not yet in
> Production:** translations and a release brief are the remaining app-side work.
> **Standing rule still holds: do not document `rating` / `opinion_scale` / `nps` / `ranking`
> on the site until the release brief lands.** Nothing user-visible has shipped, and the site
> documenting a Stage-only feature is exactly the drift this section exists to prevent.
> **Agreed plan for when it does (user, 2026-08-12), and the order is the point:**
> 1. **Rewrite the existing 22 templates** to use the rating/scale question types. The
>    2026-07-29 constraint ("no new templates until rating-scale ships") was about not
>    building things you'd rebuild; read forward, it says fix the pre-scale-family set
>    *before* growing the library, or the rebuild debt just gets larger.
> 2. **Then build new templates**, with `/templates/*` landing pages + `FAQPage` schema.
> 3. Site-side companions that unlock in the same beat: `src/data/api-surface.json` + the
>    `/api` block-type table, and the `/recipes` ↔ `/templates` pairs for anything new.
>
> **Guard note, REVISED 2026-08-12 — the old advice now misleads.** The 2026-08-11 note said a
> red `check:api` means "the app repo is on a feature branch, not that the site is wrong," and
> told you to check `git -C ../subo branch --show-current`. That test now **passes while the
> red is real**: the app repo is on `master`, clean, and `master` itself carries the four block
> types. The script reads the app's **working tree**, so it cannot tell "unmerged branch" from
> "merged but unreleased" from "genuinely undocumented." The sharper question is **has a
> release brief landed in `subo/docs/releases/`** — that, not the branch name, is what
> separates "site is behind" from "site is correctly waiting." Two further wrinkles seen in the
> wild: app `master` was **18 commits ahead of unpushed `origin/master`**, so even `master` is
> not a reliable proxy for what is live; and Stage-deployed is not Production-deployed. If the
> script is ever taught to be smarter, the useful signal is the release-brief file, not the git
> ref.

- **~~Hard constraint (user, 2026-07-29): no new templates until the rating-scale feature
  ships.~~ SATISFIED 2026-08-12 (Stage), pending Production + release brief.** Rating scale
  was **FEAT scale-family blocks in Stage 3** of the master roadmap (rating / opinion-scale /
  NPS / dropdown / ranking — one schema investment, amortized over five block types).
  Building templates before those block types landed meant rebuilding them once the new
  question types existed. **That is now the argument for step 1 above:** the existing 22
  templates *are* the pre-scale-family set, so they get rewritten first. Kept here rather
  than deleted, because the constraint explains the ordering.
- The master roadmap already treats **template-library / SEO traffic as an input to
  Decision Point D1** (Stage 4, breadth-vs-depth) and wires templates into **GENAI
  Phase P** (engagement planner: "save to plan" on templates) and **GENAI Phase 1**
  (template seeds for generation). So this isn't marketing-side-only content — it's
  part of the app's own template/GenAI story. Coordinate with that plan; don't fork.

**When it unlocks (post Stage 3):** produce the new templates on both surfaces,
give each a proper `/templates/` landing page with `FAQPage` schema (same schema
gap as P2), localize the highest-intent ones per the P0/GA4 signal, and interlink
to pricing.

**Success metric:** template pages ranking for "[use-case] survey/poll template"
queries; template → pricing funnel visible in PostHog.

---

## ⭐ SCALE-FAMILY LAUNCH — cross-cutting site plan (opened 2026-08-14)

The biggest question-type expansion since launch shipped to production 2026-08-13:
**Rating, Opinion Scale, NPS, Ranking**, on Discord and web, in the builder, the API,
reports and downloads. This section is the site-side plan and the progress log. It cuts
across P1 (directories), P2 (blog), P4/P5 (channels) and P7 (templates), so it lives in
one place rather than being scattered through them.

**Source of truth: the release brief**, `subo/docs/releases/2026-08-13-scale-family-blocks.md`.
It is now **version 2 of 2** (2026-08-16), updated in place rather than accompanied by a
second file, and self-contained: feature names, value prop, admin/respondent/report/API
changes, a **Not in this release** accuracy list, the exact `api-surface.json` entries, five
worked payloads, eighteen described screenshots, terminology, four post angles, and a
**Templates** section covering the nine conversions plus the three new step-7 templates.
**The announcement gate it carried is lifted.** Read the brief before writing any copy; do
not re-derive facts from the app source.

### Decisions taken (user, 2026-08-14)

| # | Decision | Consequence |
|---|---|---|
| L1 | **Ship API + site copy now; hold every announcement for brief 2.** | Phase S1 and S2 run immediately. Phase S3/S4 are gated. The feature is live-but-unannounced in the meantime, deliberately. |
| L2 | **Three posts: brief-1 Post 1 (launch) + Post 4 (ranking), then a template-led post on brief 2.** | Brief angles 2 and 3 (four-questions-by-job, NPS recipe) are **not** committed; NPS keyword intent gets served inside Post 1 and by the template page. Revisit after Post 1 performs. **AMENDED 2026-08-16, see L5.** |
| L5 | **AMENDS L2 (user, 2026-08-16). Hub plus three instrument spokes, and NPS is HELD.** Post 1 does double duty as the announcement *and* the permanent rating page (its title already leads on *Discord Rating Scales* and it owns the emoji/star material). Spokes, in order: **1. ranking**, **2. Likert carrying the grid answer**, **3. NPS, held until the promoter/detractor rollup ships**, at which point it becomes that feature's launch post. The three-benchmark (NPS/CSAT/CES) post drops to last and is treated as an internal-linking play, not a ranking one. | **Why NPS is held, and it is the reusable reasoning:** the page's whole value is owning *Discord NPS survey*, and what we ship today is the **instrument, not the metric** (average, median and distribution on a 0-10 scale, no `%promoters - %detractors`). A reader who searches that term wants the score. Ranking a page that then hands them a subtraction to do is worse than not ranking it, and it is a bad thing for an assistant to cite us for. There is **no land-grab pressure**: near-zero competition now and in three months, content ROI is migration-gated to ~Q4 anyway, so publishing at rollup costs almost no ranking timeline and **buys an announcement moment** a post published now would spend for nothing. Post 1's NPS section and FAQ catch the query cheaply and are accurate about the limit. **Ranking goes first for the inverse reason:** its reporting is the one that is *complete* (average rank, first-choice count, ranked count, unranked shown as a finding, one column per item in the export), so the post can promise the full loop and deliver it. |
| L6 | **No teasing rating or ranking polls** (user, 2026-08-16), until they are planned and designed. | Removed from Post 1 in both places it appeared (the polls FAQ answer and the closing line's "for now"). **This also kills a keyword:** the brief's *"rank options poll Discord"* target is unservable and comes off the ranking post's list. The poll-framed page is a **deferred slot**, and a valuable one, since polls are the site's biggest organic cluster (poll how-to 477 sessions vs survey how-to 141, plus the ~2,700 imp/6mo poll-bot cluster) and it is the one cluster this release cannot touch. |
| L2b | Both posts must **leave the "and there is a template for it" slot open** at the end, per the brief. | They are drafted after brief 2 anyway, so the slot gets filled rather than left. |
| L3 | **Update site template pages from the app repo's conversion batches as they land**, not from brief 2. | The conversion list is `subo/docs/template-library-plan.md` §14.1. Batch 1 and 2 are already done app-side and the site is already wrong about them (below). |
| L4 | **All four channels**: Discord `@Updates` post, `/changelog` entry, X thread, top.gg refresh. | All in Phase S4, all gated on the blog post existing to point at. |

**Two standing rules from the brief that bind every piece of copy here:**
- **No "Subo calculates your NPS score."** There is no promoter/passive/detractor rollup.
  "Ask the NPS question, read the distribution and the average" is true and enough.
- **Do not frame this as catching up to Google Forms or Typeform**, and **do not build a
  post around what we chose not to build**. The grid/matrix question gets answered only
  where a reader asks it, in the constructive form the brief supplies ("a grid is a
  layout, not a question").

---

### Phase S1 — API and site copy (UNBLOCKED, do now)

No announcement, no promise of templates. This is bringing the site's own factual surface
in line with production.

- [x] **S1.1 `src/data/api-surface.json` — four block types. DONE 2026-08-14.** The four
      entries added after `open_numeric` with the brief's `desc` strings. **`npm run
      check:api` is green**, and so is the full `npm run check` (build + tsc + wrangler
      dry-run). This was the only part of S1 the guard can see; S1.2 and S1.3 below are
      prose it explicitly does not verify.
- [x] **S1.2 `public/llms.txt` — DONE 2026-08-14.** Both lines the brief named: the
      block-type list (which claimed to be "the complete set the API accepts" and was
      wrong) and the "Rich Script System" sentence. **Two additions beyond the brief**,
      because this file's only audience is agents and the plan's third objective is that a
      caller recognizes the instrument without reading our docs twice: a *Key Features*
      bullet stating that the three scales store the picked integer (so analysis returns a
      real average, not option counts) and ranking stores one row per item with `value` =
      rank position; and a **`Scale family:` reference line** carrying the `min`/`max` vs
      `scale` object split, the `options[].value` = point-number rule, the three
      `answer_style` vocabularies and `rank_top_n`. Those are the four facts an agent gets
      wrong unprompted.
- [x] **S1.3 `src/pages/api.astro` — DONE 2026-08-14.** Three additions:
      - **A new recipe section, `#scales`** ("Rating, scale, NPS and ranking"), placed
        after *Write the script yourself* and added to the on-page TOC. Leads with the
        thing that makes the family different (the answer is a number), then: range is
        `min`/`max` and **not** in the `scale` object; **`options` means something new**
        (point number as a string, carrying that point's `emoji` or `label`; a plain star
        or number scale sends none); **all five worked payloads verbatim** from brief §5;
        anchors XOR per-point labels and why NPS refuses a custom range, custom anchors and
        a select menu; `rank_top_n` vs `max` and why `min`/`max` are ignored on update;
        `randomize_options` (400s on the scales, and the argument for turning it on for
        rankings is measurement bias, not cosmetics); and what comes back from
        `/responses` and `/analysis`, including that **lower `average_rank` is better** and
        must be read next to `ranked_count`.
      - **Two new reference tables**: ranges/defaults (brief §4) and **`answer_style` by
        block family**, with a rejected-with-400 column. Followed by the note naming the
        predictable confusion outright: **how a scale draws its points is `scale.icon`, not
        an answer style.**
      - **Three FAQ entries** (visible + `FAQPage` JSON-LD, since this page already carries
        that schema): how to create a rating or Likert scale; does the API support NPS
        (with the explicit "Subo does not compute a promoter/passive/detractor rollup", per
        the brief's standing rule); and **can I create a matrix or grid question**, in the
        brief's constructive framing. That last one is the highest-GEO placement available
        for the grid answer, and it is exactly the "where a reader asks it" the brief asked
        for. `pageDescription` now names rating, Likert, NPS and ranking.

      **Original scope of S1.3, kept as the record of what was covered:** the reference
      tables and the prose around them.
      Beyond the guard's reach and **worth a read, not a find-and-replace**, because a
      scale block is shaped unlike anything documented so far:
      - the block-type table gains four rows, plus the ranges/defaults table from brief §4;
      - **`options` means something new**: on a scale, `option.value` is the *point number
        as a string* and the option carries that point's `emoji` or `label`; a plain star
        or number scale has **no options at all**. Any prose saying "options are the
        answers a respondent picks" needs a scale caveat;
      - the new **`scale` object** (`icon`, `label_left`, `label_center`, `label_right`) —
        and the range is **not** in it, it is the block's `min`/`max`;
      - **`answer_style` now has three vocabularies** (choice / scale family / ranking).
        This is the easiest thing on the page to get wrong, and **"a scale's point
        rendering is `scale.icon`, not an answer style"** is the predictable confusion —
        say it explicitly;
      - **`rank_top_n`** (ranking only; `min`/`max` ignored on update so they cannot
        quietly rewrite it) and **`randomize_options`** (new via `1083ecd1`, 400s on the
        three scale types, and `anchor_position`'s description already referenced it so
        that copy can finally point at a real field);
      - the **400s a caller will actually hit**: anchors XOR per-point labels; NPS refuses
        a custom range, custom anchors and a select menu; ranking takes 2 to 20 items;
      - **analysis** gains a `ranking` array (`average_rank`, `first_choice_count`,
        `ranked_count`) — state in prose that **lower `average_rank` is better** and that
        it is computed only over respondents who ranked the item;
      - **responses**: a scale answer has `option_id: null` and `value` = the point number;
        a ranking writes **one row per ranked item**, `value` = the rank position;
      - the **five worked payloads** from brief §5 are lifted from the app's own authoring
        guidance and are known-correct. Use them verbatim.
- [x] **S1.4 Recipe correction — DONE 2026-08-14.** Audited all ten recipes for the
      pattern. **Exactly one carried it, and taught it explicitly**: `pre-post-assessment`
      had a section headed *"Attitude items (Likert-encoded as score_values)"* building a
      4-point agreement item as a `single_punch` with `score_values` 1 to 4. Every other
      `score_values` hit is legitimate and untouched (Hogwarts and member-segmentation
      distribute personality/segment points; the quizzes grade right/wrong). **The
      audit's own conclusion is the reusable part: `score_values` is not the smell — a
      1-to-N intensity ladder is.**
      The rewrite was more than a type swap, because the recipe's construct scores were
      *built out of* those weights:
      - attitude items are now `opinion_scale` with a label on every point, and the
        section names the two things that differ from a choice question (`option.value`
        is the point number, and a scale carries no `score_values` at all);
      - the construct score becomes a `calculated_block` averaging the items, a **mean on
        the scale's own 1.0-4.0 range** — the same move the app made converting its own
        templates in batch 1, and easier to read across waves than "9 out of 12";
      - the score-bucket prerequisites table splits into two kinds, because knowledge
        items legitimately keep `score_values` and attitude items no longer can;
      - **the low-to-high direction rule** is stated, with the consequence the app plan
        flagged: reverse-framed items need reverse-scoring in the formula (`5 - [Item]`),
        **not** a reversed label set, which would silently invert every average;
      - a dated note records what the recipe used to say, so a reader who built the old
        way is not left wondering;
      - **fixed in passing:** the recipe recommended a `button_list` block type, which
        **does not exist**. Its only occurrence on the site.
      The flow diagram, clone-comparability note, FAQ answers and description were all
      carrying the bucket vocabulary and were brought along; `updatedDate` set.
      **Pre-existing and not mine:** the build emits a `Duplicate id "pre-post-assessment"`
      glob-loader warning. Verified present on a clean tree before these edits.
      **✅ DIAGNOSED (2026-08-17, refined 08-18).** It was never a duplicate file. It is a
      **stale Astro content-layer cache**: the warning re-points itself at whichever entries
      were most recently added or edited (it named the two new scale-family posts, with only
      one file of each name on disk), and **`rm -rf node_modules/.astro` clears it**. It comes
      back on the next edit and goes away on the next clean build, so it is **cosmetic and
      recurring, not a defect to chase** — the built output was correct in both states
      (verified: one sitemap entry and one `/blog` card per post either way). Clear the cache
      before hunting a duplicate that is not there.
- [x] **S1.5 "4 question types" — FIXED IN ALL SIX LOCALES, 2026-08-14.** Now 8 question
      types and 11 block types. Three strings each in EN/FR/DE, two in ES/IT/PT-BR:
      `questionTypesSubtitle`, the `about` stats entry, and the `featuresPage` card that
      **enumerates** the types (so it needed the four names, not a new digit). The
      `questionTypesList` on `/survey-convos` gained Rating, Opinion Scale, NPS and
      Ranking in every locale.
      **Three things the fix surfaced that were not in the plan:**
      1. **Numeric's description said "numbers, ratings, or ranges" in all six
         languages.** With Rating shipping as its own type that reads as the wrong block,
         so Numeric is now described as a plain number.
      2. **ES, IT, PT-BR and DE were missing the Calculated Field entry entirely** and
         claimed **6** block types where EN claimed 7. Their lists had never been updated
         when calculated fields shipped. Adding it was required to make the corrected
         count true rather than newly inconsistent, so all four now list it.
      3. **ES/IT/PT-BR render none of this yet** — they are still homepage + pricing only,
         so their `surveyConvos` and `about` blocks are correct-but-unrendered. That is
         the same unspent Tier 1 trick the ES/IT/PT-BR routes item describes, and these
         edits mean those routes now ship accurate when someone creates them.
         **✅ Paid off for ES on 2026-08-24:** the routes were created and this fix shipped
         with them, so `/es/survey-convos` was accurate on its first build. Still unspent
         for IT and PT-BR.
      **✅ Names VERIFIED against the product catalog, 2026-08-14** (user supplied the
      path). Source: `Subo shared/Messages Translations/new-path/user_messages_all_2026-08-12.xlsx`,
      sheet `User Messages`, keys `Web_BlockType_*` and `QuestionType_enum_label_*`. **Keep
      that file in mind as the lookup for any future product noun on the site** — it is the
      merged archive of all nine languages and the only place outside the production DB
      where these strings exist.

      **Four of the five written guesses were wrong**, which retires the "low risk"
      reading of this drift class:
      | Type | Was written | Product actually says |
      |---|---|---|
      | Rating (FR) | *Notation* | **Évaluation** |
      | Ranking (DE) | *Rangfolge* | **Ranking** (German keeps the English word) |
      | Ranking (ES) | *Ranking* | **Clasificación** |
      | Ranking (PT-BR) | *Ranking* | **Classificação** |
      All four corrected, in the type list, the subtitle and the enumerating card alike.
      Italian was already right (*Valutazione / Scala di opinione / NPS / Classifica*), and
      **NPS is untranslated in all nine languages**, as assumed. Note the shape of the
      error: the two guesses that failed hardest were the ones where the *product* made
      the less obvious call, keeping an English loanword in German and refusing it in
      Spanish and Portuguese. That is not something a translator infers.

      **⚠️ Pre-existing drift the lookup exposed, NOT fixed here.** The site's names for
      the *older* block types were never checked against the catalog either, and at least
      one disagrees: German Single Choice is **"Einzelne Auswahl"** on the site and
      **"Einfachauswahl"** in the product. The English list has its own gaps (site
      "Numeric" vs product "Number Input"). Worth a pass over `questionTypesList` in all
      six locales against the same spreadsheet; out of scope for the scale-family work.
- [x] **S1.6 Where else to surface it — DONE 2026-08-24 in EN, FR and DE.** All three locales
      render `/features` and the three use-case pages, so each edit was made three times,
      **written in-language rather than translated flat**. Blog links in FR/DE carry the
      existing `(en anglais)` / `(auf Englisch)` marker, since the posts are English-only.
      What shipped:
      - **`/features`** — the skip-logic card now says a scale answer is a number and gives
        the NPS `<= 6` follow-up as the example; the question-types card links to Post 1; the
        custom-emoji card names rating scales; and a **new ANALYZE card, "Scores, averages and
        distributions"**. The last one is beyond the roadmap's literal wording and is the one
        worth keeping: the family's value lands in the *report*, not the builder, and ANALYZE
        had no card saying so.
      - **`/use-cases/research`** — new card **"Measure it, don't tally it"** in FROM ANSWERS
        TO INSIGHT (the number is stored, so a repeat run is comparable), linking Post 1, plus
        a `csat-satisfaction` example row.
      - **`/use-cases/get-things-done`** — new card **"Decide what comes first"** (ranking
        makes people order requests instead of approving all of them) linking Spoke 1, plus a
        `rank-your-favorites` example row.
      - **`/use-cases/engagement`** — one `rank-your-favorites` example row only. See the
        ruling below.
      - **`/survey-convos`** — one benefits line, as specified.
      - **`/polls`** — untouched. Verified in `dist/` for all three locales: no
        rating/ranking/scale/NPS. (`fr/polls` matches *classement* once, in pre-existing XP
        leaderboard copy, unrelated to the question type.)
      **Three user rulings on the first draft, all worth keeping:**
      1. **The Expression Editor tier sentence came off the skip-logic card** ("visual builder
         on every plan; VIP and Custom add an Expression Editor"), in all three locales, as too
         much for a card. Note this is the sentence added by finding (n) on 2026-08-12 to fix a
         false tier claim. **Nothing false is reintroduced** — the card no longer makes a tier
         claim at all — and the gate is still stated where it belongs, on the pricing table's
         `Advanced Expression Editor` row.
      2. **A "One-tap ratings" card was drafted for `/use-cases/engagement` and cut** as
         forced. The reasoning is the useful part and it is **L6 read forward**: the engagement
         page's spine is polls, the family is not in polls yet, so a rating card there is
         selling on the one page that cannot deliver it. **That page gets its copy when rating
         and ranking polls ship.**
      3. Custom emojis on rating scales are worth naming, so the emoji card says so.
      **Fixed in passing:** an em dash in the EN research examples ("what to build next — and
      why"), against house style.
      **✅ FOLLOW-ON, DONE 2026-08-24: FR and DE use-case examples now link to templates**
      (user's call, after the shape difference surfaced during the S1.6 pass). The EN example
      chips have always been `{ text, template }` objects rendering as links to
      `/templates/<slug>`; **FR and DE were plain strings and rendered as inert chips**, so
      three high-intent pages per locale sent nothing into the template library. Fixed at both
      ends:
      - **Six route files patched** (`src/pages/{fr,de}/use-cases/*.astro`) to the same
        dual-form renderer EN already had (`typeof ex === 'string'` falls back to a chip), plus
        the `.uc-example--link` style. **The EN renderer was already tolerant of both shapes**,
        which is why this was a copy-in rather than a redesign.
      - **All six arrays converted to objects.** **81 template links across the three locales,
        every slug verified against `src/content/templates/` and every built href verified to
        resolve in `dist/`.** Rows with no honest template match (RSVPs, ticket intake, meme
        brackets, Hogwarts, "how did you find us") stay unlinked chips rather than being
        pointed at an approximate template.
      - **Links go to the English `/templates/<slug>`**, per the user, since there is no
        localized template route. Same call as the `(en anglais)` / `(auf Englisch)` blog links.
      - **⚠️ Scope note: FR gained five example rows** to reach EN/DE parity, so this was not
        purely mechanical. Research gained roadmap-vote, playtest-feedback and exit-interview;
        get-things-done gained the governance vote and the availability poll. All five existed
        in EN and DE and had templates waiting; FR was the odd list out.
      **Original priority order, kept as the record:**
      1. **`/features`** — the question-types card above, plus the skip-logic card can now
         say a scale compares numerically (the merged skip-logic post already does).
      2. **`/use-cases/research`** — the research narrative is where NPS, Likert and
         "averages, not counts" belong. Strongest fit of the three pillars.
      3. **`/use-cases/get-things-done`** — ranking is a prioritization instrument; "let
         your community rank what you build next" is this page's story.
      4. **`/use-cases/engagement`** — emoji ratings and ranking as a low-effort one-tap ask.
      5. **`/survey-convos`** — one line at most; the page's job is form intent, not a
         feature list.
      6. **`/polls`** — **nothing.** Rating and ranking are **not in polls yet** (brief:
         `/poll` is unchanged). Do not let the capability leak onto this page.
- [x] **S1.7 Screenshots into the repo — DONE 2026-08-16.** Seventeen of the eighteen are
      now in `public/images/blog/scale-family/`, copied from
      `OneDrive - ClearSwell LLC\Pictures\Assets\Subo\screenshots\Scale-family\` (note the
      path: it is the **OneDrive** Pictures library, not `%USERPROFILE%\Pictures`). All three
      housekeeping items discharged: `Analytics-opinion-scale-satisfaction-5.png` came in as
      **`Analytics-opinion-scale-agreement-5.png`** (it holds an agreement card),
      `Analytics-opinion-scale-5.png` was **not copied** (stale duplicate with a doubled
      word), and Post 1 uses `Analytics-rating-stars.png` rather than
      `Analytics-rating-emojis.png` for its rating results card, so the older prompt wording
      never sits beside the corrected one.
      **Worth knowing for placement:** `global.css`'s `.prose img` caps inline images at
      `max-height: 400px`, so the tall builder shots (`script-editor-star-rating-tahiti.png`
      at 773x944, `script-editor-ranking-young.png` at 425x746) render narrow. The analytics
      cards are all ~1200px wide and short, and they read best. The hero
      (`ranking-full-answer-respondent-pov-discord.png`) is 1271x247, which suits the hero
      frame; `img { height: auto }` overrides the layout's hardcoded `height={510}`, so a
      non-2:1 hero is not distorted.
      **Original instruction, kept as the record:** Eighteen exist at
      `Pictures/Assets/Subo/screenshots/Scale-family/` → `public/images/blog/scale-family/`,
      following the `pickers/` convention. **Three housekeeping items on the way in**,
      per the brief: rename `Analytics-opinion-scale-satisfaction-5.png` →
      `Analytics-opinion-scale-agreement-5.png` (it contains an agreement card); **drop**
      `Analytics-opinion-scale-5.png` (stale duplicate with a typo); and do not place
      `Analytics-rating-emojis.png` directly beside `emoji-rating-respondent-pov-discord.png`
      (older prompt wording). All eighteen are dark mode. Can be done in S1 so the posts are
      unblocked the moment brief 2 lands.

**S1 exit:** `npm run check` green, `/api` and `llms.txt` true, no page claiming four
question types, screenshots in place. **✅ MET 2026-08-24**, in all three locales that render
these pages. Nothing outstanding in S1.

---

### Phase S2 — Template page corrections (✅ DONE 2026-08-16 for batches 1-4)

Per L3. The app's conversion list is `subo/docs/template-library-plan.md` §14.1. **All four
batches are now applied to production** (1 and 2 on 2026-08-14/15, 3 and 4 on 2026-08-15),
and every site page has been brought in line. This was drift with a customer-visible edge:
the page explained mechanics the member would not find in the template.

| Batch | App template | Site page | What the site now gets wrong |
|---|---|---|---|
| 1 ✅ | NPS + reason follow-up | `nps-reason-followup.md` | Mildest of the three. Q1 is now a native `nps` block; branches and both calc fields are untouched, so the page is not false, but "export the score column for the headline NPS" and the FAQ can now say the question is the standard locked instrument, translated for every respondent. **Opportunity, not a fix.** |
| 1 ✅ | Community Health / Engagement | `community-health-engagement.md` | **Materially wrong.** Two `emoji_only` single-punches became `rating` blocks with emoji points + endpoint anchors; **`scoring_enabled` is off** and the health index is a `calculated_block`, `([Belonging] + [Value]) / 2`, range 1.0–5.0. The page says "weighted and summed", "Only the two rating scales carry weight", "add scored scales for a richer index", and an FAQ answer explaining the weighting. All of that describes the old script. The new one is **better copy anyway**: an average on the scale's own 1-to-5 range needs no explaining. |
| 2 ✅ | Playtest / Beta Feedback | `playtest-beta-feedback.md` | **Materially wrong, and the worst of the three.** Four `rating` blocks now; `scoring_enabled` off; `[score]`/20 replaced by a **mean** `([Fun]+[Engagement]+[Polish]+[Recommend]) / 4`, 1.0–5.0. The page says "each rating option is weighted one to five", "Subo sums the weighted answers", a **step** telling the admin to tune the weights, and an FAQ answering "where does the satisfaction score come from?" with the summing story. Also: "Recommend" **stays a 1–5 rating, not an NPS** (user's call), and the app template **dropped its "(NPS+)" title and `nps` tag** — so the site's "Is this an NPS survey? It's NPS-style…" FAQ needs re-reading against that, and `features: ["Rating scales", "Satisfaction score", …]` should say what it now is. |
| 3 ✅ | Six one-block ordinal ladders | `playtester-beta-recruitment`, `governance-proposal-vote`, `feature-roadmap-vote`, `suggestion-box`, `churn-cancellation`, `player-onboarding-profiler` | Applied to prod 2026-08-15. **Nothing false on the site**, and that is worth recording: every one of the six pages describes its ladder *functionally* ("a strength read", "a priority read", "the availability question") and none quotes the option words or their order, so reversing five ladders high→low broke no copy. Vague prose survived a schema change that precise prose would not have. One real bug found anyway, in `feature-roadmap-vote`: a variant told the reader to **add** a "how soon do you need this?" read the template has had all along. |
| 4 ✅ | Feature Prioritization | `feature-prioritization.md` | The app **kept the name and fixed the framework** (user's call): a real four-level MoSCoW, Must have (3) / Should have (2) / Could have (1) / Won't have this time (0), `[max_score]` 12, still `single_punch`. So the site was **not** already right: "must-have, nice-to-have, or skip" is now a three-rung description of a four-level instrument, in the description, the hero, two callouts, a step, and the body. Corrected, and the framework name is now used deliberately (see below). |
| — | Bug Report Form, Product-Market-Fit, Pricing/WTP, quizzes, prediction + the four polls | unchanged | **Left alone on purpose** app-side: weighted triage thresholds, a benchmarked Sean Ellis instrument, unbounded currency, no-correct-answer scales, and polls (the family is not in polls yet). **No site edits, and no copy implying otherwise.** |

- [x] **S2.1 `community-health-engagement.md` — DONE 2026-08-16.** The scoring story is now
      the mean. Five places carried the old script: the FAQ answer ("weighted and summed"),
      a second FAQ ("only the two rating scales carry weight"), the body paragraph, the
      "keep the two scored scales" step, and a variant offering "add scored scales". All
      now describe the calculated field, `(belonging + value) / 2`, landing between 1.0 and
      5.0. `features:` went `["Scoring", "Health score", …]` → `["Rating scales",
      "Calculated field", …]`, because **`scoring_enabled` is off on this template now** and
      "Scoring" was the single most misleading value on the page.
- [x] **S2.2 `playtest-beta-feedback.md` — DONE 2026-08-16.** The worst of them, and it took
      seven edits: the description, the hero, the "each scale is weighted one to five"
      callout, the **step telling the admin to tune weights that no longer exist**, the
      "where does the satisfaction score come from?" FAQ, the body, and the variants. The
      NPS FAQ was rewritten from "it's NPS-style" to a plain **no** with a link to the NPS
      template, which matches the app dropping the "(NPS+)" title and the `nps` tag, and is
      a better answer anyway: it stops competing with our own NPS page for the term.
- [x] **S2.3 `nps-reason-followup.md` — DONE 2026-08-16.** Taken as the opportunity it was.
      New callout and new FAQ on the native instrument (eleven tap targets, translated
      anchors, a number in every export), and the standing **"no promoter/detractor rollup"**
      rule is stated *inside* the FAQ answer rather than left to be inferred. The "can I use
      it for CSAT or CES?" FAQ now points at the two step-7 templates that did not exist when
      it was written.
- [x] **S2.4 Facets and links re-checked — DONE 2026-08-16.** The `features:` values were
      the quiet half of this: they are chips on `/templates` (first three shown), so a stale
      one is a wrong label on the index, not just on the page. Aligned to the instrument
      vocabulary the step-7 pages introduced ("Star rating", "Opinion scale", "Ranking"):
      `NPS question` added to the NPS template, `Opinion scale` to the roadmap vote,
      `MoSCoW framework` to prioritization, `Calculated field` to both mean-based templates.
      The `/use-cases/*` and `en.json` example → template links were checked and need no
      change; none of them describes mechanics, they only name the job.
- [x] **S2.5 Batches 3 and 4 — DONE 2026-08-16**, see the table rows above.

**Two things worth carrying forward:**
1. **The MoSCoW correction is a search opportunity, not just a fix.** The page now names the
   framework in the `<title>`, carries a **crawlable four-row table** of the levels with
   their weights, and opens the FAQ with *"What is MoSCoW prioritization?"* — the highest-GEO
   slot on the page, answered in the framework's own terms including why "Won't have **this
   time**" is scoped to the release. That is a question people actually ask, and we now
   answer it on a page that also sells the instrument. `TemplatePage.astro` gained the
   `.tpl-prose` table styling ported from `RecipePage.astro` to render it.
2. **Every corrected page gained a "how do members answer this?" FAQ.** One tap on a face
   emoji, the answer stored as a number, an average and a distribution per scale. It is the
   same fact three times because it is the fact that makes the scale family worth having,
   and per-page FAQ entries are what get quoted. `updatedDate` set on all five touched pages.

**S2 exit:** met. Every site template page describes the script that is actually on
production. **Batch 5 is the step-7 closing set** (ranking / CSAT / CES), whose hub pages
already shipped in `a5ca699`; nothing outstanding there.

---

### Phase S3 — Editorial (UNGATED — brief 2 landed 2026-08-16)

Per L1 and L2. **The gate is open:** `2026-08-13-scale-family-blocks.md` is now **version 2
of 2**, updated in place, with a **Templates** section and the "copy must not promise
templates" rule explicitly **lifted**. So L2b resolves the way it predicted: the "and there
is a template for it" slot gets filled rather than left open, and Phase S4 is now gated only
on Post 1 existing.

- [x] **Post 1 — SHIPPED 2026-08-16.**
      `src/content/blog/discord-rating-scale-nps-ranking-questions.md`, `draft: false`.
      Title: *"Discord Rating Scales, NPS and Ranking: Ask It in the Chat, Read It as a
      Score"* — the brief's landing line kept as the second half, with the three target terms
      in the first half.
      **Deliberate departure from the brief's angle line:** "now you can measure it, not just
      count it" is the `blog-writing` skill's banned *"not just X, Y"* shape, so the argument
      is made without it (options are identifiers, and the average of five identifiers is not
      a number). The brief's phrasing survives as the reasoning, not as the headline.
      **Shape:** hero (the Discord ranking shot) → why a number changes the report → one
      section per type with its screenshot(s) → *What comes back* (the reports-read-for-humans
      / downloads-read-by-tools / calculations-are-always-numbers rule, then four results
      cards) → *Where to start* (the templates). **Twelve of the seventeen screenshots used**,
      all resolving in `dist/`.
      **Both standing rules honored, and both are load-bearing in the copy rather than merely
      avoided:** the NPS section says Subo gives you the question, the distribution and the
      average and *does not* roll answers up into promoters/passives/detractors, then turns
      that into the `<= 6` skip-logic follow-up (which is the useful advice anyway); Google
      Forms and Typeform are **not named anywhere**. The grid answer went into the **FAQ**, in
      the brief's constructive framing, which is the "where a reader asks it" placement.
      **7 FAQ entries** (`FAQPage` JSON-LD verified in the built page), absorbing brief angles
      2 and 3: how to add a star rating, how to build a Likert scale, can I run an NPS survey
      in Discord, matrix/grid, how ranking works without dragging, not-in-polls-yet, and the
      all-plans answer. Interlinks: the merged skip-logic post, `/api`, and the four template
      pages (`csat-satisfaction`, `ces-customer-effort`, `rank-your-favorites`,
      `nps-reason-followup`). `npm run check` green.
      **One accuracy call worth keeping:** `response-details-scale-ranking.png` (shot 11) was
      **left out on purpose**. The post makes the "built-in reports show the readable form"
      claim, and that shot shows a labeled scale rendering as a bare `5`, which is open item 3
      in the brief. Using it would have illustrated the claim with a counterexample. It stays
      available for Post 2, where the point is "you can read one person's ranking".
      **Original scope, kept as the record:** Opens on
      the Discord ranking hero (`ranking-full-answer-respondent-pov-discord.png`), the shot
      **no competitor can produce**. The argument: a five-point question used to be five
      options, and options can be counted but never averaged; now the answer *is* a number,
      so it comes back as 4.4 out of 5 with a distribution behind it, inside Discord. Walk
      the four types with a screenshot each, close on the results cards. Landing line:
      **ask it in the chat, read it as a score.** Carries the NPS material and the Likert
      grid FAQ (the constructive framing), so brief angles 2 and 3 are absorbed here.
      Target: *Discord rating scale*, *star rating Discord bot*, *Discord NPS survey*.
- [x] **Spoke 1 (was Post 2) — ranking — SHIPPED 2026-08-17.**
      `src/content/blog/discord-ranking-questions-rank-what-you-build-next.md`,
      `draft: false`. Title: *"Ranking Questions in Discord: Let Your Community Rank What You
      Build Next."* ~2,000 words, 6 screenshots, 7 FAQ entries, `FAQPage` JSON-LD verified in
      `dist/`.
      **Written use-case led, not mechanics led**, because Post 1 already spent the mechanics.
      Opens on the failure it replaces (nine features in a multi-select, seven clear 60%,
      everything popular and nothing first), then the instrument argument: **approval is cheap
      because nobody pays anything to check a box, and a ranking makes the respondent spend
      something.** Three jobs (roadmap vote, tournament map pool, merch drop), then setup,
      then a long *Reading the results* section, then skip logic, then templates.
      **Target terms: *ranking question Discord*, *rank options Discord survey*.**
      Per **L6**, *rank options poll Discord* is **off the list** and the post says plainly
      that ranking is a survey question type with `/poll` unchanged.
      **The section that earns the post its keep is the three-figure read:** average rank
      (lower is better), Ranked 1st (the number to announce, because members understand it
      without explanation) and Ranked by (what stops you misreading the first column, since
      average rank is computed only over the people who ranked that item). Plus **unranked
      items are a finding, not a gap** — that is the answer about what to cut.
      **Screenshot split from Post 1, deliberate:** this post takes the **table view**
      (`Analytics-ranking-table-bowie.png`) and the **individual response panel**
      (`response-details-scale-ranking.png`, safe here because this post makes no
      readable-form claim about scales), and points at Post 1 for the first-choice bars rather
      than repeating them. Hero is the **web Convo shot** (1294x652, a clean 2:1) so the two
      posts do not show the same card image on `/blog`; the Discord tap-in-order shot runs
      inline in the first section, so the Discord argument still lands above the fold.
      **Reciprocal link added** from Post 1's ranking section.
- [x] **Post 1's mascot hero — RENDERED AND SHIPPED 2026-08-18.**
      `public/images/blog/scale-family/scale-family-hero.webp` (1200x600), `heroImage` swapped
      off the interim screenshot, so the 4.4 card no longer appears twice on the page. The
      render came back on-brief, including both product-accuracy constraints (no gauge, no
      promoter/detractor split). **Two canon drifts shipped as-is** and are logged in
      `examples/scoring-bench.md` with prompt fixes for next time: the head bar charts came
      back pink/magenta/purple/cyan instead of purple/grey/aqua, and both eyes are
      square-in-square where a grinning, presenting Subo should have the checkbox right eye.
      Neither justifies a re-render alone.
      **The original ruling, kept because it is the reasoning:** the user judged 2026-08-18 that the
      two posts were opening on near-identical ranking screenshots, so **Spoke 1 takes the
      Discord ranking shot as its hero** (it is the ranking post, and it is the image no
      competitor can produce) and **Post 1 gets a bespoke mascot illustration**.
      **Brief written and canon updated:** new metaphor **scoring bench** added to
      `recurring-metaphors.md` (table + environment language), full fill-in brief at
      `.claude/skills/mascot-illustration/examples/scoring-bench.md`. Subo is the cheerful
      score-keeper who **hands the score card to the blob** rather than judging, which keeps
      the "Subo enables, the blob discovers" dynamic on a feature that is literally about
      scoring. Deliberately **not** the game-show stage, which is already canon for quizzes
      (a scale has no correct answer). Two product-accuracy constraints are baked into the
      NEGATIVE line and are the reason to read the brief rather than re-improvise it: **no
      dials, needles or gauges** (we have no slider, and a gauge would promise one) and **no
      promoter/detractor split** on the card.
      **Screenshot ownership was re-split at the same time**, so the two posts no longer read
      as the same article: Post 1 lost the web Convo shot and its opening was rewritten off
      the ranking hero entirely (it now leads on the two claims, a number rather than a tally
      and answered inside Discord); Spoke 1 gained the web Convo shot inline. Only
      `ranking-emoji-respondent-pov-discord.png` is shared, doing two different jobs.
      **One accuracy fix fell out of it:** Spoke 1 had invited the reader to compare item
      order across "the two Discord screenshots and the web Convo" as proof of randomization,
      but one of those is the Bob Dylan question and the others are Neil Young. Comparing
      different questions proves nothing; it now compares the two Neil Young shots only.
- [x] **Spoke 2 — Likert, carrying the grid answer — SHIPPED 2026-08-24.**
      `src/content/blog/discord-likert-scale-one-statement-at-a-time.md`, `draft: false`.
      Title: *"Likert Scales in Discord: Ask a Grid One Statement at a Time"*, ~1,700 words,
      3 screenshots, **8 FAQ entries** (`FAQPage` JSON-LD verified in `dist/`), every link
      target verified to resolve.
      **The spine is the one-at-a-time argument, as L5 required**, and the grid gets a
      **full section** (*"The grid, straightened out"*) rather than the single FAQ entry it
      had on Post 1, plus its own FAQ answer here. Written in the brief's constructive form:
      it opens on what a grid *is* (a layout, not a question), shows the replacement (one
      Opinion Scale block per statement, same preset clicked on each), and only then gives
      the two reasons the replacement is better (each statement gets its own report card;
      each statement gets answered on its own, straightlining being the named failure of
      grids). Google Forms and Typeform are **not named anywhere**, per the standing rule.
      **One deliberate departure worth keeping: the post concedes the case where a grid
      wins.** "If you are replicating an established battery item-for-item and the layout is
      part of what you are replicating, Subo is the wrong tool for that specific job."
      `blog-writing` bans *manufactured* both-sides, not an honest limit, and a survey-literate
      reader who has met straightlining will trust the rest of the argument more for it.
      **Material this post owns that Post 1 could not carry:** the labels-run-low-to-high
      direction rule with reverse-scoring in the formula (`5 - [Item]`) rather than in the
      labels; the point-count argument (even numbers for community samples, no midpoint to
      hide in, but use the benchmark's count when reproducing a benchmark); and the construct
      score built from three or four items as the real replacement for a grid's battery. All
      three come from `recipes/pre-post-assessment` (rewritten in S1.4), which the post links
      as "the closest thing to a grid this site publishes."
      **✅ THE SCREENSHOT GAP WAS CLOSED THE SAME DAY.** The first draft shipped with all
      three images shared with Post 1, because the eighteen-shot set had **no respondent-POV
      opinion scale as a button row** anywhere: the only respondent-side scale images were the
      NPS keycaps and the closed dropdown riding along in
      `ranking-emoji-respondent-pov-discord.png`. The user shot it (**shot 19**,
      `agreement-scale-respondent-pov-discord.png`, 1026x343), and it is better than the gap
      note asked for: it holds **two consecutive agreement statements with the same preset on
      each**, which is the post's grid argument rendered rather than argued. Add it to the
      brief's set if that document is ever revised.
      **Hero swapped to it, and the post rearranged around it.** It is now the shot no
      competitor can produce (the same logic that gave Spoke 1 its hero), the `/blog` card is
      distinct from both siblings, and the grid section points up at it ("a grid with the
      table taken away"). `Analytics-opinion-scale-agreement-5.png` moved inline into
      *Reading agreement as a number*, where it lands better anyway: **it reports the exact
      statement the hero asks**, so the section reads asked-then-reported instead of referring
      back to a card at the top of the page. A bespoke mascot hero is no longer worth
      considering here; the real screenshot beats it for this post.
      **Reciprocal link added** from Post 1's Opinion Scale section. Post 1's grid FAQ was
      left self-contained on purpose: FAQ answers are what get quoted, so they should not
      depend on a click.
      Target: *Likert scale Discord*, *matrix question alternative*. `npm run check` green.
- [ ] **Spoke 3 — NPS. HELD per L5** until the promoter/detractor rollup ships, then written
      as that feature's launch post. Do not write it against the current reporting.
- [ ] **Lowest priority — the three-benchmark post (NPS/CSAT/CES).** Treated as an
      internal-linking play for the three template pages, not a ranking play; CSAT and CES
      intent is owned by SaaS support content. The NPS spoke can carry those links instead.
- [x] **`faq` frontmatter + interlinks on all three posts — DONE.** 7, 7 and 8 entries, every
      one emitting `FAQPage` JSON-LD from the visible Q&A, verified in `dist/` each time.
      Between them they link `/templates` (7 pages), `/recipes/pre-post-assessment`, `/api`,
      the merged skip-logic post, `/use-cases/get-things-done` and each other.
- [x] **`draft: false` on all three.** The standing finding still holds for anything new here:
      drafts are built, crawlable and in the sitemap, so `draft: true` does not mean
      unpublished on this site.

**S3 exit:** met for everything L5 committed. The hub and both deliverable spokes are live;
Spoke 3 is held by decision, not by work.

---

### Phase S4 — Channels (DRAFTED 2026-08-18 — sending is the user's)

**All copy lives in [scale-family-launch-channels.md](scale-family-launch-channels.md)**, a
paste-from kit in the shape of `directory-listing-kit.md` and `roundup-outreach-kit.md`. It
holds the Discord message, the five X posts with their image assignments, and the top.gg
news post, plus the record of the changelog work. Written as one batch because the user
sends **one announcement covering both posts and the templates**, so these were never
one-post-at-a-time gated.

**Tier line confirmed in-session (user, 2026-08-18): all plans, free included.** Stated once
per channel, as good news, per the `feature-launch` hard rule. That confirmation does not
carry to a future session.

- [~] **Discord `@Updates` announcement — DRAFTED.** 1,216 characters, one message, inside
      the 2,000 limit and near the skill's ~1,200 aim. **Two features in one message**
      (the four types, then ranking-plus-templates) rather than the single-feature shape,
      which is what the "one announcement covering both posts" decision requires.
      **Link-embed control is the mechanical part worth keeping:** Post 1's URL is bare so it
      renders the card, and the ranking post and `/templates` are wrapped in `<>`, because
      three bare links would be a wall of cards. The mascot hero is now Post 1's `heroImage`,
      so the embed card carries the illustration rather than the screenshot the original plan
      assumed.
- [x] **`/changelog` entry — DONE 2026-08-18.** EN needed **no edit at all**: the page derives
      from the blog collection and Post 1 already carries the `announcement` tag with
      `draft: false`. FR needed a row in `src/data/changelog-blog-fr.ts`, since a missing slug
      there falls back to the English title and description and the French page silently mixes
      languages. Both verified in `dist/` (`grep -c "Discord Rating Scales"
      dist/fr/changelog/index.html` returns 0, i.e. no fallback left).
      **Spoke 1 is deliberately not tagged `announcement`** — it is an editorial spoke, and
      tagging it would list one release twice on the timeline.
- [~] **X thread — DRAFTED.** Five posts, **every one verified under 280** with URLs counted
      at X's flat 23 characters. The hook is *"Every rating scale you have ever sent your
      community was a web page they had to leave Discord for"*, which is the roadmap's intended
      spine turned into the reader's problem rather than our claim about competitors: it names
      what the reader already does and never mentions a competitor by name, so it also stays
      clear of the brief's don't-frame-as-catching-up rule. An image on all four posts after
      the hook, split so no post repeats another's screenshot.
      **Post 4 carries no link on purpose:** it is the multi-select-versus-ranking argument,
      the one piece of the release a stranger can judge without clicking anything.
- [~] **top.gg news post — DRAFTED.** ~370 words, written cold, leading with capability
      ("most survey tools ask you to send your community somewhere else") rather than release
      news, with the four types as named bold paragraphs and one link to `subo.gg`.
- [ ] **top.gg listing soft refresh** — still open, and **separate from the news post above**.
      The P1 item that has been pending anyway now has a real reason and fresh screenshots.
      Manual edit, not a kit paste (curated screenshots).

---

### Open questions / decisions wanted

1. ~~**MoSCoW naming (batch 4)**~~ **RESOLVED (app 2026-08-15, site 2026-08-16).** The app
   kept the name and made the instrument match it (four levels). The site page did need
   changing, in the opposite direction to the guess here: it was avoiding a name that is now
   accurate and worth ranking for.
2. **FR/DE parity for this content.** S1.5's string fixes must reach all six locales
   (factual). The *posts* are a different question: there is still no FR blog route, which
   is the standing infrastructure decision blocking `sondage discord`. Not a blocker here,
   but a ranking post in French would be a strong first FR post if that decision lands.
3. **Does `/templates` want a question-type facet?** Half-answered in practice: the step-7
   pages shipped with instrument-named `features` values ("Star rating", "Opinion scale",
   "Ranking", "Seven point Likert"), and S2.4 aligned the converted templates to the same
   vocabulary. So the *values* now exist and read consistently as chips. What does **not**
   exist is a filter UI on `/templates` — the index renders the first three values as inert
   chips grouped only by dimension. Building the filter is the open half, and it is now
   cheap because the vocabulary is already in the data.
4. **Post 3 of the brief (a standalone NPS recipe)** is deliberately uncommitted per L2.
   `Discord NPS survey` is called the highest-intent term in the release, so if Post 1
   ranks for it, a dedicated recipe is the obvious follow-on. Revisit with data.

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
- [ ] **Bridge the language gap for SEO/GEO reach.** The bot + web app ship in
      **10 languages**; the marketing site in **6** (EN/FR/ES/DE/IT/PT-BR).
      **Dutch, Polish, Russian, Turkish** are live in-product with no localized
      marketing surface.

      **Correction (2026-07-29):** geo/country signal comes from **GA4** (not Search
      Console — that's *query* data), and the old "gate on traffic in that language"
      test was circular: a language with no localized page can never show
      language-specific traffic. The honest signal is **latent demand** — visitors
      already arriving from those countries to the English default pages, plus the
      fact that the product already works in their language.

      **GA4 country data (Jul 1–28, 2026) confirms the demand and re-ranks the list:**
      - **Dutch (NL 10 + Flemish share of Belgium) and Polish (PL 10)** — each
        already draws about as many users as **Italy (13)**, a market we *already*
        localized for, while seeing only English pages. **Highest priority.** (PL's
        ~1.8s avg engagement is a yellow flag; verify it's real traffic once live.)
      - **Russian (RU 8 — the most-engaged of the four at ~15s)** — genuine interest,
        but **€0 revenue today** (Stripe/cards blocked in Russia), so this is a
        GEO/reach play, not a revenue one. Lower priority; a long-term bet on
        wars/bans lifting.
      - **Turkish (TR 3)** — **Discord is banned in Türkiye**, so the addressable
        market for a Discord bot is near-zero regardless of the small traffic.
        **Skip** until beyond-Discord (P6) gives Turkish users a way in.

      **Longer-term, needs product localization first (JA/KO are NOT in the current
      10 langs):** **Japanese (15) and Korean (14)** actually *out-rank* the NL/PL
      candidates on raw GA4 traffic, and both are strategic for the **gaming-studio
      ICP** (we've had South Korean clients before). These require the bot/web app to
      add Japanese + Korean *before* a marketing surface makes sense — a cross-repo
      objective (coordinate with the master roadmap), not a site-only change. Flag as
      a joint app + site target.

      **Data-quality note:** ignore **Singapore (328) and China (43)** in any traffic
      math — ~1s engagement and near-zero engagement rate = bot/junk, not real demand.
      **Softened 2026-08-11:** not *uniformly* junk. Stripe shows a CN card and the user
      confirms legitimate Chinese/Singapore customers, including AI companies (Manus,
      CapCut). The bot traffic inflates a real but much smaller signal. Those customers
      are a **developer/API** segment that operates in English, so they argue for the
      `/api` + `llms.txt` track, not for a Chinese locale.

      ### ⚠️ SUPERSEDED (2026-08-11): re-ranked against three datasets

      **Everything above this line is traffic-only and mis-ranks the work.** "Start with
      Dutch, then Polish" is wrong on all three of the datasets below. Kept for the
      reasoning, not the conclusion.

      **First, the premise was false.** The site is **not localized in 6 languages**. It is
      EN (16 pages) + **FR (11 pages)** + **ES/DE/IT/PT-BR at two pages each** (homepage and
      pricing). Those four are missing seven key blocks (`pollsPage`, `featuresPage`, the
      three `useCases*`, `customSurveyBot`, `changelog`), and — the cheap part —
      **`surveyConvos` and `about` are fully translated in all four and rendered by no
      page at all**, because the route `.astro` file was never created. A homepage-and-price-
      list locale cannot rank for a single commercial term.
      *(Superseded in part: **DE reached 10 pages 2026-08-12** and **ES reached 10 pages
      2026-08-24**. As of 2026-08-24 the count is EN 16 / FR 11 / DE 10 / ES 10 / IT 2 /
      PT-BR 2.)*

      **Dataset 1 — GA4 country, 90 days.** Brazil #4, Germany #6, France #8, Canada #9,
      Spain #10, Japan #11, Poland #12, Korea #13, Italy #14, NL #16, Mexico #18. So Brazil
      and Germany are *larger* than France and have a fifth of the pages, while Poland and
      the Netherlands sit below markets whose translation is already bought and paid for.

      **Dataset 2 — GA4 language, 90 days.** EN **75%**, PT 4%, ES 3%, ZH 3%, FR 2.5%,
      DE 2%. Two things follow. Spanish edges ahead of German on preference-to-read-local
      even though Germany outranks Spain by country (Germans browse in English more).
      And the ceiling is real: **the entire localization axis is ~12% of traffic**, so no
      language work is the highest-value thing available — it is the best move within a
      structurally minor track.

      **Dataset 3 — Stripe revenue by card country (the one that reordered everything).**
      US $640.77, **FR $116.74**, AE $99.99, DE $55.88, GB $54.48, AT $39.49, CY $36.59,
      **KR $34.93**, AU/AR/IN $29.99 each, IT $17.94, AM $8.97, CN $5.98.
      - **Brazil and Spain are the #1 and #2 non-English traffic sources and returned
        exactly $0.** That single fact kills the traffic-first ranking.
      - **German-speaking (DE $55.88 + AT $39.49 = $95.37) is second only to France among
        non-English, earned on two localized pages.** Best parity candidate in the set: it
        is the only market already converting *without* a page set.
      - **Korea $34.93 with no locale, no Korean product and no marketing** — double Italy,
        which has a locale. Strengthens the JA/KO cross-repo item above; Japan is #11 by
        country, ahead of Poland.
      - **Read the zeros, not the ordering.** Several rows are visibly single transactions
        ($29.99 three times, $99.99 once), so the table is ~25–40 payments and "DE beats IT"
        is one customer wide. A zero from your two largest non-English audiences is the
        durable signal; the rank order among the small non-zero rows is noise.

      **Two caveats that cap how hard this table can be pushed:**
      1. **Discord is ~50% of revenue with no country breakdown** (user, 2026-08-11), and
         Portuguese/Spanish speakers are non-zero there but unquantifiable. So BR/ES are
         **deprioritized, not written off.** Brazil's Stripe zero also has a structural
         explanation available: Brazil runs on Pix/boleto, and international-card
         penetration for subscriptions is genuinely weaker there.
      2. **France's conversion is probably not caused by its page count.** The user is
         French and reviews the French copy himself, so FR reads native while the others are
         volunteer-translated. Supporting evidence: FR earned that $116.74 while
         `/fr/polls` was *not* keyword-targeted at all — its H1 never said "bot de sondage"
         until 2026-08-11. Whatever drives French conversion, it is not localized pages
         winning French search. **So the causal case for parity work is weaker than the
         revenue table makes it look; the case for translation *quality* is stronger.**

      **Provenance, which explains the whole odd shape of the set:** the current languages
      were chosen by **supply, not demand** — users asked for a language and volunteered to
      translate it. Italian and Dutch exist because a volunteer appeared. That is why Italy
      (#14) and NL (#16) got locales ahead of Brazil (#4). The parity work is therefore
      **correcting an accident, not extending a strategy**. JA and ZH were requested and died
      because the volunteers' English was too weak to coordinate on — a *reviewer* problem,
      not a translation problem, and machine translation does not solve it.

      **Translate ≠ optimize (the failure mode to budget for).** A volunteer translates the
      UI faithfully and never keyword-targets it. Proven on 2026-08-11: FR `/polls` was a
      good translation that could not compete for the term it existed to win. Every page
      brought to parity needs **two passes** — translate, then tune against what that
      language actually searches — or we ship locales that read well and rank nowhere.

      **REVISED ORDER: DE (+AT) → IT → verify BR/ES before spending → NL/PL last.**

- [~] **German to parity with French — TIER 1 + TIER 2 DONE (2026-08-12), only the
      changelog left.** User's call: "German seems like a no-brainer." Target was FR's
      11-page set; German is now at 10.
      - [x] **Tier 1, the free half — SHIPPED.** `surveyConvos` and `about` were already
            fully translated in `de.json` (key-for-key parity with EN, verified) and
            rendering nowhere. Added `src/pages/de/survey-convos.astro` and
            `src/pages/de/about.astro`, cloned from the FR routes. **hreflang done
            reciprocally** — the `de` alternate added to the EN *and* FR copies of both
            pages, not just declared one-directionally from the new pages. Verified:
            clean build, `<html lang="de">`, four hreflang entries each, both in the
            sitemap. German went 2 → 4 pages with zero translation.
      - [x] **Tier 2 — six blocks written and rendering — SHIPPED.** `pollsPage`,
            `featuresPage`, the three `useCases*`, and `customSurveyBot` added to
            `de.json`, with routes `de/polls`, `de/features`, `de/custom-survey-bot`, and
            `de/use-cases/{research,engagement,get-things-done}` cloned from the FR
            equivalents. **hreflang reciprocal across all 24 page files** (EN/FR/DE × 8
            pages), audited. German 4 → 10 pages, all in the sitemap.
            - **Written, not translated flat.** German H1s and titles carry the target
              terms: `/polls` leads on *Discord Umfrage-Bot* with *Tippspiele* for
              prediction contests; `/survey-convos` now leads on *Discord-Formular*.
              Vocabulary anchored to the existing `de.json` (Skip-Logik, Inhaltsblock,
              Aktionsblock, Befragte, Erfolge, Bestenliste), informal *du* throughout.
              Cross-links to English-only blog posts are all marked *(auf Englisch)*.
            - **Examples flattened to plain strings** to match the FR page shape. The EN
              use-case pages render a richer `{text, template}` object plus a starter-
              templates section whose headings are hardcoded English; cloning that would
              have leaked English onto German pages. Parity target was FR, so FR's shape
              won. If the template section is ever localized, the German `examples` arrays
              need to go back to objects.
      - [x] **DE `/survey-convos` pre-retune copy — FIXED.** Title was "Discord
            Umfrage-Gespräche" and never said *Formular*. Now mirrors the FR form-intent
            retune, including the `/blog/how-to-make-a-discord-form` link.
      - [ ] **German changelog — the last page.** Needs `src/data/legacy-releases.ts`
            widened from its bilingual `titleFr`/`summaryFr` schema, plus a new
            `src/data/changelog-blog-de.ts`. Takes German 10 → 11 and full FR parity.
      - [ ] **No native review, and the user has accepted that.** Correction to the earlier
            note here: `de.json` did **not** come from a volunteer. The volunteer reviewed
            the German *inside the app*; the marketing site was 100% LLM, and even the app
            translation has been Claude-produced for years. There are no volunteers now.
            User's ruling: "I have no alternative at this point." The practical consequence
            is that the LLM pass **is** the pass, so German copy gets written deliberately
            rather than translated flat, and a native read remains the highest-value cheap
            audit if one ever becomes available.

- [x] **Spanish to parity with German — DONE 2026-08-24.** ES went **2 → 10 pages**, the
      same set German holds, in one pass rather than the two tiers German took. `es.json` is
      now **key-complete against `en.json`** (verified programmatically; only `changelog`
      is absent, and German lacks it too).
      - **Six blocks written into `es.json`:** `featuresPage`, `pollsPage`,
        `customSurveyBot`, and the three `useCases*`. Plus `developerApi.ctaGuide`, a single
        key ES had been missing since `/api` shipped.
      - **Eight routes** cloned from the German ones (identical markup, verified by diffing
        each generated file against its DE source modulo the locale swap):
        `es/{about,survey-convos,features,polls,custom-survey-bot}` and
        `es/use-cases/{research,engagement,get-things-done}`.
      - **hreflang reciprocal across all 32 page files** (EN/FR/DE/ES × 8 pages), inserted
        after the `fr` line to hold the site's existing `x-default, en, fr, es, de, it`
        order. Audited in `dist/`, not just in source. All 10 ES URLs in the sitemap; no
        broken internal link on any ES page.
      - **Written, not translated flat**, per the German precedent. `/polls` leads on *bot
        de sondeos para Discord*; `/features` on *funcionalidades*; `/use-cases/get-things-
        done` on *candidaturas, inscripciones y peticiones*. Question-type nouns taken from
        the product catalog names already in `es.json` (**Valoración / Escala de opinión /
        NPS / Clasificación**), not re-guessed. Cross-links to English-only posts marked
        *(en inglés)*, matching the FR/DE convention.
      - **`/survey-convos` pre-retune copy FIXED**, the same gap FR and DE each had. Title
        and H1 never said *formulario*; they now lead on **"App de encuestas y formularios
        para Discord"** / **"El formulario de Discord que se siente como una conversación"**,
        with the Google Forms line and the `/blog/how-to-make-a-discord-form` link the EN
        page carries. Also added the scale-family benefit line (ratings answered with a tap,
        reported as numbers) that the S1.5 pass put in EN and ES never received.
      - **Example chips are `{text, template}` objects, not the flat strings German
        originally shipped.** That flattening was reverted for FR/DE on 2026-08-24; ES was
        built against the current shape, so its three use-case pages carry **27 template
        links** (11/9/7), matching FR and DE exactly.
      - **Internal links repointed to `/es/*`** in `header`, `footer`, the homepage
        `features` tiles and `usecasesCategories` — all of which were still sending Spanish
        readers to English pages.
      - **17 em dashes cleared from `es.json`**, rewritten rather than stripped. FR was
        already at zero and DE at three (all inherited from EN); ES had the worst count of
        the six locales. **IT (18) and PT-BR (20) still carry theirs** — worth a pass when
        those locales get their routes.
      - **On the BR/ES revenue gate:** it did not bind, for the reason the routes item
        already recorded. The gate was about spending on translation before verifying the
        market; Spain's Stripe $0 is currently **unfalsifiable** because ES had no localized
        commercial page to convert on. This slice is the cheapest way to *get* that
        verification. Watch `/es/*` in the P0 funnel breakdown before spending further.

### ▶ THE LOCALE-PARITY PLAYBOOK — read this before starting IT, PT-BR, or any new locale

Distilled from the German pass (2026-08-12) and the Spanish one (2026-08-24). German took two
tiers across two sessions; Spanish took one pass, because the shape was already known. **The
point of this section is that the next locale should not re-derive any of it.** Everything
below is a thing that was discovered the hard way at least once.

**The work is mechanically small and editorially large.** Eight route files are a
transformation of eight existing files; the ~28KB of JSON copy is the whole job. Budget
accordingly, and do not let the cheap half create the illusion the locale is done.

**Order of operations that worked:**
1. **Diff the locale's key set against `en.json` first**, deep, not top-level. It tells you
   exactly what is missing and it catches strays — ES was missing `developerApi.ctaGuide`
   alone, which no page-level audit would have surfaced.
2. **Write the missing blocks into the locale file**, in `en.json`'s key order, before
   touching any route. A merge script that reorders to EN's key order at the end keeps the
   six locale files diffable against each other forever; do that rather than appending.
3. **Generate the routes by transforming the DE or FR ones** (swap the JSON import and the
   `<html lang>`), then **diff each generated file against its source modulo the locale
   swap** to prove you changed nothing else. The route files are long, mostly `<style>`, and
   a hand-copy will silently drift.
4. **hreflang last, and reciprocally.** Insert the new locale into *every* existing copy of
   each page, in the site's established `x-default, en, fr, es, de, it` order. A
   one-directional declaration from the new pages is the failure mode.
5. **Audit in `dist/`, never in source.** Build, then assert programmatically: every page
   carries the new alternate, every new URL is in the sitemap, and no internal link on the
   new pages 404s. Each of those three checks caught nothing on the ES pass *because* the
   earlier steps were done carefully — which is the point; they are cheap insurance.

**Five traps, all of which have actually bitten:**
- **The locale file's `surveyConvos` is pre-retune.** Every locale was translated from the
  *old* EN page and none of them says *formulario / modulo / formulário / Formular*. FR, DE
  and ES each had to be retuned for form intent as part of their parity work. **Assume IT and
  PT-BR need it too**, including the Google Forms line and the
  `/blog/how-to-make-a-discord-form` link.
- **Internal links in `header`, `footer`, the homepage `features` tiles and
  `usecasesCategories` point at the English pages.** They are invisible while the locale has
  no routes, and become wrong the moment it does. Repoint them in the same change; that is
  four separate objects, not just the nav.
- **Product nouns must come from the catalog, not from translation.** Four of five guessed
  question-type names were wrong in the S1.5 pass, and the two that failed hardest were where
  the product made the *less* obvious call (German keeps *Ranking*, Spanish refuses it for
  *Clasificación*). Look them up in
  `Subo shared/Messages Translations/new-path/user_messages_all_2026-08-12.xlsx`
  (sheet `User Messages`, keys `Web_BlockType_*` / `QuestionType_enum_label_*`), or reuse the
  names already sitting in that locale's `questionTypesList`. Never infer.
- **When EN and a locale disagree, check the data *shape*, not only the strings.** The
  2026-08-24 FR/DE fix found example chips stored as plain strings where EN had
  `{text, template}` objects, so six high-intent pages rendered inert chips and sent nothing
  into the template library. The renderer tolerated both forms, which is why it went unseen.
  **Build any new locale against the object shape** and verify the template-link count in
  `dist/` matches FR/DE (11/9/7 on the three use-case pages).
- **Em dashes accumulate in the locale files.** House style bans them and the locales were
  never swept: FR 0, DE 3, EN 3, **ES was 17 before this pass, IT is 18, PT-BR is 20.**
  Clear them by rewriting the sentence, not by substituting a comma everywhere — several ES
  cases wanted a colon or a full stop instead.

**Two standing constraints on the copy itself:**
- **Write in-language, don't translate flat.** This is the roadmap's oldest localization
  lesson (`translate ≠ optimize`): FR `/polls` was a good translation that could not compete
  for the term it existed to win. Each locale's H1s and titles must carry that language's
  target terms.
- **The LLM pass is the only pass.** There are no volunteer reviewers now and the user has
  accepted that. So the copy gets written deliberately rather than rendered mechanically, and
  a native read stays the highest-value cheap audit if one ever becomes available.

**Known gap, unrelated to any single locale: `pt-br` has no hreflang entry anywhere on the
site**, despite `/pt-br/` and `/pt-br/pricing` being live and in the sitemap. Every page's
alternates list runs `x-default, en, fr, es, de, it` and stops. Fix it when PT-BR gets its
routes, or sooner — it is one line per file and those two pages are currently orphaned from
the language graph.
