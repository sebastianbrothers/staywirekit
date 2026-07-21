// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { User } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export interface Feature6Props {
  badge?: string;
  title?: string;
  description?: string;
  items?: { title: string; description: string }[];
}

const cardClassNames = [
  "bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col",
  "bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col",
  "bg-muted rounded-md aspect-square p-6 flex justify-between flex-col",
  "bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col",
];

export const Feature6 = ({
  badge = "For agents",
  title = "Your engine speaks MCP",
  description = "Six tools. Any MCP client. Bookings on a guest's behalf.",
  items = [
    {
      title: "Six tools, whole journey",
      description:
        "check_availability, quote_stay, create_booking, cancel_booking, list_bookings, get_booking.",
    },
    {
      title: "The same engine underneath",
      description:
        "Agents hit the same API as your website — same locks, same constraints.",
    },
    {
      title: "Quotes agents can trust",
      description:
        "Every quote returns itemized taxes and the cancellation policy in one payload.",
    },
    {
      title: "Safe to let loose",
      description:
        "An agent can't double-book a room. The database won't let anyone.",
    },
  ],
}: Feature6Props = {}) => (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={cardClassNames[index % cardClassNames.length]}
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
