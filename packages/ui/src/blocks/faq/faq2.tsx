// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Check, PhoneCall } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";

export interface FAQ2Props {
  badge?: string;
  title?: string;
  description?: string;
  cta?: string;
  items?: { question: string; answer: string }[];
}

export const FAQ2 = ({
  badge = "FAQ",
  title = "Fair questions, plain answers",
  description = "A booking engine you talk to over an API raises fair questions. Here are plain answers for owners, engineers, and the agents booking on guests' behalf.",
  cta = "Talk to us",
  items = [
    {
      question: "What is staywire, exactly?",
      answer:
        "A booking engine behind an API. Your website, voice agent, or channel calls it to check availability, quote a stay, and confirm a booking. The API is the product — there's no widget to bolt on.",
    },
    {
      question: "Is double-booking really impossible?",
      answer:
        "Yes, at the database layer. Two confirmed bookings can't hold the same room for the same nights — the conflicting write is rejected before it lands. No sync jobs, no race windows.",
    },
    {
      question: "What happens when a quote expires?",
      answer:
        "The 15-minute lock releases and the room returns to open inventory. Request a new quote and you get current price and availability. Nothing is ever charged on an expired quote.",
    },
    {
      question: "Can I change my cancellation policy?",
      answer:
        "Anytime, for future bookings. Existing bookings keep a snapshot of the policy they were made under, so guests are refunded by the rules they agreed to.",
    },
    {
      question: "How do webhooks work?",
      answer:
        "You register an endpoint and staywire sends signed events — bookings, cancellations, payments. Check the signature against your secret before you trust the payload.",
    },
    {
      question: "What can agents do over MCP?",
      answer:
        "The MCP server ships six tools — enough to search availability, quote a stay, and manage a booking end to end. An agent gets the same guarantees your website does, including the no-double-booking constraint.",
    },
    {
      question: "How does housekeeping stay in sync?",
      answer:
        "The day-sheet reads from live bookings — arrivals, departures, and turnovers for the day. Cancel a stay and the sheet updates with it.",
    },
    {
      question: "What does it cost?",
      answer:
        "Free for one property in test mode. A flat monthly rate per live property, custom terms for portfolios. No per-booking fees.",
    },
  ],
}: FAQ2Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">{badge}</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl text-center">
              {title}
            </h4>
            <p className="text-body-lg leading-body-lg text-muted-foreground max-w-xl text-center">
              {description}
            </p>
          </div>
          <div>
            <Button className="gap-4" variant="outline">
              {cta} <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
