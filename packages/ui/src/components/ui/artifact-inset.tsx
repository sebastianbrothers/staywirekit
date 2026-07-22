// staywire artifact inset (COMPONENTS-MAP #16): booking-confirmation card —
// the one deliberately-contrasting surface. A white card that reads like a
// printed confirmation; parent sections place it on contrasting bands.
// Hairlines carry all structure. Static — no hooks.
import * as React from "react";

import { cn } from "../../lib/utils";
import { StatusPill, type StatusPillProps } from "./status-pill";

export interface ArtifactInsetProps extends React.ComponentProps<"div"> {
  propertyName?: string;
  /** Booking reference, rendered in mono (e.g. "SW-4F7K2X"). */
  reference?: string;
  guestName?: string;
  checkIn?: string;
  checkOut?: string;
  roomName?: string;
  /** Full total line (e.g. "CA$397.38 total incl. tax"). */
  totalLabel?: string;
  /** Booking state — maps onto the functional ramps via StatusPill. */
  status?: "confirmed" | "pending" | "cancelled";
  /** Optional fine-print line under the total. */
  footnote?: string;
}

const PILL_STATUS: Record<
  NonNullable<ArtifactInsetProps["status"]>,
  NonNullable<StatusPillProps["status"]>
> = {
  confirmed: "operational",
  pending: "degraded",
  cancelled: "down",
};

export function ArtifactInset({
  propertyName = "Fern Hollow Cabin",
  reference = "SW-4F7K2X",
  guestName = "Maya Tremblay",
  checkIn = "Aug 10, 2026",
  checkOut = "Aug 12, 2026",
  roomName = "Garden Room",
  totalLabel = "CA$397.38 total incl. tax",
  status = "confirmed",
  footnote,
  className,
  ...props
}: ArtifactInsetProps) {
  const details = [
    { label: "Guest", value: guestName },
    { label: "Room", value: roomName },
    { label: "Check-in", value: checkIn },
    { label: "Check-out", value: checkOut },
  ];

  return (
    <div
      data-slot="artifact-inset"
      className={cn(
        "w-full max-w-[640px] rounded-lg border bg-card p-8 text-card-foreground",
        className
      )}
      {...props}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-display text-title leading-title tracking-title">
            {propertyName}
          </span>
          <span className="font-mono text-code leading-code text-muted-foreground">
            {reference}
          </span>
        </div>
        <StatusPill status={PILL_STATUS[status]}>{status}</StatusPill>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-6">
        {details.map((row) => (
          <div key={row.label} className="flex flex-col gap-1">
            <span className="text-label leading-label tracking-label text-muted-foreground">
              {row.label}
            </span>
            <span className="text-label leading-label">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4 border-t pt-6">
        <span className="text-label leading-label tracking-label text-muted-foreground">
          Total
        </span>
        <span className="text-label leading-label font-medium">{totalLabel}</span>
      </div>
      {footnote && (
        <p className="mt-4 text-caption leading-caption text-muted-foreground">
          {footnote}
        </p>
      )}
    </div>
  );
}
