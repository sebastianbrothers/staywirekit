"use client";

// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

export interface Case1Props {
  title?: string;
  logos?: { label: string }[];
}

export const Case1 = ({
  title = "New to Canada, proven globally — by the hundreds of millions",
  logos = Array.from({ length: 15 }, (_, index) => ({
    label: `Logo ${index + 1}`,
  })),
}: Case1Props = {}) => {
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
        <div className="flex flex-col  gap-10">
          <h2 className="font-display text-headline leading-headline tracking-headline font-normal lg:max-w-xl text-left">
            {title}
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                    <span className="text-sm">{logo.label}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
