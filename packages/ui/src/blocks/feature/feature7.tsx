// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { User } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export interface Feature7Props {
  badge?: string;
  title?: string;
  description?: string;
  items?: { title: string; description: string }[];
}

export const Feature7 = ({
  badge = "The engine",
  title = "Every surface, one wire",
  description = "Admin, embed, hosted booking, and MCP run on the same API.",
  items = [
    {
      title: "The API",
      description:
        "REST endpoints for availability, quotes, bookings, cancellations, and refunds.",
    },
    {
      title: "The embed",
      description:
        "Guests book on your website without leaving it.",
    },
    {
      title: "The hosted page",
      description:
        "A booking page that works before you have a website.",
    },
    {
      title: "The admin",
      description:
        "Calendar, bookings, and refunds without the noise.",
    },
    {
      title: "The day sheet",
      description:
        "Housekeeping's morning view — arrivals, departures, stayovers.",
    },
    {
      title: "The webhooks",
      description:
        "Signed, replayable deliveries from a single event log.",
    },
    {
      title: "The agents",
      description:
        "Six MCP tools so assistants can book on a guest's behalf.",
    },
    {
      title: "The coverage page",
      description:
        "A live page that shows the engine's health, uptime in the open.",
    },
  ],
}: Feature7Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl text-left">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid  lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "bg-muted h-full w-full rounded-md aspect-square p-6 flex justify-between flex-col lg:col-span-2 lg:row-span-2"
                  : index === items.length - 1
                    ? "bg-muted h-full rounded-md p-6 flex justify-between flex-col lg:col-span-2"
                    : "bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col"
              }
            >
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-title leading-title tracking-title font-medium">{item.title}</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
