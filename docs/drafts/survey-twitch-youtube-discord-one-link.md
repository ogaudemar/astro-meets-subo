---
title: "Ways in: One Survey for Your Discord, Twitch and YouTube Audience"
description: "Every Subo project now has separate ways in: a Discord post, a web link, and journeys and campaigns. Your Discord members answer from the post while one link reaches your Twitch followers, YouTube subscribers and game owners."
pubDate: "Oct 27 2026"
author: "Subo Team"
heroImage: "/images/blog/ways-in/ways-in-hero.webp"
tags: ["features", "web link", "verification", "audience sources", "twitch", "youtube", "steam"]
faq:
  - q: "Can I run a survey for my Twitch viewers?"
    a: "Yes. Connect your Twitch channel under Settings > Networks > Audience Sources, then set the project's web link to Verified only with Twitch ticked. Subo checks that each respondent follows your channel before the first question. If you only need to know who answered, set the link to Signed in and offer Twitch as a sign-in option: nothing is checked beyond the sign-in."
  - q: "Can one survey run in Discord and on the web at the same time?"
    a: "Yes. The Discord post and the web link are switched on separately on the project's Invite tab, and a project can have both. Members press the post in your server, everyone else uses the link, and all the responses land in the same project."
  - q: "Can I limit a survey to my YouTube subscribers?"
    a: "Yes. Connect your YouTube channel by signing in with the Google account that owns it, then tick it on a Verified only web link. Subo checks subscriptions. Paid channel memberships are not checked."
  - q: "Do people who sign in with Twitch or Google earn XP and roles?"
    a: "No. Rewards (XP, roles, achievements) go only to people who sign in with Discord. Everyone else's answers are collected under their name, just not rewarded."
  - q: "Does this cost extra?"
    a: "No. Ways in, Audience Sources and verification are on every plan, Free included."
draft: false
---

<!--
STAGED, NOT PUBLISHED. Delete this comment when publishing.
To publish: move this file to src/content/blog/ (same file name), set pubDate.
Before that, check:
1. Ship state in subo/docs/releases/2026-10-24-ways-in.md says live.
   (Steam confirmed working on production 2026-10-27: keep the Steam mentions.)
2. Screenshots retaken (shot list in the brief). ways-in-audience-sources.png still
   shows the old "verified surveys" wording: do not publish until it is replaced.
3. Hero rendered to /images/blog/ways-in/ways-in-hero.webp. Brief:
   .claude/skills/mascot-illustration/examples/ways-in-doors.md
4. Translations of the app strings are uploaded before claiming other languages.
-->

Until now a Subo project picked a side. Members answered in Discord, or people answered at a web link, and doing both meant cloning the project and running two copies. Now a project has separate **ways in**, and you switch each one on by itself on the project's **Invite** tab:

- the **Discord post**, the invitation in a channel that members of your server start from;
- the **web link**, which works anywhere: email, social media, your website, a Twitch panel;
- **journeys and campaigns**, which invite people directly.

Use any of them, or all three. Your Discord members keep answering from the post, the link picks up everyone else, and every response lands in the same project.

## Who the web link lets in

The web link has three settings, and the choice matters more than anything else on the tab.

**Anyone with the link.** No sign-in, so it suits a public feedback form or a giveaway entry. People already signed in to Subo with Discord are identified and can be rewarded if rewards are on; everyone else answers unidentified. If you would rather name nobody, the Invite tab offers a **Make the project Anonymous** button. Nothing is forced: your privacy, limits and rewards stay as you set them.

**Signed in** (new). Respondents pick an account and answer as themselves, with whichever platforms you tick under **Sign in with**: Discord, Twitch, Google or Steam. Nothing beyond the sign-in is checked, so there is nothing to connect first. Every response carries a name and a platform. Rewards go only to people who sign in with Discord, and the Invite tab says so when a project that gives rewards offers more than Discord.

**Verified only.** Respondents prove they belong before the first question. You tick which of your community's Audience Sources count, and passing any one of them is enough:

- **Discord:** a member of your server right now (checked live when they start), holding one of the required roles if the project sets any;
- **Twitch:** a follower of your channel;
- **YouTube:** a subscriber to your channel;
- **Steam:** an owner of your game.

So one link can admit your Discord members and your Twitch followers together, with no second project and no spreadsheets to merge afterward.

![The Invite tab's Web link card with Signed in selected and Discord, Twitch, Google and Steam listed under Sign in with](/images/blog/ways-in/ways-in-web-link-signed-in.png)

<!-- Add when retaken: ways-in-web-link-verified.png (Verified only, two sources ticked) and ways-in-post-and-link.png (Discord post and Web link both on). -->

## Audience Sources, properly introduced

Verification has worked quietly since July. We never announced it, so this is its introduction. Under **Settings > Networks > Audience Sources** you connect the places your audience lives, once per community, and every project can use them from then on:

- **Discord** is always there. It comes with the bot.
- **YouTube:** sign in with the Google account that owns the channel. It admits your subscribers.
- **Twitch:** sign in with your Twitch channel. It admits your followers.
- **Steam:** enter your game's Steam App ID, the number in its store page URL. It admits people who own the game.

A channel can be connected to one community only, and you can disconnect a source at any time.

![Settings > Networks: the Discord server under Connected Networks, and Audience Sources with a YouTube channel connected and the Twitch and Steam cards ready to connect](/images/blog/ways-in/ways-in-audience-sources.png)

## What respondents see

On a **Verified only** link, the page says "This Convo is for verified members only" and shows one button per source the link accepts, such as "Verify you follow [channel] on Twitch". A passed check is remembered for 30 days, so someone who comes back for your next Convo is not asked again. If a check fails, they can try another option on the same page. For Steam, their "Game details" must be public while Subo checks; if they are private, the page says so, links to the Steam privacy settings, and reminds them they can make them private again afterward.

<!-- Add when retaken: ways-in-verify.png -->

On a **Signed in** link, the Convo opens with "Sign in to answer" and a button for each platform you offered, from "Continue with Discord" to "Continue with Steam". Google asks only for a name and an email: it is a Google account, not a YouTube channel.

<!-- Add when retaken: ways-in-sign-in.png -->

When a project's Discord post is answered on the web, pressing the post now replies with a **Start** button, labeled like the post's own button, instead of a bare URL. That personal link has to be opened within 15 minutes, and once opened it keeps working for the whole Convo.

## Where each response came from

The Responses tab has a **Source** column with a platform badge (Discord, Twitch, YouTube, Steam or Google), and the same field is in the CSV export and the API. The project list and header show an icon for each way in, so you can see at a glance which projects have a link and what verifies it. Opening a project shows a summary of how it is set up, ways in included, before you confirm.

## From Discord

In Discord, `/edit` has a **Post and web link** screen. Choose whether pressing the post answers in Discord or on the web, see the web link's current rule, and use **Open the Invite tab** for everything else. Switching the post on or off, the web link rules and Audience Sources are set in the web app.

## For developers

The [Public API](/api/#open) reads and writes the same ways in through `delivery.entry_points`, and `GET /v1/communities/{communityId}/sources` lists your Audience Sources. The older `delivery.audience` object still works but is deprecated.

## Try it

Ways in is on every plan, Free included. Open any project's Invite tab in the [web app](https://app.subo.gg/), switch on the web link next to your Discord post, and pick who it lets in. If you are building an application or a sign-up, the [Discord forms guide](/blog/how-to-make-a-discord-form/) walks through the rest, and the [anonymous surveys guide](/blog/complete-guide-anonymous-surveys-discord/) covers what each privacy mode keeps.
