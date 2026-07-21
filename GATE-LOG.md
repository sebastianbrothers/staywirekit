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
| Gate C (refix) | SELF-JUDGED PASS after fix | staywirekit-site.vercel.app | Site recomposed: Header2/Hero6/Cta3/Footer2 (staywire-native blocks) + Feature6/Feature1/Stats2/FAQ2 with full staywire prop overrides (booking-engine voice: stays, quotes, double-booking impossibility, MCP agents). Live page grep for kurnl-era strings = zero hits (evidence below) |
