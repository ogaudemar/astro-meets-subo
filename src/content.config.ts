import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroHeadline: z.string().optional(), // live text overlaid on heroImage (e.g. "EasyPoll alternative")
    // Optional FAQ block. Renders visibly at the end of the post AND emits
    // FAQPage JSON-LD (same shape as the templates collection, so the two
    // surfaces stay one pattern). The rendered copy is the schema's source of
    // truth: Google requires FAQ markup to match visible page content, and for
    // GEO the visible Q&A is what actually gets quoted. Answers may contain
    // inline HTML (e.g. links); it is stripped for the JSON-LD.
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
  author: z.string(), // <-- Add this line
  tags: z.array(z.string()).optional(), // <-- Add this line for tags
  draft: z.boolean().optional(), // <-- Add this line for draft status
  }),
});

// Template landing pages — the public, crawlable SEO/GEO surface for the
// gated template library (survey-repo plan §13). Editorial content collection
// (hybrid model §13.3a): copy lives here now; the Public API enriches later.
// `slug` is the canonical templateSlug shared with the app gallery + future API.
const templates = defineCollection({
  loader: glob({ base: "./src/content/templates", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    // Identity / SEO
    title: z.string(),                 // <title> + SEO head term
    description: z.string(),           // meta description (outcome-focused)
    slug: z.string(),                  // canonical templateSlug (matches filename)
    templateId: z.number().optional(), // links to app/API record (null until prod row exists)
    kind: z.enum(["hub", "spoke"]).default("hub"),
    hubSlug: z.string().optional(),    // a spoke points back to its hub (§5.5)

    // Taxonomy (mirrors plan §4: dimensions × audiences × features)
    dimension: z.enum(["engage", "understand", "get-things-done"]),
    audiences: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),   // featuresShowcased (§5)

    // Hero
    eyebrow: z.string().optional(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    ctaLabel: z.string().default("Use this template"),

    // Body sections (frontmatter-driven; the Markdown body is an optional prose slot)
    workedExample: z.string().optional(),        // the real, evergreen subject (§5.5), e.g. "The Legend of Zelda"
    featureCallouts: z.array(z.object({
      emoji: z.string().optional(),
      title: z.string(),
      desc: z.string(),
    })).default([]),
    steps: z.array(z.object({
      title: z.string(),
      desc: z.string(),
    })).default([]),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),

    // Linking
    recipeUrl: z.string().optional(),            // developer walkthrough twin (§10)
    relatedSlugs: z.array(z.string()).default([]),

    // Lifecycle (spokes carry a refresh/retire plan — §5.5)
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    retireDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
  }),
});

// Survey-design recipes. Ported on-domain from the app repo's `docs/recipes/`,
// which were only ever served as raw markdown from api.subo.ai/v1/recipes, so
// every bit of authority they earned accrued to the OLD registrable domain.
// These are the *design* twin of the marketing `templates` collection: a
// template page sells the outcome, a recipe shows how the script is actually
// built. `templates.recipeUrl` points here (it used to point at a generic
// api.subo.ai/docs placeholder).
const recipes = defineCollection({
  loader: glob({ base: "./src/content/recipes", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),          // <title> + H1, SEO-framed (not "Recipe — X")
    description: z.string(),    // meta description, outcome-focused
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // The recipe's own header block, rendered as a summary card.
    audience: z.string(),
    setupTime: z.string(),
    bestFor: z.string(),

    // Taxonomy, mirroring the templates collection so the two can cross-link
    // and be filtered on the same axes.
    dimension: z.enum(["engage", "understand", "get-things-done"]),
    features: z.array(z.string()).default([]),

    // Linking. `templateSlugs` are the templates whose `recipeUrl` points here.
    relatedSlugs: z.array(z.string()).default([]),
    templateSlugs: z.array(z.string()).default([]),

    // Same FAQ contract as blog + templates: rendered visibly AND emitted as
    // FAQPage JSON-LD, because Google requires the markup to match the page and
    // for GEO the visible Q&A is what gets quoted.
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),

    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, templates, recipes };
