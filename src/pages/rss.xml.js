import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { getBlogPosts, postUrl } from "../utils/blog";

// The English feed. French posts have their own at /fr/rss.xml — one feed per
// language, because a reader subscribing to a mixed-language feed gets items
// it cannot read and no way to filter them.
//
// getBlogPosts also drops drafts, which this feed previously syndicated: it
// read the collection unfiltered, so the four unpublished posts were being
// pushed to subscribers while being hidden from /blog.
export async function GET(context) {
  const posts = await getBlogPosts("en");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    customData: "<language>en-us</language>",
    items: posts.map((post) => ({
      ...post.data,
      link: postUrl(post),
    })),
  });
}
