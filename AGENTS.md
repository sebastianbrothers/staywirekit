# sendwirekit — agent guide

You are working in the sendwire digital brand kit. This file is the kit-level guide. The
vendored knowledge base under `brand/` carries its **own** `AGENTS.md` (the KB schema) —
don't confuse the two. This file governs the kit (tokens, components, Storybook, handoff);
`brand/AGENTS.md` governs the KB (reference/source/wiki/outputs).

## The one rule

`packages/tokens/tokens.json` is the **single source of truth** for design tokens. Never
hand-edit generated outputs (`packages/tokens/dist/*`, the root `brand.json`/`HANDOFF.md`).
Edit `tokens.json`, then rebuild.

All brand content originates from `brand/` (the upload). The sendwire **website** repo
(`~/Clients/sendwire`) is explicitly **not** a source — keep the streams separate.

## Layout convention

- `packages/*` = workspace code (has `package.json`, built/imported).
- `apps/*` = runnable apps.
- top-level = content/artifacts. `brand/` is vendored KB content; `brand.json` + `HANDOFF.md`
  are generated artifacts kept at root for stable raw-GitHub-URL reference.

## Pipeline

1. Author/edit `packages/tokens/tokens.json` (W3C DTCG: `$value` / `$type`).
2. `pnpm build:tokens` → regenerates `dist/{globals.css, preset.css, tokens.flat.json}`.
3. `packages/ui` consumes the preset; `src/theme.css` maps shadcn semantic vars → sendwire tokens.
4. `apps/storybook` renders Foundations + components against the same preset.
5. `pnpm build:handoff` → assembles root `brand.json` + `HANDOFF.md` from the flat tokens +
   the `ui` component index + voice/tone from `brand/`.

## Adding shadcn components

`pnpm ui:add <name>` (wraps the shadcn CLI against `packages/ui/components.json`). Each
component must ship a `*.stories.tsx`.

⚠ The shadcn CLI writes `@/` alias imports, but this package ships **relative imports
only** — the `@/` alias doesn't resolve when consumers (e.g. `apps/site`) compile the
kit's source. After `ui:add`, rewrite new `@/...` imports to relative paths.

## Blocks and consumption rules

- Blocks live in `packages/ui/src/blocks/<category>/` (TWBlocks-derived, MIT), exported
  as `@sendwirekit/ui/blocks/<category>/<name>`. Copy must follow
  `brand/reference/brand/voice.md` (sentence case, audience pillars).
- Any block or component using React hooks must start with `"use client"` — Storybook
  doesn't care but Next.js consumers fail without it.
- `packages/ui/src/index.css` must keep `@source` globs for every source dir (Tailwind
  v4 tree-shakes classes otherwise) and defines the kit's `container` utility.
- `apps/site` is the reference consumer; keep it building. Full consumption guide +
  known limitations: `docs/BUILDING-WITH-THE-KIT.md`.

## Post-upload first tasks (when `brand/` is populated)

1. Author `tokens.json` from `brand/reference/brand/`.
2. Fill `packages/ui/src/theme.css` mappings; verify the shadcn suite renders branded.
3. Run `pnpm build:handoff`; review `brand.json` + `HANDOFF.md`.
