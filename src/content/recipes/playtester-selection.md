---
title: "Playtester Recruitment Survey for Indie Game Devs"
description: "Pick playtesters who will actually show up. A single availability gate splits applicants into a beta cohort and a waitlist, and a required open-text answer filters out low-effort signups."
pubDate: "Aug 05 2026"
audience: "indie game devs running closed playtests, alpha cohorts, or invite-only demo waves"
setupTime: "~15 minutes"
bestFor: "when you have more interested players than you can support, and \"first to volunteer\" is *not* the cohort you want"
dimension: "get-things-done"
features: ["skip logic", "action blocks", "achievements", "applications"]
relatedSlugs: ["volunteer-moderator-funnel", "event-rsvp-streak", "member-segmentation"]
templateSlugs: ["playtester-beta-recruitment"]
faq:
  - q: "How do you choose playtesters from a large group of volunteers?"
    a: "Gate on availability rather than enthusiasm. The hardest constraint on a useful playtest is whether someone can commit hours in the test window, so that question decides the cohort and everything else is review material."
  - q: "How do you filter out low-effort applicants?"
    a: "A required open-text question is a quiet effort filter. Anyone unwilling to write two sentences about what they want to test is unlikely to file a useful bug report."
  - q: "Should playtesters get a role or an achievement?"
    a: "Both. The role is the operational tag that opens the beta channel and gets cleared between rounds. The achievement is the permanent credit, so \"I playtested for this game\" survives the role being renamed."
  - q: "Can I verify a tester owns the game on Steam?"
    a: "Not automatically. Steam, Patreon and Twitch verification integrations do not exist yet, so hold the role until you have manually verified, or accept the self-reported answer."
---Recruit playtesters who'll **actually show up**, not just the loudest
hands. Gate on weekly availability (the single best predictor of
completion), grant a "Beta Tester" achievement to qualifiers, and put
everyone else on a "Waitlist" role for the next round.

---

## The scenario

Your DMs are full of "I'd love to playtest!", and you know from the
last build that half of them will install the game once and ghost. The
hardest constraint on a useful playtest isn't enthusiasm or skill. It's
**reliable weekly availability**. The right gate filters for that.

This recipe uses the same single-decisive-question pattern as the
[volunteer recruitment recipe](/recipes/volunteer-moderator-funnel), with
two differences:

1. The qualifying outcome is an **achievement** (`give_achievement`),
   not just a role, so "I playtested for [Game]" persists on the
   member's Subo profile after the playtest is over.
