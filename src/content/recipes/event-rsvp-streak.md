---
title: "Discord Event RSVP with Attendance Streak Rewards"
description: "Collect RSVPs for recurring events and turn repeat attendance into a streak that unlocks tier achievements, without tracking by hand who showed up to what."
pubDate: "Aug 05 2026"
audience: "community managers, creators, and game devs running recurring events (weekly AMAs, monthly streams, seasonal contests)"
setupTime: "~10 minutes per event project + one-time setup of tier achievements"
bestFor: "servers that already award XP and want to reward consistent attendance without per-event manual tagging"
dimension: "engage"
features: ["skip logic", "action blocks", "XP", "achievements"]
relatedSlugs: ["prediction-poll", "welcome-quiz", "volunteer-moderator-funnel"]
templateSlugs: ["scheduling-availability-poll"]
faq:
  - q: "How do you collect RSVPs in Discord?"
    a: "Post a short RSVP survey per event with a three-option answer (Yes, Maybe, No). Only firm Yes answers get the event role, so the attendee list stays meaningful."
  - q: "Why three RSVP options instead of Yes and No?"
    a: "A binary choice misses the soft commitment. People who pick Maybe are genuinely undecided, and forcing them into No loses information you want when planning capacity."
  - q: "How do attendance streaks work?"
    a: "Each event awards XP with a respondent-scoped action block. Members accumulate XP across events and cross tier-achievement thresholds on their own, so streaks emerge with no manual tagging."
  - q: "Can the same person RSVP to multiple events?"
    a: "Yes, that is the point. Set max_completes_per_user high enough that one member can answer each event project, and clear the short-lived event role before the next round opens."
---Collect RSVPs for a recurring event (AMA, stream, watch-party) and turn
showing up over time into a **streak that unlocks tier achievements**,
without manually tracking who attended what.

---

## The scenario

You host a Friday AMA every week. You'd like to:

1. Get a clean RSVP list so you know who to expect.
2. Reward people for showing up, but not with a one-off "I attended
   AMA #42" achievement that clutters profiles.
3. Recognize the regulars who attend month after month, automatically.

