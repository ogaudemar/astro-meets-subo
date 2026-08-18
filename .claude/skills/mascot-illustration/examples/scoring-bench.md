# Example: The Scoring Bench

- **Feature:** the scale family (Rating, Opinion Scale, NPS, Ranking) — hero image for
  the launch post, `/blog/discord-rating-scale-nps-ranking-questions`.
- **Metaphor:** scoring bench (a judging table with score cards and a 1-2-3 rostrum).
- **Premise:** the release's one idea is that **the answer is a number, so it averages**.
  A judging bench is where a tap becomes a score in one glance. Subo does not judge
  anything: he **hands the score card to the blob**, so the canon dynamic survives on a
  feature that is about scoring.
- **Why not the game show:** that stage is already canon for quizzes (right and wrong
  answers, buzzers, a scoreboard). A scale has no correct answer, so the register is a
  calm judging table in warm daylight, not a neon set.

## Brief

```
SCENE
  A warm wood-and-metal judging bench in soft daylight, rounded and glossy, the register
  of a county-fair or diving-competition scoring table. Uncluttered, generous empty space.

MAIN ACTION
  Subo stands a foot in front of the bench, cheerful and grinning, holding up a large
  rounded score card in both hands and offering it toward the blob. The card reads "4.4"
  in big glowing cyan numerals, with a small row of five stars above the number, four and
  a half of them lit. Subo is handing the scoring over, not judging.

SUPPORTING CHARACTER
  One Discord blob at the left of the bench, wide-eyed (both eyes square-in-square),
  reaching up to tap the fourth star on a floating, glowing Discord message bubble that
  holds a single row of five star buttons. Its "aha" is that the tap it just made is the
  number on Subo's card.

BACKGROUND
  Two elements only, slightly blurred:
  1. A small results board showing a simple five-bar distribution, tallest bar on the
     right, with a star as the axis marker and no words.
  2. A low three-tier rostrum with three floating rounded cards on it carrying the
     numerals 1, 2 and 3, for the ranking half of the family.

PROPS
  Small background gag: a crumpled paper tally sheet on the floor beside the bench,
  covered in five columns of hand-drawn tick marks, pointedly ignored. This is "the old
  way": counted, never averaged. Keep it small and out of the focal path.

LIGHTING
  Warm cinematic, soft key + rim, pink/cyan accents, slight bloom, shallow DoF.

PALETTE
  Warm metallics + teal accents + pink highlights. Cyan/aqua (#00f4ff) is the category
  hue here: the score numerals, the board glow and the star highlights. No purple.

COMPOSITION
  2:1 ratio. Eye level, slight wide angle. Subo dominant and centered slightly right,
  blob second at left, score card and Discord bubble third, board and rostrum last.

CHARACTER CANON (restate, the model does not know it)
  Subo is a rounded glossy lime-green (#9eff00) blob robot with a pink emissive outline
  (#e1287e), no sharp corners. Three bar charts on top of his head, left to right purple
  (#745399), grey (#848ca4), aqua (#00f4ff), each with pink outlines. Left eye is a square
  with a pink border and a pink inner square; right eye is the checkbox/checkmark motif.
  Mouth present and cheerful. Two complete cartoon hands, two feet.

STYLE
  Pixar / WALL-E / modern high-end 3D animation.

NEGATIVE
  No photorealism, painterly, anime, or flat illustration.
  No text beyond "4.4" and the numerals 1, 2, 3 (no invented names, no labels, no words
  on the board or the rostrum).
  No dials, needles, gauges or sliders of any kind.
  No neon game-show set, no buzzers, no contestant podiums, no quiz scoreboard.
  No malformed hands/eyes. No missing mouth. No merged limbs. No clutter.
```

## Notes

- **Numerals only, no words.** The site runs in six languages and the hero is reused
  across locales if the post is ever translated. It also keeps the render honest: baked
  words are where the model invents copy.
- **No gauge, and this one is a product-accuracy constraint rather than a style one.**
  There is no slider in the scale family, on purpose (every scale is discrete tap
  targets, which is what makes it work in Discord and on a phone). A needle gauge in the
  hero would promise a control that does not exist.
- **The card must not show an NPS rollup.** No promoter/passive/detractor split anywhere
  in the image: Subo reports a distribution and an average, and the copy is careful about
  it, so the art should be too. A plain decimal average is exactly right.
- **Watch the blob's hand**, which is reaching and therefore the most breakable thing in
  the frame. Assume it is wrong until proven right.

## Final asset

`public/images/blog/scale-family/scale-family-hero.webp` (2:1, 1200x600, 90% quality)

**Shipped 2026-08-18** as the hero of `/blog/discord-rating-scale-nps-ranking-questions`.
The render came back on-brief: bench, the 4.4 card offered to the blob, the star-axis
distribution board, the 1-2-3 rostrum (correctly ordered 2 / 1 / 3 across the tiers), the
crumpled tally sheet, no gauge, no promoter/detractor split, and no text beyond what the
brief asked for. Subo picked up round glasses and a bow tie, which is costume and therefore
fair game.

**Two canon drifts, shipped as-is and logged so the next brief can pre-empt them:**
- **The head bar charts came back pink/magenta/purple/cyan** instead of the canonical
  purple / grey / aqua. The grey bar is the one the model keeps refusing; consider naming
  it twice in the prompt ("the middle bar is neutral grey, not pink").
- **Both eyes are square-in-square.** That is the canon *wide-eyed* variant, but Subo is
  grinning and presenting here, so the right eye should have been the checkbox motif. The
  prompt did restate it; the model overrode it. Worth stating as its own line rather than
  inside the character paragraph.

Neither is worth a re-render on its own. Fix both if the image is ever regenerated.
