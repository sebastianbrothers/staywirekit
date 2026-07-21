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
    title: "Double-bookings are a schema problem",
    description:
      "Most engines treat overbooking as a sync problem and chase it with jobs and alerts. There is a stricter way: enforce availability at the database layer, so a conflicting booking is rejected before it ever lands.",
  },
  articles = [
    {
      title: "What a quote lock buys you",
      description:
        "A quote holds price and availability for 15 minutes. The guest sees one number and pays that number — no drift between search and checkout, no awkward repricing email.",
    },
    {
      title: "Letting agents book your rooms",
      description:
        "A voice or chat agent can search, quote, and confirm a stay over MCP — six tools, end to end. It runs on the same rails as your website, so it can't oversell a room.",
    },
  ],
}: Blog2Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl">
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
