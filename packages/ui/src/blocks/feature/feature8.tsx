// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Badge } from "../../components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export interface Feature8Props {
  badge?: string;
  title?: string;
  description?: string;
  items?: { label: string }[];
}

export const Feature8 = ({
  badge = "Admin",
  title = "The morning in one glance",
  description = "The day sheet lists arrivals, departures, and stayovers before housekeeping starts. Refunds, policies, and booking answers sit one click away — no spreadsheet in sight.",
  items = Array.from({ length: 5 }, (_, index) => ({
    label: `Day sheet preview ${index + 1}`,
  })),
}: Feature8Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end  gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="font-display text-headline leading-headline tracking-headline font-normal lg:max-w-xl text-left">
              {title}
            </h2>
            <p className="text-lg  max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground  text-left">
              {description}
            </p>
          </div>
        </div>
        <div className="w-full max-w-full px-6">
          <Carousel>
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6">
                    <span className="text-sm">{item.label}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);
