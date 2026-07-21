#!/usr/bin/env node
// lab_brand — MCP server exposing the staywire brand kit to agents.
//
// Reads the generated brand.json (rebuild with `pnpm build:handoff`) plus the token/
// component sources it points at. Run: `pnpm --filter @staywirekit/handoff mcp`.
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { z } from "zod";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../../../..");
const read = (rel) => readFile(join(repoRoot, rel), "utf8");
const loadBrand = async () => JSON.parse(await read("brand.json"));

const server = new McpServer({ name: "lab_brand", version: "0.1.0" });

// Resource: the whole brand export.
server.registerResource(
  "brand",
  "brand://staywirekit",
  { title: "staywire brand export", description: "Full brand.json", mimeType: "application/json" },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(await loadBrand(), null, 2) }],
  }),
);

const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });
const text = (str) => ({ content: [{ type: "text", text: str }] });
const fail = (msg) => ({ content: [{ type: "text", text: msg }], isError: true });

// Tool: full brand metadata.
server.registerTool(
  "get_brand",
  { title: "Get brand", description: "Return the full staywire brand export (identity, status, tokens, components, voice, assets)." },
  async () => json(await loadBrand()),
);

// Tool: design tokens with prefix/substring filtering and format negotiation.
server.registerTool(
  "get_tokens",
  {
    title: "Get design tokens",
    description:
      "Return staywire design tokens. Default is the flat name→value map (e.g. \"color-primary-purple\": \"#8100d0\"). " +
      "Filter with `prefix` (e.g. \"color-ramp\", \"font\") and/or `match` (substring). " +
      "`format: \"css\"` returns the built globals.css; `format: \"dtcg\"` returns the W3C DTCG source (filters apply to flat only).",
    inputSchema: {
      prefix: z.string().optional().describe("Only tokens whose name starts with this (e.g. \"color-ramp\")"),
      match: z.string().optional().describe("Only tokens whose name contains this substring"),
      format: z.enum(["flat", "css", "dtcg"]).optional().describe("Output format, default \"flat\""),
    },
  },
  async ({ prefix, match, format = "flat" }) => {
    if (format === "css") return text(await read("packages/tokens/dist/globals.css"));
    if (format === "dtcg") return text(await read("packages/tokens/tokens.json"));
    const flat = (await loadBrand()).tokens;
    const entries = Object.entries(flat).filter(
      ([name]) => (!prefix || name.startsWith(prefix)) && (!match || name.includes(match)),
    );
    if (!entries.length) return fail(`No tokens matched (prefix=${prefix ?? "*"}, match=${match ?? "*"}). Try get_tokens with no filters to list all.`);
    return json(Object.fromEntries(entries));
  },
);

// Tool: component index with repo paths.
server.registerTool(
  "list_components",
  {
    title: "List components",
    description: "Return the staywire-branded shadcn component index with repo-relative source + story paths.",
  },
  async () =>
    json(
      (await loadBrand()).components.map((name) => ({
        name,
        source: `packages/ui/src/components/ui/${name}.tsx`,
        story: `packages/ui/src/components/ui/${name}.stories.tsx`,
      })),
    ),
);

// Tool: one component's source (and optionally its story) for exact usage/variants.
server.registerTool(
  "get_component",
  {
    title: "Get component source",
    description: "Return a component's TSX source — the authoritative record of its variants and props. Optionally include its Storybook story as a usage example.",
    inputSchema: {
      name: z.string().describe("Component name from list_components, e.g. \"button\""),
      includeStory: z.boolean().optional().describe("Also return the .stories.tsx usage example"),
    },
  },
  async ({ name, includeStory }) => {
    const { components } = await loadBrand();
    if (!components.includes(name)) return fail(`Unknown component "${name}". Known: ${components.join(", ")}`);
    const source = await read(`packages/ui/src/components/ui/${name}.tsx`);
    const story = includeStory ? await read(`packages/ui/src/components/ui/${name}.stories.tsx`).catch(() => null) : null;
    return text(`// packages/ui/src/components/ui/${name}.tsx\n${source}${story ? `\n\n// ${name}.stories.tsx\n${story}` : ""}`);
  },
);

// Tool: block index (TWBlocks-derived page sections, keyed by category).
server.registerTool(
  "list_blocks",
  { title: "List blocks", description: "Return the page-section block index keyed by category (hero, feature, pricing, …). Blocks compose the shadcn components into full sections." },
  async () => json((await loadBrand()).blocks ?? {}),
);

// Tool: one block's source.
server.registerTool(
  "get_block",
  {
    title: "Get block source",
    description: "Return a block's TSX source, e.g. category \"hero\", name \"hero2\".",
    inputSchema: {
      category: z.string().describe("Block category from list_blocks, e.g. \"hero\""),
      name: z.string().describe("Block name from list_blocks, e.g. \"hero2\""),
    },
  },
  async ({ category, name }) => {
    const blocks = (await loadBrand()).blocks ?? {};
    if (!blocks[category]?.includes(name))
      return fail(`Unknown block "${category}/${name}". Categories: ${Object.keys(blocks).join(", ")}`);
    return text(await read(`packages/ui/src/blocks/${category}/${name}.tsx`));
  },
);

// Tool: structured brand guidelines (logo variants, colour groups, type styles, art).
server.registerTool(
  "get_guidelines",
  {
    title: "Get brand guidelines",
    description:
      "Return structured brand guidelines: logo variants (with repo paths + dark/light context), colour groups (name/token/hex/rgb/cmyk/usage), typography faces + styles (token, weight, sample), flow-lines art paths, external resources, and downloadable asset sets. Optionally filter to one section.",
    inputSchema: {
      section: z.enum(["logo", "colors", "typography", "art", "resources", "downloads"]).optional().describe("Return just this section"),
    },
  },
  async ({ section }) => {
    const { guidelines } = await loadBrand();
    if (!guidelines) return fail("No guidelines authored yet — see packages/tokens/guidelines.json.");
    return json(section ? guidelines[section] : guidelines);
  },
);

// Tool: one logo variant's SVG markup (logos are small text files — served inline).
server.registerTool(
  "get_logo",
  {
    title: "Get logo SVG",
    description: "Return a logo variant's SVG markup by id (see get_guidelines → logo.variants), e.g. \"h-color-ondark\".",
    inputSchema: { id: z.string().describe("Variant id from get_guidelines, e.g. \"h-color-ondark\"") },
  },
  async ({ id }) => {
    const { guidelines } = await loadBrand();
    const v = guidelines?.logo?.variants?.find((x) => x.id === id);
    if (!v) return fail(`Unknown logo variant "${id}". Known: ${guidelines?.logo?.variants?.map((x) => x.id).join(", ") ?? "none"}`);
    return text(await read(v.file));
  },
);

// Tool: voice & tone — summary from brand.json, full doc on request.
server.registerTool(
  "get_voice",
  {
    title: "Get voice & tone",
    description: "Return the staywire verbal identity. Default is the summary; `full: true` returns the complete voice.md.",
    inputSchema: { full: z.boolean().optional().describe("Return the full voice.md instead of the summary") },
  },
  async ({ full }) => {
    const { voice } = await loadBrand();
    if (full && voice?.source) return text(await read(voice.source));
    return json(voice);
  },
);

// Tool: brand asset paths (logos, fonts, flow-lines).
server.registerTool(
  "get_assets",
  { title: "Get brand assets", description: "Return repo-relative paths for brand assets: logos (svg), Graphik fonts, flow-line stills and motion." },
  async () => json((await loadBrand()).assets),
);

const transport = new StdioServerTransport();
await server.connect(transport);
