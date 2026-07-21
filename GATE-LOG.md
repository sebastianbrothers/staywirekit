# staywirekit GATE-LOG — overnight self-judgments for morning adjudication

Run: 2026-07-21 overnight, fully autonomous (operator directive). Every gate below is a
self-judgment = "safe to proceed", not "final". Morning revision pass expected.

| Gate | Verdict | Evidence / URL | Notes |
|---|---|---|---|
| Phase 0 intake | SELF-JUDGED (normally HARD-STOP) | INTAKE.md | Name/scope operator-given; fonts, palette identity, light derivation self-decided — review INTAKE.md §Light-first re-derivation |
| Voice doc | SELF-JUDGED (sign-off pending) | brand/reference/VOICE.md | Drafted at intake per playbook Phase 1 |
| BRAND CORRECTION | APPLIED 2026-07-21 (overnight) | this commit | Operator typo: brand is **staywire** (booking engine), not sendwire. Full-tree rename done pre-Foundations (zero rework lost — the Foundations subagent was stopped before it wrote anything). MORNING ITEM: kit signature = wire indigo (#4D5BF5) vs the product's interim admin theme (paper/ink/copper) — adjudicate whether copper joins/replaces indigo, or the kit supersedes the interim theme |
| Gate A2 map | MAP BUILT — adjudication = MORNING HARD-STOP | COMPONENTS-MAP.md (28 rows, a10/b9/c9, 6 batched decisions) | Evidence-cited from 16-shot live walk. Drift vs doc noted (seasonal hero art, AI nav item) |
| Gate A2 overnight builds | SELF-JUDGED partial (D1–D3 only) | commit 51e49fe | Built the rows Phase 6's site depends on: code-window/tabs, icon-chip, status-pill, badge ramp variants, hero6, footer2, cta3, header2. D4 (artifact-inset, event feed), D5 (pricing slider), D6 (editor shell — recommend DEFER) untouched pending morning |
| Gate C (initial) | **FAIL — operator QA** | staywirekit-site.vercel.app (pre-fix) | Template-voice leak: site served kurnl fibre-co-op copy verbatim ("Canada's co-operation network", "Neutral by design", "Fibre that pays"). Root cause: Vercel auto-deployed the template's apps/site composition (bare blocks on kurnl-voiced default props) the moment the git-connected project was created — BEFORE the voice pass reached the composition. Defaults-as-props makes this failure silent by design |
| Gate C (refix) | SELF-JUDGED PASS after fix | staywirekit-site.vercel.app | Site recomposed: Header2/Hero6/Cta3/Footer2 (staywire-native blocks) + Feature6/Feature1/Stats2/FAQ2 with full staywire prop overrides (booking-engine voice: stays, quotes, double-booking impossibility, MCP agents). Live page grep for kurnl-era strings = zero hits after 3378ae7 (one straggler 'Talk to us' in Cta3's own default, replaced with 'Book a demo'). Evidence: docs/gate-c-live-1440.png + docs/gate-c-live-390.png; final grep CLEAN 2026-07-21 |
| Gate A (6 components, both modes) | SELF-JUDGED PASS | https://staywirekit-storybook.vercel.app · docs/gate-a/*.png (12 shots: button/card/input/dialog/tabs/badge × light/dark) | Pre-checks all green: reserved-names lint CLEAN; shadcn border base layer present; both modes screenshotted; radius md(8px) driving defaults. Gate-A+ checks: input radius = brand 8px = shadcn default (no retune needed); live-site-truth n/a (inspiration mode — reference walk IS the truth source); dark-mode semantic sweep — new components use semantic vars, badge ramp variants carry explicit dark: pairs; section rhythm 96/128 flagged for morning eye-tune. Light verdict: ink CTA on paper reads as the signature exactly as intended; dark: paper CTA is the brightest pixel ✓ |
| Gate B (voice + blocks, rendered) | SELF-JUDGED PASS | docs/gate-b/*.png — hero1/hero6/pricing1/faq1/testimonials1/feature6 × 1440+390, from the DEPLOYED storybook | Checklist: token typography visible (Fraunces headlines from the codemod, not stock Tailwind) ✓ · no repeated-copy artifacts (Array.from uses are varied placeholders) ✓ · 390px legibility ✓ (display clamps, CTAs fit) · voice lands (booking-engine domain, sentence case, ≤6-word headlines). Voice ACCEPTANCE remains a morning call per playbook |

---

## Morning summary (run complete 2026-07-21 overnight)

**Live URLs:** Storybook https://staywirekit-storybook.vercel.app · Site https://staywirekit-site.vercel.app
**Tag:** v0.1.0. Full repo: ui lint green · storybook build green · site build green · handoff populated (108 tokens / 59 components / voice ✓) · MCP smoke 10 tools ✓.

**Morning adjudication queue (in order):**
1. **Gate A2** — COMPONENTS-MAP.md: D4 (artifact-inset + event-feed blocks), D5 (pricing slider), D6 (editor shell — recommend DEFER). D1–D3 built overnight.
2. **Originality review (HARD-STOP by design)** — Foundations/Welcome + wordmark: judge "too on the nose" risk vs Resend. Self-assessment: layout is NOT Resend's (typographic, restrained), wordmark is an original wire-mark; but this veto can't be self-detected by design.
3. **Signature color** — wire indigo (#4D5BF5) vs the staywire product's interim admin copper. Kit kept indigo per "nothing else changes".
4. **Voice acceptance** — hero claims + pricing tier naming (Test/$0 · Live/$29/property · Portfolio/Custom) are drafted-by-agent.
5. **Rhythm eye-tune** — gutter 24 / section 96 / section-lg 128 flagged since intake.
6. **Phase 0 intake ratification** — fonts (Fraunces/Inter/JetBrains Mono), light derivation concept ("ink is the loudest pixel").
| Morning revision 1 (operator: header/footer spacing) | FIXED + live-verified | d6c0bfa · staywirekit-site.vercel.app | Root cause: phantom spacing utilities (py-section-lg/py-xxl/py-lg) silently dropped by Tailwind — FINDINGS #10. Also: header rebalanced to true 3-zone (wordmark/flex-1 · centered nav · actions/flex-1), footer rhythm py-16/lg:py-20 + gap-y-12, legal row py-6, status pill nowrap. Hero/CTA bands regained their 96/128 section rhythm as a side effect (same root cause) |
