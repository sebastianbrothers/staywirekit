"use client";

// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export interface Testimonials1Props {
  title?: string;
  byLabel?: string;
  items?: { title: string; quote: string; author: string }[];
}

export const Testimonials1 = ({
  title = "Voices from every room of the building",
  byLabel = "By",
  items = [
    {
      title: "It just worked",
      quote:
        "The internet was on the day we moved in. No technician, no waiting — I picked a provider from a menu in about a minute.",
      author: "Maya, resident",
    },
    {
      title: "A cost became an asset",
      quote:
        "Internet used to be a line we gave away to whoever wired the building first. Now the fibre is ours and it pays us every month.",
      author: "Priya, property manager",
    },
    {
      title: "A whole building, no construction",
      quote:
        "We reached every suite in a new building without digging or capex. Same terms as everyone else on the network — that's all we ever asked for.",
      author: "Daniel, ISP founder",
    },
    {
      title: "An NOI line that scales",
      quote:
        "The revenue share grows with occupancy, and the exit and reporting rights are ones I can actually read. It underwrites like parking, not like an amenity.",
      author: "Janice, REIT asset manager",
    },
    {
      title: "Off the critical path, actually",
      quote:
        "They showed up with drawings and a responsibility matrix, sequenced into our schedule, and never touched the rough-in. That's rare.",
      author: "Marc, site superintendent",
    },
    {
      title: "Switching took an afternoon",
      quote:
        "My old provider raised the price, so I picked a new one from the menu. No cancellation call, no rewiring — same connection, better deal.",
      author: "Alex, resident",
    },
  ],
}: Testimonials1Props = {}) => {
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
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="font-display text-headline leading-headline tracking-headline font-normal lg:max-w-xl text-left">
            {title}
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem className="lg:basis-1/2 mr-4" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-title leading-title tracking-title font-medium">{item.title}</h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {item.quote}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">{byLabel}</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>{item.author}</span>
                      </p>
                    </div>
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
