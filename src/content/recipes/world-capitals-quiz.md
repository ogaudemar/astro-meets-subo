---
title: "Discord Trivia Quiz with Right or Wrong Grading and XP"
description: "Run a graded trivia quiz where Subo marks each answer right or wrong, explains the correct one immediately, and awards XP equal to the score with no per-question logic."
pubDate: "Aug 05 2026"
audience: "community managers running knowledge challenges, trivia nights, or educational programs"
setupTime: "~20 minutes"
bestFor: "any community that runs recurring knowledge competitions or wants to incentivise learning"
dimension: "engage"
features: ["scoring", "grading", "XP", "quizzes"]
relatedSlugs: ["study-quiz", "hogwarts-house-sorting-quiz", "prediction-poll"]
templateSlugs: ["lore-trivia-quiz", "onboarding-certification"]
faq:
  - q: "How do you make a graded quiz in Discord?"
    a: "Mark the right option with correct_answer_id and put the points on that option with score_values. Subo grades each answer as it comes in and can explain the correct answer straight away."
  - q: "How do you award XP based on a quiz score?"
    a: "Use a give-XP action block that reads the score bucket, so XP equals the total score. Ten points per correct answer becomes ten XP per correct answer with no per-question rules."
  - q: "Can the bot explain the answer after each question?"
    a: "Yes. when_correct and when_incorrect hold per-question feedback. A good incorrect message names the right answer explicitly rather than only saying \"wrong\"."
  - q: "Can members retake the quiz?"
    a: "Yes, if you scope the XP action block to the session so each attempt is independent. That suits weekly runs where you want every attempt to count."
---A traditional 10-question quiz where every question has one correct answer,
respondents get instant per-question feedback, and the final XP award equals
their score, so 10 XP per correct answer, automatically.

---

## The scenario

Ten geography questions, each with four options. After each answer, the bot
sends an immediate feedback message before moving to the next question. At the
end, the respondent's XP equals their total score: 10 points × correct
answers. A closing block shows the final tally.

