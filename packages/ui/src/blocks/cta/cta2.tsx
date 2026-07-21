// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export interface CTA2Props {
  badge?: string;
  title?: string;
  description?: string;
  secondaryCta?: string;
  primaryCta?: string;
}

export const CTA2 = ({
  badge = "Go live",
  title = "Put bookings on your site",
  description = "Quotes hold their price for 15 minutes, with taxes itemized. Refunds compute from the policy snapshot the guest agreed to. You keep the guest relationship; staywire keeps the ledger straight.",
  secondaryCta = "Book a demo",
  primaryCta = "Talk to us",
}: CTA2Props = {}) => (
  <div className="w-full py-section bg-muted">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>{badge}</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl">
            {title}
          </h3>
          <p className="text-body-lg leading-body-lg text-muted-foreground max-w-xl">
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
