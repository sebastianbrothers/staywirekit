import type { Meta, StoryObj } from "@storybook/react-vite";
import guidelines from "@staywirekit/tokens/guidelines.json";
import flat from "@staywirekit/tokens/flat";
import { Page, Section, GroupLabel, Grid, SwatchCard, Ramp } from "./guide";

const tokens = flat as Record<string, string>;

function Colors() {
  return (
    <Page>
      <Section
        label="Colour"
        title="Ink on paper, one signature"
        intro="A light-first system: cool paper canvas, near-black ink doing the loud work, hairline mist carrying depth, and wire indigo as the single signature — links, focus, selected, nothing more. Every neutral leans cool toward the ink cast; there are no warm grays. Click any value to copy it."
      >
        {guidelines.colors.groups.map((g) => (
          <div key={g.id} className="flex flex-col gap-(--space-lg)">
            <GroupLabel>{g.label}</GroupLabel>
            <Grid>
              {g.items.map((s) => (
                <SwatchCard
                  key={s.token}
                  name={s.name}
                  varName={`--${s.token}`}
                  hex={tokens[s.token] ?? "#000000"}
                  usage={s.usage}
                />
              ))}
            </Grid>
          </div>
        ))}
      </Section>

      <Section
        label="Functional ramps"
        title="The working layer"
        intro="Six hues, nine steps each, for product-UI mechanics only — states, feedback, charts. Indigo 600 is the brand anchor. A ramp step is a functional token, never a decoration."
      >
        <div className="flex flex-col gap-(--space-md)">
          {guidelines.colors.ramps.map((r) => (
            <Ramp key={r} name={r} />
          ))}
        </div>
      </Section>
    </Page>
  );
}

const meta: Meta<typeof Colors> = {
  title: "Foundations/Colour",
  component: Colors,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Palette: StoryObj<typeof Colors> = {};
