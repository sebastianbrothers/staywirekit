import React from "react";

// Shared presentational helpers for the staywire brand-guide pages. Editorial +
// restrained: serif display at weight 400, sentence case, hairline borders,
// the wire-dash label device ("—"), indigo used scarcely. Everything is built
// from the kit's own design-system utilities (text-*, space-*, color-*) — the
// guide dogfoods the tokens it documents.

export function Page({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto flex max-w-[1080px] flex-col gap-(--space-xxl)">{children}</div>;
}

export function Hero({ title, lead }: { title: string; lead: string }) {
  return (
    <header className="flex flex-col gap-(--space-lg) pt-(--space-lg)">
      <span className="text-label tracking-label text-muted-foreground">{"— brand system"}</span>
      <h1 className="max-w-[16ch] font-display font-normal text-display leading-display tracking-display">{title}</h1>
      <p className="max-w-[62ch] text-body text-muted-foreground">{lead}</p>
    </header>
  );
}

export function Section({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-(--space-lg)">
      <div className="flex flex-col gap-(--space-sm)">
        <span className="text-label tracking-label text-muted-foreground">{`— ${label.toLowerCase()}`}</span>
        <h2 className="font-display font-normal text-headline leading-headline tracking-headline">{title}</h2>
        {intro ? <p className="max-w-[62ch] text-body text-muted-foreground">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function GroupLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="text-title font-semibold tracking-title">{children}</h3>;
}

export function Grid({ children, min = 200 }: { children: React.ReactNode; min?: number }) {
  return (
    <div className="grid gap-(--space-md)" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))` }}>
      {children}
    </div>
  );
}

export function SwatchCard({
  name,
  varName,
  hex,
  usage,
}: {
  name: string;
  varName: string;
  hex: string;
  usage: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="h-28 w-full border-b border-border" style={{ background: `var(${varName})` }} />
      <div className="flex flex-col gap-(--space-xs) p-(--space-md)">
        <span className="text-body font-medium text-card-foreground">{name}</span>
        <CopyChip value={hex.toUpperCase()} />
        <CopyChip value={hexToRgbStr(hex)} />
        <CopyChip value={hexToCmykStr(hex)} />
        <span className="pt-(--space-xs) text-label text-muted-foreground">{usage}</span>
      </div>
    </div>
  );
}

export function Ramp({ name }: { name: string }) {
  const steps = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <div className="flex flex-col gap-(--space-xs)">
      <code className="font-mono text-label text-muted-foreground">{name}</code>
      <div className="flex overflow-hidden rounded-md border border-border">
        {steps.map((s) => (
          <div
            key={s}
            title={`--color-ramp-${name}-${s}`}
            className="flex-1"
            style={{ height: 40, background: `var(--color-ramp-${name}-${s})` }}
          />
        ))}
      </div>
    </div>
  );
}

// KB asset path → the /brand static mount (see .storybook/main.ts staticDirs).
export const brandUrl = (repoPath: string) => repoPath.replace("brand/reference/brand/assets", "/brand");

// Repo-relative path → GitHub tree URL (for directory-level "browse the kit" links).
export const repoUrl = (repoPath: string) => `https://github.com/sebastianbrothers/staywirekit/tree/main/${repoPath}`;

export const hexToRgbStr = (hex: string) => {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return `rgb(${r}, ${g}, ${b})`;
};

export const hexToCmykStr = (hex: string) => {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const k = 1 - Math.max(r, g, b);
  if (k === 1) return "cmyk(0, 0, 0, 100)";
  const c = [(1 - r - k) / (1 - k), (1 - g - k) / (1 - k), (1 - b - k) / (1 - k)].map((v) => Math.round(v * 100));
  return `cmyk(${c[0]}, ${c[1]}, ${c[2]}, ${Math.round(k * 100)})`;
};

export function CopyChip({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-md font-mono text-label text-muted-foreground transition-colors hover:text-foreground"
      title={`Copy ${value}`}
    >
      {label ?? value}
      <span aria-hidden className="text-[0.85em] opacity-60">{copied ? "✓" : "⧉"}</span>
    </button>
  );
}

export function DownloadLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      download
      className="inline-flex w-fit items-center gap-2 rounded-md border border-border px-(--space-md) py-(--space-xs) text-label font-medium text-foreground no-underline transition-colors hover:bg-secondary"
    >
      {children}
      <span aria-hidden>↓</span>
    </a>
  );
}

/** Logo tile on SEMANTIC surfaces (trap #4: never identity vars for tile
    backgrounds). Falls back to a rendered note if the asset fails to load. */
export function LogoTile({ label, src, bg, file }: { label: string; src: string; bg: "dark" | "light"; file: string }) {
  const [failed, setFailed] = React.useState(false);
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        className="flex items-center justify-center p-(--space-xl)"
        style={{ background: bg === "dark" ? "var(--color-night)" : "var(--color-white)", minHeight: 180 }}
      >
        {failed ? (
          <span className="text-label text-muted-foreground">asset missing — see Logo page rules</span>
        ) : (
          <img src={src} alt={label} style={{ maxWidth: "70%", maxHeight: 96 }} onError={() => setFailed(true)} />
        )}
      </div>
      <div className="flex items-center justify-between gap-(--space-sm) border-t border-border bg-card p-(--space-md)">
        <span className="text-label text-card-foreground">{label}</span>
        <a href={src} download={file} className="text-label text-muted-foreground no-underline hover:text-foreground" title={`Download ${file}`}>
          ↓
        </a>
      </div>
    </div>
  );
}

const WEIGHT_NAMES: Record<number, string> = {
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semibold",
  700: "Bold",
};

/** Prints the ACTUAL numeric weight (trap #4 — never assume a two-weight world). */
export const weightBadge = (weight: number) => `${WEIGHT_NAMES[weight] ?? "Weight"} ${weight}`;

export function SpecimenRow({
  token,
  weight,
  sample,
  face = "sans",
  label,
}: {
  token: string;
  weight: number;
  sample: string;
  face?: "display" | "sans" | "mono";
  label?: string;
}) {
  const faceClass = face === "display" ? "font-display" : face === "mono" ? "font-mono" : "font-sans";
  return (
    <div className="grid items-baseline gap-(--space-md) border-b border-border py-(--space-lg)" style={{ gridTemplateColumns: "180px 1fr" }}>
      <div className="flex flex-col gap-(--space-xs)">
        {label ? <span className="text-label font-medium text-foreground">{label}</span> : null}
        <code className="font-mono text-label text-foreground">text-{token}</code>
        <code className="font-mono text-label text-muted-foreground">
          {weightBadge(weight)} · leading-{token}
        </code>
      </div>
      <div
        className={faceClass}
        style={{
          fontSize: `var(--text-${token})`,
          lineHeight: `var(--leading-${token})` as string,
          letterSpacing: `var(--tracking-${token}, var(--tracking-normal))`,
          fontWeight: weight,
        }}
      >
        {sample}
      </div>
    </div>
  );
}
