# Upload images, vote on people & dates: channel drafts

Brief: `subo/docs/releases/2026-11-06-upload-images-vote-on-people-dates.md` (replaces the
2026-11-04 brief, never announced).
Post: `src/content/blog/discord-poll-images-people-games-dates.md`
(`https://subo.gg/blog/discord-poll-images-people-games-dates/`).

Plan lines confirmed by the operator 2026-11-06: uploads and Vote are on every plan, Free
included; paid plans allow larger files (**never print the size figures**); thumbnails stay
Premium, `thumbnail_upload` included; uploads use no credits.

**Release sequence (operator, 2026-11-10, three posts since 2026-11-11):**

1. Publish the images + vote post.
2. Publish the file uploads post (`discord-file-uploads.md`) and the optional questions post
   (`discord-survey-optional-questions.md`), brief `2026-11-09-file-uploads.md`. Optional
   questions is its own post because it applies to every question block (operator).
3. **One** Support Server post linking all three (below).
4. The campaign to admin channels: `subo/campaigns/release-recap-2026-11.md`.

X and top.gg follow the posts. Nothing links to a post until it is published
(`draft: false`) and deployed. The Support Server already had the Audit and entry points,
so this post covers only these three.

---

## 1. Support Server (`discord-announcement`), all three posts

~1,350 characters, under the 2,000 limit. Three links would be a wall of cards, so only the
file uploads link is bare (its card shows); the other two are wrapped in `<>`.

```
## 📎 File uploads: ask for the screenshot

A new File Upload block lets members send screenshots, clips, PDFs or logs as their answer, attached in Discord or dropped in on the web. Files are stored privately: only your admins and the project's creator can open them.
https://subo.gg/blog/discord-file-uploads/

## ⏭️ Optional questions

Turn off **Required** on any question and members get a Skip button. Skips are counted apart, so they never dilute a chart.
<https://subo.gg/blog/discord-survey-optional-questions/>

## 🖼️ Your own images, and votes on people, games & dates

Drop, paste or attach images anywhere Subo takes one, and type @ in a poll option to pick a member, a role, a game or a date, shown in each member's own time zone.
<https://subo.gg/blog/discord-poll-images-people-games-dates/>

Heads-up: `/poll` lost `scoring` (it switches on by itself when you set `correct` or `scores`) and `info_display` (use Edit or the web app).

Every plan, Free included.

Questions, issues, suggestions? Share them in #✨┃feedback-suggestions  - or for support, please open a private ticket in #🎫┃support-ticket  

:green_heart: :subo:
@Updates
```

The `/poll` heads-up breaks the "no caveats" rule on purpose: admins who type
`scoring:` from memory will hit it, and this channel is where they would look.

---

## 2. X: three standalone posts (`x-thread`)

Rewritten 2026-11-13 to cover all three releases. **Three separate posts, not one thread**
(operator): each release gets its own hook, image and link, and stands alone for someone who
never sees the other two. Space them out, biggest first: file uploads, then images and votes
a day or two later, then optional questions. All under 280 with each URL counted as 23
characters. Every plan line confirmed by the operator (file uploads 2026-11-11, the others
2026-11-06 and 2026-11-11).

**Post 1: file uploads** (image: the hero, the hoist; or `file-uploads-discord-receipt.png`,
which reads well small)
```
A bug report without the screenshot is a guessing game.

Subo can now ask for it: members attach screenshots, clips or PDFs to their reply in Discord, or drop them in on the web. Files stay private, next to the rest of their answers.

https://subo.gg/blog/discord-file-uploads/
```

**Post 2: images and votes** (image: the hero, or `images-vote-game-poll.png`)
```
Every Discord server votes on the same things: who leads, what we play, when we meet.

Subo polls now take members, roles, games and dates as options, with avatars, game icons and every date in each member's own time zone. Plus your own images.

https://subo.gg/blog/discord-poll-images-people-games-dates/
```

**Post 3: optional questions** (image: `optional-web-skip.png`, or the hero)
```
Force people to answer every question and some will make answers up.

Any question in your Subo surveys can now be optional, with a Skip button in Discord and on the web. Skips are counted apart, so they never skew your charts.

Free on every plan.

https://subo.gg/blog/discord-survey-optional-questions/
```

---

## 3. top.gg news post (feature-launch, ~400 words)

Rewritten 2026-11-13 to cover all three releases. Hero image:
`public/images/blog/file-uploads/file-uploads-hero.webp` (the hoist), the most distinctive of
the three and the biggest release.

```markdown
# Ask for the screenshot: file uploads, optional questions and smarter polls in Discord

Subo the Survey Bot runs surveys, polls and quizzes inside Discord as a conversation: one
question at a time, in a DM, a private thread or on the web. Three new things make it
handle more of what a community actually collects.

## Members can send files as their answer

A bug report needs the screenshot, a fan-art contest needs the art, a staff application
needs the résumé. A new File Upload block asks for them: members attach images, documents,
audio, video or zip files to a normal reply in Discord, or drop them in on the web. You
choose which kinds are accepted and how many. If a file is refused, the member is told why
in one sentence, and good files in the same reply are kept. Files are stored privately and
open only for your admins and the project's creator, including from your exports.

## Any question can be optional

A chat has no "Next" button, so until now every question in a Subo survey had to be
answered. Turn off **Required** on a question and members get a Skip button, in Discord
and on the web. Skips are counted separately, so a skipped question never drags down an
average or shrinks a chart.

## Polls about people, games and dates

Most server votes are about who leads, what we play or when we meet. Type `@` in a poll
option to pick a member, a role, a game or a date: members see names, avatars and game
icons, and each member sees the date in their own time zone. Polls also take your own
images now, dropped in from your device or attached in Discord.

All three work on every plan, Free included. Storing uploaded files uses credits, by size.

Read more on the Subo blog:
[file uploads](https://subo.gg/blog/discord-file-uploads/),
[optional questions](https://subo.gg/blog/discord-survey-optional-questions/),
[polls about people, games and dates](https://subo.gg/blog/discord-poll-images-people-games-dates/).
Or [add Subo to your server](https://subo.gg/invite/).
```
