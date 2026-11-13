# top.gg ads

Dashboard: https://top.gg/discord/bots/946888973035380806/dashboard
Managed through the **topgg MCP** in Claude Code (`/mcp` to authenticate). It covers ads,
campaigns, stats, wallet and search, not listing announcements.

## Setup

| Thing | Id |
|---|---|
| Project (Subo the Survey Bot) | `319293977721806848` |
| Bot | `946888973035380806` |

Ids are 64-bit: always pass them to the MCP as strings.

Listing tags: application, encuesta, enquete, forms, poll, Polling, Polls, quiz, sondage, survey,
surveys, Utility. Votes: 97 (Tickety, which comes first when searching "poll", has 11,753).

## Campaigns

| Campaign | Id | Ad id | Targeting | Budget / bid | Status |
|---|---|---|---|---|---|
| Subo keywords search | `874193311338897408` | `874193311284371456` | Search keywords on bot pages (poll, quiz, form…) | €1/day, max €10 CPM | Active |
| Subo Utility Category | `874714077068410880` | `874714076992913408` | Tag `utility` | €1/day, max €10 CPM | Active |
| Theme test: Potter (sorting quiz) | `909218891559874560` | `909218852636733440` | Potter keywords, any project type | €1/day, max €5 CPM, ends 2026-12-04 | Active since 2026-11-13 |
| Theme test: fandom probe | `909218892285489152` | `909218853626589184` | 19 fandom keywords, any project type | €1/day, max €5 CPM, ends 2026-12-04 | Active since 2026-11-13 |

Current ad copy:

| Ad | Title | Description |
|---|---|---|
| Keywords search | Subo the Survey Bot | Polls, quizzes, forms and surveys that run right inside Discord. Now with file uploads and times based on your members' time zone. |
| Utility | Subo: polls, forms, surveys, quizzes | 💪 The most powerful survey bot for Discord + XP + role rewards + Dashboard + API + MCP server |
| Potter | Hogwarts House Sorting Quiz for Discord | Sort your whole server into the four houses. Nine questions, a reveal for every member, ready to clone. |
| Fandom | Fandom quizzes for your Discord server | Trivia on your favorite anime, game or series, with instant feedback on every answer and a role or XP for everyone who passes. |

Both theme-test ads link to subo.gg template pages with `appendUtm: true`
(`utm_campaign=topgg-theme-potter` / `topgg-theme-probe`, `utm_content=v1`).
Landing pages: https://subo.gg/templates/hogwarts-house-sorting/ and
https://subo.gg/templates/lore-trivia-quiz/

## Baseline (90 days to 2026-11-13)

| | Keywords search | Utility tag |
|---|---|---|
| Impressions | 7,649 | 5,356 |
| Clicks (CTR) | 112 (1.46%) | 63 (1.18%) |
| Installs (top.gg-reported) | 44 | 29 |
| Spend | €18.18 | €14.03 |
| Cost per install | €0.41 | €0.48 |
| Avg position | 1.17 | 4.66, sliding since 2026-10-21 |

Findings:
- **Neither campaign spends its budget.** Keywords is at slot 1 and limited by search volume:
  more keywords, not more money. Utility lost its auction position on 2026-10-21 (CPM about
  €4.30 against a €5 cap).
- Best keywords by CTR: `vote` (search, 8.3%), `poll` (dropdown, 5.3%), `quiz` (dropdown, 3.3%).
- `appy` was half the impressions at 0.37% CTR. Competitor names attract people who already
  chose another tool: **we don't bid on competitor names.**
- Keyword matching is loose: `apollo` matched without being on the list.
- Traffic is too thin for parallel A/B tests (~5,000 impressions per arm to read a 50% lift
  at 1.5% CTR). Test sequentially, one variable at a time, big differences only.

## Experiment log

| Date | Campaign | Change | Result |
|---|---|---|---|
| 2026-11-13 | Keywords search | Removed `appy`, added keywords (by hand) | pending |
| 2026-11-13 | Keywords search | Description → "Polls, quizzes, forms and surveys that run right inside Discord. Now with file uploads and times based on your members' time zone." | pending |
| 2026-11-13 | Utility | Title → "Subo: polls, forms, surveys, quizzes"; budget €5 → €1/day; max bid €5 → €10 CPM (to win back position) | pending |
| 2026-11-13 | Theme tests | Created, copy reviewed, launched | pending |
| 2026-11-20 (planned) | Keywords search | Title "Subo the Survey Bot" → "Subo: polls, quizzes & forms". Pull the 7-day baseline first. | |

## Theme tests: how to read them

The question: are there fan audiences with lots of searches and cheap impressions, where a
themed template would bring in installs? Run each for about 10 to 14 days, then:
1. `get_campaign_stats` → the **sources** list gives impressions and clicks per keyword. That's
   search volume (we're usually in slot 1) and interest. Spend isn't split by keyword: to price
   one theme, give it its own campaign.
2. PostHog, by `$initial_utm_campaign`: did any of those clicks install and clone?
3. A theme that wins gets its own template and campaign. A theme with volume but no clicks gets
   dropped.

If top.gg rejects trademarked words (Harry Potter, Pokémon, Marvel), fall back to descriptive
ones ("sorting quiz", "wizard school", "anime quiz").

**Wallet:** €10.17 on 2026-11-13. The two always-on campaigns use ~€0.45/day; both tests add up
to €2/day. Top up before starting the tests.

## Next actions

- [ ] ~2026-11-27: read the theme tests (stats by keyword + PostHog by campaign); they stop on 2026-12-04.
- [ ] 2026-11-20: title test on the keywords campaign (see the log).
- [ ] Utility campaign: if the €10 bid doesn't bring position back, retarget to Subo's own tags
      (`poll`, `polls`, `survey`, `surveys`, `forms`, `quiz`, `application`).
- [ ] Build `project_created` in the app (brief: `subo/docs/posthog-project-created-brief.md`).
- [ ] Votes: add a vote reward and an occasional reminder in the support server.
