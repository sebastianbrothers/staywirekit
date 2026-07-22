// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../../components/ui/button";

export interface Hero1Props {
  announcement?: string;
  title?: string;
  description?: string;
  secondaryCta?: string;
  primaryCta?: string;
}

export const Hero1 = ({
  announcement = "Explore the staywire API",
  title = "Availability, quotes, bookings — one API",
  description = "staywire is the REST API between your product and a confirmed stay. Request a quote, hold the price for 15 minutes, confirm the booking — double-booking is impossible at the database layer. Signed, replayable webhooks tell your systems the moment anything changes.",
  secondaryCta = "Read the docs",
  primaryCta = "Start building",
}: Hero1Props = {}) => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-section items-center justify-center flex-col">
        <div>
          <Button variant="secondary" size="sm" className="gap-4">
            {announcement} <MoveRight className="w-4 h-4" />
          </Button>
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
