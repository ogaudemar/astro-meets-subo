---
title: "Member Segmentation Survey for Discord Communities"
description: "Sort your members into meaningful segments with a scored onboarding survey, assign a segment role automatically, and keep the raw scores as an exportable dataset."
pubDate: "Aug 05 2026"
audience: "community managers who want structured data on their member base; researchers studying community composition and engagement patterns"
setupTime: "~30 minutes (most of which is deciding your segments)"
bestFor: "servers where member type meaningfully affects how you should communicate with them: gaming communities (casual vs. competitive), creative communities (maker vs. audience), professional communities (practitioner vs. learner)"
dimension: "understand"
features: ["scoring", "calculated block", "roles", "segmentation"]
relatedSlugs: ["welcome-quiz", "pre-post-assessment", "hogwarts-house-sorting-quiz"]
templateSlugs: ["player-onboarding-profiler", "community-health-engagement"]
faq:
  - q: "How do you segment members of a Discord server?"
    a: "Ask several indirect questions, put score weights on the answers, and let a calculated block pick the highest-scoring segment. Scoring across six questions gives a more stable result than asking people to self-select from a list."
  - q: "Why not just ask members which group they belong to?"
    a: "Self-reported labels are unreliable because people answer aspirationally and read the labels as status. Scoring behavior-shaped questions avoids that. The recipe covers when a direct question is the better choice anyway."
  - q: "Can I export the segmentation data?"
    a: "Yes. The raw bucket scores are stored per response and exportable, so you get a structured dataset rather than only the final label."
  - q: "How many segments can I have?"
    a: "The argmax pattern supports any number of score buckets. Four is a good starting point; the recipe shows how to extend it and what breaks if segments overlap too much."
---Classify new members into meaningful engagement segments during onboarding
using a hidden multi-bucket scoring survey. Each segment receives a
personalized welcome path, the matching Discord role, and an achievement
badge, and moderators get a clean, exportable record of how their
community is composed.

---

## The scenario

You run a 2,000-member gaming community. New members self-select into the
server but you have no structured picture of who they actually are:
competitive grinders, casual players, lore enthusiasts, or people who are
mainly there for the social side. That gap makes it hard to target
announcements, design events, and understand what keeps people engaged.

This recipe instruments a 6-question onboarding survey that scores members
across four hidden dimensions (Competitor / Creator / Explorer / Social)
and uses `argmax` to assign each member to their dominant segment. The
result:

1. **For the member:** a personalized welcome embed naming their segment,
   the matching Discord role, and a small XP bonus.
2. **For the server:** every member's segment recorded in the Responses tab
   with the raw bucket scores, exportable as a structured dataset at any
   time.

Members never see the scoring logic. They answer six short questions.
The segments emerge from their patterns.

---

## Segment definitions

Define four segments with clear behavioral signatures before authoring:

| Segment | Signal | Role | Achievement |
|---|---|---|---|
| **Competitor** | Rankings, winning, skill improvement, challenge | `@Competitor` | "The Competitor" |
| **Creator** | Making guides, art, videos, mods, builds | `@Creator` | "The Creator" |
| **Explorer** | Lore, world-building, discovering hidden content | `@Explorer` | "The Explorer" |
| **Social** | Friendship, community events, chatting, helping newcomers | `@Social` | "The Social" |

Each segment needs a Discord role (for routing and mentions) and a Subo
achievement (for the permanent profile record + role grant). Create these
before authoring the survey.

---

## Scoring design

Six questions, four options each. Each option distributes points across the
four buckets. Unlike a right/wrong quiz, every option carries weight. The
question is *how* points are distributed, not whether the option is correct.

**Design principle:** options should feel equally valid to the respondent.
Avoid signalling which answer is "better". If members can see the segments
in the options, they'll self-sort incorrectly. The scoring should be opaque
to them.

Example question and weights:

```
"After a long session, what do you usually share in the server?"
  A) My match stats and rank progress          → Competitor +3, Social +1
  B) A clip or guide I made                    → Creator +3, Social +1
  C) Something interesting I found in the game → Explorer +3, Social +1
  D) Just hang out in chat with others         → Social +3
```

Repeating this across six questions, each framed around a different context
(what you share, what you look forward to, how you help others, what kind
of event excites you, etc.), produces reliable differentiation without
making the underlying dimensions obvious.

