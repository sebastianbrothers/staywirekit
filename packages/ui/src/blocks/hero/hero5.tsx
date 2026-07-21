"use client";

// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../../components/ui/button";

export interface Hero5Props {
  announcement?: string;
  title?: string;
  titles?: string[];
  description?: string;
  secondaryCta?: string;
  primaryCta?: string;
}

// Module-level so the default keeps a stable identity across renders — it sits in
// the rotation effect's dep array, and a fresh array each render would reset the timer.
const defaultTitles = ["shared", "open", "neutral", "everyone's", "yours"];

export const Hero5 = ({
  announcement = "Read the full manifesto",
  title = "The network should be",
  titles = defaultTitles,
  description = "The internet was built for co-operation — kernels of connected ideas that light up when more people join in. We build the fibre networks that carry that idea into buildings, so owners, providers, and residents all share the value.",
  secondaryCta = "Book a walkthrough",
  primaryCta = "Talk to us",
}: Hero5Props = {}) => {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-section items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              {announcement} <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">{title}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((item, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {item}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {description}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              {secondaryCta} <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              {primaryCta} <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
