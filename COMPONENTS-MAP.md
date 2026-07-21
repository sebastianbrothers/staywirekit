# staywirekit COMPONENTS-MAP — Gate A2 deliverable (Phase 4b)

**Purpose:** inventory every distinct recurring component on the inspiration reference
(resend.com, INSPIRATION mode — shapes/layout transfer, identity does not) and adjudicate
what the kit builds. **Nothing below is built until the operator adjudicates** (overnight
run: map built, adjudication = MORNING HARD-STOP; only rows marked ⚡pre-approved-by-playbook
convention were acted on).

**Evidence base:** `brand/source/staywire-com-screens/` — 16 captures @1440px + 390px hero,
2026-07-21 live walk (resend-home-1440-00…11, resend-pricing-1440-00/01,
resend-customers-1440-00, resend-home-390-hero) + `brand/reference/RESEND-DESIGN.md`
(getdesign alpha extraction, undated — treated as history where it disagrees with the walk).

**Doc-vs-live drift noted:** hero art is currently a 3D rubik-cube render (seasonal, not in
doc); nav carries an `AI` menu item the doc lacks; hero badge-pill ("Announcing Remote MCP")
has a gradient hairline border the doc doesn't document.

**Verdicts:** (a) **COVERED** — re-themed shadcn/block already does it · (b) **VARIANT** —
extend an existing primitive/block · (c) **NET-NEW** — build into `@staywirekit/ui`.

## Navigation & chrome

| # | Component | Evidence | Verdict | Target | Notes |
|---|---|---|---|---|---|
| 1 | Top nav — wordmark left, centre dropdown nav, sign-in + primary CTA right, hairline bottom border, 64px | home-00 top; DESIGN §nav-bar | b VARIANT | `blocks/header/header1` | Template header exists; needs centre-cluster layout variant + hairline treatment → `header2` |
| 2 | Nav dropdown menus (Features/Company/… chevrons) | home-00 nav | a COVERED | `navigation-menu` primitive | Re-themed shadcn navigation-menu |
| 3 | Mega-footer — 5-column link grid + address + socials + status pill, divider-soft rules | home-10/11 footer; DESIGN §footer | b VARIANT | `blocks/footer/footer1` | Existing footer1 is smaller; build `footer2` (5-col + status-pill slot) |
| 4 | Sub-nav pill row (customers index chip tabs) | customers-00; DESIGN §sub-nav-pill | b VARIANT | `tabs` primitive → pill variant | Chip-tab row = tabs with pill styling; `sub-nav` variant on tabs list |

## Buttons & actions

| # | Component | Evidence | Verdict | Target | Notes |
|---|---|---|---|---|---|
| 5 | Primary CTA — brightest-pixel rectangle, rounded-8 ("Get started") | home-00 hero + nav; DESIGN §button-primary | a COVERED | `button` default | staywire inversion: ink CTA on light, paper CTA on dark — already the theme mapping |
| 6 | Ghost/outline secondary CTA pair ("Contact us →", "Documentation") | home-10 CTA band, home-00 hero | a COVERED | `button` outline/ghost | Hairline-border variants map to theme border tokens |
| 7 | Text-link-with-arrow ("Learn more", "Contact us →") | home-03 feature rows; home-10 | b VARIANT | `button` link variant | Add trailing-arrow affordance via children (no code change) — demo in stories |
| 8 | Icon chip buttons (SDK grid: Node.js/Serverless/…, rounded-12 icon wells + label) | home-01 SDK grid | c NET-NEW | `components/ui/icon-chip` | Selectable icon well + caption; feeds code-window tab strip too |

## Badges & inline devices

| # | Component | Evidence | Verdict | Target | Notes |
|---|---|---|---|---|---|
| 9 | Announcement badge-pill w/ gradient hairline ("Announcing Remote MCP ›") | home-00 hero; DESIGN §badge-pill | b VARIANT | `badge` | Pill radius + hairline border variant; gradient ring optional prop |
| 10 | Status dot + label ("All systems operational") | home-10 footer; DESIGN §status-dot | c NET-NEW | `components/ui/status-pill` | Green ramp dot + pill; staywire has a REAL status use (booking-engine uptime) |
| 11 | Inline event badges (Delivered/Complained/Spam chips in event-feed art) | home-03 event feed | b VARIANT | `badge` | Semantic ramp color variants (green/yellow/red) — badge variant map |
| 12 | Logo cloud (2×6 grayscale marks + caption) | home-01 top | a COVERED | `blocks/case/case1` | case blocks are logo-cloud shaped; voice pass renames to partner properties |

## Cards & content surfaces

