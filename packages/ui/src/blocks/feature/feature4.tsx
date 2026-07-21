// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Badge } from "../../components/ui/badge";

export interface Feature4Props {
  badge?: string;
  title?: string;
  description?: string;
}

export const Feature4 = ({
  badge = "Builders",
  title = "One accountable partner, off the critical path",
  description = "You have enough trades to sequence. We arrive with drawings, a responsibility matrix, and milestones that fit your schedule — one point of contact from rough-in to handover, and no surprises at the finish.",
}: Feature4Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              {description}
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
      </div>
    </div>
  </div>
);
