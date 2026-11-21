---
title: "Vote on People, Games and Times in a Discord Poll"
description: "Build one-tap Discord polls whose options are members with their avatars, real games with their icons, or times every member reads in their own time zone. Three templates, and how to swap their options with @."
pubDate: "Nov 20 2026"
audience: "community managers running recognition votes, game nights, and events"
setupTime: "about 5 minutes per poll"
bestFor: "Member of the Month votes, picking what to play at game night, and finding an event time across time zones"
dimension: "engage"
features: ["polls", "member options", "game options", "time options", "time zones"]
relatedSlugs: ["event-rsvp-streak", "prediction-poll"]
templateSlugs: ["member-of-the-month-poll", "game-night-poll", "party-like-1999-time-poll"]
faq:
  - q: "How do I put members, games or times in a Discord poll?"
    a: "In the poll editor, type @ in an option and pick from the list: Members, Roles, Games, or Date & time. The option then shows the member's name and avatar, the role's name, the game's name and icon, or a time in each reader's own time zone, in Discord and on the web."
  - q: "Does a time option show in each member's time zone?"
    a: "Yes. You enter the time in your own time zone, and every member reads it in theirs, in their own language. On Discord, time options use the Emoji only answer style: Subo numbers the buttons and lists the times in the poll, because a button label can't show a time in each reader's zone."
  - q: "Why does the Member of the Month template show Member 1 to Member 4?"
    a: "A template can't hold another community's members, so it ships with placeholders. Replace each one with @ and pick a member under Members. Games and times carry over as they are."
  - q: "What happens to member and role options when I copy a poll to another community?"
    a: "Members and roles belong to one community, so the copy keeps their names as plain text, ready to replace with @ in the new community. Games and times copy as they are."
---

Three one-tap polls whose options are not plain words: members of your community, real games, and dates and times. Each option is picked with **@** in the editor, so it shows a name and avatar, a game icon, or a time in every reader's own time zone, in Discord and on the web.

The feature itself was announced in [Upload images and vote on people, games and dates](/blog/discord-poll-images-people-games-dates/). This recipe walks through the three templates that use it, and how to make each one yours.

---

## How an @ option is built

Type **@** in an option and pick from the list:

| You pick | The option shows | Good for |
|---|---|---|
| **Members** | The member's name and avatar | Member of the month, MVP, best build, host of the week |
| **Roles** | The role's name | Which team, which squad, which guild |
| **Games** | The game's name and icon | Game night, what to stream next, tournament game |
| **Date & time** | The date and time in each reader's own time zone and language | Event slots, deadlines, "when do we start" |

The option stores a small code (Discord's own format), and Subo shows the name, avatar, icon or time everywhere: the poll in Discord, the web survey, the Results and Responses tabs, and the exports. Give a member, role or game option its own emoji too, like any other option: Discord buttons and menus show the emoji, not the avatar or the icon.

**Times** are the one exception on Discord buttons: a button label can't show a time in each reader's zone, so time options use the **Emoji only** answer style. Subo numbers the buttons, and the times themselves are listed in the poll, each in the reader's own zone.

---

## 🏅 Member of the Month

**The question:** "Who's our Member of the Month? 🏅" with four options.

**What to change:** the options are placeholders, **Member 1** to **Member 4**. A template can't hold your members, so replace each one: open the option, delete the text, type **@** and pick a member under **Members**. Add or remove options to match your nominees.

**Built in:** results stay hidden while the vote is open and are revealed when it closes, so early votes don't snowball. Members can change their vote. Each voter earns participation XP.

**Ideas:** MVP of the tournament, best clip of the week, helper of the month, or a vote between roles ("which team wins the event?") with **@** under **Roles**.

[Use the Member of the Month template](/templates/member-of-the-month-poll/)

---

## 🎮 Game Night: What Are We Playing?

**The question:** "What should we play at game night? 🎮" with five games: Minecraft, Among Us, Rocket League, Lethal Company and Fortnite.

**What to change:** keep the games your community plays and swap the rest. Delete an option's text, type **@**, and search under **Games**. Any game Discord knows can be picked, with its icon.

**Built in:** a live tally everyone can see, and members can change their vote.

**Tip:** pair it with the Time Poll below when the night itself isn't decided yet.

[Use the Game Night template](/templates/game-night-poll/)

---

## 🪩 Party Like It's 1999 (Time Poll)

**The question:** "Party like it's 1999! 🪩 When should the countdown party start?" with four slots on New Year's Eve 1999. Each reader sees them in their own time zone, so depending on where you live the countdown starts on the afternoon of December 31, 1999, or just after midnight on January 1, 2000.

**What to change:** the dates. Yes, they are in 1999, and that is the point: they show you how a time option works, and they can't be posted by accident without anyone noticing. Delete an option's text, type **@**, pick **Date & time**, and choose the date and time. You enter it in your own time zone; every member reads it in theirs.

**Built in:** the **Emoji only** answer style (Discord buttons can't show a live time), a live tally, and members can change their vote.

**Ideas:** pick the raid night, the stream schedule, the AMA slot, or the deadline for contest entries. When you need every slot that works for each member rather than one favorite, the [scheduling poll](/templates/scheduling-availability-poll/) asks for availability instead.

[Use the Time Poll template](/templates/party-like-1999-time-poll/)

---

## Good to know

- **Copying to another community:** games and times carry over as they are. Members and roles belong to one community, so a copy shows their names as plain text, to replace with **@** in the new community.
- **Results and exports** show names, game titles and times, never the codes.
