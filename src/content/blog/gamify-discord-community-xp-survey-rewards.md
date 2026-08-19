---
title: "How to Gamify Your Discord Community with XP, Leaderboards, and Survey Rewards"
description: "Turn feedback collection into a game. Subo's XP system, monthly leaderboards, and role rewards make participation something your members look forward to."
pubDate: "Feb 23 2026"
author: "Subo Team"
tags: ["gamification", "xp", "engagement", "discord", "community"]
heroImage: "https://static.klipy.com/ii/8ce8357c78ea940b9c2015daf05ce1a5/1b/6e/3K86JtKD.gif"
draft: false
---

Getting members to answer polls and surveys is one of the perennial challenges of community management. You can ask nicely, remind them twice, and still end up with a 5% response rate from a server full of engaged, active members.

The problem isn't apathy. It's incentive. Members will happily spend hours on your server chatting and gaming, but clicking a survey link feels like work. Shorter surveys help. The real fix is to make participation itself rewarding.

That's what Subo's gamification system does.

## Subo's Three Layers of Gamification

Subo has three distinct mechanisms for rewarding members who participate in surveys and polls:

### 1. XP Points

Every time a member completes a survey or poll, they earn XP (experience points). You can:

- **Customize the XP name**: call it "Coins", "Stars", "Gold", "Reputation", or whatever fits your community's theme
- **Set custom XP values** per survey, weighting important surveys more heavily
- **Track cumulative XP** over time, so members build up their score with every participation

XP stays visible, a running score that motivates continued participation.

### 2. Role Rewards Based on Overall XP

As members accumulate XP, they can automatically unlock Discord roles at set thresholds. You configure up to 5 role milestones:

- 100 XP → "Participant" role
- 500 XP → "Regular" role
- 1,000 XP → "Veteran" role
- 5,000 XP → "Elite" role
- 10,000 XP → "Legend" role

These thresholds and role names are entirely up to you. The system handles the role assignment automatically.

This mechanic is particularly powerful because:
- Roles are visible in the member list and in chat
- Higher roles can unlock channels, perks, and other server privileges
- The progression feels meaningful: each completed survey moves members toward the next role

### 3. Leaderboards

Leaderboards add a competitive layer: they aknowledge your active members, "shame" unresponsive ones.

Standard Leaderboards show total XP since "Forever". Monthly XP leaderboards reset every month. 

- Members can see who's at the top of the participation rankings
- Monthly resets mean newcomers can compete, instead of the board being dominated forever by early adopters
- You can offer special role rewards (e.g., "Top Contributor of the Month") for monthly leaderboard leaders

The leaderboard is shareable with the rest of the community: members can use the /leaderboard command to see their rank, or you can post it in a channel to celebrate your most active community members.

Standard Leaderboards are available on all plans, Monthly Leaderboards are for Premium and above plans.

### 4. Per-Survey Role Rewards (Premium)

Beyond the XP system, Subo lets you attach a specific role reward to any individual survey or poll. Complete this particular survey → get this particular role.

This is useful for:
- **Event-based rewards**: "Complete the event feedback survey to get the Event Participant role"
- **Milestone surveys**: "Finish the onboarding survey to unlock the Verified Member role"
- **Exclusive access**: "Complete the beta tester survey to get the Beta Tester role and access to our #beta channel"

## Setting Up XP in Your Server

Here's how to get the XP system running:

### Basic Setup

The web app is the place to do this. It puts every XP control on one screen, under **Settings > Engagement**.

1. Invite Subo to your server if you haven't already
2. Open the web app, go to **Settings > Engagement**, and turn on the XP system
3. Set your XP name (Premium and above)
4. In the **Achievements** section of that same tab, configure your role milestones and their thresholds

If you'd rather stay in Discord, the `/xp_settings` command covers the core toggles, but the Engagement tab is where you get the full picture.

### Customizing XP Values

By default, all polls and surveys award the same amount of XP per questions. 

