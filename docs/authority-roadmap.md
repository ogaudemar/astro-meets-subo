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

- [ ] **top.gg** — full listing: long description with keywords, tags, screenshots, video, links back to subo.gg. Keep rating/reviews growing (already 4.78/27).
- [ ] **discadia** — optimized listing
- [ ] **discordbotlist.com** — optimized listing
- [ ] **discord.bots.gg** — optimized listing
- [ ] **discords.com / other reputable lists** — evaluate, list where quality
- [ ] Ensure each links to subo.gg with consistent name/description (entity consistency reinforces the Organization schema)

**Success metric:** listed + optimized on the top 4; referral traffic visible in PostHog.

---

## P2 — High-intent content on our own blog  ⭐ compounding GEO/AEO

Target the queries buyers actually search. This is where the schema + `llms.txt`
groundwork converts into citations and organic traffic. One page per intent.

- [ ] "**Best Discord poll bots**" (and "best Discord survey bots") — honest comparison, include Subo
- [ ] "**[Competitor] alternative**" pages (e.g. Simple Poll, native Discord polls, MEE6 polls)
- [ ] "**How to create a Discord poll / survey**" (with and without a bot) — capture how-to intent (some of this exists; expand + interlink)
- [ ] "**Anonymous surveys in Discord**" (exists — keep fresh, add FAQ schema)
- [ ] Add `FAQPage` schema to each new content page (pattern in `TemplatePage.astro`)
- [ ] Interlink: content → templates → pricing (internal linking lifts the whole cluster)

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
