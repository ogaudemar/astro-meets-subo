# Paid tracking: UTM convention and funnel

How a paid click is followed from the ad to a paying community. Background on the PostHog setup
(one project for subo.gg and app.subo.gg, cookie shared on `.subo.gg`): [../analytics.md](../analytics.md).

## The funnel

```
ad click
  → $pageview on subo.gg with UTM tags        PostHog stores $initial_utm_* on the person
    → install_landed                           app.subo.gg, Dashboard.tsx
      → project_created                        app.subo.gg, NOT BUILT YET (brief below)
        → subscription_activated               app.subo.gg, CheckoutSuccessModal.tsx
```

`install_clicked`, `install_servers_viewed` and `install_failed` sit around `install_landed` if a
step needs debugging.

**Missing step:** `project_created`. Brief for the app repo:
`subo/docs/posthog-project-created-brief.md`.

## UTM convention

| Param | Value | Example |
|---|---|---|
| `utm_source` | the platform, lowercase | `top.gg` (set by top.gg), `google`, `meta`, `chatgpt` |
| `utm_medium` | `cpc` for any paid placement | `cpc` |
| `utm_campaign` | `<platform>-<campaign-slug>`, stable for the campaign's life | `topgg-theme-potter` |
| `utm_content` | the ad version, bumped when the copy changes | `v1`, `title-b` |
| `utm_term` | keyword, if the platform fills it | set by top.gg |

Rules:
- **Land on subo.gg, with the trailing slash before the query:**
  `https://subo.gg/templates/hogwarts-house-sorting/?utm_campaign=…` ✓.
  Never link an ad to `app.subo.gg/invite`: it redirects to the login page before PostHog loads,
  and the tags are lost.
- **top.gg:** set `appendUtm: true` on the ad and write only `utm_campaign` and `utm_content` in
  the link. top.gg adds `utm_source=top.gg`, `utm_medium=cpc`, `utm_id` and `utm_term`, and
  keeps the keys we wrote.
- **Bumping `utm_content`** is how an ad-copy test is read through to installs, since top.gg's
  own numbers stop at the click for ads that link off top.gg.

## What each platform measures by itself

| Platform | Ad links to | Install counted by the platform? |
|---|---|---|
| top.gg | our top.gg listing (`NativeUrl`) | **Yes**: "reported conversions" = invites after the click, via cookie |
| top.gg | a subo.gg page | No, conversions = clicks. Use PostHog. |

Installs made with Discord's own "Add App" button, from our top.gg listing, never pass through
subo.gg, so PostHog cannot see them. For listing-linked ads, top.gg's conversion count is the
only record.

## Reading it in PostHog

Funnel: `$pageview` (filter: person `$initial_utm_source` = `top.gg`) → `install_landed` →
`project_created` → `subscription_activated`, broken down by `$initial_utm_campaign`.
