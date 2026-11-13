# Zine prompt template

For a fresh image-tool conversation (ChatGPT has been the tool so far). Attach first:

1. `logo_2d_authoritative.png` (the official 2D logo)
2. `mascot_3d_body_reference.png` (the 3D mascot, for body shape only)
3. One or two approved Zine examples: start with [examples/anchor-toolkit.png](examples/anchor-toolkit.png)
   and [examples/anchor-welcome.png](examples/anchor-welcome.png)

Then paste the block below, filling the slots at the end. Pick IDs from
[system.md](system.md) §3-4.

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

## OUTPUT line for a blog hero

```
OUTPUT: 2:1 landscape, natural off-white paper background. Keep Subo and the main prop inside
the central 1.91:1 area, nothing important within 8% of any edge. No text, no digits.
```

Then ask for a **square** version of the same scene for X.

## Known traps (add to this list as they show up)

- Generators like to write a date or a number on a calendar, a file name on a document, or
  "XP" on a medal. Say "blank" explicitly for any prop that usually carries writing.
- A prop that is usually colored (a paperclip, a game controller, a gift ribbon) gets tinted.
  Name it "black ink" in the brief.
