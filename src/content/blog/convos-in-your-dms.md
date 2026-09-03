---
title: "Discord surveys now run in your members' DMs"
description: "A Convo now runs in a Discord DM by default, with a private thread and a web link as automatic fallbacks. Anonymous projects get DM or web, never a thread."
pubDate: "Sep 2 2026"
author: "Subo Team"
heroImage: "/images/blog/DM-convos/check-your-DMs.png"
tags: ["announcement", "features", "privacy", "convo"]
draft: false
faq:
  - q: "Does Subo send DMs to my members?"
    a: "Only to a member who pressed Start on an invitation themselves. Subo never DMs anyone unprompted: the invitation is posted in your server, the member decides whether to press the button, and the DM is the reply to that press."
  - q: "What happens if a member has DMs turned off?"
    a: "Subo tells them so and hands them a web link instead: <em>\"Your DMs are closed, so let's do this on the web instead.\"</em> You can also set the fallback to a private thread. Every default path ends in a web link, which is the one option that cannot fail."
  - q: "Are private threads anonymous?"
    a: "No. A private thread is readable by anyone on your team with the Manage Threads permission, and it appears in the Discord audit log. That is why an Anonymous project now runs its Convos in a DM, falling back to the web, and never in a thread."
  - q: "Do I have to configure any of this?"
    a: "No. If you leave the \"Where members answer\" picker alone, every Discord Convo starts in a DM: Anonymous projects fall back to the web, everything else falls back to a thread and then the web. The picker is there for when you want a different setup."
  - q: "Which plans get this?"
    a: "All of them, including free communities. There is no tier gate on any part of this release."
---

A member presses **Start** on one of your project invitations. Until this week, Subo replied by creating a private thread in your server and pulling them into it. From today, the Convo arrives in their DMs instead, and the thread is the fallback rather than the default.

Nothing about how a member starts has changed. They still see the invitation in the channel, with its button labeled the way you labeled it. What changed is where the conversation can go after the press.

---

## Why we ran Convos in threads at all

DMs were always the better room for a Convo. They are quiet, they are one-to-one, and nobody else on the team can read them. When we started Subo, our first version used DMs. But we quickly faced a problem: a member with DMs turned off simply could not be reached, and an invitation that dead-ends on a permission setting is worse than a slightly public one. Our first users had issues with DMs because some members could not answer - and some servers even active asked their users to turn off their DMs. To replace DMs, we built convos in private temporary channels, and then migrated to private threads when Discord made them available to all servers.

So threads it was, and they worked. The cost was that every Convo left a room behind in your server, and that a "private" thread is readable by anyone with the Manage Threads permission and shows up in the Discord audit log. Private to the channel, not private to you and your staff.

This release stops treating that as a choice between two options. The surfaces are a chain now: try the DM, fall back to a thread, fall back to a web link. Privacy is the default and the member still gets somewhere.

## What a member sees

After pressing Start, they get a message only they can see, in the channel they were already looking at:

> 📬 Check your DMs, your Convo is waiting for you there.

"Check your DMs" is a link that jumps straight to the conversation with Subo, which matters more than it sounds on mobile, where the DM list is a whole separate screen.

The DM itself does not start over. The first line is "Thanks for answering this Convo from [your server] in your DMs (so that a user checking their DMs always knows on whose behalf the invitation is sent):", followed by the invitation's own info card (same rows, same color as the one in the channel) and then your intro message. From there it is the Convo your members already know: same blocks, same buttons, same pacing.

If their DMs are closed, Subo says so and hands them an alternative (a thread or the web):

> Your DMs are closed, so let's do this on the web instead.

That also closes an old failure mode when too many try to open a thread at the same time. A press could previously end in "I couldn't create a channel." It can't now, because every default path ends in a web link, and a link is the one thing that cannot fail.

**Worth stating plainly, before anyone asks: Subo never DMs anyone unprompted.** No member hears from Subo until they press a button on an invitation posted in your server.

## Anonymous projects, actually anonymous

If a project is set to the strongest privacy mode, its Convos now run in a DM and fall back to the web. Never a thread.

We should have done this earlier. Telling a member their answers are anonymous while the interview sits in a room your moderators can open was a promise the plumbing didn't keep. It keeps it now. If you set a project to Anonymous while its Convos are pointed at a thread, Subo flags the conflict and offers a one-click "Run Convos in a DM instead."

The [guide to anonymous surveys on Discord](/blog/complete-guide-anonymous-surveys-discord/) has the rest of what the mode does.

## Threads are a place now

When a Convo does run in a thread, the thread stays. No self-destruct countdown, no button to press at the end. The same member reuses the same thread for their next Convo in that channel, so a returning respondent lands somewhere familiar instead of in a fresh room with a fresh name.

The closing line reflects it:

> That's a wrap! I'll keep this thread here, so next time we can pick up right where we left off.

## For admins: a few minor changes

A project's Invite tab has a new **Where members answer** setting. You pick the starting surface, Discord DM ("A private message from Subo. Nobody else can see it.") or Discord thread ("A private thread in your server. Visible to admins."), and then what should happen if that isn't possible: send a web link, open a private thread, send a DM then a web link, or nothing at all.

On an Anonymous project, Subo speaks up: if its Convos are pointed at a thread, the picker says "Subo suggests starting in a DM for this project, because this project is Anonymous and a thread is not", with a **Use this** button to accept. On every other project it stays quiet. DM, thread and web are all legitimate choices there, and preferring threads is a taste, not a mistake.

Most communities can ignore all of it. Left alone, every Discord Convo starts in a DM:

| Project privacy            | What Subo tries, in order |
| -------------------------- | ------------------------- |
| Anonymous (strongest mode) | DM, then web              |
| Public or semi-private     | DM, then thread, then web |

The DM is always tried first, whatever channel the invitation sits in. It is the most private surface Subo has, so there is no case where something else is the better opening move. A thread comes second for everyone except Anonymous projects, which never get one.

This is resolved at the moment a member presses Start rather than frozen into the project, so improvements to the rule reach projects that never touched the setting.

Two smaller things came with it. The **Responses** tab has an optional **Answered In** column showing whether each session happened in a thread, a DM, or on the web (off by default, and sessions recorded before this release show blank rather than guessing). And **invitations can now be posted in announcement channels**, forum posts and threads, which Subo used to refuse outright because a private thread cannot be created there. It posts the invitation and runs the Convo in a DM instead. The community setting formerly called "Survey channel" is now the **Participant Channel**, which is where those Convos land when a DM isn't on the table and we can't create a thread under the invitation channel.

## For developers

Two additive fields on the [public API](/api), no breaking changes:

- `delivery.answer_surfaces` on a project: the ordered list of surfaces a Convo is attempted on, using `"dm"`, `"thread"` and `"web"`. `null` means the project has no override and follows the default rules above, which is not the same as "no surface." On PUT, sending `null` clears an override, and sending `[]` is rejected with a 400, because an override that permits nothing isn't expressible.
- `answered_in` on a response: `"thread"`, `"dm"`, `"web"`, or `null`. `null` means "not recorded", so every session created before this release reads `null`. Don't default it to a surface or your counts will be wrong.

One validation change to watch: `platforms.discord.creator_channel_id` on a community must now be a text channel. Subo opens the admin workspace threads for `/settings`, `/edit`, `/export` and `/results` there, and only a text channel can host them.

---

Every string in this release is live in all nine languages, and it is on all plans including free.

If you have been putting off running a sensitive project because a private thread was not private enough, that reason is gone. [See how a Convo runs](/survey-convos/), or come tell us how it goes in [our Discord server](/support/).
