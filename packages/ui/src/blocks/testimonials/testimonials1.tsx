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
  title = "What independent stays say",
  byLabel = "By",
  items = [
    {
      title: "No more double-bookings",
      quote:
        "We once had two families arrive for the same room. Since the switch, the database simply won't allow it — I stopped checking the calendar at night.",
      author: "Elena, guest-house owner in Victoria",
    },
    {
      title: "The quote is the price",
      quote:
        "Guests used to call about totals changing at checkout. Now a quote holds for 15 minutes and the number they see is the number they pay.",
      author: "Marguerite, B&B host in Lunenburg",
    },
    {
      title: "Integrated in a weekend",
      quote:
        "The REST API is small and predictable. Our own booking page was live on a Saturday, webhooks verified by Sunday.",
      author: "Sam, developer in Squamish",
    },
    {
      title: "Our phone agent books stays",
      quote:
        "We wired the six MCP tools into a voice agent. It quotes, confirms, and never oversells — same rails as the website.",
      author: "Priya, agent builder in Toronto",
    },
    {
      title: "Refunds without arguments",
      quote:
        "A guest cancelled under an older policy after we'd tightened ours. Staywire refunded by the policy she booked under, and nobody had to argue.",
      author: "Don, innkeeper on the Sunshine Coast",
    },
    {
      title: "Mornings start with the day-sheet",
      quote:
        "Housekeeping opens the day-sheet: arrivals, departures, turnovers. It comes straight from live bookings, so it's never wrong.",
      author: "Ana, inn manager in Tofino",
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
