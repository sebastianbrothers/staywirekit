import type { Meta, StoryObj } from "@storybook/react-vite";
import { Page, Section } from "./guide";

const SPACING = [
  ["xs", "4px"],
  ["sm", "8px"],
  ["md", "16px"],
  ["lg", "24px"],
  ["xl", "40px"],
  ["xxl", "64px"],
];
const RHYTHM = [
  ["gutter", "32px", "Side gutters — the container utility's inline padding."],
  ["section", "64px", "Between page sections on mobile — py-section."],
  ["section-lg", "160px", "Between page sections from the lg breakpoint up."],
];
const RADIUS = [
  ["sm", "8px"],
  ["md", "12px"],
  ["lg", "20px"],
  ["pill", "999px"],
];

function SpacingRadius() {
  return (
    <Page>
      <Section
        label="Spacing"
        title="A six-step scale"
        intro="Named steps from xs to xxl. Use the tokens (gap-(--space-lg), p-(--space-xl)) rather than arbitrary values so rhythm stays consistent."
      >
        <div className="flex flex-col gap-(--space-md)">
          {SPACING.map(([name, px]) => (
            <div key={name} className="flex items-center gap-(--space-md)">
              <code className="font-mono text-label text-muted-foreground" style={{ width: 110 }}>
                spacing-{name}
              </code>
              <div className="rounded-sm" style={{ height: 16, width: `var(--space-${name})`, background: "var(--color-primary-purple)" }} />
              <code className="font-mono text-label text-muted-foreground">{px}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section
        label="Page rhythm"
        title="Gutter and section spacing"
        intro="Page-level layout has its own knobs: container reads the gutter token for side padding, and every block's root uses py-section for vertical rhythm. Retune the page by editing these three tokens — never per-block."
      >
        <div className="flex flex-col gap-(--space-md)">
          {RHYTHM.map(([name, px, usage]) => (
            <div key={name} className="flex items-center gap-(--space-md)">
              <code className="font-mono text-label text-muted-foreground" style={{ width: 160 }}>
                spacing-{name}
              </code>
              <div className="rounded-sm" style={{ height: 16, width: `var(--space-${name})`, background: "var(--color-primary-purple)" }} />
              <code className="font-mono text-label text-muted-foreground">{px}</code>
              <span className="text-label text-muted-foreground">{usage}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        label="Radius"
        title="Pill is the house shape"
        intro="Cards use lg (20px); the pill (999px) is the button shape. Small and medium handle inputs and chips."
      >
        <div className="flex flex-wrap gap-(--space-lg)">
          {RADIUS.map(([name, px]) => (
            <div key={name} className="flex flex-col items-center gap-(--space-sm)">
              <div
                className="border border-border"
                style={{ width: 96, height: 96, background: "var(--color-light-purple)", borderRadius: `var(--radius-${name})` }}
              />
              <code className="font-mono text-label text-muted-foreground">radius-{name}</code>
              <code className="font-mono text-label text-muted-foreground">{px}</code>
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
