// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export interface Hero4Props {
  badge?: string;
  title?: string;
  description?: string;
  secondaryCta?: string;
  primaryCta?: string;
}

export const Hero4 = ({
  badge = "For providers",
  title = "Multiple providers. One network.",
  description = "When ISPs co-operate, the internet gets better for everyone. Reach new buildings with no construction and no capex, on a neutral network. No exclusive deals. No preferred placement. No better deal for anyone.",
  secondaryCta = "Talk to us",
  primaryCta = "See how it works",
}: Hero4Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
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
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);
