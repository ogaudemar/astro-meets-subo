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
| Theme test: fandom probe | `909218892285489152` | `909218853626589184` | 19 fandom keywords, any project type | €1/day, max €5 CPM, ends 2026-12-04 | **Paused 2026-11-17** (conclusions below) |
| Theme test: K-pop (group member quiz) | `911792129697832960` | `911792076862185472` | 20 K-pop keywords (kpop, groups, idol) | €1/day, max €5 CPM, ends 2026-12-18 | Active since 2026-11-21 |
| Theme test: Pokémon (personality quiz) | `911792130754797568` | `911792077835264000` | pokemon, pokémon, pikachu, pokedex | €1/day, max €5 CPM, ends 2026-12-18 | Active since 2026-11-21 |
| Theme test: Minecraft (hard trivia) | `911792131560103936` | `911792078904811520` | minecraft, minecraft quiz, mc | €1/day, max €5 CPM, ends 2026-12-18 | Active since 2026-11-21 |
| Theme test: Anime (theme song quiz) | `911792132436713472` | `911792079907250176` | anime, manga, anime quiz/music/opening + 35 shows from the quiz + Re:Zero | €1/day, max €5 CPM, ends 2026-12-18 | Active since 2026-11-21 |

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
- `appy` was half the impressions at 0.37% CTR. Searching a rival bot's name means the person
  already chose that bot: **we don't bid on competing Discord bots** (Appy, EasyPoll…). Names of
  survey and form tools outside Discord (Google Forms, Typeform, SurveyMonkey, Tally, Fillout,
  Jotform) are fair game: someone searching those on top.gg wants that kind of tool in Discord,
  which is what we are.
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
| 2026-11-13 | Keywords search | Removed `easypoll` (competing Discord bot); added Google Form(s), Tally, Fillout, Jotform | pending |
| 2026-11-17 | Theme tests | Interim read, 4 days (see below) | Fandom: 1,113 impr, 5 clicks (0.45%), €2.17, avg rank 1.50. Potter: 11 impr, 1 click, €0.02 |
| 2026-11-17 | Fandom probe | Paused. Six themed templates built on Stage to replace it (see below) | |
| 2026-11-21 | Fandom campaigns | Four created from the Subo project (icon), custom copy ending "Free template, ready to share in your server.", learn_more to the template page, `utm_campaign=topgg-theme-<kpop\|pokemon\|minecraft\|anime>`, `utm_content=v1`. Created Paused by top.gg, set Active by hand. Anime runs the theme song ad first; light novel and Ghibli ads to rotate in | pending (estimates/day: K-pop 12-59, Pokémon 14-69, Minecraft 24-120, Anime 31-160, slot 1-2) |
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

### Fandom probe: final read, 2026-11-17 (4 days, then paused)

By keyword. The API returns only the top 10 sources; these add up to 635 of
1,113 impressions, so the other 478 are spread across the remaining keywords.

| Keyword | Impr | Clicks | Avg rank |
|---|---|---|---|
| roblox | 148 | 0 | 1.04 |
| anime | 107 | 0 | 1.15 |
| pokemon (dropdown + search) | 97 | 0 | 1.93 / 2.12 |
| minecraft | 74 | 0 | 1.08 |
| roleplay | 67 | 1 | 1.39 |
| valorant | 45 | 0 | 1.04 |
| kpop | 44 | 2 | 1.07 |
| genshin | 34 | 0 | 1.03 |
| dnd | 19 | 0 | 1.05 |

- Volume is real: roblox, anime, pokemon and minecraft are 57% of the visible impressions,
  at slot 1, for about €1.95 effective CPM.
- Clicks come from community-type audiences (kpop, roleplay), not game-title ones. Someone
  typing "roblox" or "minecraft" is most likely looking for a game-integration bot (account
  linking, server status), and a trivia ad doesn't answer that.
- The ad promises trivia to everyone. Roleplay and Minecraft/Roblox servers more often need
  **applications** (character sheets, whitelist, staff) than quizzes: that's a message
  mismatch to test, not necessarily a dead audience.
- Potter: 1 click on 11 impressions is not a CTR; it says the Potter search volume is tiny.

**Conclusions, kept for later:**
1. **One generic fandom ad doesn't work.** A single "fandom quizzes" message sold to 19
   audiences gets slot 1 and almost no clicks. Each fandom needs its own ad and its own
   landing template.
2. **Keywords with volume and a template now** (each gets its own campaign): `kpop`,
   `pokemon`, `minecraft`, `anime`.
