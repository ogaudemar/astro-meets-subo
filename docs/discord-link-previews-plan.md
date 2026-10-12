# Discord link previews: plan

Status: **Session 0 done (2026-10-06). Next up: Session 1.**
Each session ends by updating the status line above and ticking its checklist.

## Why

On 2026-10-05 Discord published how it builds link previews and added **component
embeds**: a page can ship a `discord:component-embed` JSON payload, and Discord draws the
preview as a Components V2 card (text, thumbnails, gallery, separators, accent color,
**link buttons**) instead of the default Open Graph card.

Our links get shared in Discord more than anywhere else, because that is where our users
are. A subo.gg link that carries its own "Add to Discord" or "Use this template" button
turns a share into an install without a page visit.

Sources (re-read before each session, the feature is new and may move):
- https://docs.discord.com/developers/link-previews/overview
- https://docs.discord.com/developers/link-previews/component-embeds
- https://docs.discord.com/developers/change-log#component-embeds-and-link-preview-docs
- Embed Debugger: https://discord.com/developers/embeds

## Rules we are working against

Open Graph (what every page already sends, and the fallback for everything below):
- Title cut at **70 bytes / 3 lines**, description at **350 bytes / 20 lines**. UTF-8 bytes,
  so French and German titles hit the limit sooner.
- `og:site_name` over 256 characters, image alt over 4,096, or any URL over 2,048: **no
  preview at all**.
- Title, description, site name: first non-empty tag wins. Layout, color, date: last wins.
- Tags must be in the server-rendered HTML; the whole fetch must finish in 10 seconds.
- Cached about 30 minutes; bust with a throwaway query string when testing.

Component embeds:
- `<script id="discord:component-embed" type="application/json">` in `<head>`, or
  `<link rel="discord:component-embed" type="application/json" href="…">` (same host,
  sub- or parent domain).
- Payload **≤ 3,000 bytes**, shape `{ "component": { "type": 17, "components": [...] } }`.
- One top-level Container (17), no nested Containers, **≤ 40 components** including it.
- Allowed: Action Row (1), Button (2, **link style 5 only**), Section (9), Text Display (10,
  Discord markdown), Thumbnail (11), Media Gallery (12, **≤ 10 items across the embed**),
  Separator (14). Container takes `accent_color` (integer) and `spoiler`.
- Media: png, gif, jpg, jpeg, webp, avif; mp4, webm, mov. http(s), ≤ 2,048 characters.
- **A payload that fails validation can mean no preview at all**, not a fallback. That is
  why Session 1 builds the guard before any page ships a payload.
- Crawler user agent: `Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)`.

House rules that apply to every payload: card copy lives in the translations files (no
strings in components), US English, no em dashes, glossary terms, and every subo.gg URL
ends with `/`.

## Session 0: Open Graph fixes (done 2026-10-06)

- [x] `og:site_name` = "Subo" (`BaseHead.astro`)
- [x] `theme-color` = brand green `#9eff00` (`BRAND_COLOR` in `consts.ts`)
- [x] `og:image:width` / `height` / `type`, measured at build time by `src/utils/og-image.ts`
      for any image under `public/`
- [x] `og:image:alt` + `twitter:image:alt` for the default image (`DEFAULT_OG_IMAGE_ALT`);
      other pages can pass `imageAlt`, none do yet
- [x] `og:pubdate` on blog posts (`publishedDate` prop, from `pubDate`)
- [x] `discord-announcement` skill: what a subo.gg card shows, the 70-byte title cut, the
      30-minute cache, checking with the Embed Debugger

Measured but not acted on: in the 2026-10-06 build, **29 of 149 pages have titles over 70
bytes**. Discord trims them. Titles are written for search first, so no change; revisit
only if a specific page gets shared a lot.

## Session 1: foundation and guard

Goal: the machinery and the safety net, proven on **one** page.

- [ ] `src/utils/discord-embed.ts`: TypeScript types for the allowed components and small
      builders (`container`, `text`, `section`, `thumbnail`, `gallery`, `separator`,
      `linkButtons`). Builders take strings from the caller; no copy in here.
- [ ] `src/components/DiscordEmbed.astro`: takes a payload, renders the
      `<script id="discord:component-embed" type="application/json">`. BaseHead gets an
      optional `discordEmbed` prop and renders it, so pages opt in one at a time.
