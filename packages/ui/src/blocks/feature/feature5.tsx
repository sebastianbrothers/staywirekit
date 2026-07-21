// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Badge } from "../../components/ui/badge";

export interface Feature5Props {
  badge?: string;
  title?: string;
  description?: string;
  items?: { title: string; description: string }[];
}

export const Feature5 = ({
  badge = "Residents",
  title = "Online on day one",
  description = "Choice is what happens when networks co-operate.",
  items = [
    {
      title: "Internet from move-in day",
      description:
        "Your connection is live the day you get your keys. No waiting, no tech visit.",
    },
    {
      title: "Pick from real choices",
      description:
        "Several providers serve your building on the same fibre. Compare and choose.",
    },
    {
      title: "Switch anytime",
      description:
        "Changing providers takes minutes from a simple menu — no rewiring, no penalty.",
    },
    {
      title: "Prices kept honest",
      description:
        "When providers share one network, they compete on service and price.",
    },
    {
      title: "One fibre, no clutter",
      description:
        "The building is wired once, properly. Every provider uses the same line.",
    },
    {
      title: "Help that answers",
      description:
        "Your provider supports you; we keep the network itself running quietly.",
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
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
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
              <h3 className="text-xl tracking-tight">{item.title}</h3>
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
