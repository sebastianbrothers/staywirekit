// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Check } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export interface Feature1Props {
  badge?: string;
  title?: string;
  description?: string;
  items?: { title: string; description: string }[];
}

export const Feature1 = ({
  badge = "For owners",
  title = "Fibre that pays",
  description = "You keep your fibre. We just run it.",
  items = [
    {
      title: "New revenue",
      description: "A share of every subscription, every month.",
    },
    {
      title: "NOI that grows",
      description: "Revenue scales as your building fills.",
    },
    {
      title: "An asset, not a cost",
      description: "The fibre stays on your balance sheet.",
    },
  ],
}: Feature1Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">{badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                {title}
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                {description}
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            {items.map((item, index) => (
              <div key={index} className="flex flex-row gap-6 items-start">
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
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
    </div>
  </div>
);
