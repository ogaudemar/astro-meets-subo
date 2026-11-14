# Domain Migration — `subo.ai` → `subo.gg`

**Started:** 2026-06-04 · **Operating entity:** ClearSwell LLC
**Goal:** Make `subo.gg` the canonical home for the marketing site + blog (escape `.ai`/AI-backlash connotation; gain Discord/gaming brand fit). Keep `subo.ai` and `suboapp.com` as permanent redirects.

## Topology (target state)

| Host | Role | Status |
|------|------|--------|
| `subo.gg` (apex) | Marketing site + blog (Astro Worker `astro-meets-subo`) | ✅ Live |
| `www.subo.gg` | Serves site; canonical → apex | ⚠️ Serves 200 duplicate (optional redirect) |
| `app.subo.gg` | Web app (AWS) | ✅ Unchanged |
| `api.subo.gg` | Public API | ⏳ Pending (server access down) |
| `subo.ai/*`, `www.subo.ai/*` | 301 → `subo.gg/*` | ✅ Live |
| `api.subo.ai` | Public API (current home, A → 18.214.149.48) | ✅ Live, untouched |
| `suboapp.com` | 301 → `subo.gg` | ⏳ Todo |

---

## ✅ Done

- [x] Astro repo: `astro.config` `site`, hreflang (11 locale pages), sitemap, `robots.txt`, `llms.txt`, nav/footer, blog, legal pages → `subo.gg` (commit `0a2c0da`).
- [x] Reverted API links `api.subo.gg` → `api.subo.ai` (server can't host `api.subo.gg` yet) (commit `5beb019`).
- [x] `subo.gg` brought into Cloudflare (NS moved from Namecheap; vestigial `eforward` MX deleted; TXT kept; `app` = grey-cloud A → AWS).
- [x] Worker `astro-meets-subo` serves `subo.gg` + `www.subo.gg`; build verified (canonical + sitemap = `subo.gg`).
- [x] Removed `subo.ai` / `www.subo.ai` from Worker; added proxied `AAAA @/www → 100::` placeholders in `subo.ai` zone.
- [x] Redirect Rule in `subo.ai` zone: `(http.host eq "subo.ai" or http.host eq "www.subo.ai")` → Dynamic **301** `concat("https://subo.gg", http.request.uri.path)`, preserve query. Verified single-hop, query-preserving, `api.subo.ai` excluded.
- [x] GSC: `subo.gg` property added; **Change of Address** `subo.ai → subo.gg` submitted; sitemap submitted. (Flagged sample URLs are non-issues — all clean 301→200; "couldn't fetch" was transient.)

---

## ⏳ Remaining tasks

### A. Quick wins (no server needed)
- [ ] **`suboapp.com` → `subo.gg`**: Namecheap → `suboapp.com` → URL Redirect Record → target `https://subo.gg`, type **Permanent (301)**. *(Or move into Cloudflare for path-preserving 301s — optional; suboapp.com has ~no inbound links.)*
- [ ] **(Optional) `www.subo.gg` → `subo.gg` 301**: canonical already dedupes this, so low priority. To do it: remove `www.subo.gg` from the Worker → add proxied `AAAA www → 100::` in `subo.gg` zone → Redirect Rule `(http.host eq "www.subo.gg")` → Dynamic 301 to apex.

### B. Search Console follow-up
- [ ] Re-run / revisit Change of Address validation in a few days; confirm "couldn't fetch" sample URLs clear.
- [ ] Add **`clearswell.com`** (corporate) as an **owner** on both `subo.ai` and `subo.gg` properties for long-term continuity (avoid perso/spam accounts). Change of Address requires the *same* account to own both — keep that account intact until the move fully completes (~180 days).
- [ ] (Optional) Build a **Looker Studio** report blending both properties for unified old-vs-new performance (GSC has no native cross-property comparison).
- [ ] Monitor `subo.gg` indexing coverage; request indexing on key pages. *(Note: "crawled – currently not indexed" was mostly site-authority/freshness — carries to the new domain. Levers: internal links + earned backlinks, not redirects.)*

### C. API migration — `api.subo.ai` → `api.subo.gg` (⛔ blocked on server access)
- [ ] Restore remote server access.
- [ ] Point `api.subo.gg` at the API origin (Cloudflare DNS in `subo.gg` zone → `18.214.149.48`, decide proxied vs grey; ensure origin cert/Host handling). Keep `api.subo.ai` alive in parallel (no API users yet).
- [ ] Update OpenAPI server URL + Scalar docs base if hardcoded to `api.subo.ai` (`survey` repo: `web2/public_api/openapi_spec.py`, `docs.py`).
- [ ] Re-apply `api.subo.gg` links on the marketing site (re-do the revert: `api.subo.ai` → `api.subo.gg` in `llms.txt`, `DeveloperAPI.astro`, `en.json`, `public-api-launch.md`, `CLAUDE.md`).
- [ ] Later: 301 `api.subo.ai` → `api.subo.gg` once clients/docs are migrated.

### D. Google Cloud / OAuth (Sheets export keeps working — these are hygiene)
- [ ] Sheets export needs **no change now** (browser-side implicit OAuth from `app.subo.gg`, which is unchanged).
- [ ] Update the **OAuth consent screen**: app homepage / privacy / ToS URLs and authorized domains `subo.ai` → `subo.gg` (currently 301 so still works; update for consistency + future Google verification).
- [ ] Confirm the Google Cloud project / OAuth client lives under the **`clearswell.com`** account (ties to B).

### E. External listings & integrations
- [ ] **top.gg** listing + other bot directories: update website link to `subo.gg`.
- [ ] Bot profile "website" link → `subo.gg`.
- [ ] **Discord Developer Portal**: add/verify OAuth redirect URIs for any `subo.gg`/`app.subo.gg` flows (the admin login uses Discord OAuth `DISCORD_CALLBACK_URL`). Confirm none rely on a redirecting `subo.ai` URL.
- [ ] Social profiles, email signatures, GTM/analytics property.

### F. Brand decisions (deliberately deferred)
- [ ] **Email**: decide whether to move `hello@subo.ai` → `hello@subo.gg` (needs MX/email hosting on `subo.gg`, e.g. Cloudflare Email Routing or Google Workspace). Until then, `hello@subo.ai` stays live (keep `subo.ai` MX + registration).
- [ ] **Bluesky handle** `bsky.app/profile/subo.ai`: optionally rename to a `subo.gg`-based handle (Bluesky supports domain handles).

---

## Verification commands

```bash
curl -sI  https://subo.gg/about/                              # 200, canonical subo.gg
curl -sL  https://subo.ai/about/ -o /dev/null -w "%{num_redirects} %{url_effective} %{http_code}\n"  # 1 hop -> subo.gg 200
curl -sI  https://www.subo.ai/about/                          # 301 -> subo.gg
curl -sI  https://api.subo.ai/docs                            # 200 (untouched)
curl -sI  https://suboapp.com/                                # after task A: 301 -> subo.gg
dig +short NS subo.gg                                         # Cloudflare nameservers
dig +short MX subo.ai                                         # email intact
```

---

## Notes & gotchas

- **Deploys = `git push` to `main`** (Cloudflare Workers Builds). `npm run build` is a local check only; `npm run deploy` would bypass the Git flow — don't use it.
- **Keep `subo.ai` + `suboapp.com` registered indefinitely** and keep redirects live ≥180 days (ideally forever).
- **301 redirect rule is scoped to apex + www** — never widen it to "all incoming requests" or it would catch `api.subo.ai`.
- Redirect placeholders use `AAAA 100::` **proxied (orange)** — must be proxied or redirect rules don't run.
- A 301 redirect does **not** affect email; `subo.ai` MX/`hello@subo.ai` keep working independently.
