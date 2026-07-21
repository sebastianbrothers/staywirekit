// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveRight } from "lucide-react";
import { Button } from "../../components/ui/button";

export interface Blog1Props {
  title?: string;
  cta?: string;
  articles?: { title: string; description: string }[];
}

export const Blog1 = ({
  title = "Latest articles",
  cta = "View all articles",
  articles = [
    {
      title: "Double-bookings are a schema problem",
      description:
        "Overbooking isn't a sync bug to manage. Reject the conflict at the database and it can't happen.",
    },
    {
      title: "What a quote lock buys you",
      description:
        "Fifteen minutes of held price and availability. The total your guest sees is the total they pay.",
    },
    {
      title: "Refunds need a policy snapshot",
      description:
        "Policies change; bookings shouldn't. Snapshot the policy at booking and every refund is settled by it.",
    },
    {
      title: "Letting agents book your rooms",
      description:
        "Voice and chat agents can book over MCP. Six tools, same guarantees as your website.",
    },
  ],
}: Blog1Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl">
          {title}
        </h4>
        <Button className="gap-4">
          {cta} <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 hover:opacity-75 cursor-pointer"
          >
            <div className="bg-muted rounded-md aspect-video mb-4"></div>
            <h3 className="text-title leading-title tracking-title font-medium">{article.title}</h3>
            <p className="text-muted-foreground text-base">
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
