// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Badge } from "../../components/ui/badge";

export interface Feature3Props {
  badge?: string;
  title?: string;
  description?: string;
}

export const Feature3 = ({
  badge = "Asset teams",
  title = "A revenue line that scales with occupancy",
  description = "Connectivity used to sit on the cost side. On the co-operation network it becomes a defensible income line: a recurring share tied to active subscribers, with clear reporting, transfer, and audit rights.",
}: Feature3Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="font-display text-headline leading-headline tracking-headline font-normal lg:max-w-xl text-left">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