Premium plans can set different XP values per polls and per survey question. Bonus completion is the percentage (0% to 100%) which respondents obtain after answering the entire survey. A 0% bonus means there is no bonus for people who complete the entire survey. A 100% bonus means that only respondents who complete the entire survey get an XP reward, participants who abandon during completion get nothing.

### Running Monthly Competitions

The monthly leaderboard runs automatically whenever the leaderboard is on. There's no separate switch to flip: Monthly XP counts each member's points for the current month and resets on the 1st on its own.

The part most people miss is that you don't have to hand out the monthly prize yourself. In **Settings > Engagement**, open the **Achievements** section, create a new achievement of type **Monthly XP**, set the amount of Monthly XP required, and attach a role reward. Subo grants that role automatically to everyone who crosses the threshold that month, and rotates it out when the month resets. "Top Contributor of the Month" becomes a rule you set once, not a chore you repeat.

To run the competition around it:

1. Announce it at the start of the month: "XP resets on the 1st, compete for the Top Contributor role!"
2. Post the leaderboard mid-month with `/leaderboard` so members can see where they stand
3. Let the Monthly XP achievement grant and rotate the winner role for you

## Real-World Gamification Examples

### Gaming Community: Raid Team Feedback

A guild running weekly raids uses Subo to collect post-raid feedback. Each completed survey earns 50 "Guild Points" (their custom XP name). After 500 Guild Points, members unlock the "Veteran Raider" role with exclusive access to the #officer-chat channel. Monthly top contributors get "MVP" for the month.

Result: Raid feedback completion jumped from under 20% to over 70%.

### Creator Server: Fan Engagement

A content creator uses Subo polls and surveys to let fans vote on upcoming content. Every poll response earns "Creator Coins" (XP). At 200 coins, fans unlock the "Super Fan" role with early access to new videos. The top 3 earners each month get a special "Featured Fan" role.

Result: Poll engagement increased significantly, and the leaderboard became a community talking point.

### Educational Server: Study Group Tracking

A tutoring community runs a graded quiz after every learning session. Rather than a flat reward for finishing, XP is tied to correct answers: get the question right, earn the points, so a student's "Study Points" reflect what they actually learned. As those points build up, milestone roles mark progress: "Beginner," "Intermediate," "Advanced," "Scholar."

For a monthly push, they added a **Monthly XP** achievement in **Settings > Engagement** with a set threshold, and attached a "Star Student of the Month" role. Anyone who earns enough quiz points that month gets the role automatically, and it rotates on its own when the month resets. The monthly leaderboard shows the most diligent students alongside it.

Result: Members actively reminded each other to do the quizzes to stay competitive.

## Why Gamification Works

Gamification isn't about manipulation. It's about making the value exchange explicit. And value doesn't need to be monetary. Participation has always been valuable for the community manager (they get data), but it used to be invisible for the member. Gamification makes the value visible:

- **Points** = visible proof of contribution
- **Roles** = status and access that reflect investment
- **Leaderboards** = recognition and friendly competition

And with [XP History](/blog/xp-history), that proof is auditable: every member can see how and why each point moved, on the web and in Discord, so the rewards you hand out are ones they trust.

When members can see their ranking and know that consistent participation leads to tangible status in the community, participation becomes part of community identity rather than an interruption.

## Three builds that already do this

If you want the mechanics rather than the theory, three recipes wire XP into a working survey. An [attendance streak](/recipes/event-rsvp-streak) turns repeat RSVPs into tier achievements without anyone tracking who showed up. A [prediction contest](/recipes/prediction-poll) pays XP in proportion to how bold the call was. A [study quiz](/recipes/study-quiz) awards XP equal to the score and lets members retake it to improve. The [template library](/templates) has clone-and-go versions of the first two.

## Getting Started

The XP system is available on all plans (including free). Custom XP names, values, and role rewards for monthly XP require Premium or above. Per-survey role rewards require Premium or above.

**[Add Subo to your Discord server →](/invite)**

**[See all plans and features →](/pricing)**
