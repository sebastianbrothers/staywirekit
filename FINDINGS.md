# staywirekit FINDINGS — LEAK / FRICTION / DECISION log

Kit #3 · first full run of lab/products/sbkit/PLAYBOOK.md (playbook-test run: also logging
PLAYBOOK leaks/ambiguities here, tagged **PB**). Started 2026-07-21. Intake: INTAKE.md.

| # | Type | Entry |
|---|---|---|
| 1 | PB | Playbook 2.3 covers the initial scope rename but not MID-FLIGHT brand renames: after sendwire→staywire, per-package pnpm workspace symlinks (apps/*/node_modules/@{brand}kit) stay stale until `pnpm install` re-runs — storybook build fails with `Rollup failed to resolve "@{brand}kit/ui/styles"`. Add "re-run pnpm install after ANY scope rename" to the playbook. |
| 2 | LEAK | Template guide.tsx carried three per-brand assumptions beyond trap #4's weight badge: (a) kurnl's `›` chevron label device, (b) `weight===500?"Medium 500":"Regular 400"` two-weight badge, (c) LogoTile backgrounds on IDENTITY vars (--color-deep-purple / --color-white). All regenerated; template should ship guide.tsx with a WEIGHT_NAMES map, a neutral label device, and semantic-var tile backgrounds. |
| 3 | DECISION | Wordmark SVGs use SVG `<text>` (Fraunces → Georgia fallback). Inside `<img>` contexts webfonts don't load, so exported SVGs render with a system serif. The Logo page's inline HTML render (real Fraunces) is canonical; path-outlined SVGs are a follow-up blocked on design tooling. |
| 4 | DECISION | No downloadable font files by design — faces ship as @fontsource packages inside @staywirekit/ui. guidelines.downloads keeps a fonts path (empty dir) for schema stability; Assets page explains rather than 404s. |
| 5 | PB | guidelines.json's SHAPE is an implicit story contract the playbook never enumerates: Welcome indexes guidelines.art.stills + filters resources by type; Logo filters variants by h-/v- id prefix; Typography maps styles[].face. Playbook says "keep the shape" — it should LIST the fields stories dereference so a per-brand rewrite can't miss one. |
