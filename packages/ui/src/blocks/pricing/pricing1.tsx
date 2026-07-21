// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export interface Pricing1Props {
  badge?: string;
  title?: string;
  description?: string;
  tiers?: {
    name: string;
    description: string;
    price: string;
    period: string;
    features: { title: string; description: string }[];
    cta: string;
  }[];
}

const defaultFeatures = [
  {
    title: "Wholesale access",
    description: "One rate for every provider on the network.",
  },
  {
    title: "Equal placement",
    description: "No preferred spot in the resident menu.",
  },
  {
    title: "Resident self-signup",
    description: "Residents pick a provider from a simple menu.",
  },
];

export const Pricing1 = ({
  badge = "Plans",
  title = "Plans on the open network",
  description = "Any provider can serve residents on equal terms.",
  tiers = [
    {
      name: "Starter",
      description:
        "For providers testing the network. Reach your first buildings with no construction and no capex.",
      price: "$40",
      period: "/ month",
      features: defaultFeatures,
      cta: "Join the network",
    },
    {
      name: "Growth",
      description:
        "For providers growing across the network. Same wholesale, same access, no preferred placement.",
      price: "$40",
      period: "/ month",
      features: defaultFeatures,
      cta: "Join the network",
    },
    {
      name: "National",
      description:
        "For providers serving buildings across Canada. Equal terms at every address on the network.",
      price: "$40",
      period: "/ month",
      features: defaultFeatures,
      cta: "Talk to us",
    },
  ],
}: Pricing1Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>{badge}</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            {title}
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            {description}
          </p>
        </div>
        <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={
                index === 1 ? "w-full shadow-2xl rounded-md" : "w-full rounded-md"
              }
            >
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    {tier.name}
                  </span>
                </CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      {tier.period}
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    {tier.features.map((feature, featureIndex) => (
                      <div className="flex flex-row gap-4" key={featureIndex}>
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>{feature.title}</p>
                          <p className="text-muted-foreground text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant={index === 1 ? undefined : "outline"}
                    className="gap-4"
                  >
                    {tier.cta}{" "}
                    {index === 2 ? (
                      <PhoneCall className="w-4 h-4" />
                    ) : (
                      <MoveRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>
);
