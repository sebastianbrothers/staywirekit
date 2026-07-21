// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";

export interface Blog2Props {
  title?: string;
  badge?: string;
  byLabel?: string;
  author?: string;
  featured?: { title: string; description: string };
  articles?: { title: string; description: string }[];
}

export const Blog2 = ({
  title = "Latest articles",
  badge = "News",
  byLabel = "By",
  author = "The staywire team",
  featured = {
    title: "Who should own the fibre?",
    description:
      "In most buildings the network belongs to a carrier, and the building pays for it forever. There is another way: the owner keeps the fibre as an asset, and it earns recurring revenue that grows with occupancy.",
  },
  articles = [
    {
      title: "What open access means",
      description:
        "Open access is a simple idea: any provider can serve residents on the same network, on equal terms. No exclusive deals, no preferred placement, no better deal for anyone — and real choice for the people who live there.",
    },
    {
      title: "Five rooms, five languages",
      description:
        "A developer hears pro forma. A provider hears reach without construction. A resident hears move-in day. Same deal, five rooms, five languages — how we talk about co-operation with everyone a building touches.",
    },
  ],
}: Blog2Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          {title}
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer md:col-span-2">
          <div className="bg-muted rounded-md aspect-video"></div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>{badge}</Badge>
            <p className="flex flex-row gap-2 text-sm items-center">
              <span className="text-muted-foreground">{byLabel}</span>{" "}
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>{author}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="max-w-3xl text-4xl tracking-tight">
              {featured.title}
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              {featured.description}
            </p>
          </div>
        </div>
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 hover:opacity-75 cursor-pointer"
          >
            <div className="bg-muted rounded-md aspect-video"></div>
            <div className="flex flex-row gap-4 items-center">
              <Badge>{badge}</Badge>
              <p className="flex flex-row gap-2 text-sm items-center">
                <span className="text-muted-foreground">{byLabel}</span>{" "}
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>{author}</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="max-w-3xl text-2xl tracking-tight">
                {article.title}
              </h3>
              <p className="max-w-3xl text-muted-foreground text-base">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
