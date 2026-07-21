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
  badge = "The network",
  title = "Neutral by design",
  description = "Multiple providers. One network. Everyone on equal terms.",
  items = [
    {
      title: "One shared fibre network",
      description:
        "The building is wired once. Every provider reaches every suite on the same line.",
    },
    {
      title: "A neutral host",
      description:
        "We run the network and never sell internet, so no provider gets an edge.",
    },
    {
      title: "Open on equal terms",
      description:
        "No exclusive deals. No preferred placement. No better deal for anyone.",
    },
    {
      title: "Shared infrastructure",
      description:
        "Owners earn from the asset, providers reach residents, and residents get real choice.",
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
            <div
              key={index}
              className={cardClassNames[index % cardClassNames.length]}
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
