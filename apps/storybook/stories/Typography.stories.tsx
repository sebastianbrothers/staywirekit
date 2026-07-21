import type { Meta, StoryObj } from "@storybook/react-vite";
import guidelines from "@staywirekit/tokens/guidelines.json";
import { Page, Hero, Section, Grid, SpecimenRow } from "./guide";

function Typography() {
  return (
    <Page>
      <Hero
        title="Typography"
        lead="Three strict lanes: Fraunces for headlines, Inter for everything else, JetBrains Mono for code. The family change carries hierarchy — body weight never bumps for emphasis. Display lines pack at leading 1.0; never loosen them."
      />

      <Section
        label="Faces"
        title="Three faces, three jobs"
        intro="All open-source, shipped with the kit via @fontsource — consumers get the real faces from the same one-line styles import. No font files to host."
      >
        <Grid min={280}>
          {guidelines.typography.faces.map((f) => (
            <div key={f.family} className="flex flex-col gap-(--space-xs) rounded-lg border border-border bg-card p-(--space-lg)">
              <span
                className="text-title text-card-foreground"
                style={{ fontFamily: `'${f.family}', var(--font-sans)`, fontWeight: f.weights[0] }}
              >
                {f.family}
              </span>
              <span className="text-label text-muted-foreground">{f.role}</span>
              <span className="font-mono text-label text-muted-foreground">weights {f.weights.join(" · ")}</span>
              <span className="text-label text-muted-foreground">{f.source}</span>
            </div>
          ))}
        </Grid>
      </Section>

      <Section
        label="Scale"
        title="Five roles, read from the tokens"
        intro="The kit contract: display, headline, title, body, label — plus body-lg, caption, and code as additive extras. Each specimen renders live from --text/--leading/--tracking variables; the sample copy is the brand speaking."
      >
        <div className="flex flex-col">
          {guidelines.typography.styles.map((s) => (
            <SpecimenRow
              key={s.id}
              token={s.token}
              weight={s.weight}
              face={s.face as "display" | "sans" | "mono"}
              sample={s.sample}
              label={s.label}
            />
          ))}
        </div>
      </Section>
    </Page>
  );
}

const meta: Meta<typeof Typography> = {
  title: "Foundations/Typography",
  component: Typography,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Scale: StoryObj<typeof Typography> = {};
