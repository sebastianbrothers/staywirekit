// Build staywire design tokens (tokens.json, W3C DTCG) into:
//   dist/globals.css        — standalone Tailwind v4 stylesheet (@import "tailwindcss" + @theme)
//   dist/preset.css         — the @theme {} block only, for composing into another globals
//   dist/tokens.flat.json   — resolved flat token map, for the AI handoff
//
// Programmatic API (not the CLI) because we register a custom @theme format.
import StyleDictionary from "style-dictionary";

const HEADER = "/* AUTO-GENERATED from tokens.json by Style Dictionary. DO NOT EDIT. */\n";

const themeBlock = (dictionary) => {
  const lines = dictionary.allTokens.map((t) => {
    // Brand spacing must NOT live in Tailwind's reserved `--spacing-*` namespace:
    // that namespace feeds max-w/w/h/etc., so named keys (sm/md/lg/xl) shadow the
    // container t-shirt sizes and collapse Dialog/Sheet/Empty/etc. Emit it as
    // `--space-*` instead; the guide consumes it via `gap-(--space-lg)` shorthand.
    const name = t.name.replace(/^spacing-/, "space-");
    // DTCG mode resolves onto $value; non-DTCG onto value.
    const raw = t.$value ?? t.value;
    // Font-family arrays: quote multi-word names so the CSS is valid.
    const v = Array.isArray(raw)
      ? raw.map((x) => (/\s/.test(String(x)) ? `'${x}'` : x)).join(", ")
      : raw;
    return `  --${name}: ${v};`;
  });
  // `static` forces Tailwind v4 to emit EVERY token variable, even unreferenced
  // ones. Without it, unused tokens (e.g. most functional-ramp steps) get
  // tree-shaken out of the output and any var(--color-ramp-…) resolves to nothing.
  return `@theme static {\n${lines.join("\n")}\n}\n`;
};

StyleDictionary.registerFormat({
  name: "css/kit-theme",
  format: ({ dictionary, options }) => {
    const block = themeBlock(dictionary);
    return options?.standalone
      ? `${HEADER}@import "tailwindcss";\n\n${block}`
      : `${HEADER}${block}`;
  },
});

const sd = new StyleDictionary({
  source: ["tokens.json"],
  // DTCG ($value/$type) is auto-detected by Style Dictionary v4.
  platforms: {
    css: {
      // Keep dimensions as authored (px) — do NOT use size/rem. Just kebab names + css colors.
      transforms: ["name/kebab", "color/css"],
      buildPath: "dist/",
      files: [
        { destination: "globals.css", format: "css/kit-theme", options: { standalone: true } },
        { destination: "preset.css", format: "css/kit-theme", options: { standalone: false } },
      ],
    },
    json: {
      transforms: ["name/kebab", "color/css"],
      buildPath: "dist/",
      files: [{ destination: "tokens.flat.json", format: "json/flat" }],
    },
  },
});

await sd.buildAllPlatforms();
console.log("✓ tokens built → dist/{globals.css, preset.css, tokens.flat.json}");
