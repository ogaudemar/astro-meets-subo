---
title: "The Complete Guide to Anonymous Surveys in Discord"
description: "Anonymous surveys get you honest feedback. Here's how Subo's three privacy modes (Transparent, Semi-Private, Anonymous) work, when to use each, and how to build trust with your community."
pubDate: "Feb 14 2026"
updatedDate: "Sep 2 2026"
author: "Subo Team"
tags: ["anonymous surveys", "discord", "community management", "feedback", "privacy"]
faq:
  - q: "Are Discord polls anonymous?"
    a: "Discord's native polls are not anonymous. Clicking the vote count on a native poll shows exactly who voted for what, and there is no setting to turn that off. Anonymous voting needs a bot: Subo offers three privacy modes, and Anonymous means no one can see individual answers, including you."
  - q: "Can you make a Discord poll anonymous?"
    a: "Yes, with a bot that supports it. In Subo, add the <code>privacy</code> option to the <code>/poll</code> command and choose Anonymous, or set a server-wide default in <code>/settings</code> so every new poll and survey starts that way."
  - q: "What is Subo's default privacy mode?"
    a: "A new server defaults to Anonymous, so honest feedback is the starting point rather than something you have to switch on. You can change the server default in <code>/settings</code>, or pick a different mode on any individual poll or survey."
  - q: "Can someone answer an anonymous survey twice?"
    a: "No. Subo blocks duplicate responses from the same Discord account even in Anonymous mode. The respondent's identity is never shown in the results, but it is still used at submission time to prevent repeat entries."
  - q: "Where does an anonymous survey actually take place in Discord?"
    a: "In a direct message from Subo, falling back to a web link if the member has DMs turned off. An Anonymous project never runs its Convo in a private thread, because a thread is readable by anyone with the Manage Threads permission and appears in the Discord audit log, which would leave a trace the anonymity promise does not allow."
  - q: "Can a survey be anonymous and still limited to my members?"
    a: "Yes, and this is hard to do on a general-purpose form platform. Subo authenticates each respondent through their Discord account, so it knows they are a real member of your server and can block a second submission, then discards the link between that account and their answers. An open web form is anonymous but unverified; a signed-in web form is verified but no longer anonymous."
  - q: "Do XP or role rewards break anonymity?"
    a: "Rewards work in every mode, Anonymous included, because Subo authenticates each respondent without tying their identity to their answers. The trade-off is that a completion reward is visible, so you can see who took part, never what they said. In a large server that is harmless. If anonymity is critical and only a few people will respond, skip the reward."
draft: false
---

The most important feedback is often the hardest to collect. When members feel like their answers might be traced back to them, they self-censor. They tell you what they think you want to hear, not what they actually think.

This is especially true in Discord communities where members know each other, where the server owner is often a public figure, and where saying the wrong thing can mean losing access to a community they value.

Anonymous surveys change this dynamic entirely. When members trust that their responses can't be attributed to them, they tell the truth.

Subo gives you three distinct privacy modes, each designed for a different level of trust and openness. Here's a complete guide to using them effectively.

## Why Anonymity Matters in Discord

Anonymity matters more in Discord than on a generic web form, for a few specific reasons:

**Small, tight-knit communities have accountability pressure.** In a server of 50 people, everyone knows everyone. Saying "the admin events have been underwhelming lately" in a survey that a mod can link back to you has real social consequences.

**Power dynamics exist.** Server owners, admins, and mods have real power in Discord communities (banning, muting, removing roles). Members may hesitate to give critical feedback about leadership when they're not protected.

**Identity is tied to roles.** In Discord, your username and avatar are everywhere. It's harder to "disappear" into an anonymous response the way you might on an external form.

**High-stakes decisions deserve honest input.** When you're making decisions about community direction, events, leadership, or paid tiers, you need real feedback, not polite non-answers.

## Subo's Three Privacy Modes

Every poll and survey runs in one of three privacy modes. The difference between them is simple: **who can see an individual member's answers.**

### Transparent

Any member can see who voted or answered what. On a poll, people click the 🙋 icon on the invitation to see each person's choice. The Full Report and response notifications include each participant's Discord name and identifier.

**When to use it:**
- Accountable votes, where the community should see how each person voted (governance, scheduling, team decisions).
- Open discussions where seeing each other's choices helps the group reach consensus.

**What respondents see:** the invitation states the poll or survey is transparent, so everyone knows their choice is visible.

### Semi-Private

Only the survey creator or admin can see individual answers. Publicly, just the aggregated totals are shared. The Full Report and response notifications still include each participant's Discord name and identifier, but other members cannot see who said what.

