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
  description = "The co-operation network is new to Canada, so questions are fair. Here are plain answers for owners, providers, and residents — no telecom translation needed.",
  cta = "Still curious? Talk to us",
  items = [
    {
      question: "Can any provider join the network?",
      answer:
        "Yes. The network is neutral and open-access by design. Every provider gets the same wholesale rate, the same access, and the same placement in the resident menu. No exclusive deals. No preferred placement. No better deal for anyone.",
    },
    {
      question: "Does sendwire sell internet to residents?",
      answer:
        "No, and we never will. We run the network; the providers sell the service. The moment a neutral host competes with the providers on its own network, neutrality becomes a lie — so we don't. We host the network. We don't sell the internet.",
    },
    {
      question: "What does this cost the building?",
      answer:
        "Funding is flexible: developer-funded, shared, or fully sendwire-funded. Either way the owner keeps the fibre and earns a recurring revenue share tied to active subscribers. This isn't a bulk deal that lowers a monthly line — it's an asset that pays the building back.",
    },
    {
      question: "How do residents choose a provider?",
      answer:
        "From a simple menu, the day they move in. Every provider on the building's network is listed on equal footing — same placement, no featured picks. Residents compare, choose, and they're online. No technician visit needed.",
    },
    {
      question: "Can residents switch providers later?",
      answer:
        "Anytime. Switching happens on the same menu and takes minutes, because every provider is already connected to the suite. That's what choice looks like when the network is shared — no rewiring, no transfer fees from us, no winning provider locking the door behind them.",
    },
    {
      question: "Has this model worked anywhere else?",
      answer:
        "Open-access networks already connect hundreds of millions of people in other countries. What's new is bringing the model to Canadian multi-family buildings — which we're doing one building at a time, with names and numbers you can check rather than claims you have to take on faith.",
    },
    {
      question: "Who do residents call when something breaks?",
      answer:
        "Their provider handles service and account questions, the way it should be. Behind that, sendwire operates the shared network to a service-level commitment — monitoring, maintenance, and repairs are our job, not the building manager's and not the resident's.",
    },
    {
      question: "What happens at the end of the agreement?",
      answer:
        "The owner keeps the fibre — that never changes. The agreement is non-exclusive with clear exit and transfer rights, so the building can renew, bring in another operator, or run the network itself. We earn our place every day; we don't lock the building in.",
    },
  ],
}: FAQ2Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">{badge}</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              {title}
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
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
