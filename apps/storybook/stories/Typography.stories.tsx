import type { Meta, StoryObj } from "@storybook/react-vite";
import guidelines from "@sendwirekit/tokens/guidelines.json";
import { Page, Hero, Section, Grid, SpecimenRow, DownloadLink, brandUrl, repoUrl } from "./guide";

function Typography() {
  return (
    <Page>
      <Hero
        title="Typography"
        lead="One neo-grotesque family doing all the work — authority through weight and scale, not pairing. Sentence case everywhere, tight tracking on display lockups."
      />
      <DownloadLink href={repoUrl(guidelines.typography.download)}>Browse the font files</DownloadLink>

      <Section label="Faces" title="Graphik, with a sanctioned fallback" intro="">
        <Grid min={280}>
          {guidelines.typography.faces.map((f) => (
            <div key={f.family} className="flex flex-col gap-(--space-xs) rounded-lg border border-border bg-card p-(--space-lg)">
              <span className="font-display text-title tracking-title text-card-foreground" style={{ fontFamily: `'${f.family}', var(--font-sans)` }}>
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
        title="Five styles, read from the tokens"
        intro="Each specimen renders live from --text/--leading/--tracking variables; the sample copy is the brand speaking."
      >
        <div className="flex flex-col">
          {guidelines.typography.styles.map((s) => (
            <SpecimenRow
              key={s.id}
              token={s.token}
              weight={s.weight}
              display={s.face === "display"}
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