**When to use it:**
- Most general feedback and research, where you may need to follow up or act on specific responses but members don't need to see each other's answers.
- Situations where you want a layer of privacy from the wider community without full anonymization.

**What respondents see:** the invitation states that only the creator can see individual answers.

### Anonymous (default)

No one can see individual answers, not even you, the creator. Only aggregated totals are ever available. The Full Report and response notifications **do not** include any Discord name or identifier. This is the **default mode** for a new server; you can change the default in `/settings`.

**When to use it:**
- Sensitive community topics (leadership feedback, interpersonal issues, rule changes).
- Mental health or wellbeing pulse checks.
- Feedback on server policies or moderation decisions.
- Any situation where you genuinely want the most honest possible responses.

**What respondents see:** a clear statement on the invitation that responses are fully anonymous and cannot be traced.

**Two important notes on Anonymous mode:**

1. **It's permanent once it starts.** Once an anonymous poll or survey receives its first response, you cannot switch it to another mode. This protects the people who already answered under the promise of anonymity. Set it before you launch.
2. **Rewards work, but they show who participated.** Role and XP rewards are still available on an anonymous survey; Subo authenticates each respondent, it just never ties their identity to their answers. The trade-off: a completion reward is visible, so you can tell who took part and who didn't, even if you can't see what anyone said. In a big server that doesn't matter. But if anonymity is critical and only a handful of people will respond, skip the reward, or the list of members who earned it effectively becomes the list of who answered.

> **The mode is always visible to respondents.** Subo prints the active privacy mode right in the invitation embed for every poll and survey. The goal is transparency: members always know whether their answer can be tied to their identity. It's still good practice to restate it in your own announcement, especially for sensitive questions.

## Where an anonymous survey actually happens

Anonymity is a property of the room the conversation happens in, as much as of the results you get back, and that first part is easy to overlook.

Until recently, a Subo Convo on Discord ran inside a private thread created in your server. "Private" there meant private to the channel. A private thread is readable by anyone on your team holding the Manage Threads permission, and its creation appears in the Discord audit log. For a Transparent or Semi-Private project, that is perfectly fine. For a project you had just told members was fully anonymous, it was a gap between the promise and the plumbing.

That gap is closed. An **Anonymous project now runs its Convo in a Discord DM**, and falls back to a web link if the member has DMs turned off. It never runs in a thread. There is no room left behind in your server for a moderator to open later, and nothing in the audit log connecting a member to the interview.

Other privacy modes start in a DM too, and fall back to a thread before the web. If you set a project to Anonymous while its Convos are pointed at a thread, Subo flags the conflict and offers a one-click "Run Convos in a DM instead." The full mechanics are in [Convos in your DMs](/blog/convos-in-your-dms/).

## Anonymous and authenticated at the same time

This is the part that is genuinely hard to do anywhere else, and it is worth understanding before you reach for a web form.

On a general-purpose form platform you get to pick one of two things. Leave the form open to anyone with the link and it is anonymous, but you have no idea whether the people answering are your members, whether one person answered forty times, or whether a link that leaked to another server is now shaping your results. Turn on sign-in to fix that and the platform records an identity against every submission, which means your "anonymous" survey has a name attached to each row and your members are right not to believe you.

Subo does both at once. It authenticates each respondent through their Discord account, so it knows the answer came from a real member of your server (and can gate it further by role), and it blocks a second submission from the same account. Then it discards the link between that account and the answers before anything reaches you. What you receive is the answers, with no author, from a verified population.

The practical effect is that you can say two things to your community in the same breath, and have both be true: only members can answer this, and nobody can see who said what. That combination is also why role and XP rewards still work in Anonymous mode: Subo knows enough to hand out the reward, and not enough to attribute the answers. See the [comparison with Google Forms and Typeform](/blog/subo-vs-google-forms-typeform-discord-communities/) for the rest of that trade-off.

## How to set the privacy mode

You choose the mode per project, or set a server-wide default:

- **On a poll:** add the `privacy` option to the `/poll` command and pick Transparent, Semi-Private, or Anonymous. (See the [poll how-to](/blog/how-to-create-a-discord-poll-with-or-without-a-bot/).)
- **On a survey:** build your questionnaire with `/survey` or `/draft`, hit `Continue` to enter Edit Mode, then press `Edit Privacy Mode` and choose. (See the [survey how-to](/blog/how-to-create-a-survey-with-subo-the-survey-bot-877951089/).)
- **Server default:** set the default for every new project with `/settings`. A fresh install defaults to Anonymous.

