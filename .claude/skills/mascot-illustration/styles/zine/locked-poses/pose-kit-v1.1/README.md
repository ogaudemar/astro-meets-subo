# Subo pose-kit v1.1 — approved locked poses

**Status:** APPROVED and locked on 2026-11-12. These are the canonical reusable poses for P02, P04 and P05.  
**Style spec:** `../../system.md` (the Zine style's maintained source of truth).  
**Canonical face:** `masters/subo-head-vector.svg`, traced from the authoritative 2D logo.  
**Body guidance:** `../../references/mascot_3d_body_reference.png`.  
**Style anchors:** `../../examples/anchor-toolkit.png`, `../../examples/anchor-welcome.png`.

This kit contains the approved locked character poses for the first production-ready Subo pose library. It keeps the official head unchanged, uses shared torso-corner shoulder anchors, adds block hands, preserves reference-length arms, and includes a single-pass final ink finish.

## Files

| Path | Use |
|---|---|
| `poses/P02-wave.svg` | Editable clean master; waving hand placed beside the head with clear separation so scene-layer motion ticks can complete the wave |
| `poses/P04-present-right.svg` | Editable clean master; single straight presenting arm with block hand |
| `poses/P05-celebrate.svg` | Editable clean master; airborne jump pose, head and torso tilted together, side arms clear of the head |
| `previews/*-transparent.png` | Clean transparent PNGs, 1000×1200 |
| `previews/*-inked-transparent.png` | Convenience character-only PNGs with rough ink and ONE grain pass |
| `previews/pose-sheet-clean.png` | Three poses side by side on plain paper |
| `previews/pose-sheet-inked.png` | Whole-sheet proof, inked after compositing all three poses with paper |
| `manifest.json` | Pose identity, hand/prop anchors, shoulder anchors, image bounds, ground line and facing direction |
| `build_subo_poses.py` | Repo-relative SVG + preview/manifest generator |
| `finish_scene.py` | One-pass ink roughening + grain applied to the **complete** rendered scene |
| `verify_kit.py` | Structural and clipping checks for all three generated assets |
| `../../references/`, `../../examples/` | Shared with the Zine style: canonical character PNGs and style anchors (not duplicated in the kit) |

## Changes after import into the repo (2026-11-12)

- **P05 legs** are drawn as closed, fully outlined shapes (`closed_limb` in the build script)
  starting inside the torso. As stroked lines, their square-cut ends had no ink on the end
  face, and the right jumping boot is narrower than the leg, so a bare lime cut showed below
  the torso and beside the boot. P02 and P04 are unchanged.
- **Head and torso: pink outline only** (operator, 2026-11-12). The head master had a 15px
  black stroke around its pink, and the torso a 21px black stroke under a 13px pink one. Both
  black strokes are gone. The torso then got a thin 15px pink outline with rounded corners,
  and its top moved up behind the head (y 672, the head's bottom edge is at 691) so only the
  head's pink shows where they meet: no double neck.
  Limbs, hands and boots keep their thin black outline. Applies to all three poses.
- **Shared files are not duplicated:** `system.md`, `references/` and `examples/` live two
  levels up in `styles/zine/`, and the build script reads the logo from there.
- **Windows:** CairoSVG needs the Cairo library, which Windows lacks. `windows-render/cairosvg.py`
  is a stand-in that renders with headless Edge. Rebuild with
  `PYTHONPATH=windows-render python build_subo_poses.py` (needs Pillow, NumPy and
  `opencv-python-headless`).

## Rebuild from your repository (any working directory)

Requirements: Python 3, Pillow, NumPy, CairoSVG. OpenCV is optional, and improves edge-wear rendering.

```bash
python -m pip install pillow numpy cairosvg opencv-python
python path/to/pose-kit-v1.1/build_subo_poses.py
python path/to/pose-kit-v1.1/verify_kit.py
```

The generator resolves every path from `Path(__file__).resolve().parent`, not from ChatGPT's sandbox or the caller's current working directory. This also works from the kit directory itself:

```bash
cd pose-kit-v1.1
python build_subo_poses.py --package
```

The optional `--package` writes `pose-kit-v1.1.zip` next to the kit directory (its parent); other files stay inside the kit. `../../system.md` and `../../references/` are read-only reference material, not mutated by generation.

## The two locked shoulder attachment points

All positions are in the character SVG's native **1000×1200** viewBox, with origin top left. The exact torso-local shoulder anchors for every pose are:

- Left: **(418, 700)**
- Right: **(600, 700)**

The arm centreline starts at exactly those corners. The entire P05 character rig (including arms, shoulders, torso and head) is rotated **+6 degrees** together about (505, 800), so *world* shoulder coordinates move with the torso; their underlying **local** coordinates never change. Arm lime core is 56px wide with 8px of black on each side; straight leg core is 58px with the same ink weight. Every arm ends in an independent, small square block hand.

The head's eye frames and marks, ears, mouth, bar geometry and colors remain identical in source. The head is positioned as one untouched vector unit, never mirrored.

## Placement data (`manifest.json`)

Each pose includes:

- `hands.left` and `hands.right`: centers of square block hands (`x`, `y`, `units`), in **global pose viewBox coordinates** after any body rotation.
- `prop_anchor`: a single default hand + `x`, `y` where props should be attached. Additional props can use either hand.
- `ground_line.y`: common artboard baseline (**1145**); `contact=true` for standing poses, `contact=false` for P05 jumping. `feet_bottom_y` gives the actual rendered extent, so consumers can preserve the visible jump gap.
- `bounding_box`: actual raster alpha bounds of the clean SVG, including black stroke (`x`, `y`, `width`, `height`). Can be used for crops / collision / layout.
- `facing`: the actual orientation of Subo's **face** (`front` in all three); `gesture_direction` is a separate value (`up-right`, `right`, `up-outward`). **Never mirror the SVG**, which would reverse the branded square/check eyes and bar sequence.
- `shoulder_anchors`: world coordinates of the shared local corners, with P05's rotation already applied.

A sample use: import `P04-present-right.svg`; attach a monochrome toolbox/card to `prop_anchor` (hand right); place Subo's feet on `ground_line.y`; scale/crop using `bounding_box`.

## Clean master vs. inked finish

**For editable assets:** use `poses/*.svg`, not the inked PNGs. Their outlines are deliberately clean and geometrically predictable. 

**For a complete scene:** composite the clean Subo SVG with monochrome props, texture and paper **first**, then apply a **single** shared finish to the flattened scene:

```bash
python path/to/pose-kit-v1.1/finish_scene.py completed-scene.png completed-scene-inked.png
```

The finish adds slight irregularity to near-black printed ink boundaries and a light neutral grain field over **everything** in the completed image, including Subo, props and paper. Colored logo facial marks are preserved (the edge-wear step targets only near-black ink). This produces the selectively highlighted photocopy aesthetic without modifying reusable vector geometry. For transparent-only assets, the `*-inked-transparent.png` previews are convenience *final exports*, not new masters.

**Avoid double-graining:** do **not** combine pre-inked Subo PNGs with props and then ink the entire scene a second time. Composite **clean assets**, then run the finish once.

## Approved gesture principles

The approved v1.1 poses follow these rules:

1. No limb passes behind the head.
2. Every hand ends outside the head silhouette with a visible gap.
3. Arms keep the 3D reference's approximate length rather than being stretched for emphasis.
4. Gesture readability can be completed in the **scene layer** with motion ticks, bursts and other monochrome action marks; the pose files stay clean.
5. P02 reads as a wave because the hand sits beside the head where scene-layer ticks can be added.
6. P05 reads as celebration primarily through the jump, airborne gap and tilt, with scene-layer burst marks added separately.

These poses are locked. Future changes should create a new kit version rather than silently altering v1.1.
