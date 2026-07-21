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
  title = "Guests book on your site",
  description = "staywire sits behind your own website, so guests book in three clicks without ever leaving your page. You get a calm admin for rates, rooms, and cancellations. Double-booking is impossible — the database refuses it, so you never have to make that phone call.",
  secondaryCta = "See the admin",
  primaryCta = "Talk to us",
}: Hero2Props = {}) => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-section items-center justify-center flex-col">
        <div>
          <Badge variant="outline">{badge}</Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="font-display text-display leading-display tracking-display font-normal max-w-2xl  text-center ">
            {title}
          </h1>
          <p className="text-body-lg leading-body-lg text-muted-foreground max-w-2xl text-center">
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
