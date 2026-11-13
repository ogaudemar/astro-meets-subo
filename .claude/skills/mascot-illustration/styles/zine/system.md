# Zine style: Subo Illustration System

- **Version:** 1.0 · **Status:** working standard · **Date:** 12 November 2026
- **Visual direction:** indie comic × punk-rock zine.
- **Principle:** imagine a photocopied, black-and-white fanzine in which only Subo has been
  colored in afterward with neon highlighters.

> **Source of truth.** This Markdown file is the maintained version (operator, 2026-11-12).
> It was converted from `docs/subo_illustration_system_v1.0.docx`, written with ChatGPT,
> which is kept as the original and is no longer edited. Change this file, bump the version
> (§9), and record the decision in the changelog at the bottom.

## 0. How to use this specification

This document is the portable source of truth for creating illustrations in new chats, with
different designers, or with different image tools. Always attach the two official character
references and one or more approved zine examples. A text prompt alone does not reliably
preserve character geometry.

**Authority order (highest first):**

1. **Official 2D logo:** exact head silhouette, ears, three top bars, facial geometry, color
   placement, magenta contour.
2. **Official 3D mascot:** torso, angular arms and legs, feet, character proportions and
   pose possibilities. Use its shape, not its rendering style.
3. **This spec:** monochrome world, linework, composition, props, text and review rules.
4. **Approved example scenes:** mood, energy, texture and scene arrangement only; they do not
   override the character references.

**Non-negotiable:** Subo is a fixed character inside a flexible illustration language. Never
redesign Subo to match a scene.

## 1. Character lock: do not improvise

- **Head:** wide, rectangular, near-flat front face with gently rounded outer corners; larger
  than the narrow rectangular torso. Small rectangular side ears, not round discs.
- **Top bars:** three vertical columns integrated with the head: left purple (medium height),
  middle cool gray (tallest), right cyan (shortest). Preserve their magenta framing.
- **Eyes:** two square frames. Left = pale square containing a smaller salmon-pink square.
  Right = pale square containing a salmon-pink checkmark. Their shapes are essential brand
  identifiers.
- **Mouth:** one short, straight, slanted magenta dash. No curved smile, open mouth, nose,
  eyebrows, eyelashes or replacement facial expressions.
- **Body:** narrow rectangular lime torso, angular simple limbs, squared, boot-like feet.
  Hands are minimal block shapes, not realistic fingers or cartoon mittens. Pose may change;
  body architecture may not.
- **Contour:** bold neon-pink/magenta boundary on the mascot, like a highlighter drawn over a
  black-ink photocopy. Keep its placement and thickness recognizable.
- **No invented additions:** no chest badge, initials, clothes, unnecessary face changes, or
  extra antennae unless explicitly approved for a specific scene.
- **Expressions** come from body language, tilt, action and nearby monochrome symbols, not
  from altering the face.

### Mascot palette: color is reserved for Subo

| Part | Working color | Rule |
|---|---|---|
| Body / head | Neon lime `#9EFF00` | Dominant color; flat fill |
| Outer character and eye frames | Neon magenta `#E1287E` | Highlighter-like pink contour; the logo is authoritative |
| Left top bar | Purple `#745399` | The only place purple may appear |
| Middle top bar | Cool gray | Match the official logo visually |
| Right top bar | Aqua `#00F4FF` | Match the official logo visually |
| Eye interiors and marks | Pale cream + salmon-pink | Sample from the official 2D logo |
| Extra black ink contour | Black / near-black | Zine outline outside the magenta, as needed |

Hex values are working guides, not replacements for the approved logo artwork. Eyedropper
values and exact geometry should be derived from the source asset.

## 2. Visual language: the uncolored zine world

- **Environment:** black ink on off-white paper. All props, cards, people, speech bubbles,
  rewards, symbols, textures and backgrounds are monochrome (black, white, gray, with natural
  warm paper stock allowed). No yellow, coral, teal, purple or magenta accents outside Subo.
  The effect should be that the mascot was selectively colorized after printing.
- **Linework:** visibly hand-inked and slightly imperfect, but controlled. Strong bold
  exterior contours; lighter interior detail lines; angular shapes rather than glossy, round
  vector forms.
- **Texture:** restrained xerox grain, a little halftone, an occasional torn paper edge or
  tape. Texture must not reduce readability or cover Subo's eyes or mouth.
- **Shading:** flat fills, simple black hatching or halftone where needed. No gradients,
  glow, 3D lighting, airbrushing, plastic surfaces, soft cast shadows or cinematic realism.
