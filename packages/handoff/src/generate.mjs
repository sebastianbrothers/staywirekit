// Assembles the AI handoff artifacts from the kit's own outputs:
//   <repo>/brand.json   — machine-readable brand export (tokens + components + voice + assets)
//   <repo>/HANDOFF.md    — LLM-readable brand brief
//
// Inputs: packages/tokens/dist/tokens.flat.json (built first), the installed shadcn
// components in packages/ui, and voice/tone from the vendored brand/ KB (when present).
// Run after `pnpm build:tokens`.
import { readFile, writeFile, readdir, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");

const readJson = async (p, fallback) => {
  try {
    return JSON.parse(await readFile(p, "utf8"));
  } catch {
    return fallback;
  }
};

// --- tokens ---------------------------------------------------------------
const flatPath = join(repoRoot, "packages/tokens/dist/tokens.flat.json");
const tokens = await readJson(flatPath, null);
if (!tokens) {
  console.warn("⚠ tokens.flat.json missing — run `pnpm build:tokens` first. Emitting empty tokens.");
}

// --- components -----------------------------------------------------------
const uiDir = join(repoRoot, "packages/ui/src/components/ui");
let components = [];
try {
  const files = await readdir(uiDir);
  components = files
    .filter((f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"))
    .map((f) => f.replace(/\.tsx$/, ""))
    .sort();
} catch {
  /* no components installed yet */
}

// --- guidelines (structured brand guidelines: logo, colours, type, art) -----
const hexToRgb = (hex) => {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};
const hexToCmyk = (hex) => {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
  const k = 1 - Math.max(r, g, b);
  if (k === 1) return [0, 0, 0, 100];
  return [((1 - r - k) / (1 - k)) * 100, ((1 - g - k) / (1 - k)) * 100, ((1 - b - k) / (1 - k)) * 100, k * 100].map(Math.round);
};
let guidelines = null;
try {
  guidelines = JSON.parse(await readFile(join(repoRoot, "packages/tokens/guidelines.json"), "utf8"));
  delete guidelines.$description;
  if (tokens) {
    for (const group of guidelines.colors?.groups ?? []) {
      for (const item of group.items) {
        const hex = tokens[item.token];
        if (!hex) continue;
        const [r, g, b] = hexToRgb(hex);
        item.hex = hex.toUpperCase();
        item.rgb = `rgb(${r}, ${g}, ${b})`;
        item.cmyk = `cmyk(${hexToCmyk(hex).join(", ")})`;
      }
    }
  }
} catch {
  /* no guidelines authored yet */
}

// --- blocks (TWBlocks-derived page sections, keyed by category) -------------
const blocksDir = join(repoRoot, "packages/ui/src/blocks");
let blocks = {};
try {
  for (const cat of (await readdir(blocksDir)).sort()) {
    const files = await readdir(join(blocksDir, cat));
    blocks[cat] = files
      .filter((f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"))
      .map((f) => f.replace(/\.tsx$/, ""))
      .sort();
  }
} catch {
  /* no blocks yet */
}

// --- KB-derived: voice, docs, assets (when the upload is present) ----------
const brandRef = join(repoRoot, "brand/reference/brand");
const kbPresent = existsSync(brandRef);

const extractAbstract = (md) => {
  const lines = md.split("\n");
  const i = lines.findIndex((l) => l.includes("[!abstract]"));
  if (i === -1) return null;
  const out = [];
  for (let j = i + 1; j < lines.length; j++) {
    const m = lines[j].match(/^>\s?(.*)$/);
    if (!m || m[1].trim() === "") break;
    out.push(m[1].trim());
  }
  return out.join(" ").trim() || null;
};

const listRel = async (absDir, repoRelPrefix, exts) => {
  try {
    const files = await readdir(absDir);
    return files
      .filter((f) => exts.some((e) => f.toLowerCase().endsWith(e)))
      .sort()
      .map((f) => `${repoRelPrefix}/${f}`);
  } catch {
    return [];
  }
};

let voice = "PENDING — author from brand/reference/brand/voice.md once the KB is uploaded";
let docs = null;
let assets = [];
if (kbPresent) {
  const voiceMd = await readFile(join(brandRef, "voice.md"), "utf8").catch(() => "");
  voice = { source: "brand/reference/brand/voice.md", summary: extractAbstract(voiceMd) };
  docs = {
    index: "brand/reference/brand/INDEX.md",
    strategy: "brand/reference/brand/strategy.md",
    voice: "brand/reference/brand/voice.md",
    visual: "brand/reference/brand/visual.md",
    design: "brand/reference/brand/design.md",
  };
  assets = {
    logos: await listRel(join(brandRef, "assets/logo"), "brand/reference/brand/assets/logo", [".svg"]),
    fonts: await listRel(join(brandRef, "assets/fonts/Graphik"), "brand/reference/brand/assets/fonts/Graphik", [".otf", ".woff2", ".woff"]),
    flowLinesStill: await listRel(join(brandRef, "assets/flow-lines/still"), "brand/reference/brand/assets/flow-lines/still", [".png", ".svg", ".jpg"]),
    flowLinesMotion: await listRel(join(brandRef, "assets/flow-lines/motion"), "brand/reference/brand/assets/flow-lines/motion", [".mp4", ".webm"]),
  };
}

// --- assemble -------------------------------------------------------------
const brand = {
  brand: "sendwirekit",
  basedOn: "sendwire",
  version: (await readJson(join(repoRoot, "packages/ui/package.json"), {})).version ?? "0.0.0",
  generatedAt: new Date().toISOString(),
  status: tokens && kbPresent ? "populated" : "bones",
  source: "brand/reference/brand/",
  tokens: tokens ?? {},
  components,
  blocks,
  guidelines,
  voice,
  docs,
  assets,
};

await writeFile(join(repoRoot, "brand.json"), JSON.stringify(brand, null, 2) + "\n");

const md = `# sendwire brand handoff

> AUTO-GENERATED by @sendwirekit/handoff. Do not edit by hand — edit tokens.json / the brand KB
> and re-run \`pnpm build:handoff\`.

- **Brand:** ${brand.brand} (based on ${brand.basedOn})
- **Version:** ${brand.version}
- **Status:** ${brand.status}
- **Generated:** ${brand.generatedAt}

## Tokens

Machine-readable token map lives in [\`brand.json\`](./brand.json) (\`tokens\`) and
[\`packages/tokens/dist/tokens.flat.json\`](./packages/tokens/dist/tokens.flat.json).
Source of truth: [\`packages/tokens/tokens.json\`](./packages/tokens/tokens.json) (W3C DTCG).

${tokens ? `${Object.keys(tokens).length} resolved tokens.` : "_No tokens built yet._"}

## Components

${components.length ? components.map((c) => `- \`${c}\``).join("\n") : "_shadcn suite not installed yet._"}

## Blocks

Page-section blocks (adapted from [TWBlocks](https://github.com/tommyjepsen/twblocks), MIT)
built on the component suite above, in \`packages/ui/src/blocks/<category>/\`:

${Object.entries(blocks).map(([cat, names]) => `- **${cat}**: ${names.map((n) => `\`${n}\``).join(", ")}`).join("\n") || "_No blocks yet._"}

## Guidelines

Structured brand guidelines (logo variants, colour groups with hex/rgb/cmyk, type
styles, flow-lines art, resources, downloads) live in \`brand.json\` → \`guidelines\`,
sourced from [\`packages/tokens/guidelines.json\`](./packages/tokens/guidelines.json).
The MCP server serves the same data via \`get_guidelines\` / \`get_logo\`.

## Voice & tone

${typeof brand.voice === "string" ? brand.voice : `${brand.voice.summary}\n\nFull doc: [\`${brand.voice.source}\`](./${brand.voice.source})`}

## Consuming this kit

- **By file:** read \`brand.json\` (raw GitHub URL) for tokens + component index.
- **By MCP:** the \`lab_brand\` server (\`packages/handoff/src/mcp/server.mjs\`) exposes
  tokens (filterable, flat/css/dtcg), component sources, voice, and assets as tools/resources.
- **By package (outside this monorepo):** the kit distributes via **git dependencies** —
  no registry. pnpm's \`#path:\` syntax installs a package straight from a monorepo subdir:

  \`\`\`bash
  pnpm add "@sendwirekit/ui@github:sebastianbrothers/sendwirekit#v0.2.0&path:packages/ui"
  \`\`\`

  Three things the consumer project must carry (all one-time setup):

  1. **Override the internal dep** — \`@sendwirekit/ui\` depends on \`@sendwirekit/tokens\` via
     \`workspace:*\`, which only resolves inside this repo. Point it at the same git ref
     in \`package.json\`:

     \`\`\`json
     "pnpm": { "overrides": {
       "@sendwirekit/tokens": "github:sebastianbrothers/sendwirekit#v0.2.0&path:packages/tokens"
     } }
     \`\`\`

  2. **Allow the tokens build script** — tokens compiles its \`dist/\` on install via
     \`prepare\`; pnpm blocks dep scripts by default. In \`pnpm-workspace.yaml\` (or the
     \`pnpm\` field): \`onlyBuiltDependencies: ["@sendwirekit/tokens"]\`.

  3. **Auth** — the repo is private; \`git\`/\`gh\` credentials with read access to
     \`sebastianbrothers/sendwirekit\` are all pnpm needs (it clones over https).

  \`@sendwirekit/ui\` ships TypeScript source, so Next.js consumers add
  \`transpilePackages: ["@sendwirekit/ui", "@sendwirekit/tokens"]\`; Vite consumers need nothing.
  Then \`@import "@sendwirekit/ui/styles"\` in the app stylesheet pulls the entire themed
  system — tokens, theme mapping, Graphik faces, container/py-section utilities.
  Pin a tag (\`#v0.2.0\`) for stability or track \`#main\` for latest; versions/tags are
  managed with changesets. Full workspace-mode runbook: \`docs/BUILDING-WITH-THE-KIT.md\`.
`;

await writeFile(join(repoRoot, "HANDOFF.md"), md);
console.log(`✓ handoff written → brand.json + HANDOFF.md (status: ${brand.status}, ${components.length} components)`);
