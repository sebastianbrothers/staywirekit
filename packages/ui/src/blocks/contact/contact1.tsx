"use client";

// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { CalendarIcon, Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { cn } from "../../lib/utils";
import { format } from "date-fns";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

export interface Contact1Props {
  badge?: string;
  title?: string;
  description?: string;
  features?: { title: string; description: string }[];
  formTitle?: string;
  dateLabel?: string;
  datePlaceholder?: string;
  firstNameLabel?: string;
  lastNameLabel?: string;
  fileLabel?: string;
  cta?: string;
}

export const Contact1 = ({
  badge = "Contact",
  title = "Book a demo",
  description = "Staywire is the booking wire for small independent stays. See how one API takes your property from search to confirmed booking.",
  features = [
    {
      title: "No double-bookings",
      description: "Conflicting bookings are rejected at the database layer.",
    },
    {
      title: "Quotes that hold",
      description: "Price and availability lock for 15 minutes.",
    },
    {
      title: "Built for agents",
      description: "Six MCP tools let voice and chat agents book stays.",
    },
  ],
  formTitle = "Book a demo",
  dateLabel = "Date",
  datePlaceholder = "Pick a date",
  firstNameLabel = "First name",
  lastNameLabel = "Last name",
  fileLabel = "Rate sheet",
  cta = "Book a demo",
}: Contact1Props = {}) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="w-full py-section">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>{badge}</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl text-left">
                  {title}
                </h4>
                <p className="text-body-lg leading-body-lg text-muted-foreground max-w-sm text-left">
                  {description}
                </p>
              </div>
            </div>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-row gap-6 items-start text-left"
              >
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>{feature.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
              <p>{formTitle}</p>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="picture">{dateLabel}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>{datePlaceholder}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstname">{firstNameLabel}</Label>
                <Input id="firstname" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastname">{lastNameLabel}</Label>
                <Input id="lastname" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="picture">{fileLabel}</Label>
                <Input id="picture" type="file" />
              </div>

              <Button className="gap-4 w-full">
                {cta} <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
