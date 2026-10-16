# Claude Code brief — Subo pricing page (subo-site)

**Repo:** subo-site  
**Pages to touch:** pricing (`/pricing` on subo.ai / subo.gg), optionally a thin anchor or subsection only (no new marketing site).  
**Do not change:** Free / Premium / VIP / Custom Bot prices or feature matrices unless noted.  
**Calendly (brands CTA):** https://calendly.com/odg  
**Legal entity (footer/terms already):** ClearSwell LLC — do not add a second “ClearSwell consulting” brand.

---

## Goal

Add a clear **B2B shelf** so brands/agencies don’t buy $3 Discord IAP after (or instead of) vendor onboarding. Consumer Discord tiers stay cheap and attractive.

---

## Layout

Keep existing consumer tiers as today.

Below them (or in a visually separated band), add a section:

### Section heading
**For brands & agencies**

### Section subhead (one line)
Direct billing, white-label, and research programs — for teams that need a vendor relationship, not a Discord impulse buy.

### Optional one-liner under subhead
Built for community, Live Ops, and insights teams running branded Discords. Hobby and creator servers: stick with Free–VIP above.

---

## New tier cards / rows

### 1) Business
**Price:** $79/mo · $790/yr  
**Badge (optional):** Most teams start here  
**One-line pitch:** One brand community. Invoice-ready. Custom bot included.

**Bullets (use exactly or lightly edit for voice — do NOT invent seat limits, AI credit piles, or “unlimited responses”):**
- Custom Bot / white-label included (name, avatar, bio)
- Stripe invoice or PO · monthly or annual (not Discord IAP)
- Eligible for supplier / security / vendor onboarding
- Named commercial contact at Subo
- Everything in VIP product capability on your server(s) under this agreement
- API & webhooks for your data stack / agents (MCP-friendly)

**Primary CTA button:** Book a call → `https://calendly.com/odg`  
**Secondary CTA (text link):** Prefer email? → `mailto:hello@subo.ai` (or whatever inbox you use for sales — **confirm address in repo/env**; if unsure use Calendly-only)

**Footnote under card (small):**
Vendor questionnaires and procurement portals are available on Business and above.

---

### 2) Agency
**Price:** $199/mo · $1,990/yr  
**One-line pitch:** Multi-server orgs and Discord agencies — one relationship, one invoice.

**Bullets:**
- Everything in Business
- Multi-server coverage under one org (include **N servers** — product owner to set N; placeholder copy: “includes up to 10 servers; more on request”)
- White-label friendly for client work
- Single commercial contact / billing entity

**Primary CTA:** Book a call → `https://calendly.com/odg`

---

### 3) Enterprise
**Price:** Custom  
**One-line pitch:** When legal and security need a real agreement.

**Bullets:**
- Custom MSA / order form and ACV
- Security & privacy paperwork as required (e.g. DPA)
- Roadmap discussion for SSO / advanced compliance when the deal needs it
- Onboarding suited to large brand or multi-workspace setups

**Primary CTA:** Book a call → `https://calendly.com/odg`  
**Label CTA:** Contact sales (same Calendly is fine for v1)

---

### 4) Services strip (not a fourth “software tier” — a band under the three cards)

**Heading:** Research programs (optional)  
**Body:**
Need help designing community research, recruitment/engagement, incentives, or a 90-day listening program? Launch sprints and retainers are available for Business customers — same call.

**CTA:** Book a call → `https://calendly.com/odg`

Do **not** put dollar amounts for services on the public page in v1 (keep $5–15k / $2–6k in the deck only), unless founder explicitly wants them public later.

---

## Consumer tier note (small callout near VIP / Custom Bot)

Optional tip under Custom Bot:
Brands that need invoicing or vendor approval: see **Business** below (Custom Bot is included there).

---

## Explicit non-goals / anti-copy

Claude Code must **not**:
- Cap or advertise “admin seats” on Business (all tiers: unlimited admins — important for Discord mods)
- Promise higher response ceilings as the main Business benefit
- Lead with AI credits
- Say “priority support” as the hero (VIP+ already gets dedicated channels)
- Add a ClearSwell consulting microsite or separate nav item
- Put founder photo/age on the consumer hero; founder line belongs on About or this brands band only if desired

Optional founder one-liner for this section or About (optional, founder may omit on pricing):
> Subo is built by a former Global Head of Respondent Access (Ipsos) around how communities actually answer — not how forms wish they would.

---

## Tracking / analytics

If the site already has analytics events on pricing CTAs, fire distinct events:
- `pricing_cta_business_calendly`
- `pricing_cta_agency_calendly`
- `pricing_cta_enterprise_calendly`
- `pricing_cta_services_calendly`

---

## Acceptance criteria

- [ ] Free / Premium / VIP / Custom Bot unchanged in price and core bullets
- [ ] Brands section visible without scrolling past a dead end (clear separation)
- [ ] All new primary CTAs open `https://calendly.com/odg`
- [ ] Vendor-onboarding footnote present
- [ ] No seat-limit / fake quota / AI-credit hero claims on Business
- [ ] Mobile: cards stack cleanly; Calendly CTAs tappable
- [ ] Same content on subo.ai and subo.gg pricing if both are generated from one source

---

## Suggested commit message

`Add For brands & agencies pricing shelf (Business / Agency / Enterprise + services CTA)`
