# Marketing: user acquisition

This folder is how Subo gets new communities: what we earn (**organic**) and what we buy
(**paid**). Product docs, site engineering (i18n, components) and analytics plumbing live
elsewhere in `docs/`.

## How to use this folder (read this first, every session)

1. Read **this file**, then the README of the **one workstream** you are working on. That is
   all a session needs. Don't open `archive/` unless you need the history behind something.
2. **READMEs hold the current state only:** what's live, what's next, the rules that still
   apply. Keep each under ~150 lines.
3. **History goes in that workstream's `log.md`**, newest first, one dated entry per change
   or measurement. Finished work becomes one line in the log, not a section in the README.
4. **A change of direction gets a row in [decisions.md](decisions.md)**, with what it
   replaces and why. Then edit the README to match. No strikethroughs, no "superseded" blocks
   left in place. That's how the old roadmap reached 420 KB and contradicted itself.
5. **Before acting on any list more than a month old, re-open its URLs.** Three roadmap items
   died on 2026-09-07/08 because their premises were never checked.

## Map

| Area | Where | What it covers |
|---|---|---|
| Decisions | [decisions.md](decisions.md) | Every strategic call, dated, with what it replaced |
| Organic | [organic/README.md](organic/README.md) | Search, GEO/AEO, directories, links, content, terminology |
| Paid | [paid/README.md](paid/README.md) | One folder per channel (top.gg live), UTM convention, paid funnel |
| Launches | [launches/](launches/) | Per-release channel copy (Discord, X, top.gg posts) |
| Archive | [archive/authority-roadmap-2026.md](archive/authority-roadmap-2026.md) | The June to November 2026 roadmap, frozen. Read-only history |

Related outside this folder: [../analytics.md](../analytics.md) (funnel, PostHog is the
system of record), [../content.md](../content.md) (blog mechanics, product facts),
[../i18n.md](../i18n.md) (locales). Feature announcements start from a release brief in
`subo/docs/releases/` and follow the `feature-launch` skill.

## Where we are (2026-11-13)

- **Organic search is the weak link.** `subo.gg` has **5 indexed pages and 163 not indexed**
  (86 discovered, 70 crawled) five months after the move from `subo.ai`. The plumbing is
  verified correct. The reading as of today: Google treats `subo.gg` as a new, low-authority
  site, so **authority (outside links) is the binding constraint**, not page count or copy.
  Details: [organic/search/](organic/search/README.md).
- **AI answers already name us.** Subo is cited first for *best Discord survey bot*, through
  directories (top.gg, G2) more than through our own pages. Details: [organic/geo/](organic/geo/README.md).
- **Agent directories are the most active thread:** MCP registry live, Claude Connectors
  Directory in review, ChatGPT parked on an app-side reviewer login. Details:
  [organic/directories/](organic/directories/README.md).
- **Paid:** top.gg ads live at about €15/month, cost per install around €0.45.
- **Content cadence:** up to ~5 posts a month, driven by feature releases.

## Current priorities

1. **Earn links to `subo.gg`**: outreach on the user's cadence, and repoint every listing we
   control. [organic/links/](organic/links/README.md)
2. **Cloning guide screenshots** (user), then publish. The thin-page review is done and
   implemented: the site is not thin. [organic/content/](organic/content/README.md)
3. **Agent directories**: ChatGPT once the reviewer login ships, Claude review follow-up.
4. **Monthly Search Console reading** on both properties, logged in `organic/search/log.md`.
5. **Paid**: per-channel next actions in [paid/](paid/README.md).

## Metrics that decide things

| Question | Number | Where |
|---|---|---|
| Is organic recovering? | Clicks + impressions, `subo.ai` and `subo.gg` **summed**, monthly | Search Console, both properties |
| Is `subo.gg` being accepted? | Indexed page count | Search Console, Page indexing |
| Does a channel pay? | Cost per install, then per first project, then per paying community | PostHog funnel, [paid/tracking.md](paid/tracking.md) |
| Do AI answers cite us? | Citation in signed-out answers to fixed queries | [organic/geo/](organic/geo/README.md) |
