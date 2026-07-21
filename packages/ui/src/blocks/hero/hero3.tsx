// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export interface Hero3Props {
  badge?: string;
  title?: string;
  description?: string;
  secondaryCta?: string;
  primaryCta?: string;
}

export const Hero3 = ({
  badge = "For residents",
  title = "Online the day you move in",
  description = "Choice is what happens when networks co-operate. In a sendwire building your internet works the day you move in — no waiting around for a technician. Pick a provider from a simple menu, and switch anytime.",
  secondaryCta = "See how it works",
  primaryCta = "Get connected",
}: Hero3Props = {}) => (
  <div className="w-full  py-section">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">{badge}</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              {title}
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              {description}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              {secondaryCta} <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              {primaryCta} <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
    </div>
  </div>
);
