import type { Meta, StoryObj } from "@storybook/react-vite";
import flat from "@staywirekit/tokens/flat";
import { Page, Section } from "./guide";

// All names + values read from the flat token export (playbook trap #3:
// never hardcode token names or px literals). Bars paint with SEMANTIC vars.

const tokens = flat as Record<string, string>;

const SPACING_ROLES = ["xs", "sm", "md", "lg", "xl", "xxl"];
const RHYTHM_ROLES: Array<[string, string]> = [
  ["gutter", "Side gutters — the container utility's inline padding."],
  ["section", "Between page sections — py-section. FLAGGED for Gate A retune."],
  ["section-lg", "Section rhythm from the lg breakpoint up. FLAGGED for Gate A retune."],
  ["container-max", "Content cap — the container utility's max-width."],
];
const RADIUS_ROLES = ["sm", "md", "lg", "xl", "pill"];

function SpacingRadius() {
  return (
    <Page>
      <Section
        label="Spacing"
        title="A six-step scale"
        intro="Named steps from xs to xxl. Use the tokens (gap-(--space-lg), p-(--space-xl)) rather than arbitrary values so rhythm stays consistent."
      >
        <div className="flex flex-col gap-(--space-md)">
          {SPACING_ROLES.map((name) => (
            <div key={name} className="flex items-center gap-(--space-md)">
              <code className="font-mono text-label text-muted-foreground" style={{ width: 110 }}>
                space-{name}
              </code>
              <div className="rounded-sm bg-primary" style={{ height: 16, width: `var(--space-${name})` }} />
              <code className="font-mono text-label text-muted-foreground">{tokens[`spacing-${name}`] ?? tokens[`space-${name}`] ?? ""}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section
        label="Page rhythm"
        title="Gutter, section, and the container cap"
        intro="Page-level layout has its own knobs: container reads the gutter token for side padding and container-max for its cap; every block's root uses py-section. Retune the page by editing these tokens — never per-block. Current values were chosen from the reference rhythm and are flagged for the morning review."
      >
        <div className="flex flex-col gap-(--space-md)">
          {RHYTHM_ROLES.map(([name, usage]) => (
            <div key={name} className="flex items-center gap-(--space-md)">
              <code className="font-mono text-label text-muted-foreground" style={{ width: 170 }}>
                space-{name}
              </code>
              <code className="font-mono text-label text-foreground" style={{ width: 70 }}>
                {tokens[`spacing-${name}`] ?? tokens[`space-${name}`] ?? ""}
              </code>
              <span className="text-label text-muted-foreground">{usage}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        label="Radius"
        title="Two working shapes"
        intro="8px on buttons and inputs, 12px on cards and code wells — md is load-bearing (--radius reads it). The pill is reserved for chips, status dots, and avatars; it is not the button shape."
      >
        <div className="flex flex-wrap gap-(--space-lg)">
          {RADIUS_ROLES.map((name) => (
            <div key={name} className="flex flex-col items-center gap-(--space-sm)">
              <div
                className="border border-border bg-secondary"
                style={{ width: 96, height: 96, borderRadius: `var(--radius-${name})` }}
              />
              <code className="font-mono text-label text-muted-foreground">radius-{name}</code>
              <code className="font-mono text-label text-muted-foreground">{tokens[`radius-${name}`] ?? ""}</code>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  );
}

const meta: Meta<typeof SpacingRadius> = {
  title: "Foundations/Spacing & radius",
  component: SpacingRadius,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Tokens: StoryObj<typeof SpacingRadius> = {};
