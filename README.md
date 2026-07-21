# staywirekit

The staywire digital brand kit — a portable, AI-consumable productization of the staywire brand.

## What's in here

| Path | What |
| --- | --- |
| `packages/tokens` | **Source of truth.** `tokens.json` (W3C DTCG) → Style Dictionary builds `globals.css`, a Tailwind preset, and a flat token map. |
| `packages/ui` | shadcn/ui component suite branded to staywire, with one Storybook story per component, plus page-section blocks (`src/blocks/`, adapted from [TWBlocks](https://github.com/tommyjepsen/twblocks), MIT). |
| `apps/storybook` | Storybook that doubles as the brand-guideline / brand-kit interface (Foundations + blocks + components). |
| `apps/site` | Reference consumer — a staywire site composed entirely from kit blocks. See [`docs/BUILDING-WITH-THE-KIT.md`](./docs/BUILDING-WITH-THE-KIT.md). |
| `packages/handoff` | Generates the AI handoff: root `brand.json` + `HANDOFF.md`, plus the `lab_brand` MCP server. |
| `brand/` | Vendored brand knowledge base (the upload). Has its own `AGENTS.md` schema. |
| `brand.json`, `HANDOFF.md` | Generated handoff artifacts, kept at repo root for stable raw-URL reference. |

## Data flow

```
brand/reference/brand/  →  packages/tokens/tokens.json  →  Style Dictionary
   →  dist/{globals.css, preset.css, tokens.flat.json}
   →  packages/ui (theme) + apps/storybook (docs)
   →  packages/handoff  →  brand.json + HANDOFF.md  →  external agents (LabKit / Orchestrator / MCP)
```

## Status

**Populated.** Tokens authored from the brand upload, full shadcn suite branded with a
Storybook story per component, brand-guide Foundations pages live, `lab_brand` MCP server
serving tokens/components/voice/assets.

## Quickstart

```bash
pnpm install
pnpm build:tokens     # regenerate token outputs
pnpm storybook        # run the brand kit interface
pnpm build:handoff    # regenerate brand.json + HANDOFF.md
```

## Hard rule

The staywire **website** repo (`~/Clients/staywire`) is not a source for this kit. All brand
content originates from the `brand/` upload. Keep the streams separate.
