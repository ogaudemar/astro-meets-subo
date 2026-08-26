---
title: "Sorting Hat Personality Quiz for Discord"
description: "Build a house-sorting personality quiz where five questions distribute points across four houses, a calculated block picks the winner, and each member gets their own reveal."
pubDate: "Aug 05 2026"
audience: "community managers who want branded personality/alignment quizzes"
setupTime: "~30 minutes (most of which is tuning score weights to taste)"
bestFor: "fan communities, onboarding quizzes, seasonal events"
dimension: "engage"
features: ["scoring", "calculated block", "skip logic", "quizzes"]
relatedSlugs: ["member-segmentation", "world-capitals-quiz", "welcome-quiz"]
templateSlugs: []
faq:
  - q: "How do you make a personality quiz for Discord?"
    a: "Put score weights on every answer so each option feeds one or more personality buckets, then use a calculated block to pick the highest-scoring bucket and skip logic to show the matching reveal."
  - q: "How is a personality quiz different from a trivia quiz?"
    a: "There is no correct answer. Every option carries weight toward some bucket, so the quiz measures a leaning rather than grading right and wrong."
  - q: "How many questions should a sorting quiz have?"
    a: "Around five to seven is the sweet spot for Discord. Longer than that and completion rates drop, while fewer questions make one answer too decisive."
  - q: "Can members get a Discord role for their result?"
    a: "Yes. Add one give-role action block per house using the same skip-logic condition as the reveal, so the role matches whichever bucket won."
---A personality quiz where every answer accumulates points across hidden score
dimensions, a `calculated_block` picks the winner, and skip logic routes each
respondent to their personalised reveal. XP is awarded from the score itself,
so a "pure" Gryffindor earns more than a borderline one.

This recipe is based on an actual deployed quiz. The JSON payload at the end
of this document is production-accurate.

---

## The scenario

