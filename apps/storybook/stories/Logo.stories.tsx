import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import guidelines from "@sendwirekit/tokens/guidelines.json";
import { Page, Hero, Section, GroupLabel, Grid, LogoTile, DownloadLink, brandUrl, repoUrl } from "./guide";

const meta: Meta = {
  title: "Foundations/Logo",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Variant = (typeof guidelines.logo.variants)[number];
const horizontal = guidelines.logo.variants.filter((v) => v.id.startsWith("h-"));
const vertical = guidelines.logo.variants.filter((v) => v.id.startsWith("v-"));

const tiles = (variants: Variant[]) => (
  <Grid min={300}>
    {variants.map((v) => (
      <LogoTile
        key={v.id}
        label={v.label}
        src={brandUrl(v.file)}
        bg={v.bg as "dark" | "light"}
        file={v.file.split("/").pop()!}
      />
    ))}
  </Grid>
);

export const Logo: StoryObj = {
  render: () => (
    <Page>
      <Hero
        title="Logo"
        lead="The asterisk mark is fibre strands meeting at a junction — connection, drawn as a star. Colour-on-dark is the primary lockup; every variant below is sanctioned, nothing else is."
      />
      <DownloadLink href={repoUrl(guidelines.logo.download)}>Browse the logo kit</DownloadLink>
      <Section label="Lockups" title="Horizontal" intro="The default. Use it wherever the logo sits in a bar, header, or sign-off.">
        {tiles(horizontal)}
      </Section>
      <Section label="Lockups" title="Vertical" intro="For square and centred moments — app icons, avatars, stamps.">
        {tiles(vertical)}
      </Section>
      <Section
        label="Rules"
        title="Use it plainly"
        intro="Clear space: the height of the asterisk on all sides. Never recolour outside the sanctioned variants, never outline, never set it in a sentence."
      >
        <></>
      </Section>
    </Page>
  ),
};
