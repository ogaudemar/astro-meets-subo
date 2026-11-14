# Search (Google indexation and rankings)

## State (2026-11-13)

- **`subo.gg`:** 5 indexed, 163 not indexed (86 *Discovered - currently not indexed*,
  70 *Crawled - currently not indexed*). 142 URLs in the sitemap.
- **`subo.ai`:** pages moving to *Page with redirect*. That is expected: it means Google has
  seen the 301. It's a problem only because `subo.gg` isn't picking them up.
- **What we had:** over 16 months `subo.ai` drew 13,899 impressions and **73 clicks** (about
  4 to 5 a month), 69% of impressions French how-to queries. French stopped on 2026-06-10,
  the week of the move. The downside is small; the upside is what we're trying to unlock.

## Diagnosis

Google treats `subo.gg` as a **new, low-authority site** rather than `subo.ai` under a new
name. The move, a full rewrite and a roughly 7x larger page count happened together, so few
pages map one-to-one onto an old URL. A large "discovered, not crawled" bucket is a
site-importance signal that new pages can't fix. Outside links can.
(Decision: [../../decisions.md](../../decisions.md), 2026-11-13.)

## Verified correct (re-checked live 2026-11-13; don't re-investigate without new evidence)

- Every `subo.ai` / `www.subo.ai` URL 301s single-hop to its `subo.gg` twin, `robots.txt` included.
- `subo.gg` pages return 200 with a self-canonical and a full reciprocal hreflang cluster.
- `robots.txt` open (no Disallow, no Cloudflare managed block).
- Change of Address filed 2026-07-29. `subo.ai` stays verified and redirecting, **never sunset**.
- No `subo.ai` links left in app code; `user_messages` scrubbed 2026-08-01.
- `api.subo.ai/docs` canonicalizes to `https://subo.gg/api/`, with its own robots file
  (2026-09-16). Don't disallow `/docs`: a canonical a crawler can't fetch is never read.

## Levers, in order

1. **Links** to `subo.gg` (see [../links/](../links/README.md)), starting with listings we
   control that still point at `subo.ai`.
2. **Thin-page review** (see [../content/](../content/README.md)): a smaller, stronger set of
   pages is easier to accept than a large uneven one.
3. **URL Inspection, Request indexing** on about 10 core pages: `/`, `/polls/`,
   `/survey-convos/`, `/forms/`, `/features/`, `/pricing/`, `/fr/`, `/api/`, `/templates/`,
   `/tutorials/`. Once, not repeatedly.

## Known leads

- **English "vote on Discord" cluster:** ~11,000 annualized impressions at position ~6 on
  `www.subo.ai`, ~0.1% CTR. Head terms aren't winnable (GeeksforGeeks, Zapier, Discord's
  FAQ). The English post got the *vote* wording fix on 2026-09-08; check whether CTR moved.
- **Junk intent to ignore:** survey-farming queries (*auto survey completer*) inflate the
  "survey bot" cluster and are the opposite of our audience.

## Files

- [log.md](log.md): dated Search Console readings and changes
- [domain-migration.md](domain-migration.md): the original migration plan (June 2026)
