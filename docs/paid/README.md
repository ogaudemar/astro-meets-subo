# Paid acquisition

The paid half of the marketing plan. [authority-roadmap.md](../authority-roadmap.md) covers what
we earn (SEO, AEO, GEO, directories, PR). This folder covers what we buy: which channels, what
we test on each, and what we learned. Organic builds the base; paid is how we scale it once we
know what a customer costs.

## Channels

| Channel | Folder | Status |
|---|---|---|
| top.gg ads | [topgg/](topgg/README.md) | **Live**: 2 always-on campaigns + 2 theme tests, €1/day cap each |
| Google Ads | `google-ads/` (create when started) | Not started |
| Meta (Facebook, Instagram) | `meta/` | Not started |
| ChatGPT / AI assistant ads | `ai-assistants/` | Not started |
| Reddit, X | `reddit/`, `x/` | Not started |

Each channel gets its own folder with a `README.md` in the same shape as `topgg/`:
**setup** (accounts, ids, tools), **campaigns** (what is running and why), **experiment log**
(dated, one line per change, with the result), **next actions**.

## Rules that apply to every channel

1. **Every paid link carries UTM tags** and lands on a subo.gg page, never straight on an
   app.subo.gg route. Convention and funnel: [tracking.md](tracking.md).
2. **Judge on cost per install, then per project, then per paying community.** Clicks and CTR
   are only for diagnosing an ad, never for deciding where the money goes.
3. **One change at a time per campaign**, logged with its date, so a result can be traced to a
   cause. Our volumes are small: a change needs weeks, not days, to read.
4. **Tests get an end date and a budget cap** when they are created. Nothing open-ended unless
   it has already earned its place.
5. **Ad copy follows house style**: subo-glossary terms, US spelling, no em dashes.

## Budget

| Channel | Monthly cap | Notes |
|---|---|---|
| top.gg | ~€15 + tests | Wallet top-ups by hand; check balance before starting a test |

## Unit economics (fill in as data arrives)

| Metric | top.gg | Google | Meta |
|---|---|---|---|
| Cost per click | €0.16 to 0.22 | | |
| Cost per install | €0.41 to 0.48 (top.gg-reported) | | |
| Cost per first project | needs `project_created` | | |
| Cost per paying community | needs volume | | |
