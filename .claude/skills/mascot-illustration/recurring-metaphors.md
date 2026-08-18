# Visual Metaphors + Environment Language

The strongest, most reusable part of the system. **One product idea maps to one
visual metaphor. Use exactly one metaphor per image.**

## The metaphor map

| Product idea | Visual metaphor | Subo's role |
|---|---|---|
| Clone a survey | Sparkle duplicate | (a mechanic reused inside other scenes) |
| Distribution / broadcasting clones | Teleporter | Spaceship captain |
| Reward automation (XP / roles) | Factory | Factory operator |
| Templates / template library | Library | Curator / librarian |
| Invitation customization | Painting workshop | Artist / craftsman |
| Quiz / grading | Game show | Game-show MC |
| Polls / voting | Broadcast "poll desk" | Election-night host / anchor |
| Poll vs full product (comparison) | Toolkit / kit-of-tools | Workshop host |
| Form vs structured conversation (data-collection intake) | Single warm chat bubble handed over; cold multi-field form set aside | Friendly concierge / host |
| "[Competitor] alternative" post (series) | Investigative newsroom / findings board | Investigative journalist (reserved-text base template) |
| Monitoring / live results | Control room | Operator |
| XP history / auditable point record | Bank passbook & statement (warm teller's counter) | Friendly bank teller / records clerk |
| Rating / scale / NPS / ranking questions (the scale family) | Scoring bench (judging table, score cards, a 1-2-3 rostrum) | Cheerful score-keeper who hands the paddle over |

When a **new** feature needs an image, first ask: *what everyday place or role
makes this feature obvious in one glance?* Add the new pairing to this table so
it becomes canon.

## Reusable mechanics (can appear inside any metaphor)
- **Clone = sparkle.** A clean duplicate shimmering off the original (used for
  the teleporter, and for "clone this template").
- **"The old way," kicked aside.** A crumpled spreadsheet, broken calculator, or
  blank "FROM SCRATCH" page tossed underfoot, which Subo pointedly ignores. Use
  sparingly, as a small background gag.

## Environment language

Pre-set moods so environments don't get re-invented each time. Keep to 2 to 3
readable elements; large empty breathing areas.

### Control rooms (monitoring)
Neon. Retro sci-fi. Large screens. Warm metallics. No clutter.

### Libraries (templates)
Wood. Warm, magical light. **Three glowing sections labeled CONNECT / DISCOVER /
ORGANIZE**, each a distinct hue. Minimal cards per shelf.

### Spaceships (teleporter / distribution)
Retro sci-fi. Warm gray. Pink accents. Teal accents. **Minimal purple inside the
ship** ; purple is reserved for the destination planet.

### Factories (reward automation)
See [examples/reward-factory.md](examples/reward-factory.md). Warm industrial,
automated, things moving along on their own. 

### Game-show stage (quiz)
Neon-lit set, big glowing scoreboard, podiums with buzzers. Triumphant, playful.

### Broadcast "poll desk" (polls / voting)
See [examples/poll-desk.md](examples/poll-desk.md). Warm TV studio, election-night
energy. Subo hosts at a desk; **one big live-results board with a single poll and
horizontal option bars** (echoes Subo's bar-chart head). A blob votes on a floating
Discord poll embed. Distinct from the game-show stage (no podiums/buzzers/quiz
scores) and from the sci-fi control room (warm, not neon monitoring). Winner bar in
teal/cyan. Keep the poll about the *method* of voting, not named competitors.

### Toolkit (poll vs full product comparison)
See [examples/comparison-toolkit.md](examples/comparison-toolkit.md). Warm workshop.
Subo opens a glowing kit where the poll is **one tool among a few** (poll bar-chart,
padlock, form card, trophy); a plain native poll sits basic beside it. Icons not text.
Distinct from the poll desk (no studio/results board): a workbench about how much more
than a vote you get.

### Investigative newsroom (alternative-series comparison posts)
Warm but focused research desk / small newsroom. One tidy "findings board" of feature
ICONS (padlock, clock, trophy, bar-chart, form card, quiz cap), warm desk-lamp pool,
magnifying glass + notepad. Subo as **investigative journalist** (serious, neutral
mouth), a blob taking in the honest verdict. **Left third kept dark/empty** for the
live `heroHeadline` overlay. No named competitor; icons not words; not a red-string
conspiracy wall. This is a reusable base template, not a bespoke render (see
[SKILL.md](SKILL.md) → Alternative-series heroes).

### Conversation-vs-form intake (data-collection / "Discord form" posts)
Warm, cozy welcome nook (soft rounded surfaces, gentle pink/cyan accents, not a neon
control room). Subo as a friendly concierge hands the blob **one glowing Discord message
bubble holding a single question** (short line + a couple of answer buttons); a tall,
cold, gray **multi-field paper form** is the "old way, kicked aside" gag, set aside and
pointedly ignored. Optionally 2 to 3 more chat bubbles queued softly behind the first
(implies one-question-at-a-time), blurred. The joke: a form became a friendly chat. Keep
it about the *method* (conversation over form), no named competitor. Keep baked text
minimal and story-serving (e.g. the bubble's question); specify it in the brief, since
the model renders it reliably now.

### Scoring bench (rating / opinion scale / NPS / ranking)
See [examples/scoring-bench.md](examples/scoring-bench.md). Warm wood-and-metal judging
bench in soft daylight, the register of a county-fair or diving-competition judging table.
Subo is the cheerful **score-keeper** who **hands the scoring card to the blob** rather than
judging anything himself, which is what keeps the "Subo enables, the blob discovers" dynamic
intact on a feature that is literally about scoring. One held score card reading a decimal
average, one small distribution board, one three-tier rostrum with 1 / 2 / 3 numerals for the
ranking half. **Numerals only, no words**, so it survives localization. **Cyan/aqua (#00f4ff)
is the scale-family hue**, used on the score numerals and the board glow (amber belongs to XP).
Distinct from the game-show stage (no neon, no buzzers, no contestant podiums, no quiz
scoreboard) and from the poll desk (no studio, no broadcast, no option bars with labels).
**No dials, needles or gauges**: Subo has no slider, and a gauge would promise one.

### Painting workshop (invitation customization)
Paint palette, brush, paint swatches / color chips. A Discord embed card floating
beside Subo, one edge being painted.

### Bank statement (XP history / auditable point record)
Warm, cozy teller's counter (soft rounded wood-and-metal, amber + pink accent
light, magical glow), **never a cold corporate bank**. Subo as a cheerful teller
hands the blob a long glowing passbook/receipt that scrolls down: each line is one
XP change with a short reason and an amount, green "+" gains and a red "−" loss,
ending in a "Starting balance" row, with a bold glowing running total below. The
blob has the "so that's where my points went" moment. **Amber/gold is the XP
category hue.** The statement is the focal prop, so its text is baked into the
brief (real-feel reasons, ideally summing to the footer total as an easter egg);
keep to ~5 to 7 short rows so it stays legible, not noisy. Distinct from the
control room (warm, not neon monitoring) and the factory (a record handed over,
not rewards being manufactured).
