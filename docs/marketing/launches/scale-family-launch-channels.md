# Scale-family launch — channel copy (Phase S4)

Paste-from drafts for the four distribution channels of the scale-family release
(Rating, Opinion Scale, NPS, Ranking + the templates). Written 2026-08-18.

Order is the canonical one from the `feature-launch` skill, warmest audience to coldest:
**blog post → Support Server → X thread → top.gg.** The two blog posts are already live,
so everything here links to them.

- Post 1 (hub / announcement): `/blog/discord-rating-scale-nps-ranking-questions/`
- Spoke 1 (ranking): `/blog/discord-ranking-questions-rank-what-you-build-next/`

**Tier line confirmed by the user in-session (2026-08-18): all four question types are on
every plan, free included.** It appears once per channel, as good news, per the standing
hard rule.

**Screenshots** live in `public/images/blog/scale-family/`.

---

## 1. Discord Support Server (`@Updates`)

One message, 1,216 characters, inside Discord's 2,000 limit. Post 1's URL is bare so it
renders an embed card; the other two are wrapped in `<>` so the message is not a wall of
cards. Resolve `@Updates` and the two channel names to real mentions when posting.

```
## ⭐ Four new question types: your five point question now comes back as a score

Rating, Opinion Scale, NPS and Ranking are live in the Script Editor, on Discord, in web Convos, the API, reports and downloads.

- A five point question used to be five options, and options can only be counted. These store the number, so the question comes back as 4.4 out of 5 with the distribution behind it.
- Members answer by tapping, in the channel they are already in. That includes ranking: tap the items in order, no dragging, works on a phone.
- All four are on every plan, free included.

https://subo.gg/blog/discord-rating-scale-nps-ranking-questions/

## 🏆 Ranking in depth, and templates to clone

Average rank, first choice counts, and what to do with the items nobody ranked: <https://subo.gg/blog/discord-ranking-questions-rank-what-you-build-next/>

Three new templates (Rank Your Favorites, CSAT, CES), plus nine that now use the real scales instead of faking them with options: <https://subo.gg/templates/>

Questions, issues, suggestions? Share them in #✨┃feedback-suggestions  - or for support, please open a private ticket in #🎫┃support-ticket  

:green_heart: :subo:
@Updates
```

---

## 2. X thread

Five posts. Every one is under 280 with URLs counted at X's flat 23 characters
(verified). The hook opens on the reader's problem and carries no link, per the hook rule.
Pair an image with every post after the hook.

**1 / Hook** — no link. Optional image: `scale-family-hero.webp`.

```
Every rating scale you have ever sent your community was a web page they had to leave Discord for.

Subo now asks four of them in the chat. 🧵
```

**2 / The release** — image: `star-rating-respondent-pov-discord.png`

```
1. Rating, Opinion Scale, NPS and Ranking.

A five point question used to be five options, and options can only be counted. These store the number, so it comes back as 4.4 out of 5 with the distribution behind it.

subo.gg/blog/discord-rating-scale-nps-ranking-questions
```

**3 / Ranking** — image: `ranking-full-answer-respondent-pov-discord.png`

```
2. Ranking, with no dragging.

Members tap the items in order and the ranks land on the buttons. That is what makes it work in a chat client, and on a phone, where drag and drop reordering is miserable in every tool.

subo.gg/blog/discord-ranking-questions-rank-what-you-build-next
```

**4 / Why it beats a multi-select** — image: `Analytics-ranking-1stchoice-bowie.png`

```
3. List nine features, ask members to check what they want, and seven of them clear 60%.

Everything is popular. Nothing is first. You still have to pick.

Approval is cheap. A ranking makes the respondent spend something, so the answer is worth more.
```

**5 / Closer** — image: `Analytics-rating-stars.png`

```
4. Templates to start from: three new ones (Rank Your Favorites, CSAT, CES), and nine existing templates that dropped the fake scales for the real blocks.

All of it is on every plan, including free.

subo.gg/templates
```

---

## 3. top.gg news post

A news feed post, not the listing blurb. ~370 words, written for someone who has never
heard of Subo, leading with capability rather than release news.

**Hero image:** `ranking-full-answer-respondent-pov-discord.png` (a ranking in progress
inside a Discord channel; it carries the whole argument at a glance and no other survey
tool can produce it).

**Title:** Rating scales, NPS and ranking, answered inside Discord

```markdown
Most survey tools ask you to send your community somewhere else. You post a link, they leave the channel, and you find out how many of them actually clicked. Subo asks the question where the conversation already is: as a friendly chat in Discord, one question at a time, with buttons instead of a form.

Subo now covers the question types that used to be the reason people left. There are four of them.

**Rating.** Two to ten points, drawn as stars, plain numbers or your own emoji set. A member taps once.

**Opinion Scale.** Agreement, satisfaction, likelihood, importance or frequency, with a word on every point. Five presets ship translated, so applying one writes the labels for you. That covers Likert items, and the seven point version renders as a dropdown so it stays readable on a phone.

**NPS.** The standard recommendation question, locked to 0 to 10, with the standard anchors rendered in each respondent's own language.

**Ranking.** No dragging. Members tap items in the order they want them, the ranks appear on the buttons, and it works on a phone, which drag and drop rankings never really have.

The part that matters after the survey closes: every one of these stores the number the member picked, not an option label. So a question comes back as an average with a distribution behind it, a ranking comes back as an average rank and a first choice count, and any of it can drive skip logic. Ask for a satisfaction score and follow up only with the people who gave you a 6 or less.

All four are on every plan, including free. If you would rather start from something that already works, the template library has ready made surveys built on them, including CSAT, customer effort and a ranking template you can clone in a click.

Add Subo, or read how the question types work, at [subo.gg](https://subo.gg).
```

**Separate from this:** the P1 top.gg *listing* soft refresh (add templates + prediction
polls, fresh scale-family screenshots) is a manual edit against curated screenshots, not a
kit paste. Still open.

---

## 4. Changelog — DONE in-repo, nothing to paste

- **EN** derives automatically from the blog collection: Post 1 carries the
  `announcement` tag and `draft: false`, so `/changelog` already lists it. Verified in
  `dist/changelog/index.html`.
- **FR** needed a row, since `/fr/changelog` falls back to the English title and
  description when a slug is missing from `src/data/changelog-blog-fr.ts`. Added, so the
  French page no longer mixes languages. Verified in `dist/fr/changelog/index.html`.
- Spoke 1 (the ranking post) is deliberately **not** tagged `announcement`: it is an
  editorial spoke, not a release, and it would double-list the same release.
- **DE** has no changelog page yet; that is the standing `legacy-releases.ts` schema item.
