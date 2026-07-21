# sendwire — Phase 0 intake record (2026-07-21, autonomous overnight run)

Operator directive: full autonomous run; Phase-0 decisions self-judged and logged here +
GATE-LOG.md for morning adjudication. Playbook: sblabs-v2 lab/products/sbkit/PLAYBOOK.md.

| # | Decision | Answer |
|---|---|---|
| 0.1 | Name / repo / scope | **sendwire** · `sebastianbrothers/sendwirekit` · `@sendwirekit/*` (operator-given) |
| 0.2 | Ingestion mode | **INSPIRATION mode** — site Y = resend.com (dark-first). Layout/typography rhythm/component shapes transfer; name, wordmark, voice, palette identity are sendwire's own. Reference: `brand/reference/RESEND-DESIGN.md` (getdesign alpha) + live walk `brand/source/sendwire-com-screens/` (captured 2026-07-21, 16 shots incl. pricing/customers/390px) |
| 0.3 | Light-first | **Light-first.** `:root` = light, `.dark` = synthesized dark. Storybook `defaultTheme: "light"` |
| 0.4 | Single-mode source | Reference is dark-only → BOTH sendwire modes are original derivations. Light = the primary design act (NOT a naive inversion — re-derived surfaces below). Dark = sendwire's palette on near-black, informed by reference density; every derived value flagged in `$description` |
| 0.5 | Fonts | Display serif: **Fraunces** (open, @fontsource) standing in for the Domaine Display role — lineHeight 1.0 + negative tracking preserved; delta: variable optical sizing instead of ss01/ss04/ss11 alternates. Body/UI: **Inter** (open; collapses reference's ABC Favorit marketing-body + Inter UI lanes into one face — delta recorded). Mono: **JetBrains Mono** (open; deliberately NOT Geist Mono to avoid cloning Resend's stack) |
| 0.6 | Reserved-names check | Identity tokens: `indigo` (signature), neutrals `ink/slate/ash/mist/paper`, ramp `red/yellow/green/blue`. None collide with the shadcn reserved list ✓ |
| 0.7 | Spacing knobs | gutter 24 · section 96 · section-lg 128 (reference rhythm 96/128) — FLAGGED for Gate A retune |
| 0.8 | Asset inventory | No logo svg, no font files, no art shipped. Wordmark: original typographic SVG generated at build (lowercase `sendwire` + wire-dot glyph). Art dirs created with .gitkeep; Foundations empty-states required |
| 0.9 | Reference date-stamp | RESEND-DESIGN.md = alpha extraction (undated) — treated as history; live walk 2026-07-21 = current truth. Drift noted: hero art is now a rubik-cube 3D render (seasonal); nav has AI menu item not in doc |
| 0.10 | Deploy autonomy | Always deploy after every push (operator-directed; sendwirekit-storybook + sendwirekit-site) |

## Light-first re-derivation (the 0.4 design act)

Resend's signature = "white is the loudest pixel" (white CTA on true black). sendwire inverts the
CONCEPT, not the hex values: **ink is the loudest pixel** — near-black CTA on cool paper. The
faint blue-cool cast of Resend's ink (#fcfdff) becomes the cast of sendwire's paper (#fafbfd);
translucent-white hairline elevation becomes translucent-ink hairlines; surface-deep code wells
become deep-paper inset wells; atmospheric accent glows become low-opacity accent washes.
Signature accent: **wire indigo** (#4d5bf5 family) — deliberately not Resend blue #3b9eff.