- **Energy:** 1 to 3 simple ink-only action marks (rays, sparkle, underline, movement
  strokes). Avoid decorative confetti by default.
- **Restraint:** leave substantial breathing room. Do not fill every corner with lightning
  bolts, tape, scribbles and lettering.
- **Typography:** no text embedded by default. Even "Hello" and "XP", though recognizable,
  should be replaced with universal symbols whenever the concept stays clear. Localized
  headings and captions belong in the website or app layout, not in the artwork.

### Three density levels

| Context | Recipe | Texture allowance |
|---|---|---|
| UI / onboarding | Mascot + 0-1 prop; no text; generous transparent or empty space | None, or one light halftone area |
| Website / templates / blog | Mascot + 1 main prop + 0-2 supporting icons | One texture treatment; optional torn-paper edge |
| Discord / X / campaigns | Mascot + 1 main prop + up to 3 supporting symbols | Up to two controlled zine devices (for example halftone + paper tear), never clutter |

## 3. Composition grammar

**Default formula:** one Subo + one focal prop + zero to two monochrome support symbols +
paper/negative space. Select a pose ID, prop ID, layout ID and density level. The point of
the illustration must be understandable at thumbnail size, without language.

**Safe layouts:**

| ID | Layout | Typical use |
|---|---|---|
| L01 | Side by side: Subo left, large prop right | Toolkit |
| L02 | Character spotlight: Subo centered, 0-1 symbol | Welcome, empty states |
| L03 | Achievement: Subo + oversized medal or star | Reward |
| L04 | Card stack: Subo + 2-3 stacked cards | Templates, results |
| L05 | Interaction: Subo + simplified monochrome people or exchange | Community, invitations |
| L06 | Compact crop: upper-body Subo + a single black icon | Tooltips, small app panels |

**Do** crop or move reusable elements for each format. **Do not** regenerate a subtly
different Subo head each time.

## 4. Reusable asset catalog (planned for the v1 kit)

These are production targets, not a claim that editable pose or prop assets already exist.
Every approved asset gets a stable ID, a transparent source (ideally SVG) and a PNG preview.

### Twelve poses

| ID | Pose | Typical use |
|---|---|---|
| P01 | Neutral front view | Empty states, overview |
| P02 | Wave / greet | Welcome, onboarding |
| P03 | Present left | Feature highlight |
| P04 | Present right | Feature highlight |
| P05 | Jump / celebrate | Success, reward |
| P06 | Hold or offer card | Templates, invitations |
| P07 | Point / beckon with blocky arm | Calls to action |
| P08 | Think / head tilt | Questions, AI, planning |
| P09 | Inspect / lean forward | Analytics, results |
| P10 | Work at simple desk | Builder, editing |
| P11 | Walk / move | Journey, getting started |
| P12 | Thank / acknowledge, open arms | Completion, gratitude |

### Monochrome props

| ID | Prop | Uses |
|---|---|---|
| R01 | Open toolbox | Feature toolkit |
| R02 | Speech bubble, icon-only | Conversations, feedback |
| R03 | Chart card / bars | Results, analytics |
| R04 | Poll / check card | Voting, decisions |
| R05 | Star medal / rosette | XP, achievements |
| R06 | Card stack / template sheets | Templates |
| R07 | Envelope / invitation | Outreach, invites |
| R08 | Gift / raffle ticket | Giveaways |
| R09 | Group silhouettes | Welcome, community |
| R10 | Magnifying glass | Insights, exploration |
| R11 | Lock + globe pair | Access / answer zones |
| R12 | Simple clock / queue ticket | Waiting, scheduling |
| R13 *(proposed 2026-11-12)* | File stack: image, document and video cards, paperclip | File uploads |
| R14 *(proposed 2026-11-12)* | Skip card: a card with a skip-forward symbol | Optional questions |

Proposed props become catalog entries once an illustration using them is approved.

### Three texture assets

T01 light photocopy grain · T02 coarse halftone patch · T03 torn-paper edge / tape. Each is
black, gray and off-white only, supplied on a separate layer.

## 5. Approved starting scenes and symbolic recipes

- **Toolkit:** P04 + R01 + (R02, R03, R05) + L01. Subo points at a black-and-white toolbox
  holding three icon cards. No label or text. Anchor: `examples/anchor-toolkit.png`.
- **Welcome:** P02 + R09 + optional R02 + L05. Subo waves toward three simple monochrome
  community silhouettes. A speech bubble can show a star or sparkle, not "Hello!". Anchor:
  `examples/anchor-welcome.png`.
