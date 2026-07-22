# Building with the kit

How to consume an sblab-kit (proven here with staywirekit) to build a real site, and the
limitations we hit doing it the first time. `apps/site` is the living reference — a
one-page staywire marketing site composed entirely from kit blocks, zero bespoke CSS.

## The recipe (Next.js consumer)

1. **Depend on the kit.** In a workspace app: `"@staywirekit/ui": "workspace:*"`.
   (External repos can't consume yet — see limitations.)
2. **One CSS import.** `app/globals.css` contains only
   `@import "@staywirekit/ui/styles";` — that brings Tailwind v4, the token preset,
   the shadcn→staywire theme mapping, the `container` utility, and `@source` globs
   for the kit's own files. Process with `@tailwindcss/postcss` in
   `postcss.config.mjs`. The app's own classes are auto-detected by Tailwind.
3. **Compose from blocks.** Import page sections directly:
   `import { Hero1 } from "@staywirekit/ui/blocks/hero/hero1";` and stack them in a
   page. Atoms are at `@staywirekit/ui/components/<name>` when a block isn't enough.
4. **Build.** `pnpm --filter @staywirekit/site build` — statically prerenders.

## Limitations found (and what we changed)

Each of these was hit while building `apps/site` and fixed **at the kit level** so the
next consumer doesn't pay it:

| # | Limitation | Fix (in kit) |
| --- | --- | --- |
| 1 | Blocks with hooks lacked `"use client"` (stripped during vendoring; Storybook didn't care, Next.js RSC fails) | Directive restored on all interactive blocks. Rule: any block using hooks ships `"use client"`. |
| 2 | Internal `@/` alias imports don't resolve when a consumer compiles the kit's source | All internal imports rewritten to relative paths. **Caveat:** `pnpm ui:add` (shadcn CLI) regenerates `@/` imports — re-run the relative-import codemod or hand-fix after adding components. |
| 3 | No package export for blocks | Added `"./blocks/*": "./src/blocks/*.tsx"` to `@staywirekit/ui` exports. |
| 4 | Tailwind v4 tree-shakes classes used only in kit files | Already fixed via `@source` globs inside `index.css` (self-describing — consumers get it for free). |
| 5 | Tailwind v4 `container` is width-only; blocks assume v3 behaviour | Kit defines a `container` utility (centered, `--space-gutter` padding, 1400px cap). |
| 6 | Page-level rhythm (gutters, section spacing) was hardcoded — container's literal `2rem`, blocks' vendored `py-20 lg:py-40` | Tokenized: `spacing.gutter` / `spacing.section` / `spacing.section-lg` in `tokens.json`; `container` reads the gutter, blocks use the kit's `py-section` utility. Retune the page by editing the three tokens, never per-block. |

## External (non-workspace) consumption — SOLVED via git dependencies

Consumers outside this monorepo install with pnpm's `#path:` git syntax — no registry.
The full recipe (install snippet, the `@staywirekit/tokens` override, the
`onlyBuiltDependencies` allowlist, Next `transpilePackages`) lives in
[`HANDOFF.md → Consuming this kit`](../HANDOFF.md). Verified end-to-end: a scratch
Vite app outside the repo installs both packages and builds pixel-identical output
(tokens, Fraunces/Inter/JetBrains Mono faces, container/py-section rhythm all
present). Source-shipping means the consumer's bundler compiles our TSX — fine for
Next/Vite, would break in a no-build environment.

## Theme-only consumers (re-theming an existing app) — proven on the staywire admin

An app with its own shadcn component set (the staywire admin runs base-nova on
Base UI) doesn't want `./styles` — that entry brings the kit's Tailwind import and
`@source` globs. The seam is three smaller imports after the app's own framework
imports:

```css
@import "@staywirekit/tokens/preset.css"; /* --color-*, --font-*, --radius-*   */
@import "@staywirekit/ui/theme";          /* shadcn semantic mapping, both modes */
@import "@staywirekit/ui/fonts";          /* Fraunces/Inter/JBMono @fontsource  */
```

What the consumer still owns (found re-theming the admin, 2026-07-22):

- **Sidebar variables** — `theme.css` doesn't brand `--sidebar-*` (the kit site has
  no sidebar; `index.css` carries unbranded shadcn defaults). Map them onto kit
  tokens app-side following the theme's judgment calls (surfaces step by luminance,
  indigo signature on the active item).
- **App-semantic aliases** — keep domain names (`--color-success-600` & co) and
  point them at kit ramps in an app-level `@theme` block; zero call-site churn.
- **Palette-collision sweep** — any class that matched the app's OLD custom palette
  but also matches a Tailwind default (`neutral-500`…) must be swept to kit tokens
  (`ramp-neutral-500`), or it silently falls back to Tailwind's grays. Classes with
  no default (`copper-*`) fail the build loudly — the dangerous ones are the quiet
  ones.

## Still open (known, not yet needed)

- **react/react-dom version coupling** — consumer must satisfy `react >= 19`.
- **Blocks are static-copy demos** — no props. Real builds will want copy/props
  extracted (title, body, items as props with kit copy as defaults).
- **faq/testimonials templates repeat one item** — arrays are single-string maps.

## Reproducing this for the next kit (sbkit flow)

The intended pipeline, staywirekit being the proof:

1. Drop the brand upload into `brand/` (KB schema per `brand/AGENTS.md`).
2. Author `packages/tokens/tokens.json` from it; `pnpm build:tokens`.
3. Map shadcn semantics in `packages/ui/src/theme.css`.
4. Voice-pass the blocks' copy from `brand/reference/brand/voice.md`
   (copy strings only; sentence case; audience pillars spread across blocks).
5. `pnpm build:handoff` → `brand.json` + `HANDOFF.md` + `lab_brand` MCP.
6. Prove it: compose a page in `apps/site` from blocks and build it.

Longer-term (captured intent, not built): a dashboard listing all sblab-kits, and an
"sbkit" flow that takes an existing website/brand, fires up a kit for it, and builds
something from it.
