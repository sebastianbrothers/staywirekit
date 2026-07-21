import type { Meta, StoryObj } from "@storybook/react-vite";
import guidelines from "@staywirekit/tokens/guidelines.json";
import { Page, Hero, Section, Grid, LogoTile, DownloadLink, brandUrl, repoUrl } from "./guide";

// The wordmark is typographic: lowercase "staywire" in Fraunces with the wire
// mark — a line carrying one stay (a roofline node) that terminates in an
// indigo dot. Original to staywire; the SVGs in brand/.../logo mirror this.
// The inline render below is the canonical presentation (real Fraunces);
// LogoTile falls back to a rendered note if an SVG is missing.

function InlineWordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-baseline gap-3">
      <svg viewBox="0 0 48 48" width={30} height={30} aria-hidden className="self-center">
        <path
          d="M4 31 H15 L24 15 L33 31 H39"
          stroke={onDark ? "var(--color-paper-on-night)" : "var(--color-ink)"}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx={44} cy={31} r={3.5} fill="var(--color-indigo)" />
      </svg>
      <span
        className="font-display font-normal"
        style={{ fontSize: 40, letterSpacing: "-0.01em", color: onDark ? "var(--color-paper-on-night)" : "var(--color-ink)" }}
      >
        staywire
      </span>
    </span>
  );
}

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
        lead="The mark is a wire carrying one stay — a roofline node on the signal path, terminated by the indigo dot. The wordmark is lowercase Fraunces beside it. Nothing else is sanctioned."
      />
      <DownloadLink href={repoUrl(guidelines.logo.download)}>Browse the logo kit</DownloadLink>

      <Section label="Wordmark" title="The canonical lockup" intro="Set in real Fraunces below — this inline render is the source of visual truth; the SVGs mirror it for export.">
        <div className="flex flex-col gap-(--space-md)">
          <div className="flex items-center rounded-lg border border-border bg-card p-(--space-xl)" style={{ minHeight: 160 }}>
            <InlineWordmark />
          </div>
          <div className="flex items-center rounded-lg border border-border p-(--space-xl)" style={{ minHeight: 160, background: "var(--color-night)" }}>
            <InlineWordmark onDark />
          </div>
        </div>
      </Section>

      <Section label="Lockups" title="Horizontal" intro="The default. Use it wherever the logo sits in a bar, header, or sign-off.">
        {tiles(horizontal)}
      </Section>
      <Section label="Lockups" title="Mark only" intro="For square and centred moments — favicons, avatars, stamps.">
        {tiles(vertical)}
      </Section>
      <Section
        label="Rules"
        title="Use it plainly"
        intro="Clear space: the height of the roofline node on all sides. The dot is always indigo — never recolour it, never outline the mark, never set the wordmark in a sentence. On photography (rare), prefer the mark alone."
      >
        <></>
      </Section>
    </Page>
  ),
};