The quiz deliberately includes capital cities that are commonly confused with
larger or more famous cities in the same country (Canberra, not Sydney;
Brasília, not Rio de Janeiro; Ottawa, not Toronto; Wellington, not Auckland)
to make it genuinely challenging.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Ready to test your geography, [UserName]│
  │  10 questions, 10 XP each…"              │
  │ → [ Let's go! 🌍 ]                       │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q2–q11: Ten capital-city questions       │
  │ (single_punch, one correct_answer_id)    │
  │ Each question has:                       │
  │  • when_correct: "✅ Correct! …"        │
  │  • when_incorrect: "❌ Not quite! …"    │
  │  • score_values: { "score": 10 } on     │
  │    the correct option only              │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q12: Closing content_block               │
  │ "You scored [score] / [max_score]        │
  │  ([correct_answers] / [max_correct_answers]│
  │  correct)"                               │
  │ → [ See my XP reward ]                  │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ give_xp action_block (main section)      │
  │ source_key: "score"                      │
  │ XP = total score = 10 × correct answers  │
  └──────────────────────────────────────────┘
```

---

## Prerequisites

### 1. Score bucket (1 total)

Create a single bucket named **Score** in your project's scoring settings.
With a single bucket, the `[score]` variable holds the total and there are
no per-bucket suffixes needed.

| Display name | Variable key |
|---|---|
| Score | `score` → `[score]`, `[max_score]` |

### 2. Project

```jsonc
POST /v1/communities/{communityId}/projects
{
  "name": "World Capitals Quiz",
  "scoring_enabled": true,
  "settings": { "max_completes_per_user": 1 }
}
```

`scoring_enabled: true` must be set **before** `PUT /script`: it's what
creates the score buckets that `score_values` keys resolve against. Without
it, score weights are silently ignored and `[score]`, `[correct_answers]` etc.
render as literal `[brackets]` during the quiz.

Do **not** enable `use_xp` via `rewards` on the project. When `use_xp: true`
the platform auto-generates an outro give-XP block that fires for every
respondent at a flat rate (based on question count). This quiz awards XP
from the score via an in-survey `give_xp` action block instead, so enabling
both would double-award XP.

`max_completes_per_user: 1` prevents score farming. If you run the quiz as a
recurring event, set `max_completes_per_user: null` and use `fire_scope:
"session"` on the give-XP block so each run is independent.

---

## Key concepts

### correct_answer_id + score_values: right/wrong with a score

For each question, identify which `answer_id` is correct and set two things:

1. **`correct_answer_id`**: tells the grader which option is right.
2. **`score_values`**: puts points only on the correct option's record.

The trick: `score_values` is set on the option object itself. You put `{ "score": 10 }` only on the correct option; all other options leave `score_values` null (or omit it). This way the total score naturally equals `10 × correct_answers`.

```jsonc
{
  "type": "single_punch",
  "prompt": "What is the capital of Australia?",
  "correct_answer_id": 1001,          // ← the ID of "Canberra" after save
  "when_correct":   "✅ That's right! Canberra has been Australia's capital since 1913 — chosen as a compromise between Sydney and Melbourne.",
  "when_incorrect": "❌ Not quite. Despite being Australia's largest city, Sydney is not the capital. The answer is **Canberra**.",
  "options": [
    { "value": "Sydney",    "label": "🏙 Sydney" },
    { "value": "Canberra",  "label": "🏛 Canberra",  "score_values": { "score": 10 } },
    { "value": "Melbourne", "label": "☕ Melbourne" },
    { "value": "Brisbane",  "label": "☀️ Brisbane" }
  ]
}
```

> **On `correct_answer_id`:** the API accepts the `answer_id` (integer)
> returned after the script is saved. When creating a new script in a single
> `PUT /script` call, omit `correct_answer_id` on the first write, note the
> returned option IDs, then update with a `PATCH /script/blocks/{blockId}`.
> Alternatively, use the Script Editor web UI which resolves IDs for you.

### when_correct and when_incorrect: per-question feedback

After the respondent submits an answer, the bot immediately sends the matching
message before advancing to the next question. Both fields support the same
template variables:

| Variable | Value |
|---|---|
| `[answer]` | The respondent's answer text |
| `[score]` | Running total score at this point in the script |
| `[correct_answers]` | Number of questions answered correctly so far |
| `[max_correct_answers]` | Total number of graded questions in the script |

A good `when_incorrect` message names the correct answer explicitly. The
respondent learns the right fact immediately rather than having to wonder.

```jsonc
"when_incorrect": "❌ Actually, the capital of Brazil is **Brasília** — built from scratch in the late 1950s to replace Rio de Janeiro as the capital."
```

### Closing block: showing the score

A `content_block` just before the outro summarises the result using the
scoring variables:

```jsonc
{
  "type": "content_block",
  "prompt": "# Your final result\n\nYou got **[correct_answers] out of [max_correct_answers]** correct, for a total score of **[score] / [max_score]** points.\n\nNot bad, [UserName]! 🌍",
  "continue": { "after": "click", "label": "Claim my XP reward 🎁" }
}
```

### Score-based XP: 10 XP per correct answer automatically

A main-section `give_xp` action block at the end of the script uses
`source_key: "score"`. XP = the total score, which equals 10 × the number of
correct answers, with no per-question logic needed.

```jsonc
{
  "type": "action_block",
  "action_kind": "give_xp",
  "action_config": {
    "source_key": "score",
    "fire_scope": "session"
  },
  "prompt": "You answered [correct_answers] / [max_correct_answers] correctly and earned **[xp_points] [xp_name]**!\n\n- Total XP: [earned_xp]\n- This month: [month_total_xp]",
  "continue": { "after": "pause", "pause": 4 }
}
```

`fire_scope: "session"` means each attempt is independent, which is useful if you
allow retakes for a recurring trivia night. Switch to `"respondent"` if you
only want the XP awarded once per person ever.

> **Why not `section: "outro"`?** Outro blocks are pre-synthesized by the
> platform and already exist in the DB. Passing `section: "outro"` in
> `PUT /script` without their existing `id` returns an error. Additionally,
> `action_config` (including `source_key`) is read-only for outro blocks via
> the API. Use a main-section action block for score-based XP; the platform
> outro handles the final closing embed via project reward settings.

---

## The 10 questions

These are chosen for the "trick" factor: the most common wrong answer is a
larger or more famous city in the same country.

| # | Question | Correct answer | Common wrong answer |
|---|---|---|---|
| 1 | Capital of Australia | Canberra | Sydney |
| 2 | Capital of Canada | Ottawa | Toronto |
| 3 | Capital of Brazil | Brasília | Rio de Janeiro |
| 4 | Capital of Japan | Tokyo | Osaka |
| 5 | Capital of Germany | Berlin | Munich |
| 6 | Capital of India | New Delhi | Mumbai |
| 7 | Capital of Argentina | Buenos Aires | Córdoba |
| 8 | Capital of Egypt | Cairo | Alexandria |
| 9 | Capital of New Zealand | Wellington | Auckland |
| 10 | Capital of South Africa | Pretoria | Cape Town |

> **South Africa note:** South Africa officially has three capitals
> (Pretoria = executive, Cape Town = legislative, Bloemfontein = judicial).
> Add a note to the `when_correct` message acknowledging this if you expect
> knowledgeable respondents.

---

## Full script payload

```jsonc
// PUT /v1/communities/{communityId}/projects/{projectId}/script
{
  "blocks": [
    // q1 — intro
    {
      "type": "content_block",
      "prompt": "Ready to test your world geography knowledge, [UserName]?\n\n10 questions. 10 XP each for a correct answer. Maximum **100 XP**.\n\nA warning: some of these are trickier than they look. 😏",
      "continue": { "after": "click", "label": "Let's go! 🌍" }
    },

    // q2 — Australia
    {
      "type": "single_punch",
      "prompt": "What is the capital of Australia?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Canberra has been Australia's capital since 1913 — chosen as a compromise between Sydney and Melbourne. You scored [score] so far.",
      "when_incorrect": "❌ Not quite! The answer is **Canberra**, not Sydney. Australia's largest city is not its capital.",
      "options": [
        { "value": "Sydney",    "label": "🏙 Sydney" },
        { "value": "Canberra",  "label": "🏛 Canberra",  "score_values": { "score": 10 } },
        { "value": "Melbourne", "label": "☕ Melbourne" },
        { "value": "Brisbane",  "label": "☀️ Brisbane" }
      ]
    },

    // q3 — Canada
    {
      "type": "single_punch",
      "prompt": "What is the capital of Canada?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Ottawa, in Ontario, has been Canada's capital since 1857.",
      "when_incorrect": "❌ Not quite! **Ottawa** is the capital, not Toronto. It was chosen partly because it sits on the border between Ontario and Quebec.",
      "options": [
        { "value": "Toronto",   "label": "🏙 Toronto" },
        { "value": "Ottawa",    "label": "🏛 Ottawa",    "score_values": { "score": 10 } },
        { "value": "Vancouver", "label": "🌲 Vancouver" },
        { "value": "Montreal",  "label": "🥐 Montréal" }
      ]
    },

    // q4 — Brazil
    {
      "type": "single_punch",
      "prompt": "What is the capital of Brazil?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Brasília was purpose-built as a new capital and inaugurated in 1960.",
      "when_incorrect": "❌ Not quite! **Brasília** is the capital — built from scratch in the late 1950s to replace Rio de Janeiro.",
      "options": [
        { "value": "Rio de Janeiro", "label": "🏖 Rio de Janeiro" },
        { "value": "São Paulo",      "label": "🏙 São Paulo" },
        { "value": "Brasília",       "label": "🏛 Brasília",       "score_values": { "score": 10 } },
        { "value": "Salvador",       "label": "🥁 Salvador" }
      ]
    },

    // q5 — Japan
    {
      "type": "single_punch",
      "prompt": "What is the capital of Japan?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Tokyo (formerly Edo) became Japan's capital in 1869.",
      "when_incorrect": "❌ Not quite! **Tokyo** is Japan's capital. Osaka is the second-largest city but never the capital.",
      "options": [
        { "value": "Osaka",  "label": "🏯 Osaka" },
        { "value": "Kyoto",  "label": "⛩ Kyoto" },
        { "value": "Tokyo",  "label": "🗼 Tokyo",  "score_values": { "score": 10 } },
        { "value": "Nagoya", "label": "🌸 Nagoya" }
      ]
    },

    // q6 — Germany
    {
      "type": "single_punch",
      "prompt": "What is the capital of Germany?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Berlin is Germany's capital and its largest city.",
      "when_incorrect": "❌ Not quite! **Berlin** is Germany's capital. Bonn served as West Germany's capital during 1949–1990.",
      "options": [
        { "value": "Munich",  "label": "🍺 Munich" },
        { "value": "Hamburg", "label": "⚓ Hamburg" },
        { "value": "Bonn",    "label": "🎵 Bonn" },
        { "value": "Berlin",  "label": "🏛 Berlin",  "score_values": { "score": 10 } }
      ]
    },

    // q7 — India
    {
      "type": "single_punch",
      "prompt": "What is the capital of India?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! New Delhi is India's capital — distinct from Delhi, of which it forms the southern part.",
      "when_incorrect": "❌ Not quite! **New Delhi** is the capital. Mumbai is the financial centre but not the seat of government.",
      "options": [
        { "value": "Mumbai",    "label": "🏙 Mumbai" },
        { "value": "New Delhi", "label": "🏛 New Delhi", "score_values": { "score": 10 } },
        { "value": "Kolkata",   "label": "🌺 Kolkata" },
        { "value": "Bangalore", "label": "💻 Bangalore" }
      ]
    },

    // q8 — Argentina
    {
      "type": "single_punch",
      "prompt": "What is the capital of Argentina?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Buenos Aires is Argentina's capital and the largest city in South America by some measures.",
      "when_incorrect": "❌ Not quite! **Buenos Aires** is the capital of Argentina.",
      "options": [
        { "value": "Córdoba",      "label": "🏫 Córdoba" },
        { "value": "Rosario",      "label": "⚽ Rosario" },
        { "value": "Buenos Aires", "label": "🏛 Buenos Aires", "score_values": { "score": 10 } },
        { "value": "Mendoza",      "label": "🍇 Mendoza" }
      ]
    },

    // q9 — Egypt
    {
      "type": "single_punch",
      "prompt": "What is the capital of Egypt?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Cairo is Egypt's capital and the largest city in Africa.",
      "when_incorrect": "❌ Not quite! **Cairo** is Egypt's capital. Alexandria is the second city and was once the capital under the Ptolemies.",
      "options": [
        { "value": "Alexandria", "label": "📚 Alexandria" },
        { "value": "Luxor",      "label": "🏺 Luxor" },
        { "value": "Giza",       "label": "🐪 Giza" },
        { "value": "Cairo",      "label": "🏛 Cairo",      "score_values": { "score": 10 } }
      ]
    },

    // q10 — New Zealand
    {
      "type": "single_punch",
      "prompt": "What is the capital of New Zealand?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Wellington, at the southern tip of the North Island, has been New Zealand's capital since 1865.",
      "when_incorrect": "❌ Not quite! **Wellington** is the capital. Auckland is the largest city but is not the capital.",
      "options": [
        { "value": "Auckland",    "label": "⛵ Auckland" },
        { "value": "Christchurch","label": "🌿 Christchurch" },
        { "value": "Wellington",  "label": "🏛 Wellington",  "score_values": { "score": 10 } },
        { "value": "Dunedin",     "label": "🐧 Dunedin" }
      ]
    },

    // q11 — South Africa
    {
      "type": "single_punch",
      "prompt": "What is the executive capital of South Africa?",
      "correct_answer_id": null,
      "when_correct":   "✅ Correct! Pretoria is South Africa's executive capital — seat of the President and the national government.",
      "when_incorrect": "❌ Tricky one! South Africa has three capitals: **Pretoria** (executive), Cape Town (legislative), and Bloemfontein (judicial). The executive capital — home of the President — is Pretoria.",
      "options": [
        { "value": "Cape Town",    "label": "🌊 Cape Town" },
        { "value": "Johannesburg", "label": "💎 Johannesburg" },
        { "value": "Pretoria",     "label": "🏛 Pretoria",     "score_values": { "score": 10 } },
        { "value": "Durban",       "label": "🏖 Durban" }
      ]
    },

    // q12 — closing summary
    {
      "type": "content_block",
      "prompt": "# Your result\n\nYou got **[correct_answers] out of [max_correct_answers]** correct.\n\nTotal score: **[score] / [max_score]** points.\n\nNot bad, [UserName]! 🌍",
      "continue": { "after": "click", "label": "Claim my XP reward 🎁" }
    },

    // Score-based XP — main-section block, NOT section: "outro"
    // Outro blocks are pre-synthesized; they require their existing id to update
    // and action_config is read-only via the API for outro blocks.
    {
      "type": "action_block",
      "action_kind": "give_xp",
      "action_config": {
        "source_key": "score",
        "fire_scope": "session"
      },
      "prompt": "You answered [correct_answers] / [max_correct_answers] correctly and earned **[xp_points] [xp_name]**!\n\n- Total XP: [earned_xp]\n- This month: [month_total_xp]\n- Next level: [xp_to_next_level] to reach [next_xp_level]",
      "continue": { "after": "pause", "pause": 4 }
    }
  ]
}
```

> **Setting `correct_answer_id`:** the payload above sets `correct_answer_id:
> null` on each question as a placeholder. After the first `PUT /script` call,
> the response includes the assigned `id` for every option. Make a second
> `PUT /script/blocks/{blockId}` call per question with the correct option's
> ID. The Script Editor web UI handles this automatically.

---

## Variations

### Award a "Perfect Score" achievement

Add a `give_achievement` action block at the end of the main section (before
the outro), fired only when `[correct_answers]` equals `[max_correct_answers]`:

```jsonc
{
  "type": "action_block",
  "action_kind": "give_achievement",
  "action_config": { "xp_role_id": 9001, "fire_scope": "respondent" },
  "precondition": "NOT((correct_answers=10))",
  "prompt": "🏆 Perfect score! You got every capital right!",
  "continue": { "after": "pause", "pause": 3 }
}
```

`fire_scope: "respondent"` ensures the achievement is only granted once even
if the respondent retakes the quiz. The achievement ID (`xp_role_id`) must be
created in advance in your community's Rewards settings.

### Tiered XP by performance band

Instead of a single `source_key: "score"` XP block, award fixed XP by band
using a calculated block + three mutually-exclusive action blocks:

```jsonc
// calculated block: derive band
{
  "type": "calculated_block",
  "prompt": "",
  "calculated_formula": "if [correct_answers] >= 9 then gold else if [correct_answers] >= 6 then silver else bronze"
},
// gold band (9–10 correct)
{
  "type": "action_block",
  "action_kind": "give_xp",
  "action_config": { "xp_amount": 200, "fire_scope": "session" },
  "precondition": "NOT((qN=\"gold\"))",
  "prompt": "🥇 Gold tier! [xp_points] [xp_name]!"
},
// silver band (6–8 correct)
{ "precondition": "NOT((qN=\"silver\"))", "action_config": { "xp_amount": 100 }, … },
// bronze band (0–5 correct)
{ "precondition": "NOT((qN=\"bronze\"))", "action_config": { "xp_amount": 25 },  … }
```

Replace `qN` with the actual position of the band calculated block.

### Recurring trivia night (weekly)

Set `max_completes_per_user: null` and `fire_scope: "session"` on all
give-XP and give-achievement blocks. Each weekly run is independent, so a
respondent who takes it four weeks in a row earns XP four times and can
improve their score week-over-week.

---

## When this recipe doesn't fit

- **You want to randomise question order**: block order is fixed at authoring
  time; randomisation is not yet supported. Workaround: create multiple project
  clones with shuffled block orders and distribute them round-robin.
- **You want partial credit on multi-select questions**: multi-select grading
  is deferred. Current behaviour: `correct_answer_id` is only meaningful on
  `single_punch` blocks. Use single-select questions for all graded items.
- **You want to show the respondent which specific questions they got wrong**: the `when_incorrect` message names the correct answer immediately after each
  question, which covers this. A post-completion review screen is not yet
  built.

---

## Related

- [Hogwarts House Sorting Hat](/recipes/hogwarts-house-sorting-quiz/): personality quiz with multi-bucket scoring and argmax
- [Welcome quiz](/recipes/welcome-quiz/): skip-logic routing without scoring
- [Scoring variables reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript): full list of `[score_*]`, `[correct_answers]`, `[max_correct_answers]` tokens
