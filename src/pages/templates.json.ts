import { getCollection } from 'astro:content';

// Prerender to a static /templates.json at build time (no worker invocation).
export const prerender = true;

// Machine-readable template catalog for AI agents / GEO discovery (plan §13.5).
// Mirrors the future GET /v1/templates API shape so agents can find cloneable
// templates and their deep-links from a single static file at /templates.json.
export async function GET() {
  const entries = (await getCollection('templates'))
    .filter((t) => !t.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const templates = entries.map((t) => ({
    slug: t.data.slug,
    title: t.data.heroTitle,
    description: t.data.description,
    kind: t.data.kind,
    dimension: t.data.dimension,
    audiences: t.data.audiences,
    featuresShowcased: t.data.features,
    templateId: t.data.templateId ?? null,
    url: `https://subo.gg/templates/${t.data.slug}`,
    cloneUrl: `https://app.subo.gg/app/templates?template=${t.data.slug}`,
    recipeUrl: t.data.recipeUrl ?? null,
  }));

  return new Response(
    JSON.stringify(
      {
        name: 'Subo template catalog',
        description:
          'Ready-made, cloneable Subo survey/poll/quiz templates. Clone via the web app link, or build programmatically via the Subo Public API.',
        docs: 'https://api.subo.ai/docs',
        count: templates.length,
        templates,
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
}
