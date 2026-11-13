# Zine prompt templates

Since v1.1 the image generator **never draws Subo** in a production image (system.md §7). It
makes a **scene plate**: props, paper and texture, with an empty area reserved for Subo. A
locked pose from the kit is then composited onto it in the repo, and the ink finish is run
once over the whole image.

## ChatGPT Project setup

A ChatGPT Project (or Custom GPT) named "Subo Zine":

- **Project files:** [system.md](system.md) and the two anchors,
  [examples/anchor-toolkit.png](examples/anchor-toolkit.png) and
  [examples/anchor-welcome.png](examples/anchor-welcome.png), for the zine look. The character
  references are not needed for plates: Subo is not drawn there. Add them, plus the pose kit,
  only for building a new pose.
- **Project instructions:** the "Plate rules" block below, plus: "The attached system.md is
  the full specification; follow its §2 visual language and §9 checks."
- **After any edit to system.md here, re-upload it to the project.** This repo is the master;
  the project holds a copy.

Each new image is a new chat in the project, with only a brief pasted.

## Plate rules (the project instructions)

```
You make SCENE PLATES for Subo illustrations in the Zine style described in the attached
system.md. A scene plate is everything except the character: props, paper and texture.
Subo is added afterwards from a locked asset, so:

- NEVER draw Subo, a robot, a mascot or any character, even as a silhouette or a sketch.
- Leave the RESERVED ZONE in each brief as empty paper with only light grain: no props, no
  marks, no texture patches, no shadows inside it.
- Line the props up with the positions the brief gives for Subo's hand and feet.

STYLE: indie comic × photocopied punk-rock zine. Black ink on natural off-white paper. No
color at all: black, white, gray and the paper tone only. Hand-inked contours, slightly
imperfect but controlled; flat fills; sparing halftone and xerox grain; at most one torn
paper edge or tape. Substantial negative space, no crowded collage.

LANGUAGE: no words, labels, digits, brand names or lettering, unless the brief allows them.
Use universal symbols.

SIZE: make a 3:2 landscape image. Treat it as a 2:1 picture with plain paper bands at the top
and bottom (about 12% each), which are cropped off. Every position in a brief is given as a
percentage of that 2:1 picture: across from the left, down from the top.
```

## Plate brief (per image)

```
PLATE FOR: [post or page]
SCENE: [one sentence: what the finished image says]
SUBO (added later, do not draw): [pose ID] at [position]; [hand / feet positions]
RESERVED ZONE: [x from-to %, y from-to %], empty paper only
MAIN PROP: [R## + description, size and position relative to the hand]
SUPPORT SYMBOLS: [0-2 monochrome icons, with positions]
TEXTURE: [none | one halftone patch where | one torn edge where]
NO TEXT: [anything that tends to get writing: blank calendar, blank document lines...]
```

Then ask for a **square** version for X, with the reserved zone moved as you specify.

## Placement conventions (for writing the SUBO line)

Positions come from the pose kit's `manifest.json` (1000×1200 coordinates) and these standard
placements in a 1200×600 hero. Claude composites at exactly these, so the plate must match.

| Pose | Placement | Subo's area (x, y) | Hand | Ground |
|---|---|---|---|---|
| P04 present right | Left side, height 78% of the image | 8-35%, 10-88% | 34% across, 59% down | 88% |
| P02 wave | Left side, height 78% | 8-31%, 10-88% | 29% across, 49% down | 88% |
| P05 celebrate | Centered, height 56%, airborne | 41-59%, 12-68% | 42% and 58% across, about 42% down | feet at 68% |

Other placements are fine: work them out from the manifest and write them in the brief.

## Exploration only: drawing Subo directly

To try out an idea or a new pose quickly, the original v1.0 prompt below draws Subo too.
**Never ship its output:** the character will drift. Use it to decide a composition, then
make a plate. Attach [references/logo_2d_authoritative.png](references/logo_2d_authoritative.png)
and [references/mascot_3d_body_reference.png](references/mascot_3d_body_reference.png).

```
You are illustrating Subo according to the attached "Subo Illustration System" (Zine style).
Use the attached 2D logo as the NON-NEGOTIABLE reference for head, bars, face, ears, eye
shapes, magenta contour and colors; use the attached 3D mascot only for body proportions and
blocky limbs. Approved zine images are STYLE references, not permission to change the
character.

STYLE: indie comic × photocopied punk-rock zine. The scene is uncolored black/white/gray
print on natural off-white paper. ONLY SUBO keeps its lime, magenta, purple left bar, gray
middle bar, cyan right bar and pale pink/cream eye colors. No color outside Subo. The pink
outline should feel like a neon highlighter applied after printing, not a digital glow.
Hand-inked black contours, sparing halftone/grain, flat shapes, high contrast and substantial
negative space. Avoid crowded collage effects.

CHARACTER LOCK: wide rectangular head, rectangular ears, three top bars (left purple, center
gray and tallest, right cyan and shortest), left square-in-square eye, right
checkmark-in-square eye, short straight slanted mouth, rectangular torso and angular limbs.
No rounded reinterpretation, curved mouth, chest badge, extra eyes or invented clothing.

LANGUAGE: No words, labels, digits, brand names or speech lettering in the image unless the
brief expressly allows them. Express the concept through internationally understandable
symbols. Separate copy is localized.

SCENE: [one-sentence feature or emotional outcome]
POSE: [P##]  MAIN PROP: [R##]  LAYOUT: [L##]
SUPPORT SYMBOLS: [0-2 monochrome icons]
DENSITY: [UI | website | social]
OUTPUT: [aspect ratio, transparent or off-white background, crop]

Before finalizing, check character fidelity, strictly monochrome surroundings, simple
narrative, and legibility at thumbnail size.
```

## Known traps (add to this list as they show up)

- Generators like to write a date or a number on a calendar, a file name on a document, or
  "XP" on a medal. Say "blank" explicitly for any prop that usually carries writing.
- A prop that is usually colored (a paperclip, a game controller, a gift ribbon) gets tinted.
  Name it "black ink" in the brief.
- Asked to leave space for a character, generators often sketch one anyway, or put a faint
  figure or shadow in the reserved zone. The plate rules forbid it; reject the plate if it
  happens rather than painting it out.
