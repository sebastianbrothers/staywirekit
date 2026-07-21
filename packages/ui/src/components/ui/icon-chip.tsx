"use client";
// staywire icon chip (COMPONENTS-MAP #8): selectable rounded icon well with a
// caption beneath — the SDK/integration grid device. Selection is optional;
// static chips render without button semantics.
import * as React from "react";

import { cn } from "../../lib/utils";

export interface IconChipProps extends React.ComponentProps<"button"> {
  icon?: React.ReactNode;
  label?: string;
  selected?: boolean;
  /** Render as a non-interactive tile. */
  static?: boolean;
}

export function IconChip({
  icon,
  label = "Node.js",
  selected = false,
  static: isStatic = false,
  className,
  ...props
}: IconChipProps) {
  const rootProps = {
    "data-slot": "icon-chip",
    "data-selected": selected || undefined,
    className: cn("group flex w-16 flex-col items-center gap-2 bg-transparent", className),
  };
  const Inner = (
    <>
      <span
        className={cn(
          "flex size-14 items-center justify-center rounded-lg border bg-card text-foreground transition-colors",
          selected
            ? "border-ring ring-2 ring-ring/30"
            : !isStatic && "group-hover:border-input"
        )}
      >
        {icon ?? <span className="font-mono text-code">{label.slice(0, 2)}</span>}
      </span>
      <span
        className={cn(
          "text-label leading-label tracking-label",
          selected ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {label}
      </span>
    </>
  );
  if (isStatic) {
    return <div {...rootProps}>{Inner}</div>;
  }
  return (
    <button type="button" {...rootProps} {...props}>
      {Inner}
    </button>
  );
}
