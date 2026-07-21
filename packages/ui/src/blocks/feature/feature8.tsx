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
  badge = "Platform",
  title = "Watch your fibre become an asset",
  description = "Every active subscription in the building shows up as a recurring share you can see. Track providers, subscribers, and payouts in one dashboard — what was once a cost becomes an asset that pays dividends.",
  items = Array.from({ length: 5 }, (_, index) => ({
    label: `Dashboard preview ${index + 1}`,
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
            <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
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