| # | Component | Evidence | Verdict | Target | Notes |
|---|---|---|---|---|---|
| 13 | Feature card (icon + title + body + Learn-more, borderless on canvas) | home-03 Test mode/Modular webhooks; DESIGN §feature-card | a COVERED | `card` + `blocks/feature/*` | rounded-12 + hairline via theme |
| 14 | Code window — traffic lights, framework tab strip, line numbers, deep well | home-01/02; DESIGN §code-window | c NET-NEW | `components/ui/code-window` | THE signature dev-tool surface; staywire: quote→book API snippets. deep-paper light / night-deep dark |
| 15 | Code tab strip (Node.js/Next.js/Remix/…) | home-01 code well | c NET-NEW | part of code-window | Tabs primitive styled as code-tabs; active = ink text + underline |
| 16 | Email/artifact mockup inset (white card on canvas) | home-03 editor mockup; DESIGN §email-mockup | c NET-NEW | `components/ui/artifact-inset` | staywire translation: BOOKING-CONFIRMATION inset (email or booking card) — the one deliberately-contrasting surface |
| 17 | Event-feed panel (timeline of delivery events w/ chips + timestamps) | home-02/03 right column | c NET-NEW | `blocks/feature/feature10` | staywire: booking event_log feed (booking.created → confirmed → …) — product-true |
| 18 | Bento/atmospheric section opener (glow wash + oversized serif) | home-04…07; DESIGN §decorative | b VARIANT | `blocks/feature` + TintBand | Glow → indigo-wash radial on light (mix toward --background per trap #31) |

## Page sections (blocks)

| # | Component | Evidence | Verdict | Target | Notes |
|---|---|---|---|---|---|
| 19 | Hero stripe — oversized serif, badge pill, CTA pair, art right | home-00; DESIGN §hero-stripe | b VARIANT | `blocks/hero/hero1` → `hero6` | Serif display + badge slot + split art layout |
| 20 | SDK/logo icon grid section ("Integrate this morning") | home-01 | b VARIANT | `blocks/feature` → `feature11` | icon-chip grid + heading; feeds from #8 |
| 21 | Pricing tiers — 4-up cards, feature checklists, featured tier elevated | pricing-00; DESIGN §pricing-tier | a COVERED | `blocks/pricing/pricing1/2` | Values re-voiced for staywire plans (Free/Flat) |
| 22 | Pricing volume slider + plan-type toggle | pricing-00 top | c NET-NEW | `blocks/pricing/pricing3` | slider + toggle-group primitives exist; composition is new. staywire: rooms/bookings volume |
| 23 | Closing CTA band — two-line serif + CTA pair over wordmark watermark | home-10 | b VARIANT | `blocks/cta/cta1` → `cta3` | Watermark = staywire wordmark at 4% ink |
| 24 | Testimonial/customer-story rows w/ avatars | customers-00; DESIGN §contributor-avatar | a COVERED | `blocks/testimonials1` + avatar | |
| 25 | Stats band | home-08 (metrics figures) | a COVERED | `blocks/stats/stats1` | Mono figures via text-code token |
| 26 | FAQ section | pricing-01 lower | a COVERED | `blocks/faq/faq1/2` | |

## App-surface examples

| # | Component | Evidence | Verdict | Target | Notes |
|---|---|---|---|---|---|
| 27 | Editor/dashboard chrome mockup (toolbar + panels) | home-03/04 editor band | c NET-NEW (DEFER) | — | High-cost illustrative shell; propose DEFER to post-V1 — staywire admin already exists as the real thing |
| 28 | Form input (40px, hairline border, focus=ink border) | DESIGN §text-input; signup forms behind auth | a COVERED | `input` | Radius md=8 matches; focus ring = indigo (deliberate identity deviation, logged) |

## Tally

**28 rows → a COVERED 10 · b VARIANT 9 · c NET-NEW 9** (1 of the 9 proposed DEFER: #27).

**Highest-leverage build order:** (1) `code-window` + `code-tabs` + `icon-chip` — one cluster,
feeds #8/14/15/20 and the site's dev-story section; (2) `status-pill` + badge variants —
feeds #9/10/11/17; (3) `hero6` + `footer2` + `cta3` — the one-pager's spine (Phase 6
consumes them); (4) `artifact-inset` + `feature10` event feed — the product-true showpieces;
(5) `pricing3` slider last (most compositional, least load-bearing).

## Adjudication (MORNING — Gate A2 HARD-STOP)

Batched to 6 decisions. Recommendation column = overnight self-judgment; nothing outside
"⚡ built overnight" was acted on. Per playbook, COVERED rows auto-approve.

| Batch | Rows | Recommendation | Overnight action |
|---|---|---|---|
| D1 code cluster (icon-chip, code-window, code-tabs) | 8, 14, 15, 20 | BUILD | ⚡ built overnight (site needs the dev story — see GATE-LOG) |
| D2 badges/status (pill variants, status-pill, event chips) | 9, 10, 11 | BUILD | ⚡ built overnight (small, feeds site) |
| D3 one-pager spine (hero6, footer2, cta3, header2) | 1, 3, 19, 23 | BUILD | ⚡ built overnight (Phase 6 depends on them) |
| D4 product-true showpieces (artifact-inset, feature10 event feed) | 16, 17 | BUILD | pending morning |
| D5 pricing slider (pricing3) | 22 | BUILD (low priority) | pending morning |
| D6 editor mockup shell | 27 | DEFER | pending morning |
