import type { Meta, StoryObj } from "@storybook/react-vite";
import guidelines from "@staywirekit/tokens/guidelines.json";
import { Page, Section, repoUrl } from "./guide";

// staywire Overview — deliberately typographic. The brand ships no art yet
// (guidelines.art.stills is EMPTY — never index into it at module scope), so
// the hero is set type on paper with one hairline and one indigo dot: the
// brand demonstrating its own rules. Originality note (inspiration mode):
// this page is staywire's own language, not the reference site's layout.

const assetSets = guidelines.downloads.map((d) => ({
  label: d.label,
  path: d.path,
}));

function WireDot() {
  return (
    <span
      aria-hidden
      className="inline-block align-baseline"
      style={{ width: "0.32em", height: "0.32em", borderRadius: 999, background: "var(--color-indigo)" }}
    />
  );
}

function Overview() {
  return (
    <Page>
      {/* Hero — pure type on the paper canvas. One hairline, one indigo dot. */}
      <header className="mt-(--space-lg) flex flex-col gap-(--space-lg) border-b border-border pb-(--space-xxl)">
        <span className="text-label tracking-label text-muted-foreground">— the staywire brand kit</span>
        <h1 className="max-w-[16ch] font-display font-normal text-display leading-display tracking-display">
          The booking wire
          <WireDot />
        </h1>
        <p className="max-w-[52ch] text-body-lg text-muted-foreground">
          staywire is the engine between a property&apos;s website and a confirmed guest. This kit is
          its design system: tokens, components, blocks, and the rules that keep every surface on
          brand.
        </p>
      </header>

      <Section
        label="What's in the kit"
        title="One kit, three consumers"
        intro="People read these pages; sites import the packages; agents consume brand.json or the lab_brand MCP server. Edit the tokens — everything downstream regenerates."
      >
        <div className="grid gap-(--space-md)" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
          {[
            ["Foundations", "Colour, typography, spacing, and the logo — the rules of the brand, read straight from @staywirekit/tokens."],
            ["Components", "The complete shadcn/ui suite themed to staywire tokens — ink CTAs, hairline borders, indigo focus. One story per component."],
            ["Blocks", "Full page sections — heroes, features, pricing, FAQs — written in the staywire voice and composable into sites."],
          ].map(([t, d]) => (
            <div key={t} className="flex flex-col gap-(--space-sm) rounded-lg border border-border bg-card p-(--space-lg)">
              <span className="text-title font-semibold tracking-title text-card-foreground">{t}</span>
              <span className="text-body text-muted-foreground">{d}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        label="The rules in one breath"
        title="Ink is the loudest pixel"
        intro="Light-first: cool paper canvas, near-black ink for text and primary actions, hairline borders instead of shadows, serif display at leading 1.0, and wire indigo kept scarce — links, focus, selected. Dark mode inverts the concept: paper becomes the brightest pixel."
      >
        <div />
      </Section>

      <Section
        label="Assets"
        title="Take what you need"
        intro="Everything versioned in the repo and documented on its Foundations page — the wordmark on Logo, faces on Typography. Art ships later; every surface degrades to type."
      >
        <div className="grid gap-(--space-md)" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
          {assetSets.map((a) => (
            <a
              key={a.label}
              href={repoUrl(a.path)}
              className="group flex flex-col gap-(--space-xs) rounded-lg border border-border bg-card p-(--space-lg) no-underline transition-colors hover:border-ring"
            >
              <span className="text-title font-semibold tracking-title text-card-foreground">{a.label}</span>
              <span className="pt-(--space-sm) text-label font-medium" style={{ color: "var(--color-indigo)" }}>
                Browse the files →
              </span>
            </a>
          ))}
        </div>
        {(() => {
          const links = guidelines.resources.filter((r) => r.type === "web");
          if (links.length === 0) return null;
          return (
            <p className="text-label text-muted-foreground">
              Live on the web:{" "}
              {links.map((r, i) => (
                <span key={r.label}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 hover:underline"
                    style={{ color: "var(--color-indigo)" }}
                  >
                    {r.label.toLowerCase()}
                  </a>
                  {i < links.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          );
        })()}
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
