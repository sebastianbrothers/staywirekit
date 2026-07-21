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
  badge = "For ISPs",
  title = "Open to every ISP",
  description = "Co-operate with the open network, not the hardware.",
  items = [
    {
      title: "No construction",
      description: "Serve residents on fibre that's already built.",
    },
    {
      title: "No capex to enter",
      description: "Reach new buildings without new builds.",
    },
    {
      title: "Equal terms for all",
      description: "Same wholesale rate for every provider.",
    },
    {
      title: "No gatekeeping",
      description: "No preferred placement. No better deal for anyone.",
    },
    {
      title: "A level playing field",
      description: "Staywire never competes with its providers.",
    },
    {
      title: "Lower cost to acquire",
      description: "Residents choose from day one — lower CAC.",
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
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
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
