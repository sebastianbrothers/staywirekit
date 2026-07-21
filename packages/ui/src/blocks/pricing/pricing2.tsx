// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { Fragment } from "react";
import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export interface Pricing2Props {
  badge?: string;
  title?: string;
  description?: string;
  tiers?: {
    name: string;
    description: string;
    price: string;
    period: string;
    cta: string;
  }[];
  featuresLabel?: string;
  rows?: {
    label: string;
    cells: (boolean | string)[];
  }[];
}

export const Pricing2 = ({
  badge = "Plans",
  title = "Plans on the open network",
  description = "Every provider gets the same terms, at every tier.",
  tiers = [
    {
      name: "Starter",
      description:
        "For providers testing the network. Reach your first buildings with no construction and no capex.",
      price: "$40",
      period: "/ month",
      cta: "Join",
    },
    {
      name: "Growth",
      description:
        "For providers growing across the network. Same wholesale, same access, no preferred placement.",
      price: "$40",
      period: "/ month",
      cta: "Join",
    },
    {
      name: "National",
      description:
        "For providers serving buildings across Canada. Equal terms at every address on the network.",
      price: "$40",
      period: "/ month",
      cta: "Talk to us",
    },
  ],
  featuresLabel = "Features",
  rows = [
    { label: "API", cells: [true, true, true] },
    { label: "Wholesale access", cells: [false, true, true] },
    { label: "Equal placement", cells: [false, true, true] },
    { label: "Buildings", cells: ["5 buildings", "25 buildings", "100+ buildings"] },
    { label: "Resident self-signup", cells: [false, true, true] },
    { label: "Usage reporting", cells: [false, true, true] },
  ],
}: Pricing2Props = {}) => (
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
        <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x pt-20">
          <div className="col-span-3 lg:col-span-1"></div>
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "px-3 py-1 md:px-6 md:py-4  gap-2 flex flex-col"
                  : "px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col"
              }
            >
              <p className="text-2xl">{tier.name}</p>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl">{tier.price}</span>
                <span className="text-sm text-muted-foreground">
                  {" "}
                  {tier.period}
                </span>
              </p>
              <Button
                variant={index === 1 ? undefined : "outline"}
                className="gap-4 mt-8"
              >
                {tier.cta}{" "}
                {index === 2 ? (
                  <PhoneCall className="w-4 h-4" />
                ) : (
                  <MoveRight className="w-4 h-4" />
                )}
              </Button>
            </div>
          ))}
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1  py-4">
            <b>{featuresLabel}</b>
          </div>
          <div></div>
          <div></div>
          <div></div>
          {rows.map((row, index) => (
            <Fragment key={index}>
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                {row.label}
              </div>
              {row.cells.map((cell, cellIndex) => (
                <div
                  className="px-3 py-1 md:px-6 md:py-4 flex justify-center"
                  key={cellIndex}
                >
                  {cell === true ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : cell === false ? (
                    <Minus className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <p className="text-muted-foreground text-sm">{cell}</p>
                  )}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);