- [ ] `scripts/check-discord-embeds.mjs` + `npm run check:discord-embed`, added to
      `npm run check` after the build. Reads every `dist/**/index.html` and fails on: payload
      over 3,000 bytes, invalid JSON, top level not one type-17 Container, a nested
      Container, over 40 components, a button that is not style 5 with a `url`, over 10
      media items, a media URL with an unsupported extension, any URL over 2,048 characters
      or not http(s), a subo.gg URL without a trailing slash, an em dash in any text. Also
      checks that a page with a payload still has `og:title` / `og:description` /
      `og:image` (the fallback the docs require).
- [ ] Prototype on the English homepage only: Subo wordmark/tagline as text, the OG image
      as a gallery item, one button "Add to Discord" → `https://subo.gg/invite/`.
- [ ] Get a payload in front of the Embed Debugger. It fetches a public URL, so decide in
      session: deploy to production (safe if the guard passes, the OG fallback is
      unchanged) or a preview Worker.
- [ ] Record what the debugger and a real Discord client actually render, here, under
      "Findings", before building more pages on assumptions.

Decide in this session:
- **Button attribution.** `/invite/` is a tracked redirect, so clicks count in the funnel,
  but they look the same as website clicks. Check whether `[redirect].astro` passes query
  strings through; if yes, use `/invite/?ref=discord-card`, and add the event to
  `docs/analytics.md`.
- **Accent color.** `accent_color` is an integer: `#9eff00` is `0x9eff00` = `10419968`.
  Put it next to `BRAND_COLOR` rather than hand-converting it in each page.

## Session 2: homepage and product pages, all locales

- [ ] Card copy under a new `discordEmbed` key per page in `en.json`, then the other
      locales that page exists in. Keep text short; the card is a pointer, like the
      Support Server posts.
- [ ] Pages: `/`, `/polls/`, `/features/`, `/survey-convos/`, `/forms/`, `/pricing/`,
      and their localized siblings.
- [ ] French: the user reviews. Spanish: the user proofs. Other locales: same process as
      the rest of their site copy, no extra reviewer.
- [ ] Button labels per locale use the lexicon/glossary terms (`npm run check:lexicon`
      must stay green).
- [ ] Check one EN and one FR page in a real Discord client.

## Session 3: template pages

- [ ] `TemplatePage.astro` builds the card from frontmatter: eyebrow or dimension label,
      title, a one-line summary, `ogImage` as thumbnail when present.
- [ ] Buttons: "Use this template" → `appCloneUrl` (already
      `https://app.subo.gg/app/templates?template=<slug>`), plus "Add to Discord" →
      `/invite/`.
- [ ] Labels in `en.json` (templates are English-only today).
- [ ] Spot-check three templates in the debugger, one per dimension.

## Session 4: blog posts

- [ ] `BlogPost.astro` builds the card: hero image as gallery item, title, date, author.
- [ ] Button: "Read the post". **Decide in session** whether a second "Add to Discord"
      button belongs on blog cards. The `discord-announcement` skill says a marketing CTA
      is nonsense in the Support Server, and blog posts are what we post there. A likely
      answer is no second button, or one only on comparison and how-to posts that mostly
      get shared outside our server.
- [ ] Both locales (`en`, `fr`).
- [ ] Update `discord-announcement` with how the blog card actually looks.

## Session 5: wrap-up

- [ ] `docs/components.md`: the `discordEmbed` prop, and where card copy lives.
- [ ] `CLAUDE.md`: one line pointing at this doc and the guard, the same way it covers
      `check:api`.
- [ ] Delete the "Findings" items that turned out not to matter; keep the rest as the
      reference for the next page type.

## Open questions (not blocking Session 1)

- **The default OG image says "subo.ai"**, the old domain, and has a white strip along the
  bottom (`public/images/subo-og.png`, 1200×630). It is the card image on every page
  without its own. Worth a refresh via the `mascot-illustration` skill.
- **`theme-color` also tints the mobile browser toolbar** (Chrome on Android, Safari) in
  bright green. If that is unwanted, the alternative is to drop the tag and set the color
  only through component embeds' `accent_color`, which leaves Open Graph cards without a
  bar.

## Findings

(Fill in from Session 1 on: what Discord actually renders, anything the docs got wrong.)
