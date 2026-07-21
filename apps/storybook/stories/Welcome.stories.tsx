import type { Meta, StoryObj } from "@storybook/react-vite";
import guidelines from "@staywirekit/tokens/guidelines.json";
import { Page, Section, brandUrl, repoUrl } from "./guide";

const heroStill = brandUrl(guidelines.art.stills[1]);

// Asset sets with counts, straight from guidelines.json.
const assetSets = [
  { label: "Logo kit", count: `${guidelines.logo.variants.length} lockups`, path: guidelines.logo.download },
  { label: "Font files", count: `Graphik · ${guidelines.typography.faces[0].weights.length} weights`, path: guidelines.typography.download },
  { label: "Flow lines — stills", count: `${guidelines.art.stills.length} images`, path: "brand/reference/brand/assets/flow-lines/still" },
  { label: "Flow lines — motion", count: `${guidelines.art.motion.length} loops`, path: "brand/reference/brand/assets/flow-lines/motion" },
];

function Overview() {
  return (
    <Page>
      {/* Hero — flow-lines art on the deep-purple canvas. Kept spare on purpose:
          logo, one line, the sign-off. Assets live in their own section below. */}
      <header
        className="relative mt-(--space-lg) flex min-h-[420px] flex-col justify-end overflow-hidden rounded-lg p-(--space-xl)"
        style={{ background: `var(--color-deep-purple) url(${heroStill}) center / cover no-repeat` }}
      >
        {/* Legibility scrim — the art fades into the canvas colour under the text. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-deep-purple) 0%, color-mix(in srgb, var(--color-deep-purple) 72%, transparent) 38%, transparent 68%)",
          }}
        />
        <div className="relative flex flex-col gap-(--space-md)">
          <img src={brandUrl("brand/reference/brand/assets/logo/logo-h-white.svg")} alt="staywire" style={{ width: 132 }} />
          <h1 className="max-w-[14ch] font-display text-display leading-display tracking-display text-white">
            The staywire brand kit.
          </h1>
          <p className="max-w-[48ch] text-body text-white/85">
            Canada&apos;s co-operation network, productized. Open by design. Built around you.
          </p>
        </div>
      </header>

      <Section
        label="Assets"
        title="Take what you need"
        intro="Every asset in the kit is versioned in the repo and documented on its Foundations page — logos on Logo, faces on Typography, art on Assets."
      >
        <div className="grid gap-(--space-md)" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
          {assetSets.map((a) => (
            <a
              key={a.label}
              href={repoUrl(a.path)}
              className="group flex flex-col gap-(--space-xs) rounded-lg border border-border bg-card p-(--space-lg) no-underline transition-colors hover:border-primary"
            >
              <span className="text-title font-display tracking-title text-card-foreground">{a.label}</span>
              <span className="font-mono text-label text-muted-foreground">{a.count}</span>
              <span className="pt-(--space-sm) text-label font-medium text-primary">Browse the files ›</span>
            </a>
          ))}
        </div>
        {[
          ["figma", "Source of record in Figma:"],
          ["web", "Live on the web:"],
        ].map(([type, lead]) => {
          const links = guidelines.resources.filter((r) => r.type === type);
          return (
            <p key={type} className="text-label text-muted-foreground">
              {lead}{" "}
              {links.map((r, i) => (
                <span key={r.label}>
                  <a href={r.url} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                    {r.label.toLowerCase()}
                  </a>
                  {i < links.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          );
        })}
      </Section>

      <Section
        label="What's in the kit"
        title="One kit, three consumers"
        intro="People read these pages; sites import the packages; agents consume brand.json or the lab_brand MCP server. Edit the tokens — everything downstream regenerates."
      >
        <div className="grid gap-(--space-md)" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
          {[
            ["› Foundations", "Logo, colour, typography, spacing, and the flow-lines art — the rules of the brand, read straight from @staywirekit/tokens."],
            ["› Blocks", "Full page sections — heroes, features, pricing, FAQs — written in the staywire voice and composable into sites."],
            ["› Components", "The complete shadcn/ui suite themed to staywire tokens, one story per component."],
          ].map(([t, d]) => (
            <div key={t} className="flex flex-col gap-(--space-sm) rounded-lg border border-border bg-card p-(--space-lg)">
              <span className="text-title font-display tracking-title text-card-foreground">{t}</span>
              <span className="text-body text-muted-foreground">{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Brand line" title="Canada's co-operation network" intro="Open by design. Built around you.">
        <div />
      </Section>
    </Page>
  );
}

const meta: Meta<typeof Overview> = {
  title: "Foundations/Overview",
  component: Overview,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Overview_: StoryObj<typeof Overview> = { name: "Overview" };
