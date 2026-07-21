// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Badge } from "../../components/ui/badge";

export interface Feature4Props {
  badge?: string;
  title?: string;
  description?: string;
}

export const Feature4 = ({
  badge = "Webhooks",
  title = "Events you can replay",
  description = "Every booking, cancellation, and refund writes to an event log first. Webhooks arrive signed and replayable — if your endpoint was down, you missed nothing.",
}: Feature4Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
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
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
      </div>
    </div>
  </div>
);
