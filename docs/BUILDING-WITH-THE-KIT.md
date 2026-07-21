# Building with the kit

How to consume an sblab-kit (proven here with sendwirekit) to build a real site, and the
limitations we hit doing it the first time. `apps/site` is the living reference — a
one-page sendwire marketing site composed entirely from kit blocks, zero bespoke CSS.

## The recipe (Next.js consumer)

1. **Depend on the kit.** In a workspace app: `"@sendwirekit/ui": "workspace:*"`.
   (External repos can't consume yet — see limitations.)
2. **One CSS import.** `app/globals.css` contains only
   `@import "@sendwirekit/ui/styles";` — that brings Tailwind v4, the token preset,
   the shadcn→sendwire theme mapping, the `container` utility, and `@source` globs
   for the kit's own files. Process with `@tailwindcss/postcss` in
   `postcss.config.mjs`. The app's own classes are auto-detected by Tailwind.
3. **Compose from blocks.** Import page sections directly:
   `import { Hero1 } from "@sendwirekit/ui/blocks/hero/hero1";` and stack them in a
   page. Atoms are at `@sendwirekit/ui/components/<name>` when a block isn't enough.
4. **Build.** `pnpm --filter @sendwirekit/site build` — statically prerenders.

## Limitations found (and what we changed)

Each of these was hit while building `apps/site` and fixed **at the kit level** so the
next consumer doesn't pay it:

| # | Limitation | Fix (in kit) |
| --- | --- | --- |
| 1 | Blocks with hooks lacked `"use client"` (stripped during vendoring; Storybook didn't care, Next.js RSC fails) | Directive restored on all interactive blocks. Rule: any block using hooks ships `"use client"`. |
| 2 | Internal `@/` alias imports don't resolve when a consumer compiles the kit's source | All internal imports rewritten to relative paths. **Caveat:** `pnpm ui:add` (shadcn CLI) regenerates `@/` imports — re-run the relative-import codemod or hand-fix after adding components. |
| 3 | No package export for blocks | Added `"./blocks/*": "./src/blocks/*.tsx"` to `@sendwirekit/ui` exports. |
| 4 | Tailwind v4 tree-shakes classes used only in kit files | Already fixed via `@source` globs inside `index.css` (self-describing — consumers get it for free). |
| 5 | Tailwind v4 `container` is width-only; blocks assume v3 behaviour | Kit defines a `container` utility (centered, `--space-gutter` padding, 1400px cap). |
| 6 | Page-level rhythm (gutters, section spacing) was hardcoded — container's literal `2rem`, blocks' vendored `py-20 lg:py-40` | Tokenized: `spacing.gutter` / `spacing.section` / `spacing.section-lg` in `tokens.json`; `container` reads the gutter, blocks use the kit's `py-section` utility. Retune the page by editing the three tokens, never per-block. |

## External (non-workspace) consumption — SOLVED via git dependencies

Consumers outside this monorepo install with pnpm's `#path:` git syntax — no registry.
The full recipe (install snippet, the `@sendwirekit/tokens` override, the
`onlyBuiltDependencies` allowlist, Next `transpilePackages`) lives in
[`HANDOFF.md → Consuming this kit`](../HANDOFF.md). Verified end-to-end: a scratch
Vite app outside the repo installs both packages and builds pixel-identical output
(tokens, Graphik faces, container/py-section rhythm all present). Source-shipping
means the consumer's bundler compiles our TSX — fine for Next/Vite, would break in a
no-build environment.

## Still open (known, not yet needed)

- **react/react-dom version coupling** — consumer must satisfy `react >= 19`.
- **Blocks are static-copy demos** — no props. Real builds will want copy/props
  extracted (title, body, items as props with kit copy as defaults).
- **faq/testimonials templates repeat one item** — arrays are single-string maps.

## Reproducing this for the next kit (sbkit flow)

The intended pipeline, sendwirekit being the proof:

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
