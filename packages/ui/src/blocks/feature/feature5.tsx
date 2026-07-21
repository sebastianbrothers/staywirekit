// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Badge } from "../../components/ui/badge";

export interface Feature5Props {
  badge?: string;
  title?: string;
  description?: string;
  items?: { title: string; description: string }[];
}

export const Feature5 = ({
  badge = "For guests",
  title = "From search to stay",
  description = "The hosted booking page, built for small independent stays.",
  items = [
    {
      title: "Real availability",
      description:
        "The calendar shows what's actually free, straight from the engine. No stale nights.",
    },
    {
      title: "A price that stands still",
      description:
        "Your quote holds for 15 minutes with every tax itemized. No surprises at payment.",
    },
    {
      title: "Confirmation that arrives",
      description:
        "The booking confirms in one step and the email lands right behind it.",
    },
    {
      title: "Cancel without a phone call",
      description:
        "The policy you booked under is the policy you cancel under.",
    },
    {
      title: "No double-booked rooms",
      description:
        "The engine can't sell the same night twice. Nobody arrives to a taken bed.",
    },
    {
      title: "One page, no account",
      description:
        "Book as a guest on any device. No login, no app to install.",
    },
  ],
}: Feature5Props = {}) => (
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
            <div key={index} className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-title leading-title tracking-title font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
