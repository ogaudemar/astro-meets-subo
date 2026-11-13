# Photopea Post-Generation Workflow

Photopea is used to format the image and export it to the right size and file extension. **Its job is crop, size, and export, not text.** The generation model now renders specified text reliably, so bake intentional copy into the brief and expect it to come back correct; only touch text here in the rare case a stray extra label sneaks in.


## Standard pass
1. **Open the generation** in Photopea (File > Open).
2. **Crop to 2:1.** Enforce the fixed ratio, target 1200px width for the blog hero
3. **Export for web.** Save as **.webp** or **.jpg** to match the blog hero convention
   (`public/images/blog/<post-slug>/<name>.webp`) with 90% quality 

## Where the final asset goes
- Blog hero images live in `public/images/blog/<post-slug>/`.
- Reference the path from the post frontmatter (`heroImage`) and from the matching  `examples/*.md` entry in this skill, so brief and asset stay linked.

## Recurring fixes (see gotchas.md for the full list)
- Stray extra text (a label the brief didn't ask for) -> remove it; specified text should come back correct.
- Busy background -> halve the props.
- Character merged into furniture -> keep Subo a foot in front of tables.
- Malformed tiny hands -> inspect and repair every miniature.
