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

export interface FAQ1Props {
  badge?: string;
  title?: string;
  description?: string;
  cta?: string;
  items?: { question: string; answer: string }[];
}

export const FAQ1 = ({
  badge = "FAQ",
  title = "Questions about the booking wire",
  description = "Owners, engineers, and agent builders ask us the same fair questions. Here are plain answers about double-bookings, quotes, refunds, and what happens on the wire.",
  cta = "Talk to us",
  items = [
    {
      question: "Can staywire double-book a room?",
      answer:
        "No. Availability is enforced at the database layer, so two confirmed bookings can never hold the same room for the same nights. It's a constraint, not a cleanup job — there is no code path around it.",
    },
    {
      question: "How long does a quote hold its price?",
      answer:
        "Fifteen minutes. When you request a quote, price and availability lock, so the total a guest sees is the total they pay at confirmation. If the lock expires, you request a fresh quote.",
    },
    {
      question: "How are refunds calculated?",
      answer:
        "Against the policy in force when the guest booked. Staywire snapshots your cancellation policy on every booking, so changing it later never changes what an existing guest is owed.",
    },
    {
      question: "How do I know a webhook came from staywire?",
      answer:
        "Every webhook is signed. Verify the signature with your endpoint secret and you know the event came from us and wasn't altered in transit.",
    },
    {
      question: "Can an AI agent book on a guest's behalf?",
      answer:
        "Yes. The MCP server exposes six tools that cover search, quotes, and bookings, so a voice or chat agent can complete a stay end to end. The same locks and constraints apply — an agent can't oversell a room any more than your website can.",
    },
    {
      question: "What does housekeeping get?",
      answer:
        "A day-sheet: who arrives, who departs, and which rooms turn over today. It reads from live bookings, so it's never a stale copy.",
    },
    {
      question: "Do I need to rebuild my website?",
      answer:
        "No. Staywire is API-first — it sits behind whatever site you already run. Your pages call the REST API, and guests never leave your domain.",
    },
    {
      question: "What does it cost to start?",
      answer:
        "Nothing. One property in test mode is free, with the full API. You pay a flat monthly rate per property only when you go live, and portfolios get custom terms.",
    },
  ],
}: FAQ1Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">{badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl text-left">
                {title}
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                {description}
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                {cta} <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
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
);