2. The required open-text answer (q5) is a quiet effort-filter: anyone
   who quits before submitting a thoughtful 1-line answer would have
   ghosted the playtest anyway.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Hey [UserName]! We're picking the next  │
  │  round of playtesters 🎮 Want in?"       │
  │ → [ Let's go! 🚀 ]                       │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐  ← the gate
  │ q2: Weekly 2-3hr session for 4 weeks?    │
  │  💪 Every week  👍 Most weeks            │
  │  🤞 Occasionally  👋 Not right now       │
  └──────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
   "Yes, every week"      anything else
        │                       │
        ▼                       ▼
  ┌──────────────────────────────────────────┐
  │ q3: Platforms (multi-punch) 🖥🍎🎮🕹     │
  │ q4: Favorite genres ⚔️♟💥🧩🚜            │
  │ q5: Feedback sample (required) ✍️        │
  └──────────────────────────────────────────┘
        │                       │
        ▼                       ▼
  ┌──────────────────┐   ┌──────────────────┐
  │ 🧪 Beta Tester   │   │ 🙏 Waitlist      │
  │ achievement      │   │ role granted     │
  │  + linked role   │   │ [ Got it ]       │
  │ [ Got it ]       │   │                  │
  └──────────────────┘   └──────────────────┘
```

> **Why q2 and not q1 for the gate?** The intro `content_block` counts
> as q1. Skip-logic position numbering includes every block, not just
> questions.

---

## Prerequisites

### 1. One achievement (with a linked Discord role)

Create the Beta Tester achievement via the Subo bot (`/xp-settings →
Achievements`) or the Rewards UI. **Link a Discord role** to it
(`@🧪 Beta Tester`) so the achievement automatically grants the role
when it fires.

| Achievement | Linked Discord role | Suggested ID |
|---|---|---|
| 🧪 Beta Tester | `@🧪 Beta Tester` | `xp_role_id: 2001` |

### 2. One Discord role for the waitlist

| Role | Suggested ID |
|---|---|
| `@🙏 Playtest Waitlist` | `1382089724239417480` |

No achievement for the waitlist: it's an operational tag, not a
credential.

### 3. Project settings

- **For one-off playtests** (alpha 1, beta 2): leave
  `max_completes_per_user: 1`. Each applicant gets one shot.
- **For recurring rounds** (monthly cohorts): set
  `max_completes_per_user > 1` (e.g. 6 for a 6-month cycle) AND add
  `fire_scope: "session"` to both action blocks so a previously
  waitlisted applicant can re-apply next round and get a fresh
  Beta Tester achievement instance.

---

## The script

The full payload is published as the `playtesterSelection` example on the `PUT /script` endpoint
in [the API reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript). Walkthrough:

### Intro: q1

```jsonc
{
  "type": "content_block",
  "prompt": "Hey [UserName]! We're picking the next round of playtesters 🎮 Want in?",
  "image_url": "https://i.ibb.co/GfB0H7Z6/subo-equalizer.gif",
  "continue": { "after": "click", "label": "Let's go! 🚀" }
}
```

### The gate: q2

```jsonc
{
  "type": "single_punch",
  "prompt": "Can you commit to a weekly 2–3 hour session for the next 4 weeks?",
  "options": [
    { "value": "Yes, every week", "label": "💪 Yes, every week" },
    { "value": "Yes, most weeks", "label": "👍 Yes, most weeks" },
    { "value": "Occasionally",    "label": "🤞 Occasionally" },
    { "value": "Not right now",   "label": "👋 Not right now" }
  ]
}
```

Four options instead of three. "Most weeks" and "Occasionally" sound
similar but matter. Applicants self-sort more honestly when "Most
weeks" exists than when the only commitment option is the strict "Yes,
every week."

Only **"Yes, every week"** clears the gate. The middle two are
*pretty good* but not your cohort this round, so they go to the waitlist
along with "Not right now."

### Data collection: q3, q4, q5

```jsonc
{ "type": "multi_punch", "prompt": "Which platforms can you test on?", /* … */ }
{ "type": "single_punch", "prompt": "Which genres do you play most?", /* … */ }
{ "type": "open_text",
  "prompt": "Briefly: a game you've given feedback on, and one thing you noticed others missed. ✍️",
  "required": true }
```

These feed **your** review:
- **q3 (platforms):** balance the cohort. Don't accept 10 PC testers
  if you also need Console coverage.
- **q4 (genres):** signal of fit. An RPG-only player testing your
  fast-paced roguelite gives you noisy feedback.
- **q5 (writing sample):** dual-purpose. Filters out low-effort
  applicants by *its existence* (they quit before submitting), and gives
  you something concrete to read when picking from the qualifying pool.

### Beta Tester branch

```jsonc
{
  "type": "action_block",
  "prompt": "🧪 You're in! Beta Tester achievement unlocked — watch for a DM with the build link.",
  "action_kind": "give_achievement",
  "action_config": { "xp_role_id": 2001 },
  "precondition": "NOT (q2 = \"Yes, every week\")",
  "continue": { "after": "click", "label": "Got it" }
}
```

`give_achievement` does two things here:

1. Records the milestone on the user's Subo profile (badge visible
   forever, including after the playtest ends and the role is rotated
   out).
2. Grants the linked `@🧪 Beta Tester` Discord role automatically
   (because you configured it that way in step 1 of the prerequisites).

The acknowledge button (`after: "click"`) makes it feel like the
selection it is, not a casual auto-advance.

### Waitlist branch

```jsonc
{
  "type": "action_block",
  "prompt": "🙏 Thanks for applying! You're on the waitlist — we'll reach out if a slot opens up.",
  "action_kind": "give_role",
  "action_config": { "role_id": "1382089724239417480" },
  "precondition": "q2 = \"Yes, every week\"",
  "continue": { "after": "click", "label": "Got it" }
}
```

`give_role` (not `give_achievement`) because Waitlist is a temporary
operational tag: clear it when the next round opens. The two
preconditions are mirrored, so exactly one branch fires.

---

## Variations

### Add an "applied previously" tag

If you run rounds quarterly and want to surface returning applicants,
add a fifth single-punch q3: "Have you applied to a previous playtest?"
with a separate "Repeat Applicant" achievement gated on Yes. Now your
review pool shows you who's been knocking. Update q4 / q5 / q6 indices
accordingly.

### Combine with a Discord wishlist check (future)

Today this is honor-system: you can't verify they actually wishlisted
the game. When Steam integration ships,
you'll be able to add a precondition like
`steam_wishlisted = True` to the Beta Tester branch and use it as a
second gate. Until then, **don't** add a "Have you wishlisted?" question.
Answers are noise.

### Capped cohort: gate on response count

There's no built-in "stop accepting after 50 Beta Testers" today. To
cap, manually `PUT /projects/{id}` with `status: "closed"` when you hit
your number. The applicants who arrive after closure see the project
unavailable.

### Different cohorts per genre

Run *multiple* playtester-selection projects in parallel, each gating
on genre via a different q3 precondition. Useful if you're testing
multiple games or different difficulty modes.

---

## When this recipe doesn't fit

- **You want skill-based selection** ("only experienced playtesters").
  A single yes/no skill gate is easy, but real skill assessment means
  scoring across several questions, as the
  [member segmentation recipe](/recipes/member-segmentation) does. Keeping
  it simple here, weigh q4 (genre fit) and q5 (writing sample) manually.
- **You need to limit slots automatically.** No built-in cap; close
  manually as described in Variations.
- **You want to verify identity / past playtest claims.** Steam /
  Patreon / Discord-history integrations don't exist yet.
- **You're recruiting *paid* testers, not volunteer.** Add a contract /
  NDA acknowledge step before the open-text question, and don't grant
  the role until you've manually verified, or wait for a verification
  integration.

---

## Related
- [Welcome quiz recipe](/recipes/welcome-quiz): onboarding pattern
- [Volunteer recruitment recipe](/recipes/volunteer-moderator-funnel): same gate-and-route shape, community-manager framing
- [Event RSVP recipe](/recipes/event-rsvp-streak): recurring engagement pattern
- [Skip logic reference](https://api.subo.ai/docs#tag/Script): operator and value-type tables

---

## Why achievement (not just role) for Beta Tester?

A playtest run today should be visible on the tester's profile in two
years. They earned it. Discord roles get rotated and replaced as the
server evolves. A role-only grant disappears the moment you rename
`@🧪 Beta Tester` to `@🧪 Beta Tester (Alpha 1)`.

Achievements are durable. They persist on the user's Subo profile
regardless of Discord-side role housekeeping. By linking a Discord role
*to* the achievement, you get the role grant for free during the active
playtest window, and the badge stays after.

See the [achievements vs. roles table in the welcome-quiz recipe](/recipes/welcome-quiz#achievements-vs-roles)
for the broader rule.
