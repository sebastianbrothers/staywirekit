// staywire status device (COMPONENTS-MAP #10): ramp dot + label in a hairline
// pill. Real product use: booking-engine uptime, delivery states, live badges.
import * as React from "react";

import { cn } from "../../lib/utils";

export interface StatusPillProps extends React.ComponentProps<"span"> {
  /** Semantic state — maps to the functional ramps. */
  status?: "operational" | "degraded" | "down" | "neutral";
  /** Pulse the dot (live systems). */
  live?: boolean;
}

const DOT: Record<NonNullable<StatusPillProps["status"]>, string> = {
  operational: "bg-[var(--color-ramp-green-500)]",
  degraded: "bg-[var(--color-ramp-yellow-400)]",
  down: "bg-[var(--color-ramp-red-500)]",
  neutral: "bg-muted-foreground",
};

export function StatusPill({
  status = "operational",
  live = false,
  className,
  children = "All systems operational",
  ...props
}: StatusPillProps) {
  return (
    <span
      data-slot="status-pill"
      className={cn(
        "inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border bg-card px-3 py-1 text-label leading-label tracking-label text-muted-foreground",
        className
      )}
      {...props}
    >
      <span className="relative flex size-2">
        {live && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
              DOT[status]
            )}
          />
        )}
        <span className={cn("relative inline-flex size-2 rounded-full", DOT[status])} />
      </span>
      {children}
    </span>
  );
}
