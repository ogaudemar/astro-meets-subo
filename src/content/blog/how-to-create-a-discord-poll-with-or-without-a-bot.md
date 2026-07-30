---
title: "How to Create a Discord Poll (Native or with a Bot like Subo)"
description: "How to create a poll in Discord: the quick native way, and the more powerful way with a survey bot like Subo (anonymous voting, roles, scoring, scheduling, API)."
pubDate: "May 07 2023"
updatedDate: "Jul 24 2026"
tags: ["tutorial", "discord", "polls", "how-to"]
author: "Subo Team"
heroImage: "/images/blog/poll-tuto/poll-tuto-hero.webp"
draft: false
---

Polls are one of the fastest ways to get feedback from your community and make decisions everyone feels part of. This guide covers the two ways to run a poll in Discord:

- **Discord's built-in poll**: free, instant, good enough for a quick vote.
- **A survey bot like [Subo](/invite)**: when you need more flexibility or more features (e.g. images, more than 10 options, anonymous voting, required roles, rewards, scoring for a quiz or prediction, scheduling, or results you can export...)

> **Quick or elaborate?** For a simple one-off vote, the `/poll` slash command below takes seconds, right inside Discord. For anything more involved (multi-question surveys, quizzes with scoring, skip logic, conditional rewards, or reusable templates), the [Subo web app](https://app.subo.gg) is the recommended way to build. Start simple in Discord, then move to the web app when your projects get bigger.

Just weighing Subo against Discord's native polls? We compare them head-to-head in [Discord native polls vs Subo](../discord-native-polls-vs-subo-the-survey-bot-comparison). This article is the how-to.

## Option 1: Discord's native poll

Discord now has polls built in, no bot required:

1. In the message box of any channel, open the **+** menu (or the poll icon) and choose **Create Poll**.
2. Type your **question**.
3. Add your **answers** (up to 10), each with an optional emoji.
4. Pick a **duration** (1 hour up to 1 week) and, if you want people to pick more than one option, toggle **Allow multiple answers**.
5. Send it. Members vote by clicking an answer, and the tally updates live.

Native polls are convenient for a quick, casual vote. Their limits: results are always public, anyone in the channel can vote, there's no anonymity or role-restriction, there is no reward (XP, role, etc) for those who participate and you can't export or combine the data. When those matter, use a bot.

## Option 2: Polls with Subo

[Subo the Survey Bot](/invite) turns a poll into something you can actually run a community on: anonymous or transparent, role-gated, rewarded, scored, scheduled, and exportable alongside your survey data.

### Three ways to start a Subo poll

Once [Subo is on your server](/invite), you can create a poll three ways:

- **`/poll`**: build one directly in Discord (the walkthrough below).
- **`/template`**: start from a ready-made poll template and tweak it. Templates work right in the Discord bot, and are even easier to adapt in the [web app](https://app.subo.gg).
- **`/draft`**: let Subo's AI write it for you. For a poll, just ask it to generate a one-question, closed-question survey, and Subo drafts the question and options ready to edit.

### The `/poll` walkthrough

Type `/poll` in the channel where you want it posted (you can move it later).

1. Enter your **question**.
2. Enter your **answer options**, separated by semicolons `;`, for example `Unity;Unreal;Blender`. You can add emojis: `🤝Unity;👽Unreal;🥤Blender`. Up to 24 options.
3. Hit **Enter**, review the summary, and press **Start Now** to publish (or Edit to make changes).

![To create a Discord poll with Subo, use the /poll command](/images/blog/poll-tuto/6-oegwy.png)

That's the whole flow for a basic poll. But this is where Subo pulls ahead of a native poll: the `/poll` command exposes **23 options**, so you can shape almost everything before you post. You don't need them for a quick vote, but they're there when you want them.

![Fully-loaded command for a poll](/images/blog/poll-tuto/7-ftc7l.png)

#### All 23 `/poll` options, grouped by what they do

**Timing and lifecycle**

- **`start`**: schedule when the poll opens (e.g. `2h30m` to start in 2½ hours).
- **`time_limit`**: how long the poll stays open (e.g. `1d12h`).

**How people vote**

- **`max_select`**: cap how many options a voter can pick (`1` makes it single-choice or yes/no). If you don't use the option participants are allowed unlimited answers
- **`vote_change`**: let voters change their vote, or lock their first vote as final.
- **`voting_button`**: the voting style: full answer inside a button, emoji-only inside a button, or a select menu (recommended for more than 6 answers).
- **`required_role`**: only members with a given role can vote.

**Results and privacy**

- **`realtime_results`**: **Public** (everyone sees the tally), **Voters-only** (results appear after you vote), or **Hidden** (only you see them until the end).
- **`final_reveal`**: publicly reveal a hidden or voters-only poll's results when it closes.
- **`privacy`**: **Transparent** (any member can see who voted for what), **Semi-Private** (only you, the creator/admin, can), or **Anonymous** (no vote is linked to anyone, not even for you).


**Quiz and scoring** (turn a poll into a graded quiz)

- **`scoring`**: switch scoring on.
- **`correct`**: mark the correct answer(s), shown with a ✓ once the poll closes.
- **`scores`**: give each option its own points, and pipe the total with `[score]`.

**Rewards**

- **`role_reward`** *(Premium)*: grant a role to participants to all completers (you can grant it conditionally based on how they answered.
- **`xp`**: award XP, either a flat amount or based on the score / correct answers.

**Appearance and branding**

- **`chart_emoji`**: pick the emoji used to draw the result chart.
- **`image`**: add an image to the poll.
- **`thumbnail`** *(Premium)*: add a thumbnail (small image) to the invitation embed.
- **`color_open`** / **`color_closed`**: set the invitation's border color while open, and *(Premium)* a different color once it closes so a finished poll looks visibly different.
- **`call_to_action`**: the invitation message shown above the poll (ping a role, set the scene, motivate people to vote).
- **`info_display`**: decide whether to show poll details inside the invitation embed or tucked into an ephemeral to keep the embed clean. To choose which info rows to show/hide inside the poll details, use the web app

**Organization**

- **`name`**: give the poll a memorable name so it's easy to find later.
- **`channel`**: pick the channel or thread to post in.

After you hit Enter, Subo shows a summary before anything goes live. Click **Edit** to fine-tune further: set multiple required roles, auto-post results to a channel when the poll closes, tweak the invitation, or [clone the poll](../clone-surveys-across-servers) for repeated use.

![Example of a community using Subo polls with no vote change allowed](/images/blog/poll-tuto/5-o00pt.png)

### When to move to the web app

The `/poll` command is fast, but for bigger or recurring work the **[Subo web app](https://app.subo.gg)** is the recommended way to build. It's a visual editor for polls, surveys, and quizzes with full management, analytics, and team access.

- **Start from a [template](/templates)**: this-or-that polls, feature-prioritization votes, prediction contests, governance proposals and more, ready to run in a click. See the [template library](../subo-template-library-launch).
- **Design a full quiz** with [native scoring](../scoring-piping-quizzes): correct answers, per-option points, and a leaderboard.
- **Dress up the invitation** with a [custom design](../polls-grading-invite-customization) worth clicking.

### Automate polls with the API

Subo also has a [public API](../public-api-launch), so you can create and post polls programmatically. Hand it to your favorite AI agent or LLM and let it run: for example, have it post a fresh poll to your server automatically every morning. See the [API launch post](../public-api-launch) for what's possible.

## Which should you use?

For a throwaway vote, Discord's native poll is fine. The moment you care about honest answers, who can vote, rewarding participation, scoring a quiz, automating, or keeping the data, reach for Subo. For the full breakdown, read [Discord native polls vs Subo](../discord-native-polls-vs-subo-the-survey-bot-comparison). Weighing other bots too? See the [best Discord poll bots comparison](../best-discord-poll-bots), and [pricing](/pricing) for what's free vs Premium.

Ready to go? [Invite Subo to your server](/invite) and run your first `/poll`.
