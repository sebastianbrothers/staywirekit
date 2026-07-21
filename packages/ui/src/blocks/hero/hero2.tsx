// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export interface Hero2Props {
  badge?: string;
  title?: string;
  description?: string;
  secondaryCta?: string;
  primaryCta?: string;
}

export const Hero2 = ({
  badge = "For owners",
  title = "Your fibre should pay you back",
  description = "The network in your building has always been a cost. On a staywire network you build the building, own the fibre, and share the value — recurring revenue that grows with occupancy. You keep your fibre. We just run it.",
  secondaryCta = "Book a walkthrough",
  primaryCta = "Talk to us",
}: Hero2Props = {}) => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-section items-center justify-center flex-col">
        <div>
          <Badge variant="outline">{badge}</Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            {title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button size="lg" className="gap-4" variant="outline">
            {secondaryCta} <PhoneCall className="w-4 h-4" />
          </Button>
          <Button size="lg" className="gap-4">
            {primaryCta} <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
