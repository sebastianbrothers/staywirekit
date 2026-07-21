"use client";

// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

export interface Case2Props {
  title?: string;
  logos?: { label: string }[];
}

export const Case2 = ({
  title = "New to Canada, proven globally",
  logos = Array.from({ length: 25 }, (_, index) => ({
    label: `Logo ${index + 1}`,
  })),
}: Case2Props = {}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-10 items-center">
          <h3 className="text-title leading-title tracking-title font-medium lg:max-w-xl text-left">
            {title}
          </h3>
          <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {logos.map((logo, index) => (
                  <CarouselItem
                    className="basis-1/4 lg:basis-1/6"
                    key={index}
                  >
                    <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                      <span className="text-sm">{logo.label}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
