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
  title = "Questions about the co-operation network",
  description = "Owners, providers, and residents ask us the same fair questions. Here are plain answers about who owns the fibre, how providers join, and what changes on move-in day.",
  cta = "Have a question? Talk to us",
  items = [
    {
      question: "Who owns the fibre in my building?",
      answer:
        "The building does. Staywire designs, builds, and operates the network, but the fibre stays on the owner's balance sheet as an asset. You keep your fibre. We just run it — and the building earns a recurring share of revenue as residents subscribe.",
    },
    {
      question: "How does a provider join the network?",
      answer:
        "Any qualified internet provider can ride the network — no construction, no capex. Once onboarded, a provider gets the same ordering and activation access as everyone else and appears on the resident menu the same day. Reaching a full building becomes a sign-up, not a build.",
    },
    {
      question: "What does move-in day look like for residents?",
      answer:
        "The connection is live when the keys are handed over. Residents pick a provider from a simple menu — it takes about a minute — and they're online. No technician visit, no waiting window, no starting the internet search from scratch.",
    },
    {
      question: "Does any provider get a better deal than another?",
      answer:
        "No. Every provider pays the same wholesale rate, gets the same access, and holds the same placement on the resident menu. No exclusive deals. No preferred placement. No better deal for anyone. That neutrality is the structure, not a promise.",
    },
    {
      question: "How does the install fit into our construction schedule?",
      answer:
        "We sequence into the GC's schedule, off the critical path. One accountable partner from design to handover — drawings, a responsibility matrix, and milestones up front, coordinated with your electrical and low-voltage trades. It never becomes the site team's problem.",
    },
    {
      question: "What happens with resident data?",
      answer:
        "Residents are the providers' customers, not ours — billing and account data stay with the provider they choose. Staywire handles only what's needed to run the network, and the owner gets clear reporting rights on network revenue, not on residents.",
    },
    {
      question: "What do the agreement terms look like?",
      answer:
        "Simple and non-exclusive, with clear exit, transfer, and reporting rights the owner can actually read. Revenue is a recurring share tied to active subscribers, so it grows with occupancy. No lock-in for the building, and no selling the residents' choice for a cheaper monthly line.",
    },
    {
      question: "What happens if staywire goes away?",
      answer:
        "The building keeps the fibre — it was always yours. Because the network is built on open standards and the asset never leaves your balance sheet, another operator can step in and run it. We're a guest in your building, and the arrangement is designed to outlast us.",
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