This recipe doesn't try to do #3 with a single project. Instead it
**accumulates XP** across many event RSVPs, and the XP threshold
achievements you already have (`Regular`, `Pillar`, etc.) catch
people as they cross thresholds. The recipe is a single
event-RSVP project you'll **clone or reuse** per event.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Hey [UserName]! Friday's AMA is around  │
  │  the corner 🎙 Got a sec to lock in      │
  │  your RSVP?"                             │
  │ → [ Let's go! 🚀 ]                       │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐  ← the gate
  │ q2: Will you join Friday's AMA?          │
  │   ✅ Yes      🤔 Maybe      ❌ No        │
  └──────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
    Yes / Maybe                No
        │                       │
        ▼                       ▼
  ┌──────────────────┐   ┌──────────────────┐
  │ q3: Topics 🗺    │   │   (skipped)      │
  │ q4: Live ques. ✍ │   │                  │
  └──────────────────┘   └──────────────────┘
        │                       │
        └───────────┬───────────┘
                    ▼
  ┌──────────────────────────────────────────┐
  │  Yes only: 🗓 RSVPed role granted        │
  │  Everyone: +10 XP (fire_scope: session)  │
  │                                          │
  │  XP accumulates → crosses tier-           │
  │  achievement thresholds organically.     │
  └──────────────────────────────────────────┘
```

> **Why q2 and not q1 for the gate?** The intro `content_block` counts
> as q1. Skip-logic position numbering includes every block, not just
> questions.

---

## Prerequisites

### 1. One Discord role

| Role name | Suggested ID |
|---|---|
| `@🗓 RSVPed` | `1382089724239417470` |

The role is short-lived per event, so clear it before the next RSVP
project opens (or use a different RSVPed-for-X role per event series).
Subo doesn't auto-clear it.

### 2. Tier achievements (set up once, used by every event)

Configured in the Subo bot (`/xp-settings` → Achievements) or the
Rewards UI. The streak effect comes from these crossing thresholds as
event XP piles up. Pick thresholds that feel achievable but meaningful:

| Achievement | XP threshold | Linked Discord role |
|---|---|---|
| 🌱 Newcomer | 25 total XP | `@🌱 Newcomer` (optional) |
| ⭐ Regular | 100 total XP | `@⭐ Regular` |
| 🌟 Pillar | 500 total XP | `@🌟 Pillar` |
| 💎 Founder | 1500 total XP | `@💎 Founder` |

These are **community-wide thresholds**, so XP from this AMA RSVP project
counts the same as XP from any other project you run.

### 3. Project settings

Create the project with:
- `max_completes_per_user: 99` (or another large number): the same person
  RSVPs to many events.
- `useXP: true`: required for `give_xp` action blocks to fire.

---

## The script

The full payload is published as the `eventRsvpStreak` example on the `PUT /script` endpoint in
[the API reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript). Walkthrough:

### Intro: q1

```jsonc
{
  "type": "content_block",
  "prompt": "Hey [UserName]! Friday's AMA is around the corner 🎙 Got a sec to lock in your RSVP?",
  "image_url": "https://i.ibb.co/GfB0H7Z6/subo-equalizer.gif",
  "continue": { "after": "click", "label": "Let's go! 🚀" }
}
```

### The RSVP: q2

```jsonc
{
  "type": "single_punch",
  "prompt": "Will you join Friday's community AMA?",
  "options": [
    { "value": "Yes",   "label": "✅ Yes, I'll be there" },
    { "value": "Maybe", "label": "🤔 Maybe" },
    { "value": "No",    "label": "❌ Can't make it this time" }
  ]
}
```

Three options is right. Binary Yes/No misses the soft commitment. The
Maybe lane keeps you honest about realistic attendance.

### Conditional follow-up: q3, q4

```jsonc
{
  "type": "multi_punch",
  "prompt": "Which topics would you most like covered?",
  "min": 0,
  "options": [ /* … */ ],
  "precondition": "q2 = \"No\""
}
```

Note that `precondition` is a **hide expression**:
`q2 = "No"` means *hide this block when the answer is No*. So q3 and q4
are shown to Yes/Maybe answerers and hidden from No.

Respondents who can't attend aren't asked irrelevant follow-ups. They
go straight from q2 to the closing XP grant.

### The role grant: Yes-only

```jsonc
{
  "type": "action_block",
  "prompt": "🗓 RSVPed! You'll get a reminder DM an hour before the AMA.",
  "action_kind": "give_role",
  "action_config": { "role_id": "1382089724239417470" },
  "precondition": "NOT (q2 = \"Yes\")",
  "continue": { "after": "pause", "pause": 2 }
}
```

Only the firm Yeses get the role. Maybe stays uncommitted: no role,
which means no AMA reminder DM (you can pair this role with a Discord
scheduled message reminder closer to the event).

### The XP grant: everyone

```jsonc
{
  "type": "action_block",
  "prompt": "🙏 Thanks for stopping by! You earned XP for sharing your interest.",
  "action_kind": "give_xp",
  "action_config": { "xp_amount": 10, "fire_scope": "session" },
  "continue": { "after": "pause", "pause": 2 }
}
```

No precondition → fires for every respondent (Yes, Maybe, and No).

### `fire_scope: "session"` is the key to streaks

By default, action blocks fire **once per respondent, ever**
(`fire_scope: "respondent"`). For a recurring event, that's wrong. The
same member RSVPing next week would get nothing.

`fire_scope: "session"` fires the action **once per completion session**.
Combined with `max_completes_per_user: 99`, the same member earns 10 XP
each time they RSVP. Run this project weekly. Accumulated XP organically
crosses your tier-achievement thresholds. Streaks emerge with no
custom tracking needed.

---

## Variations

### Pair with a post-event "Did you actually attend?" project

The RSVP only captures intent. To award XP for actual attendance, run a
separate project the day after the event with one yes/no question and
a give-xp action gated on Yes. Use a higher XP amount (e.g. 25) since
showing up matters more than promising to. Members who do both = 35 XP
per event.

### One project per event series, not per event

You don't need a new project per AMA. Reuse one "AMA RSVP" project,
update the q2 prompt to reference the next date, and reopen it. Older
responses are kept; XP already awarded is unaffected.

### Bonus XP for streak completion (manual)

Today, there's no in-engine way to "if respondent has attended 4 weeks
in a row, give 50 bonus XP." Streak bonuses like that are still manual:
award the XP via `POST
/v1/communities/{id}/members/{id}/xp` (the Members API) once a month
based on attendance counts.

### Don't reward Maybe at all

Drop the unconditional give-xp and add a `precondition` to it:
`q2 = "No"` (hide it for No). Now only Yes/Maybe earn the 10 XP. Tighter,
but also less rewarding for the borderline-engaged.

---

## When this recipe doesn't fit

- **You want strict attendance tracking.** Honor-system "Did you attend?"
  is unverifiable. A more rigorous setup runs the post-event poll in a
  channel only members with the `@🗓 RSVPed` role can see. At least it
  filters out everyone who didn't RSVP. True attendance tracking would
  need a presence-checking integration that doesn't exist yet.
- **You want to give different XP per attendance count.** Scoring works
  within one survey, not across separate event projects, so this needs the
  Members API rather than an action block.
- **You want to suppress the role for Maybe answerers from getting the
  reminder DM.** Already handled: the role only fires for Yes. But if
  you want a *different* "we noticed you said Maybe" reminder, you'd
  need a second role gated on `NOT (q2 = "Maybe")`, and a different
  reminder workflow on the Discord side.

---

## Related
- [Welcome quiz recipe](/recipes/welcome-quiz/): onboarding pattern
- [Volunteer recruitment recipe](/recipes/volunteer-moderator-funnel/): gate-and-route pattern (same shape, no streaks)
- [Playtester selection recipe](/recipes/playtester-selection/): gate-and-route pattern (game-dev)
- [Skip logic reference](https://api.subo.ai/docs#tag/Script): operator and value-type tables

---

## Why XP rather than an achievement for completion?

Achievements are milestones. Awarding "RSVPed for AMA #42" as its own
achievement would clutter the profile badge area within a quarter.

XP is the right granularity for the day-to-day. It accumulates silently
and the *threshold* achievements (Regular / Pillar / Founder) are the
public milestones that emerge. The recipe leans on XP as the **stream**
and achievements as the **markers in the stream**, which is the
architecture Subo's reward system is designed for.

See the [achievements vs. roles table in the welcome-quiz recipe](/recipes/welcome-quiz/#achievements-vs-roles)
for the broader rule.
