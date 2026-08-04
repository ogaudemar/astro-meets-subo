# Known Failure Modes

Every one of these caused a revision at least once.
Prevent them in the prompt.

| Failure mode | Fix |
|---|---|
| **Background too busy** | Reduce props by half. Keep to 2 to 3 readable elements. |
| **Everything equally sharp** (no depth) | Blur the background; increase depth of field so Subo pops. |
| **Character merges into furniture** | Keep Subo at least a foot in front of tables/consoles. |
| **Malformed hands**, especially on tiny background characters | Inspect every miniature. Miniatures break first. |
| **Model invents names** (e.g. a "Gonzalez family" on a card) | Never allow names unless requested. Specify any wanted name in the brief; remove stray ones in edit. |
| **Wrong color language** | Each product category has a dedicated hue; purple only where intended. |
| **Stray extra text** | The model now renders *specified* text reliably; write intentional copy into the brief. Only remove text the brief didn't ask for. |
| **Half-finished / mismatched eyes** | Enforce the canon (square-in-square left, checkbox right) unless requested; repair. |
| **Missing mouth** | Canon violation; add it back. |

## Prompt-side prevention (bake into the NEGATIVE line)
- No text beyond what the brief specifies (no invented names or extra copy).
- No malformed hands, no merged limbs, no missing mouth, no half-finished eyes.
- No clutter; keep background minimal and slightly blurred.
- No photorealism / painterly / anime / flat.

## Rule of thumb
Assume **hands are wrong until proven right.** Text is now usually right *when
you specify it*; the risk shifted from garbled copy to stray, unrequested labels.
