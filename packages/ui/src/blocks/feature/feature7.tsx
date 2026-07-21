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
  badge = "Platform",
  title = "One network for all",
  description = "Shared infrastructure. Shared value.",
  items = [
    {
      title: "Owners keep the fibre",
      description:
        "The network stays your asset and pays a recurring share as residents subscribe.",
    },
    {
      title: "Revenue you can report",
      description:
        "Subscriber counts, payouts, and audit rights in one place — numbers you can stand behind.",
    },
    {
      title: "Providers join, not build",
      description:
        "Any ISP can serve the building with no construction and no capital outlay.",
    },
    {
      title: "Neutrality, enforced",
      description:
        "Same wholesale, same access. We never compete with the providers on our network.",
    },
    {
      title: "Built into your schedule",
      description:
        "Drawings, milestones, and one accountable partner — sequenced off the critical path.",
    },
    {
      title: "Live at move-in",
      description:
        "Residents are online the day they move in and can switch providers anytime.",
    },
    {
      title: "Wired once, done right",
      description:
        "One fibre plant serves the whole building, so nobody pulls duplicate cable later.",
    },
    {
      title: "Run by a fair host",
      description:
        "We operate the network for everyone and earn our place in the building every day.",
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
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
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
                <h3 className="text-xl tracking-tight">{item.title}</h3>
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
