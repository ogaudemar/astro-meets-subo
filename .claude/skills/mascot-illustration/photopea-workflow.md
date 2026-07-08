# Photopea Post-Generation Workflow

Photopea is used to format the image and export it to the right size and file extension. **Always plan to edit; never ship a raw generation.**


## Standard pass
1. **Open the generation** in Photopea (File > Open).
2. **Crop to 2:1.** Enforce the fixed ratio, target 1200px width for the blog hero
3. **Export for web.** Save as **.webp** or **.jpg** to match the blog hero convention
   (`public/images/blog/<post-slug>/<name>.webp`) with 90% quality 

## Where the final asset goes
- Blog hero images live in `public/images/blog/<post-slug>/`.
- Reference the path from the post frontmatter (`heroImage`) and from the matching  `examples/*.md` entry in this skill, so brief and asset stay linked.

## Recurring fixes (see gotchas.md for the full list)
- Text hallucinations -> always replace.
- Busy background -> halve the props.
- Character merged into furniture -> keep Subo a foot in front of tables.
- Malformed tiny hands -> inspect and repair every miniature.
