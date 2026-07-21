import type { Meta, StoryObj } from "@storybook/react-vite";
import guidelines from "@staywirekit/tokens/guidelines.json";
import { Page, Hero, Section, DownloadLink, repoUrl } from "./guide";

// staywire ships NO art yet — this page renders honest empty states per asset
// class (playbook trap #3: an empty class is an explained state, never a
// blank section). Fonts intentionally have no downloadable files: they ship
// as @fontsource packages inside the kit.

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-(--space-sm) rounded-lg border border-dashed border-border bg-muted p-(--space-xl)">
      <span className="text-title font-semibold tracking-title text-foreground">{title}</span>
      <p className="max-w-[62ch] text-body text-muted-foreground">{body}</p>
    </div>
  );
}

function Assets() {
  return (
    <Page>
      <Hero
        title="Assets"
        lead="What ships today, what's specified but not yet drawn, and where each thing lives. Every surface must degrade gracefully to pure typography — that's a brand rule, not a gap."
      />

      <Section label="Logo" title="Wordmark + mark" intro="Four SVGs, versioned in the repo. The Logo page shows the canonical inline render and the rules.">
        <DownloadLink href={repoUrl(guidelines.logo.download)}>Browse the logo kit</DownloadLink>
      </Section>

      <Section
        label="Fonts"
        title="No files to download — by design"
        intro="Fraunces, Inter, and JetBrains Mono ship as @fontsource packages inside @staywirekit/ui. One styles import loads them in any consumer; there is nothing to host or license."
      >
        <div className="flex flex-wrap gap-(--space-sm)">
          {guidelines.typography.faces.map((f) => (
            <span key={f.family} className="rounded-md border border-border bg-card px-(--space-md) py-(--space-xs) text-label text-card-foreground">
              {f.family} · {f.weights.join("/")}
            </span>
          ))}
        </div>
      </Section>

      <Section label="Art" title={guidelines.art.name} intro="">
        <EmptyState
          title="Not yet drawn — blocked on a brand drop"
          body={guidelines.art.description}
        />
      </Section>
    </Page>
  );
}

const meta: Meta<typeof Assets> = {
  title: "Foundations/Assets",
  component: Assets,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const AssetIndex: StoryObj<typeof Assets> = { name: "Assets" };
