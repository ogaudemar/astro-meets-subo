---
name: mascot-illustration
description: Art-direct and brief illustrations starring Subo, the Survey Bot mascot, for the Subo marketing site and social channels (blog heroes, feature announcements, social visuals, UI art). Use when asked to create, brief, or refine an image/illustration/hero/visual that features the mascot, or to write an image-generation prompt for one. Holds several named illustration styles (Zine, the current default; Studio, the 3D style), each with its own character rules, prompt template, review checklist and examples.
---

# Subo Mascot Illustration

Subo is illustrated in **named styles**. Each style is a complete system in its own folder:
art direction, prompt template, review checklist and the briefs shipped with it. This file
says which one to use and holds the few rules every style shares.

## Which style

| Style | Look | Folder | Status |
|---|---|---|---|
| **Zine** | Photocopied black-and-white zine; only Subo is colored, like neon highlighter | [styles/zine/](styles/zine/) | **Default since 2026-11-12** |
| **Studio** | Polished 3D animated-film look; Subo as the cheerful host, a Discord "blob" reacting | [styles/studio/](styles/studio/) | Available |

- **Use the default** unless the user names a style.
- **Match the series.** An image that belongs to a set already drawn in one style stays in
  it. The alternative-series hero base (`public/images/blog/alternative-series/`) is Studio.
- **Never mix styles in one image**, and don't borrow one style's rules into the other
  (Studio's lighting, Zine's monochrome rule).
- **Changing the default** is an operator decision: edit the table above with the date. A
  new style gets its own folder under `styles/` with at least a system file, a prompt
  template and an `examples/` folder, and a row here.

Start with the style's entry file: [styles/zine/system.md](styles/zine/system.md) or
[styles/studio/README.md](styles/studio/README.md).

## Rules every style shares

- **The official 2D logo is the authority on Subo's character:** head silhouette, ears, the
  three top bars (purple, gray, cyan), the square-in-square left eye and checkmark right eye,
  the magenta contour. A style changes the world around Subo and how Subo is rendered, never
  that geometry. Each style's own character section adds detail, never contradicts this.
- **One idea per image**, readable at thumbnail size.
- **No baked-in text in heroes.** Headings, captions and alt text live in the page, where
  they can be translated.
- **The heart is green 💚, never red,** if a heart appears at all (`subo-glossary`).
- **Blog hero format:** 2:1, 1200×600 WebP in `public/images/blog/<slug>/`. The same file
  is the Discord and X preview card at about 1.91:1, so keep everything important inside a
  centered 1.91:1 area.
- **Never depict a competitor's logo, mascot or interface** (`blog-writing`,
  alternative-series template).

## Recording a result

When an image is approved or rejected, add the outcome to the brief in that style's
`examples/` folder: what worked, what drifted, what the fix was. That record is how each
style sharpens.
