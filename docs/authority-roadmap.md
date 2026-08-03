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

> ### ▶ RESUME HERE (next session) — P5 roundup outreach CHOSEN + kit built (2026-08-03); next = send the pitches
>
> **▶ IN PROGRESS: (b) P5 roundup outreach.** Chose the non-migration-gated backlink lever
> over more (gated) content. Built **[roundup-outreach-kit.md](roundup-outreach-kit.md)**:
> tiered target list (research pass 2026-08-03), reusable pitch templates (A/B/C), and a
> ready-to-paste Subo entry in roundup voice. **Key finding: Subo is ALREADY listed in
> CommunityOne** (the roadmap's named example outlet, updated 2026-07-09) — but mislabeled
> "Fun bots," so the warmest lead is an *upgrade* (template C), not a cold pitch. P5 validated.
>
> **▶ NEXT (user action — sending is yours):** work the kit's Tier 1 first (CommunityOne
> reclassify → Stickers.gg / Space-node / BotGhost cold pitches), then Tier 2 (Beebom,
> Rumie). Log outcomes in the kit's Status columns; add each live placement's
> `$referring_domain` to the P0 funnel breakdown to see which roundups convert.
>
> **Deferred (still open when you want in-repo work):**
> - **(a) Form/no-"bot" follow-ons** — FR `/survey-convos` retune, more "app"/"form"
>   vocabulary in existing titles/H2s, standalone `/draft` page. Migration-gated to ~Q4.
> - **(c) API/agent GEO + `api.subo.ai → api.subo.gg` consolidation** — entity-consistency
>   loose end; I can do the crawlable API-recipes page + `llms.txt` examples in-repo, infra
>   (DNS/301) is yours.
>
> **Note:** content ROI stays **migration-gated to ~Q4** (branded recovered, non-branded
> still lagging) — which is exactly why (b) went first. See the migration block up top.
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
- [ ] Add `FAQPage` schema to each new content page (pattern in `TemplatePage.astro`)
- [ ] Interlink: content → templates → pricing (internal linking lifts the whole cluster)

### Make the Public API discoverable to AI agents (GEO/AEO for developers)

New angle (2026-07-29): buyers increasingly ask an LLM/agent to "add a survey bot to
my Discord" or to wire one up programmatically, so the **citable, agent-usable surface
matters as much as human-facing pages.** We already have `llms.txt` + the API; feed the
agent path deliberately.

- [ ] **On-domain, crawlable API recipes.** The API reference (`api.subo.ai/docs`, →
      `api.subo.gg` once migrated) is a **Scalar UI: JS-rendered, weak for crawl/GEO**
      (same failing as Notion). Add a **static, crawlable API quickstart + recipes page
      on subo.gg** ("create a survey via API", "pull results via API", auth/key steps) —
      the source an LLM can actually quote. Interlink from the homepage DeveloperAPI
      section + `llms.txt`. (`blog/public-api-launch` exists but is an announcement, not
      a recipe.)
- [ ] **Point `llms.txt` explicitly at the API** — OpenAPI spec URL, key-generation
      URL, and 2–3 canonical request examples inline, so an agent has what it needs.
- [ ] **MCP server = the agent-era "directory" play.** The app's master roadmap has a
      standing **Subo MCP server** (agent-orchestration track). When it ships, list it
      in the emerging **MCP registries/directories** and give it a spoke landing page —
      P1's "bot directories" logic, applied to the agent ecosystem.
- [ ] **Migrate API docs onto subo.gg** — see the subdomain-consolidation action in the
      migration block; entity consistency + authority both argue for it.

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

- **Hard constraint (user, 2026-07-29): no new templates until the rating-scale
  feature ships.** Rating scale is **FEAT scale-family blocks in Stage 3** of the
  master roadmap (rating / opinion-scale / NPS / dropdown / ranking — one schema
  investment, amortized over five block types). Building templates before those
  block types land means rebuilding them once the new question types exist. Wait
  for Stage 3.
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

      Lower priority overall; revisit when the P2 content clusters are in place. Start
      with **Dutch, then Polish** when it does come up.
