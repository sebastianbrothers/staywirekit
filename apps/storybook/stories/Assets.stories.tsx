import type { Meta, StoryObj } from "@storybook/react-vite";
import guidelines from "@staywirekit/tokens/guidelines.json";
import { Page, Hero, Section, Grid, DownloadLink, brandUrl, repoUrl } from "./guide";

function AssetTile({ path, video = false }: { path: string; video?: boolean }) {
  const url = brandUrl(path);
  const file = path.split("/").pop()!;
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      {video ? (
        <video src={url} muted loop autoPlay playsInline className="block aspect-video w-full object-cover" />
      ) : (
        <img src={url} alt={file} className="block aspect-video w-full object-cover" />
      )}
      <div className="flex items-center justify-between gap-(--space-sm) border-t border-border bg-card p-(--space-md)">
        <span className="truncate font-mono text-label text-muted-foreground">{file}</span>
        <a href={url} download={file} className="text-label text-muted-foreground no-underline hover:text-foreground" title={`Download ${file}`}>
          ↓
        </a>
      </div>
    </div>
  );
}

function Assets() {
  return (
    <Page>
      <Hero
        title="Flow lines"
        lead={guidelines.art.description}
      />
      <div className="flex gap-(--space-sm)">
        <DownloadLink href={repoUrl("brand/reference/brand/assets/flow-lines/still")}>Browse stills</DownloadLink>
        <DownloadLink href={repoUrl("brand/reference/brand/assets/flow-lines/motion")}>Browse motion</DownloadLink>
      </div>
      <Section label="Art" title="Stills" intro="Backgrounds, print, decks. Crop generously; the strands should exit the frame.">
        <Grid min={300}>
          {guidelines.art.stills.map((p) => (
            <AssetTile key={p} path={p} />
          ))}
        </Grid>
      </Section>
      <Section label="Art" title="Motion" intro="Hero moments only — one per page, never looping in a corner.">
        <Grid min={300}>
          {guidelines.art.motion.map((p) => (
            <AssetTile key={p} path={p} video />
          ))}
        </Grid>
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
export const FlowLines: StoryObj<typeof Assets> = { name: "Flow lines" };
