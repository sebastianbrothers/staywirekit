"use client";
// staywire signature dev-tool surface (COMPONENTS-MAP #14/#15): code well with
// traffic lights + framework tab strip. Light mode sits on deep-paper (depth
// via temperature, not shadow — reference elevation rule); dark on night-deep.
import * as React from "react";

import { cn } from "../../lib/utils";

export interface CodeTab {
  label: string;
  code: string;
}

export interface CodeWindowProps extends React.ComponentProps<"div"> {
  tabs?: CodeTab[];
  /** Uncontrolled initial tab index. */
  defaultTab?: number;
  /** Hide the traffic-light chrome row. */
  chromeless?: boolean;
}

export function CodeWindow({
  tabs = [
    {
      label: "curl",
      code: `curl https://api.staywire.dev/v1/quotes \\
  -H "Authorization: Bearer sk_test_..." \\
  -d room_id=rm_12 -d check_in=2026-08-10 \\
  -d check_out=2026-08-12 -d guests=2`,
    },
  ],
  defaultTab = 0,
  chromeless = false,
  className,
  ...props
}: CodeWindowProps) {
  const [active, setActive] = React.useState(defaultTab);
  const tab = tabs[Math.min(active, tabs.length - 1)];

  return (
    <div
      data-slot="code-window"
      className={cn(
        "overflow-hidden rounded-lg border bg-[var(--color-deep-paper)] dark:bg-[var(--color-night-deep)]",
        className
      )}
      {...props}
    >
      {!chromeless && (
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-2.5 rounded-full bg-[var(--color-ramp-red-400)]" />
          <span className="size-2.5 rounded-full bg-[var(--color-ramp-yellow-400)]" />
          <span className="size-2.5 rounded-full bg-[var(--color-ramp-green-400)]" />
          {tabs.length > 1 && (
            <div className="ml-4 flex gap-1 overflow-x-auto">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-sm px-3 py-1 font-mono text-code leading-code whitespace-nowrap transition-colors",
                    i === active
                      ? "bg-card text-foreground shadow-none"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <pre className="overflow-x-auto p-6 font-mono text-code leading-code text-foreground/85">
        <code>{tab?.code}</code>
      </pre>
    </div>
  );
}
