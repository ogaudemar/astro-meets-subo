# Analytics & Conversion Funnel

How Subo tracks the marketing → purchase funnel across two domains, which is
the **same registrable domain** (`subo.gg`), so sessions stitch automatically.

| Domain | Repo | Role |
|--------|------|------|
| `subo.gg` (marketing) | this repo | Top of funnel: discovery, pricing, hand-off to app |
| `app.subo.gg` (web app) | `Code/subo` → `web2/react` | Bottom of funnel: checkout + purchase |

## System of record: **PostHog**

PostHog is the funnel system of record. Both domains send to the **same PostHog
project** (`us.i.posthog.com`, key `phc_uZSk…`), so a visitor is one person
across the subdomain hop. GA4/GTM is kept only as a **pageview/Google baseline**
(and for future Google Ads); it does **not** own the funnel.

Why sessions stitch with no cross-domain setup: `app.subo.gg` is a subdomain of
`subo.gg`, and PostHog's `cross_subdomain_cookie: true` writes the cookie on
`.subo.gg`, so `distinct_id` is shared. (GA4's `_ga` cookie behaves the same on
the root domain — subdomains are continuous automatically.)

## The funnel

```
$pageview (landing)          ← PostHog autocapture          subo.gg
  → $pageview (/pricing)     ← PostHog autocapture          subo.gg
    → checkout_intent        ← explicit, app hand-off click subo.gg
      → subscription_activated ← explicit, success modal     app.subo.gg
```

Build it in **PostHog → Product Analytics → Funnels** with those four steps.
Step-to-step conversion — especially **landing → subscription_activated
(visit → paid)** — is the number that makes marketing-spend ROI computable.

## Events

| Event | System | Fired where | Key props | Meaning |
|-------|--------|-------------|-----------|---------|
| `$pageview`, `$autocapture` | PostHog | auto, all `subo.gg` pages | — | Traffic + all clicks |
| `checkout_intent` | PostHog | `src/components/BaseHead.astro` (delegated click on `a[href*="app.subo.gg"]`) | `href`, `link_text`, `page` | Visitor handed to web app to upgrade |
| `subscription_activated` | PostHog | app repo: `web2/react/client/src/components/plan/CheckoutSuccessModal.tsx` (`useEffect` on open) | `tier` (`premium`/`vip`/`custombot`) | Completed checkout = purchase |
| `redirect_click` | GA4/GTM | `src/pages/[redirect].astro` (`dataLayer.push`) | `redirect_destination`, `redirect_url`, `redirect_description` | Click through a tracked outbound stub (`/invite`, `/discordstore`, `/upgrade`, `/support`, …) |

Notes:
- **PostHog init** lives in `BaseHead.astro` (marketing) and `main.tsx` /
  `convo-main.tsx` (app). Same project key on both is what connects the funnel —
  don't change it to a different key without breaking the stitch.
- `checkout_intent` fires on **any** link to `app.subo.gg`; segment on
  `href` containing `settings#plan` to isolate true upgrade clicks.
- The `phc_` key is a **public client ingest key** (already in the app's browser
  bundle) — safe to ship in source. Move to `PUBLIC_POSTHOG_KEY` if preferred.

## GA4 / GTM (baseline only)

- Container `GTM-NDC9N5T`; GA4 property `310207394`, Measurement ID `G-REVD115CCM`.
- **Keep:** `GA4 - Base Google Tag` (All Pages) + `GA4 - redirect_click`
  (trigger `Trig - redirect_click`, var `dlv_redirect_destination`) — this is the
  useful GA4 baseline (activation/invite clicks + pageviews).
- **Removed:** the `GA4 - purchase` tag targeted the legacy `subo.gg/success`
  page, which is dead (checkout moved into the app). PostHog owns purchase.
- **Historical bug:** `[redirect].astro` previously called `gtag('event', …)`,
  but the site loads GTM, not gtag.js, so `redirect_click` never fired. Fixed to
  `dataLayer.push`. If you see zero pre-2026-07 redirect data, that's why.

## Legacy / dead surfaces (safe to clean up later)

- `src/pages/success.astro` — old manual-Stripe success page. No longer linked;
  noindexed. Still contains a harmless `purchase_success` dataLayer push that
  never fires. Remove with the page.
- `src/pages/subscriptions.astro` + `src/components/StripeSub.astro` — legacy
  embedded Stripe pricing-table. Superseded by the in-app checkout
  (`/pricing` CTAs → `app.subo.gg/app/settings#plan`).

## Verifying

1. **Marketing (live):** PostHog → Activity / Live events → browse `subo.gg`,
   click an Upgrade button → expect `$pageview` then `checkout_intent`.
2. **App (after its deploy):** run a test checkout → `subscription_activated`
   appears as the **same person** as the marketing session (proves the stitch).
3. **GA4:** GTM Preview + GA4 DebugView/Realtime → `redirect_click` on invite.

## Maintenance

- **Top.gg rating** in the homepage `SoftwareApplication` schema
  (`src/pages/index.astro`, `aggregateRating`) is hard-coded — update
  `ratingValue`/`ratingCount` when the Top.gg numbers change. Never fabricate.
- Adding a new outbound link you want tracked? Route it through a stub in
  `src/config/redirects.js` (auto-tracked via `redirect_click`), or if it points
  at `app.subo.gg` it's already caught by `checkout_intent`.
