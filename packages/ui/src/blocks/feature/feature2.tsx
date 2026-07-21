// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Check } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export interface Feature2Props {
  badge?: string;
  title?: string;
  description?: string;
  items?: { title: string; description: string }[];
}

export const Feature2 = ({
  badge = "For engineers",
  title = "One API, every surface",
  description = "Admin, embed, and the hosted booking page call the same REST endpoints you do.",
  items = [
    {
      title: "Availability with reasons",
      description: "Every unavailable night returns a structured reason, never a silent omission.",
    },
    {
      title: "Quotes that hold",
      description: "A quote locks its price for 15 minutes, taxes itemized, policy attached.",
    },
    {
      title: "Collision-proof bookings",
      description: "A Postgres exclusion constraint makes double-booking impossible at the database layer.",
    },
    {
      title: "A policy snapshot per booking",
      description: "Refunds are computed from the policy the guest actually accepted.",
    },
    {
      title: "An event log underneath",
      description: "Webhooks are signed and replayable, delivered from the log in order.",
    },
    {
      title: "Six MCP tools",
      description: "Agents check, quote, book, cancel, and look up stays on your behalf.",
    },
  ],
}: Feature2Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex gap-4 py-section flex-col items-start">
        <div>
          <Badge>{badge}</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="font-display text-headline leading-headline tracking-headline font-normal lg:max-w-xl">
            {title}
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            {items.map((item, index) => (
              <div
                key={index}
                className={
                  index % 3 === 0
                    ? "flex flex-row gap-6 w-full items-start"
                    : "flex flex-row gap-6 items-start"
                }
              >
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>{item.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
