// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import { trackedRedirects } from "./src/config/redirects.js";

// Pages that should NOT appear in the sitemap: outbound redirect stubs
// (from redirects.js) plus thin/transactional utility pages. These are
// non-content pages — keeping them out avoids diluting SEO quality signals.
const NOINDEX_PATHS = new Set([
  ...Object.keys(trackedRedirects).map((key) => `https://subo.gg/${key}/`),
  "https://subo.gg/success/",
  "https://subo.gg/subscriptions/",
]);

// https://astro.build/config
export default defineConfig({
  site: "https://subo.gg",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !NOINDEX_PATHS.has(page),
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "de", "pt-br", "it"], // add more later: "nl", "pl"
  },
});
