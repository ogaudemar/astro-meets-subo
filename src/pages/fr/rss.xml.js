import rss from "@astrojs/rss";
import { getBlogPosts, postUrl } from "../../utils/blog";
import translations from "../../content/translations/fr.json";

// The French feed. Kept separate from /rss.xml rather than merged into it: a
// subscriber picks a language, and a feed that mixes them serves items its
// reader cannot use.
export async function GET(context) {
  const posts = await getBlogPosts("fr");
  return rss({
    title: translations.siteTitle,
    description: translations.siteDescription,
    site: context.site,
    customData: "<language>fr-fr</language>",
    items: posts.map((post) => ({
      ...post.data,
      link: postUrl(post),
    })),
  });
}
