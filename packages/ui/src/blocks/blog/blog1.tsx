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
      title: "Who should own the fibre?",
      description:
        "The building's network should belong to the building. Owners keep the asset, and it pays them back.",
    },
    {
      title: "What open access means",
      description:
        "Any provider can serve residents on the same network, on equal terms. That choice is the point.",
    },
    {
      title: "Five rooms, five languages",
      description:
        "Developers, providers, residents — how we talk about co-operation with everyone a building touches.",
    },
    {
      title: "Online day one",
      description:
        "No tech visit, no waiting. Residents pick a provider from a simple menu and switch anytime.",
    },
  ],
}: Blog1Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
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
            <h3 className="text-xl tracking-tight">{article.title}</h3>
            <p className="text-muted-foreground text-base">
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
