// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export interface CTA1Props {
  badge?: string;
  title?: string;
  description?: string;
  secondaryCta?: string;
  primaryCta?: string;
}

export const CTA1 = ({
  badge = "Get started",
  title = "Put your fibre to work",
  description = "Owners keep the fibre asset and earn recurring revenue. Providers reach residents on equal terms. Residents are online the day they move in. Open by design. Built around you.",
  secondaryCta = "Book a walkthrough",
  primaryCta = "Talk to us",
}: CTA1Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>{badge}</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            {title}
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            {secondaryCta} <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            {primaryCta} <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