- **Achievement:** P05 + R05 + L03. Subo jumps beside a monochrome rosette containing a star.
  No "XP" is needed unless a specific UI context requires it.
- **Other common extensions:** poll → R04; analysis → R03 + R10; invitation → R07; giveaway →
  R08; private/open → R11; waiting → R12. Keep icons semantic rather than literal text
  translations.

## 6. Format and export rules

- **Master:** an editable vector master (SVG/Figma) for Subo's head, face and reusable poses;
  separate mascot, prop, texture and background layers. PNG examples are references, not
  editable masters.
- **UI:** transparent-background PNG or SVG, simplified UI density, no small text or texture
  that disappears.
- **Website / blog:** SVG where feasible, otherwise high-resolution PNG or WebP; flexible
  square and landscape crops; keep space for separate, localized headings.
  - *Site specifics (added 2026-11-12):* blog heroes are **2:1, 1200×600 WebP** in
    `public/images/blog/<slug>/`, and the same file is the Discord and X preview card at
    about 1.91:1. Keep everything important inside a centered 1.91:1 area, nothing within 8%
    of any edge.
- **Discord / X:** export square and landscape variants from the same scene layers. Review at
  small thumbnail size and check platform-safe margins.
- **Accessibility:** write localizable alt text and captions outside the image. Test
  important symbols for cultural ambiguity.

## 7. Workflow: consistent across new chats and tools

1. **Start from the kit:** attach [references/logo_2d_authoritative.png](references/logo_2d_authoritative.png),
   [references/mascot_3d_body_reference.png](references/mascot_3d_body_reference.png)
   and 1-2 approved zine examples from [examples/](examples/). Include this spec or the condensed prompt in
   [prompt-template.md](prompt-template.md).
2. **Brief the scene:** choose the use case, a one-sentence message, density, pose ID, prop ID,
   layout ID and output crop. Say whether any text is intentionally permitted.
3. **Generate a rough composition:** prioritize prop and story clarity without touching the
   approved head or face. If possible, compose with existing vector mascot pieces rather than
   asking AI to redraw them.
4. **Brand QA:** reject any face, ear, bar or mouth drift, extra colors outside the mascot,
   excess decoration, or embedded wording.
5. **Assemble and export:** combine approved mascot artwork, monochrome props and texture as
   independent layers. Export the crops needed, with accessibility copy outside the art.
6. **Curate:** approve only assets that add something reusable; register IDs and record the
   version of this spec that created them.

**Reliability note:** image generation is not a deterministic character rig. Prompts plus
reference PNGs reduce drift but cannot guarantee exact geometry. For truly consistent
production, create a reusable vector mascot and pose library, then use AI mainly for
composition and prop concepts, not for reconstructing Subo's face in every scene.

## 8. Prompt

The copy/paste prompt for a fresh conversation lives in
[prompt-template.md](prompt-template.md).

## 9. Acceptance and versioning

**Hard-fail conditions, reject the illustration:** incorrect eyes or mouth; altered head,
ears or bars; purple outside the left head bar; any colored prop or decoration; a new chest
logo; text not explicitly authorized.

**Quality check (pass before publishing):**

- [ ] Instantly recognizable as official Subo
- [ ] Subo is the only colored element
- [ ] Looks printed and inked, not plastic, 3D-animated or sterile vector
- [ ] One clear action and visual hierarchy; readable at thumbnail size
- [ ] Monochrome props are reusable and do not overwhelm the character
- [ ] No baked-in translation burden; alt text and captions live outside the image
- [ ] Source layers, IDs and export variants are saved

**Change control:** minor versions (v1.1) refine linework, texture, rules and new assets;
major versions (v2.0) are only for deliberately approved changes to the illustration
language. Never silently change logo geometry. Record each decision below as
date · change · reason · example · affected assets. Keep older approved assets and note
deprecations.

**Next production milestone:** create the character vector master and three locked poses
(P02, P04, P05) before expanding to all 12 poses. Then build R01, R05, R09 and the three
anchor scenes as layered compositions. This is the smallest reliable production-ready kit.

## Changelog

- 2026-11-12 · v1.0 · The two character references added to `references/` (operator).
- 2026-11-12 · v1.0 · Converted from the ChatGPT .docx to Markdown, made the source of truth
  (operator). Added: §6 site specifics for blog heroes; proposed props R13 and R14 for the
  November posts. No rule changed.
