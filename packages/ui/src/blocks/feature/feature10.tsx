// staywire event feed (COMPONENTS-MAP #17): booking lifecycle timeline —
// serif heading left, event_log panel right. Product-true: the rows are the
// events the wire actually emits, chips on the functional ramps.
import { MoveRight } from "lucide-react";

import { Badge } from "../../components/ui/badge";

export interface FeatureEvent {
  /** Event type, rendered in mono (e.g. "booking.created"). */
  type: string;
  detail: string;
  time: string;
  tone: "success" | "warning" | "danger" | "neutral";
}

export interface Feature10Props {
  badge?: string;
  title?: string;
  description?: string;
  /** CTA-ish link under the copy. */
  cta?: string;
  events?: FeatureEvent[];
}

const CHIP_VARIANT: Record<FeatureEvent["tone"], "success" | "warning" | "danger" | "secondary"> = {
  success: "success",
  warning: "warning",
  danger: "danger",
  neutral: "secondary",
};

export const Feature10 = ({
  badge = "Webhooks",
  title = "Every event, on the wire",
  description = "Each booking writes an ordered event log. Subscribe once and your product hears everything — signed, delivered, retried until acknowledged.",
  cta = "Read the docs",
  events = [
    {
      type: "booking.created",
      detail: "Garden Room, Aug 10–12, 2 guests",
      time: "15:27:04",
      tone: "neutral",
    },
    {
      type: "payment.retried",
      detail: "First attempt declined — retried in 2s",
      time: "15:27:09",
      tone: "warning",
    },
    {
      type: "payment.succeeded",
      detail: "CA$397.38 captured",
      time: "15:27:11",
      tone: "success",
    },
    {
      type: "booking.confirmed",
      detail: "SW-4F7K2X locked at the database layer",
      time: "15:27:11",
      tone: "success",
    },
    {
      type: "webhook.delivered",
      detail: "200 in 180ms",
      time: "15:27:12",
      tone: "success",
    },
    {
      type: "guest.checked_in",
      detail: "Verified at the door",
      time: "Aug 10, 16:02",
      tone: "neutral",
    },
  ],
}: Feature10Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-label tracking-label">
            {badge}
          </Badge>
          <div className="flex flex-col gap-2">
            <h2 className="max-w-xl font-display text-headline leading-headline tracking-headline font-normal">
              {title}
            </h2>
            <p className="max-w-lg text-body-lg leading-body-lg text-muted-foreground">
              {description}
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-label leading-label font-medium transition-colors hover:text-muted-foreground"
          >
            {cta} <MoveRight className="size-4" />
          </a>
        </div>
        <div className="divide-y rounded-lg border bg-card">
          {events.map((event) => (
            <div
              key={`${event.type}-${event.time}`}
              className="flex items-start justify-between gap-4 px-6 py-4"
            >
              <div className="flex flex-col items-start gap-1">
                <Badge variant={CHIP_VARIANT[event.tone]} className="font-mono text-code leading-code font-normal">
                  {event.type}
                </Badge>
                <span className="text-label leading-label text-muted-foreground">
                  {event.detail}
                </span>
              </div>
              <span className="whitespace-nowrap font-mono text-code leading-code text-muted-foreground">
                {event.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
