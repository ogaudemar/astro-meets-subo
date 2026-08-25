import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type BlogLocale = NonNullable<BlogPost["data"]["locale"]>;

/**
 * URL prefix per locale. English is unprefixed because it is the site default
 * and its post URLs already have indexing history — nothing about adding
 * French may move an existing English URL.
 */
const LOCALE_PREFIX: Record<BlogLocale, string> = {
  en: "",
  fr: "/fr",
};

/** Locale of a post's `hreflang` and `<html lang>`. */
export const HTML_LANG: Record<BlogLocale, string> = {
  en: "en",
  fr: "fr",
};

/** Date-formatting locale passed to FormattedDate. */
export const DATE_LOCALE: Record<BlogLocale, string> = {
  en: "en-us",
  fr: "fr-FR",
};

/**
 * The post's own slug, with its `{locale}/` content-directory prefix removed.
 *
 * Non-English posts live in `src/content/blog/fr/…`, so their collection `id`
 * carries that folder. Only the exact locale prefix is stripped — a post in
 * some other subdirectory keeps its full id rather than silently losing its
 * first path segment.
 */
export function postSlug(post: BlogPost): string {
  const prefix = `${post.data.locale}/`;
  return post.id.startsWith(prefix) ? post.id.slice(prefix.length) : post.id;
}

/** Canonical site path for a post, e.g. `/blog/foo/` or `/fr/blog/sondage-foo/`. */
export function postUrl(post: BlogPost): string {
  return `${LOCALE_PREFIX[post.data.locale]}/blog/${postSlug(post)}/`;
}

/**
 * Every post in one language, newest first.
 *
 * This is the ONLY way pages should read the blog collection. The collection is
 * shared across languages, so an unfiltered `getCollection('blog')` puts French
 * posts in the English listing, the English feed and the changelog. Centralizing
 * it means that filter can't be forgotten at one call site out of six.
 *
 * Drafts are excluded by default. Note this does NOT change the standing
 * behavior that draft posts still get built and are reachable at their public
 * URL (`getStaticPaths` maps them) — that is a separate, deliberate open
 * decision, not something this helper silently settles.
 */
export async function getBlogPosts(
  locale: BlogLocale,
  { includeDrafts = false }: { includeDrafts?: boolean } = {},
): Promise<BlogPost[]> {
  const posts = await getCollection("blog");
  return posts
    .filter((post) => post.data.locale === locale)
    .filter((post) => includeDrafts || !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * hreflang alternates for a post, built from `translationOf`.
 *
 * Returns an empty array unless the post is one half of a linked pair, so a
 * locale-original post emits no alternates at all. hreflang has to be
 * reciprocal to be honored, and pointing a French original at an English URL
 * that is not its translation is worse than pointing nowhere.
 *
 * `x-default` goes to the English side of a pair, matching the convention the
 * marketing pages use (see `src/pages/fr/polls.astro`).
 */
export function postAlternates(
  post: BlogPost,
  allPosts: BlogPost[],
  site: URL | undefined,
): Array<{ lang: string; href: string }> {
  const counterpart = post.data.translationOf
    ? allPosts.find((p) => p.id === post.data.translationOf)
    : allPosts.find((p) => p.data.translationOf === post.id);

  if (!counterpart) return [];

  const abs = (p: BlogPost) => new URL(postUrl(p), site).href;
  const pair = [post, counterpart];
  const english = pair.find((p) => p.data.locale === "en");

  return [
    ...(english ? [{ lang: "x-default", href: abs(english) }] : []),
    ...pair
      .sort((a, b) => a.data.locale.localeCompare(b.data.locale))
      .map((p) => ({ lang: HTML_LANG[p.data.locale], href: abs(p) })),
  ];
}