3. **Keywords with volume and no clicks, set aside:** `roblox` (148 impr), `valorant` (45),
   `genshin` (34), `roleplay` (67, 1 click), `dnd` (19). Likely intent is a game-integration
   bot (Roblox/Valorant account linking, stats) or, for `roleplay` / `dnd`, character sheets
   and applications rather than quizzes. Retest them only with a matching template (a
   roleplay character application, a whitelist application), not with a quiz.
4. **Not seen in the top 10 sources at all** (so under ~19 impressions in 4 days, or
   unmatched): `manga`, `honkai`, `star wars`, `marvel`, `mbti`, `zodiac`, `astrology`,
   `fandom`, `genshin impact`, `dungeons and dragons`.
5. Cheap inventory: ~€1.95 effective CPM at slot 1. Volume costs little here; relevance is
   what's missing.

### Next: one campaign per fandom (templates ready 2026-11-20, campaigns not launched)

Six templates (spec in the app repo at `docs/templates/fandom-batch-7.md`): built on Stage
(1677 to 1682), finished in ExtraSwell with images and personalized invitations, and
cloned into the Support Server catalog as 109052 to 109057. Landing pages are in
`src/content/templates/` with those `templateId`s, live once the flag SQL runs and `main`
is pushed (release brief `docs/releases/2026-11-20-fandom-quiz-templates.md`):

| Campaign | Keywords (draft) | Template(s) | Landing page |
|---|---|---|---|
| K-pop | kpop, k-pop, bts, blackpink, stray kids, twice, idol | Which K-pop Group Member Are You? | `/templates/kpop-group-member-quiz/` |
| Pokémon | pokemon, pokémon, pikachu, pokedex | Which Pokémon Are You? | `/templates/pokemon-personality-quiz/` |
| Minecraft | minecraft, mc, minecraft quiz | Hard Minecraft Trivia Quiz | `/templates/hard-minecraft-trivia-quiz/` |
| Anime | anime, manga, ghibli, light novel, isekai | Name That Anime Theme, Real or Fake Light Novel Titles, Which Studio Ghibli Dish Are You? | test the three as rotating ads (one at a time) |

Same settings as the theme tests (€1/day, max €5 CPM, custom ad to the landing page with
`appendUtm`, `utm_campaign=topgg-theme-<fandom>`). No competing Discord bot names in the
keywords (no Pokétwo or other Pokémon bots). Order of work before any campaign goes live:
operator plays and finishes the Stage builds → prod create + flag SQL → pages flipped to
`draft: false` with `templateId` → ads and campaigns created, after approval of copy and
budget.

If top.gg rejects trademarked words (Harry Potter, Pokémon, Marvel), fall back to descriptive
ones ("sorting quiz", "wizard school", "anime quiz").

**Wallet:** €10.17 on 2026-11-13. The two always-on campaigns use ~€0.45/day; both tests add up
to €2/day. Top up before starting the tests.

## Next actions

- [x] Fandom templates: built, images and invitations added, cloned to the Support Server
      (109052 to 109057), pages set live (2026-11-20).
- [ ] Run `reports/publish_templates_batch7_prod.sql` (app repo, pgAdmin), then push `main`
      so the six pages deploy.
- [x] Create the four fandom campaigns (2026-11-21, ids in the table above).
- [ ] 2026-11-28: first read of the four (stats by keyword: prune loose matches like `mc`,
      `txt`, `exo`, `nct`, `idol` if they show views without clicks; PostHog by
      `$initial_utm_campaign`). Wallet €19.35 on 2026-11-21: about 4 days at full budget,
      8 to 9 at the probe's pace; top up about €20 to cover the 4 weeks.
- [ ] Anime: rotate in the light novel and Ghibli ads after the first read.
- [ ] Fandom probe: delete or leave paused once the four fandom campaigns are live.
- [ ] 2026-11-26: read the Potter test (stats by keyword + PostHog by campaign); it stops on 2026-12-04.
- [ ] 2026-11-20: title test on the keywords campaign (see the log).
- [ ] Utility campaign: if the €10 bid doesn't bring position back, retarget to Subo's own tags
      (`poll`, `polls`, `survey`, `surveys`, `forms`, `quiz`, `application`).
- [ ] Build `project_created` in the app (brief: `subo/docs/posthog-project-created-brief.md`).
- [ ] Votes: add a vote reward and an occasional reminder in the support server.