Five emoji-only questions distribute hidden points across four House buckets
(Gryffindor, Slytherin, Ravenclaw, Hufflepuff). A `calculated_block` running
`argmax(...)` picks the winning House. Four reveal content blocks are each
hidden unless their House is the winner. A bonus give-XP action fires only
for near-perfect scorers (≥ 95 % alignment), with XP equal to their raw
Gryffindor score. The outro thanks everyone and shows final scores with XP
totals.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Welcome to Hogwarts, [UserName]…"       │
  │ → [ I'm ready! 🪄 ]                      │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q2–q6: Five personality questions        │
  │ (single_punch, emoji_only style)         │
  │ Each option has score_values distributing│
  │ hidden points across the 4 House buckets │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q7: calculated_block                     │
  │ argmax([score_gryffindor],               │
  │        [score_slytherin],                │
  │        [score_ravenclaw],                │
  │        [score_hufflepuff])               │
  │ → stores winning House name as a variable│
  └──────────────────────────────────────────┘
                    │
                    ▼
  ╔══════════════════════════════════════════╗
  ║ q8–q11: House reveal blocks              ║
  ║ (content_block, one per House)           ║
  ║                                          ║
  ║ Each hidden unless q7 = that House name  ║
  ║ → exactly one fires per respondent       ║
  ╚══════════════════════════════════════════╝
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q12: calculated_block                    │
  │ [score_gryffindor]/[max_score_gryffindor]│
  │ * 100  → Gryffindor alignment %          │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ╔══════════════════════════════════════════╗
  ║ q13: give_xp action_block (bonus)        ║
  ║ Fires only when q12 > 95                 ║
  ║ source_key: "score_gryffindor"           ║
  ║ → XP = raw Gryffindor score              ║
  ╚══════════════════════════════════════════╝
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q14: Final score summary (content_block) │
  │ Shows all four House scores in plain text│
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ Outro: give_xp + closing message         │
  │ XP for completion + [earned_xp] summary  │
  └──────────────────────────────────────────┘
```

---

## Prerequisites

### 1. Score buckets (4 total)

Create these via `PUT /v1/communities/{id}/projects/{id}` with
`scoring_enabled: true`, then add buckets in the Script Editor (Settings →
Scoring) or by including them in the initial project setup. Each bucket name
drives the variable key used in `score_values` and in template tokens.

| Display name | Variable key (lowercased, spaces → `_`) |
|---|---|
| Gryffindor | `gryffindor` → `[score_gryffindor]`, `[max_score_gryffindor]` |
| Slytherin | `slytherin` → `[score_slytherin]`, `[max_score_slytherin]` |
| Ravenclaw | `ravenclaw` → `[score_ravenclaw]`, `[max_score_ravenclaw]` |
| Hufflepuff | `hufflepuff` → `[score_hufflepuff]`, `[max_score_hufflepuff]` |

### 2. Project

```jsonc
POST /v1/communities/{communityId}/projects
{
  "name": "Hogwarts House Sorting Hat",
  "scoring_enabled": true,
  "settings": { "max_completes_per_user": 1 }
}
```

`scoring_enabled: true` must be set **before** `PUT /script`: the bucket
name→ID map is built at write time. Without it, `score_values` names like
`"gryffindor"` are silently ignored and all Houses score 0, so `argmax`
always returns the first bucket.

Do **not** enable `use_xp` at the project level if you are awarding score-based
XP via an in-survey `give_xp` action block. The platform's `use_xp` flag
generates an additional outro XP block at a flat rate, so enabling both
results in double XP.

`max_completes_per_user: 1` prevents re-sorting. If you want re-sorting
(fun for seasonal resets), set `max_completes_per_user: null`.

---

## Key concepts

### score_values: distributing personality points

Each answer option carries a `score_values` dict that adds points to one or
more House buckets. The keys are bucket **names** (lowercased, spaces replaced
with `_`), not IDs.

```jsonc
// "Bravery" → strong Gryffindor signal, small Hufflepuff signal
{
  "value": "🦁 Bravery",
  "emoji": "🦁",
  "score_values": { "gryffindor": 3, "hufflepuff": 1 }
}
```

```jsonc
// "Intelligence" → strong Ravenclaw signal, small Slytherin signal
{
  "value": "🦉 Intelligence",
  "emoji": "🦉",
  "score_values": { "ravenclaw": 3, "slytherin": 1 }
}
```

Points accumulate across all five questions. No single question is decisive.
The winner is whoever has the highest total after all five.

> **Tip: weight overlap intentionally.** Giving every option a small secondary
> point to a second House creates the satisfying "borderline" result
> ("Gryffindor, but nearly Ravenclaw"). Pure single-bucket distributions
> produce predictable, boring results.

### calculated_block: picking the winner

```jsonc
{
  "type": "calculated_block",
  "prompt": "",
  "calculated_formula": "argmax([score_gryffindor],[score_slytherin],[score_ravenclaw],[score_hufflepuff])"
}
```

`argmax(...)` evaluates each variable and returns the **display name** of the
bucket with the highest value: exactly `"Gryffindor"`, `"Slytherin"`,
`"Ravenclaw"`, or `"Hufflepuff"`. This becomes available as `[q7]` (if the
block is the 7th in script order) in subsequent skip-logic expressions and
template text.

> **Important:** `argmax` returns the bucket's display name, not the lowercased
> variable key. Use `"Gryffindor"` (capital G) in skip-logic comparisons, not
> `"gryffindor"`.

### Skip logic: routing reveals

Each reveal is a `content_block` hidden unless its House was chosen:

```jsonc
// Show only when House = Gryffindor
{
  "type": "content_block",
  "prompt": "Courage burns brightly within you… **GRYFFINDOR!**",
  "image_url": "https://…gryffindor.gif",
  "precondition": "NOT((q7=\"Gryffindor\"))",
  "continue": { "after": "pause", "pause": 4 }
}
```

The precondition reads *"hide this block when q7 is not Gryffindor"*, which
means *"show this block only when q7 is Gryffindor"*. This is the standard
skip-logic hide-unless pattern used throughout Subo.

Because exactly one House can be the argmax winner, exactly one of the four
reveal blocks fires for each respondent.

> **Tie-breaking:** `argmax` returns the first bucket listed when scores are
> equal. Order your `argmax(...)` call to match the House you'd want to win
> ties, and traditionally Gryffindor wins ties in this quiz.

### Score-based XP for "pure" alignment

A second `calculated_block` computes alignment percentage for Gryffindor:

```jsonc
{
  "type": "calculated_block",
  "prompt": "",
  "calculated_formula": "[score_gryffindor]/[max_score_gryffindor]*100"
}
```

A `give_xp` action block fires only for near-perfect scorers:

```jsonc
{
  "type": "action_block",
  "action_kind": "give_xp",
  "action_config": {
    "source_key": "score_gryffindor",
    "fire_scope": "respondent"
  },
  "precondition": "NOT((q12>95))",
  "prompt": "You are not just Gryffindor — you are **pure Gryffindor!** [xp_points] [xp_name] bonus!"
}
```

`source_key: "score_gryffindor"` means XP = the raw Gryffindor score
(e.g., a respondent scoring 14 Gryffindor points gets 14 XP). This rewards
stronger alignment proportionally, without needing separate fixed XP amounts
per score band.

`fire_scope: "respondent"` ensures this fires at most once per person even
if the project allows retakes.

> **Extending this pattern:** Add similar percentage + give-XP pairs for each
> House to reward purity in any direction. You can also use `source_key` with
> the total `"score"` key if you've collapsed all four Houses into a single
> bucket for a simpler quiz.

### Final score summary

```jsonc
{
  "type": "content_block",
  "prompt": "# Your final scores...\n\nGryffindor: [score_gryffindor] (max: [max_score_gryffindor])\nSlytherin: [score_slytherin] (max: [max_score_slytherin])\nHufflepuff: [score_hufflepuff] (max: [max_score_hufflepuff])\nRavenclaw: [score_ravenclaw] (max: [max_score_ravenclaw])",
  "continue": { "after": "click", "label": "I understand where I belong! 😏" }
}
```

`[score_<bucket>]` and `[max_score_<bucket>]` are computed at the moment
this block is reached and substituted as plain numbers. No extra configuration
needed: they're available in every template field whenever `scoring_enabled`
is true on the project.

---

## Variations

### Replace XP with a House role

Instead of (or in addition to) score-based XP, grant a Discord role for the
winning House. Add one `give_role` action block per House, using the same skip-logic
pattern as the reveal blocks:

```jsonc
{
  "type": "action_block",
  "action_kind": "give_role",
  "action_config": { "role_id": "1234567890123456789" },
  "precondition": "NOT((q7=\"Gryffindor\"))",
  "prompt": "The Gryffindor role has been added to your profile!",
  "continue": { "after": "pause", "pause": 2 }
}
```

### More questions, finer resolution

Five questions with 4 options each gives a maximum of 15 points per bucket
(if every question has a weight-3 option for that House). Adding more questions
or widening weights gives finer resolution and reduces ties. Ten questions is
a sweet spot for Discord. Longer than that and completion rates drop.

### Allow re-sorting seasonally

Set `max_completes_per_user: null` (unlimited). Use `fire_scope: "respondent"`
on any give-achievement or exclusive give-role blocks. This ensures badges
and roles are granted only once even if the respondent re-sorts and lands in
a different House.

---

## Full script payload

```jsonc
// PUT /v1/communities/{communityId}/projects/{projectId}/script
{
  "blocks": [
    // q1 — intro
    {
      "type": "content_block",
      "prompt": "Welcome to Hogwarts, [UserName], where every great journey begins with a choice.\n\nI shall ask you a handful of questions, and together we'll see which House calls to you most strongly.\n\nAre you ready to be sorted?",
      "image_url": "https://static.klipy.com/…sorting-hat-intro.gif",
      "continue": { "after": "click", "label": "I'm ready! 🪄" }
    },

    // q2 — which quality do you value most?
    {
      "type": "single_punch",
      "prompt": "Which quality do you value most?",
      "answer_style": "emoji_only",
      "options": [
        { "value": "🦁 Bravery",      "emoji": "🦁", "score_values": { "gryffindor": 3, "hufflepuff": 1 } },
        { "value": "🦉 Intelligence", "emoji": "🦉", "score_values": { "ravenclaw": 3, "slytherin": 1 } },
        { "value": "🦅 Ambition",     "emoji": "🦅", "score_values": { "gryffindor": 1, "slytherin": 3 } },
        { "value": "🦡 Loyalty",      "emoji": "🦡", "score_values": { "gryffindor": 1, "hufflepuff": 3 } }
      ]
    },

    // q3–q6 — four more personality questions, same structure (omitted for brevity)
    // …

    // q7 — argmax: determine winning House
    {
      "type": "calculated_block",
      "prompt": "",
      "calculated_formula": "argmax([score_gryffindor],[score_slytherin],[score_ravenclaw],[score_hufflepuff])"
    },

    // q8–q11 — reveal blocks (one per House, fires when q7 matches)
    {
      "type": "content_block",
      "prompt": "Courage burns brightly within you, [UserName].\n\n# Better be… GRYFFINDOR! 🦁",
      "image_url": "https://static.klipy.com/…gryffindor-reveal.gif",
      "precondition": "NOT((q7=\"Gryffindor\"))",
      "continue": { "after": "pause", "pause": 4 }
    },
    {
      "type": "content_block",
      "prompt": "Your mind is sharp and curious, [UserName].\n\n# Clearly, you belong in… RAVENCLAW! 🦉",
      "image_url": "https://static.klipy.com/…ravenclaw-reveal.gif",
      "precondition": "NOT((q7=\"Ravenclaw\"))",
      "continue": { "after": "pause", "pause": 4 }
    },
    {
      "type": "content_block",
      "prompt": "Ambitious and determined, [UserName].\n\n# SLYTHERIN! 🐍",
      "image_url": "https://static.klipy.com/…slytherin-reveal.gif",
      "precondition": "NOT((q7=\"Slytherin\"))",
      "continue": { "after": "pause", "pause": 4 }
    },
    {
      "type": "content_block",
      "prompt": "Kind, patient, and fiercely loyal, [UserName].\n\n# HUFFLEPUFF! 🦡",
      "image_url": "https://static.klipy.com/…hufflepuff-reveal.gif",
      "precondition": "NOT((q7=\"Hufflepuff\"))",
      "continue": { "after": "pause", "pause": 4 }
    },

    // q12 — Gryffindor alignment percentage
    {
      "type": "calculated_block",
      "prompt": "",
      "calculated_formula": "[score_gryffindor]/[max_score_gryffindor]*100"
    },

    // q13 — bonus XP for near-perfect Gryffindor scorers (≥ 95 % alignment)
    {
      "type": "action_block",
      "action_kind": "give_xp",
      "action_config": { "source_key": "score_gryffindor", "fire_scope": "respondent" },
      "precondition": "NOT((q12>95))",
      "prompt": "You are not just Gryffindor — you are **pure Gryffindor!**\n\nYour score: [score_gryffindor] / [max_score_gryffindor]\n[xp_points] [xp_name] bonus!",
      "color": "740001",
      "continue": { "after": "pause", "pause": 4 }
    },

    // q14 — final score summary
    {
      "type": "content_block",
      "prompt": "# Your final scores\n\nGryffindor: [score_gryffindor] (max: [max_score_gryffindor])\nSlytherin: [score_slytherin] (max: [max_score_slytherin])\nHufflepuff: [score_hufflepuff] (max: [max_score_hufflepuff])\nRavenclaw: [score_ravenclaw] (max: [max_score_ravenclaw])",
      "image_url": "https://contentful.harrypotter.com/…sorting-hat.png",
      "continue": { "after": "click", "label": "I understand where I belong! 😏" }
    },

  ]
}
```

> **Outro blocks and the API:** The outro section is pre-synthesized by the
> platform when the project is created. Passing `section: "outro"` in
> `PUT /script` without the block's existing `id` returns
> `"section='outro' requires id for update"`. To update an outro block's
> presentation (title, prompt, image, pause), first fetch its ID with
> `GET /script?expand=outro`, then re-submit including the `id`. Note that
> `action_config` (including completion XP amount and `source_key`) is
> **read-only** via the API for outro blocks, so set those in the Script Editor
> web UI or via the project's `rewards` settings. The payload above omits the
> outro block for this reason.

---

## When this recipe doesn't fit

- **You want to grant a House achievement the first time a member is sorted**: pair a `give_achievement` action block per House (with `fire_scope:
  "respondent"`) alongside each reveal block. The achievement records the
  result permanently on the member profile even if you later delete the project.
- **You want continuous re-sorting**: allow retakes and use `fire_scope:
  "session"` on the completion-XP block. Use `fire_scope: "respondent"` on
  any give-achievement blocks so the badge is only granted once (for the first
  House the member sorted into).
- **You want a right/wrong quiz instead of a personality quiz**: use
  `correct_answer_id` on each question and `when_correct` / `when_incorrect`
  messages. See the [World Capitals recipe](/recipes/world-capitals-quiz/) for that
  pattern.

---

## Related

- [World Capitals geography quiz](/recipes/world-capitals-quiz/): traditional right/wrong quiz with per-question feedback and score-based XP
- [Welcome quiz](/recipes/welcome-quiz/): skip-logic routing pattern without scoring
- [Skip logic reference](https://api.subo.ai/docs#tag/Script): operator and value-type tables
- [Scoring variables reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript): full list of `[score_*]` tokens