You can change the mode as many times as you like before the project starts. The one exception is the permanence rule above: an Anonymous project locks after its first response.

## What each mode means for your results

Privacy mode never changes your **aggregated results.** When you pull results with `/results`, you always get totals only, with no individual identifiers, in every mode.

The difference shows up in the **Full Report** (the exported dataset with a per-response "Responses" tab) and in **response notifications** (the live per-response alerts you can receive):

- **Transparent and Semi-Private:** the Responses tab and notifications include each participant's Discord name and identifier.
- **Anonymous:** neither includes any Discord name or identifier. You get the answers, never the author.

## When to Choose Each Mode

Use this simple decision framework:

**Is the topic sensitive or could feedback be socially risky for respondents?**
- Yes: use Anonymous, or Semi-Private at a minimum.
- No: Semi-Private or Transparent is fine.

**Do you need to follow up with specific respondents, or act on individual answers?**
- Yes: use Semi-Private (you can see individual answers) or Transparent.
- No: any mode works.

**Should the whole community see how each person answered?**
- Yes: use Transparent.
- No: use Semi-Private or Anonymous.

**Are you offering a role or XP reward for completion?**
- Rewards work in every mode, Anonymous included. Just remember that on an anonymous survey the reward reveals who participated (never what they said), so skip it when anonymity is critical and you only expect a few respondents.

**Is trust low (past drama, mod conflicts, or members who've been treated unfairly)?**
- Yes: use Anonymous, and communicate it prominently when you launch.

## Building Trust Around Anonymity

The mechanics of anonymity only work if your members *believe* the survey is actually anonymous. Here's how to establish that trust:

**Be explicit in your announcement.** When you share the survey, state clearly: "This survey is fully anonymous. I genuinely cannot see who submitted what. Say what you actually think." Subo already labels the mode on the invitation, but your own words reinforce it.

**Don't try to identify respondents indirectly.** If you run an anonymous survey and then post "Interesting that someone from the EU mentioned X," you've just poisoned your own anonymity guarantee. Members will notice, and they'll self-censor on the next survey.

**Follow up on anonymous feedback genuinely.** If anonymous feedback reveals a problem, address it, without speculating about who raised it. The follow-through is what builds long-term trust in the survey system.

**Use anonymity consistently.** If you only pull out the anonymous mode when you expect bad news, members will notice the pattern. Run anonymous surveys as a regular practice, not just when you're bracing for criticism.

**Acknowledge that anonymity has limits.** In a very small server (10 to 20 members), full anonymity still can't stop someone from inferring authorship from writing style or context. Be honest about this with your community, and don't over-promise on topics where truly anonymous feedback would require extraordinary effort.

## Real-World Anonymous Survey Examples

### Moderator Performance Review

"How would you rate the moderation team's recent handling of [specific situation]?" Use Anonymous. Members who felt they were treated unfairly can say so without fear of retaliation.

### Community Direction Survey

"Should we expand into [new topic area] or stay focused on [current topic]?" Use Semi-Private or Anonymous. This prevents the most vocal members from dominating the results.

### Leadership Satisfaction Check

"How satisfied are you with the direction the server is taking?" with an open-ended follow-up, "What would you change?" Use Anonymous. This is where you'll learn things you won't hear otherwise.

### Mental Health or Wellbeing Pulse

"How's everyone doing this month? (1-5 scale plus optional comments)" Use Anonymous. Members who are struggling won't disclose it if they think it's logged to their account.

### Pricing / Monetization Feedback

"Would you pay for a premium tier? What would it need to include?" Use Semi-Private or Anonymous. Financial opinions are personal; people give more honest answers when they're not on the record.

## Anonymous Surveys and Data Integrity

One common concern with anonymous surveys is gaming: what if someone submits multiple responses? Subo handles this by default. Even in Anonymous mode, it prevents duplicate responses from the same user (based on the Discord account). The *identity* of the respondent is never displayed in the results, but the system still blocks duplicates at submission time.

This means you get the benefits of anonymity (honest responses, no social pressure) without the risk of a single person flooding your survey with repeated answers.

## Getting Started

Every privacy mode is available on all Subo plans. A new server defaults to Anonymous, so set the mode you want when you create a poll or survey, or change your server default in `/settings`.

If you want a starting point rather than a blank script, the [anonymous proposal vote template](/templates/governance-proposal-vote/) and the [suggestion box](/templates/suggestion-box/) are both built for candid answers, and the rest of the [template library](/templates/) can be switched to Anonymous the same way.

**[Add Subo to your Discord server →](/invite/)**

**[View all plans and features →](/pricing/)**