**Target score range:** aim for a maximum of ~18-20 points per bucket
(6 questions × weights of 1-3). This gives enough resolution for `argmax`
to distinguish clear dominant segments while still allowing borderline
members to appear meaningfully mixed.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Welcome, [UserName]! Quick intro…"      │
  │ → [ Let's go ]                           │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q2–q7: Six behavior questions            │
  │ (single_punch, no correct answer)        │
  │ Each option: score_values distributing   │
  │ hidden points across 4 buckets           │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q8: Segment calculated_block             │
  │ argmax([score_competitor],               │
  │        [score_creator],                  │
  │        [score_explorer],                 │
  │        [score_social])                   │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ╔══════════════════════════════════════════╗
  ║ q9–q12: Four reveal content_blocks       ║
  ║ One per segment — shows only when q8     ║
  ║ matches that segment name                ║
  ║ (personalized welcome + role description)║
  ╚══════════════════════════════════════════╝
                    │
                    ▼
  ╔══════════════════════════════════════════╗
  ║ q13–q16: Four give_achievement blocks    ║
  ║ One per segment — fires when q8 matches  ║
  ║ fire_scope: respondent                   ║
  ╚══════════════════════════════════════════╝
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ Outro: welcome XP + closing message      │
  └──────────────────────────────────────────┘
```

---

## Prerequisites

### 1. Score buckets (4 total)

Create these in the project's scoring settings. The bucket display name
drives the variable key (lowercased, spaces → `_`) and the string that
`argmax` returns:

| Display name | Variable key | `argmax` return value |
|---|---|---|
| Competitor | `competitor` → `[score_competitor]` | `"Competitor"` |
| Creator | `creator` → `[score_creator]` | `"Creator"` |
| Explorer | `explorer` → `[score_explorer]` | `"Explorer"` |
| Social | `social` → `[score_social]` | `"Social"` |

### 2. Achievements and roles

Create one achievement and one linked Discord role per segment in your
community Rewards settings. Record each `xp_role_id`.

### 3. Project

```jsonc
POST /v1/communities/{communityId}/projects
{
  "name": "Welcome — Member Intro",
  "scoring_enabled": true,
  "settings": {
    "max_completes_per_user": 1,
    "is_anonymous": false
  }
}
```

---

## Script payload (abbreviated)

```jsonc
{
  "blocks": [
    // q1 — intro
    {
      "type": "content_block",
      "prompt": "Welcome to the community, [UserName]! 🎮\n\nBefore you dive in — 6 quick questions to help us understand what kind of player you are.\n\nNo right or wrong answers. Just be honest.",
      "continue": { "after": "click", "label": "Let's go →" }
    },

    // q2 — first behavior question
    {
      "type": "single_punch",
      "prompt": "After a long gaming session, what are you most likely to share in the server?",
      "options": [
        { "value": "Stats",   "label": "📊 My match stats and rank progress",
          "score_values": { "competitor": 3, "social": 1 } },
        { "value": "Content", "label": "🎬 A clip or guide I made",
          "score_values": { "creator": 3, "social": 1 } },
        { "value": "Find",    "label": "🔍 Something interesting I discovered in the game",
          "score_values": { "explorer": 3, "social": 1 } },
        { "value": "Hang",    "label": "💬 I just hang out in chat",
          "score_values": { "social": 4 } }
      ]
    },

    // q3–q7 — five more questions, same structure …

    // q8 — segment calculated block
    {
      "type": "calculated_block",
      "prompt": "",
      "calculated_formula": "argmax([score_competitor],[score_creator],[score_explorer],[score_social])"
    },

    // q9 — Competitor reveal (hides when q8 ≠ Competitor)
    {
      "type": "content_block",
      "prompt": "## You're a Competitor 🏆\n\nYou're here to win, improve, and prove it. You'll find your people in **#ranked-chat** and **#tournament-announcements**.\n\nWelcome to the grind.",
      "precondition": "NOT((q8=\"Competitor\"))",
      "continue": { "after": "pause", "pause": 3 }
    },

    // q10 — Creator reveal
    {
      "type": "content_block",
      "prompt": "## You're a Creator 🎨\n\nYou make things — guides, clips, art, builds. Head to **#creator-showcase** and **#feedback-wanted** — that's your home base.",
      "precondition": "NOT((q8=\"Creator\"))",
      "continue": { "after": "pause", "pause": 3 }
    },

    // q11 — Explorer reveal
    {
      "type": "content_block",
      "prompt": "## You're an Explorer 🗺️\n\nYou go deep. Lore, hidden mechanics, secrets. You'll love **#theory-craft** and **#deep-dives**.",
      "precondition": "NOT((q8=\"Explorer\"))",
      "continue": { "after": "pause", "pause": 3 }
    },

    // q12 — Social reveal
    {
      "type": "content_block",
      "prompt": "## You're a Social 💬\n\nThe community IS the game for you. You'll feel right at home in **#general** and **#events** — and we'll probably see you helping newcomers soon.",
      "precondition": "NOT((q8=\"Social\"))",
      "continue": { "after": "pause", "pause": 3 }
    },

    // q13–q16 — achievement grants (one fires, three hide)
    {
      "type": "action_block",
      "action_kind": "give_achievement",
      "action_config": { "xp_role_id": 2001, "fire_scope": "respondent" },
      "precondition": "NOT((q8=\"Competitor\"))",
      "prompt": "The **Competitor** role is yours. 🏆",
      "continue": { "after": "pause", "pause": 2 }
    },
    {
      "type": "action_block",
      "action_kind": "give_achievement",
      "action_config": { "xp_role_id": 2002, "fire_scope": "respondent" },
      "precondition": "NOT((q8=\"Creator\"))",
      "prompt": "The **Creator** role is yours. 🎨",
      "continue": { "after": "pause", "pause": 2 }
    },
    {
      "type": "action_block",
      "action_kind": "give_achievement",
      "action_config": { "xp_role_id": 2003, "fire_scope": "respondent" },
      "precondition": "NOT((q8=\"Explorer\"))",
      "prompt": "The **Explorer** role is yours. 🗺️",
      "continue": { "after": "pause", "pause": 2 }
    },
    {
      "type": "action_block",
      "action_kind": "give_achievement",
      "action_config": { "xp_role_id": 2004, "fire_scope": "respondent" },
      "precondition": "NOT((q8=\"Social\"))",
      "prompt": "The **Social** role is yours. 💬",
      "continue": { "after": "pause", "pause": 2 }
    }
  ]
}
```

---

## Using the data

### Segment distribution over time

Export the Responses tab to CSV. The four bucket score columns
(`score_competitor`, `score_creator`, `score_explorer`, `score_social`)
are included. The `argmax` result is available as the q8 column (the
calculated field's stored value).

Filter by `join_date` to see whether your server's composition is shifting:
for example, whether a content creator recruitment campaign actually brought
in more Creators.

### Cross-tabulation with engagement

Join the segmentation export with your engagement data (XP totals, message
frequency, event attendance) on Discord handle. Research questions:
- Do Competitors retain longer than Socials?
- Are Creators the primary source of content but a minority of the member
  base?
- Do Explorers engage with deep-dive content at a higher rate than their
  population share?

### Targeted event invites

Because segment membership is stored as a Discord role, you can `@Creator`
or `@Explorer` when announcing events relevant to that segment, without
manually curating lists.

### Borderline members

Members whose top two bucket scores are within 2-3 points of each other
are behaviorally mixed. In the raw export, you can identify these by
comparing `score_competitor` against `score_creator` etc. You might
communicate to them differently (e.g., highlight events that straddle two
segments).

---

## Variations

### Add a secondary segment

Instead of assigning a single role, assign two: the primary and the
closest runner-up. Compute the runner-up with a second calculated field:

```jsonc
"calculated_formula": "argmax([score_creator],[score_explorer],[score_social])"
```

… where the `argmax` arguments deliberately exclude the primary segment
bucket. The result is the dominant secondary segment. Use skip logic to
grant a second, secondary role.

### Resurface segment in later surveys

Once a member has been segmented, their segment is stored as an achievement
on their profile. Later surveys can reference it by piping the result of a
lookup question, or simply by designing surveys that are sent to a
specific `@Role` Discord mention.

### Longitudinal re-segmentation

Run the same survey again after 6 months (use a new project, not a retake).
Join both exports on Discord handle to see which members drifted between
segments. Segment drift is an early signal of engagement trajectory.

---

## When this recipe doesn't fit

- **You want self-reported segments**: if members should explicitly choose
  their identity (e.g., "I'm a developer / designer / manager"), use a
  plain `single_punch` question and `give_achievement` blocks per answer.
  Hidden scoring is for cases where the classification is behavioral, not
  declared.
- **You want more than 4 segments**: `argmax` supports any number of
  buckets, but cognitive coherence of segments degrades beyond 5-6.
  If you need more, consider hierarchical segmentation: a first survey
  splits into 2 broad groups, a second survey (separate project) splits each
  group into 3 sub-segments.
- **You need statistically validated scales**: this recipe produces
  behavioral segment assignments, not psychometrically validated construct
  scores. For validated scales (Big Five, engagement frameworks), design
  the item battery externally, then encode the validated weights into
  `score_values`. The scoring machinery handles any weight scheme you provide.

---

## Related

- [Hogwarts House Sorting Hat](/recipes/hogwarts-house-sorting-quiz): same multi-bucket argmax pattern, community-entertainment framing
- [Pre/post attitude assessment](/recipes/pre-post-assessment): longitudinal change measurement using two-wave scoring surveys
- [Welcome quiz](/recipes/welcome-quiz): self-reported onboarding without hidden scoring
- [Scoring variables reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript)
