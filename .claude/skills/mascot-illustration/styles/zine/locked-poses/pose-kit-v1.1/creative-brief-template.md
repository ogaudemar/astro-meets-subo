# Subo zine creative brief — pose-kit v1.1

> P02/P04/P05 are **approved and locked** (2026-11-12). Treat the SVGs as literal reusable assets, not drawings to regenerate. Scenes are made as plates around them: see `../../prompt-template.md` and `../../system.md` §7.

## Attach for an existing pose

- `../../system.md` (maintained source of truth)
- Selected `poses/Pxx-*.svg` and `previews/Pxx-*-transparent.png`
- `manifest.json` (for hand / prop anchor, bounds, facing and baseline)
- One relevant zine anchor scene from `../../examples/` for atmosphere

## Attach for a *new* pose

Also attach `masters/subo-head-vector.svg`, both images in `../../references/`, and the clean SVG of the closest existing pose. Create a proposed new ID; don't overwrite an approved pose without versioning.

## Brief

**Objective:** [what the audience should understand]
**Target:** [UI / website / blog / campaign; dimensions and file formats]
**Density:** [UI / website / campaign, per system.md]
**Character:** [existing approved Pxx, or NEW pose proposed ID + gesture description]
**Props:** [Rxx ID(s) or a new monochrome item]
**Layout:** [L01–L06]
**Interaction:** [what Subo does with the prop; specify hand left/right where relevant]
**Background:** [transparent / off-white paper / restrained halftone]
**Text:** [none by default]
**Exports:** [layered source, SVG character, transparent PNG and/or WebP]

## Production constraints

- For existing poses **embed the clean character SVG unchanged**, including unmirrored head and face.
- Use `manifest.json` for the prop-hand location, bounds and baseline; align props independently.
- For genuinely new poses, start from canonical head + consistent two shoulder anchors; vary body geometry, not identity.
- Keep every non-Subo element monochrome and text-free unless explicitly approved.
- Compose clean elements before invoking `finish_scene.py` **once on the whole composite**, including the character.
- Keep editable source layers for character / props / background separate.
