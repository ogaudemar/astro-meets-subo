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

## 2. X thread (`x-thread`)

Four posts, all under 280 with each URL counted as 23 characters.

**1/4** (no link, image: screenshot 3, the poll in Discord with an uploaded image)
```
Every Discord server votes on the same three things: who leads, what we play, and when we meet. 🧵

Subo now sets up each of those polls in about a minute, with your own picture on top.
```

**2/4** (image: screenshot 1, the Upload tab with a preview)
```
1. Upload your own images.

Drop, paste or attach a picture in polls, Convos and invitations, in the web app or right from Discord. No more hunting for an image's address.

https://subo.gg/blog/discord-poll-images-people-games-dates/
```

**3/4** (image: screenshot 5, the @ picker with avatars and game icons)
```
2. Type @ in a poll option to pick a member, a role, a game or a date.

Members see names, avatars and game icons. Dates show in each member's own time zone, so a player in Paris and one in Los Angeles both read their local time.
```

**4/4** (no image)
```
Works in polls and Convos, in your server, in DMs and on the web. Every plan, Free included.

https://subo.gg/blog/discord-poll-images-people-games-dates/
```

---

## 3. top.gg news post (feature-launch, ~380 words)

Hero image: the post's hero (not briefed yet; screenshot 3 until there is one).

```markdown
# Discord polls with your own images, members, games and dates

Most of the polls a Discord server runs answer one of three questions. Who should lead the
raid, or become the next moderator? Which game do we play on Friday? What time does the
event start? Subo the Survey Bot now sets up each of those in about a minute, with your
own picture on top.

## Upload an image the way you would in a chat

Every image field in Subo takes a file straight from your device. In the web app, drop a
file in, paste a screenshot from your clipboard, or click to choose one. In Discord,
`/poll` has an `image_upload` option that opens Discord's file picker, and whenever Subo
asks you for an image you can attach it to your reply. PNG, JPG, GIF and WebP all work,
animations stay animated, and Subo keeps its own copy, so the picture does not break when
the original post is deleted.

## Pick a member, a role or a game with @

In Subo's Script Editor, type `@` in an answer option and pick from Date & time, Members,
Roles and Games. A member shows with their name, and their avatar on the web; a game shows
with its icon. A mod election is one poll with one option per candidate; game night is one
poll with one option per game.

## Dates in everyone's own time zone

Pick a date and time once and choose how it reads: "November 4, 2026 at 5:00 PM",
"Wednesday, November 4", or "in 3 days". Every member then sees that moment in their own
language, date format and time zone, in Discord and on the web. A member in Paris and one
in Los Angeles each read the event on their local clock.

## Works wherever your members answer

Polls and conversational surveys (Convos) alike, in a server channel, in a DM or on the web,
with buttons, emoji buttons or drop-down menus. Results and exports show names instead of
Discord's raw codes.

Both work on every plan, Free included.

[Read how it works on the Subo blog](https://subo.gg/blog/discord-poll-images-people-games-dates/),
or [add Subo to your server](https://subo.gg/invite/).
```
