"use client";
// staywire pricing with volume slider (COMPONENTS-MAP #22): plan-type toggle +
// bookings/month slider that picks a highlighted tier. No billing math — the
// rate is flat by design; the slider is reassurance, not a calculator.
import * as React from "react";
import { Check, MoveRight, PhoneCall } from "lucide-react";

import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Slider } from "../../components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";

export interface Pricing3Props {
  badge?: string;
  title?: string;
  description?: string;
  /** Plan-type toggle options — [single, portfolio]. */
  toggleOptions?: [string, string];
  /** Bookings/month slider range. */
  sliderMin?: number;
  sliderMax?: number;
  sliderStep?: number;
  defaultBookings?: number;
  /** Bookings/mo at which a single property is steered to Portfolio terms. */
  portfolioThreshold?: number;
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
    title: "No double-bookings",
    description: "Conflicting bookings are rejected at the database layer.",
  },
  {
    title: "15-minute quote locks",
    description: "The price a guest sees is the price they pay.",
  },
  {
    title: "Signed webhooks",
    description: "Verify every event before you trust it.",
  },
];

export const Pricing3 = ({
  badge = "Pricing",
  title = "The rate doesn't move",
  description = "Slide to your volume. One flat rate per live property — no per-booking fees at any scale.",
  toggleOptions = ["Single property", "Portfolio"],
  sliderMin = 50,
  sliderMax = 5000,
  sliderStep = 50,
  defaultBookings = 400,
  portfolioThreshold = 2500,
  tiers = [
    {
      name: "Test",
      description:
        "For builders trying the wire. One property in test mode, with the full API and all six MCP tools.",
      price: "$0",
      period: "/ month",
      features: defaultFeatures,
      cta: "Start building",
    },
    {
      name: "Live",
      description:
        "For a property taking real bookings. One flat rate per live property, every feature, no per-booking fees.",
      price: "$29",
      period: "/ property / month",
      features: defaultFeatures,
      cta: "Go live",
    },
    {
      name: "Portfolio",
      description:
        "For groups running several properties. Custom terms, one account across every stay you operate.",
      price: "Custom",
      period: "",
      features: defaultFeatures,
      cta: "Talk to us",
    },
  ],
}: Pricing3Props = {}) => {
  const [mode, setMode] = React.useState(toggleOptions[0]);
  const [bookings, setBookings] = React.useState(defaultBookings);

  const highlighted =
    mode === toggleOptions[1] || bookings >= portfolioThreshold ? "Portfolio" : "Live";

  return (
    <div className="w-full py-section">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>{badge}</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="font-display text-headline leading-headline tracking-headline font-normal max-w-xl text-center">
              {title}
            </h2>
            <p className="text-body-lg leading-body-lg text-muted-foreground max-w-xl text-center">
              {description}
            </p>
          </div>
          <div className="flex w-full max-w-xl flex-col items-center gap-6 rounded-lg border bg-card p-8 mt-8">
            <ToggleGroup
              type="single"
              variant="outline"
              value={mode}
              onValueChange={(value) => value && setMode(value)}
            >
              {toggleOptions.map((option) => (
                <ToggleGroupItem key={option} value={option}>
                  {option}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <Slider
              value={[bookings]}
              onValueChange={([value]) => setBookings(value ?? sliderMin)}
              min={sliderMin}
              max={sliderMax}
              step={sliderStep}
              aria-label="Bookings per month"
            />
            <div className="flex w-full flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-code leading-code text-muted-foreground">
                ~{bookings.toLocaleString()} bookings/mo
              </span>
              <span className="text-label leading-label text-muted-foreground">
                Test $0 · Live $29 / property · Portfolio custom
              </span>
            </div>
          </div>
          <div className="grid pt-12 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={
                  tier.name === highlighted
                    ? "w-full rounded-md border-ring"
                    : "w-full rounded-md"
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
                    <p className="flex flex-row items-center gap-2 text-xl">
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
                      variant={tier.name === highlighted ? undefined : "outline"}
                      className="gap-4"
                    >
                      {tier.cta}{" "}
                      {tier.price === "Custom" ? (
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
};
