"use client";
// staywire top nav (COMPONENTS-MAP #1): wordmark left, centred link cluster,
// sign-in + primary CTA right, hairline bottom border, 64px. Collapses to a
// disclosure menu below lg.
import { Menu, X } from "lucide-react";
import * as React from "react";
import type { ReactNode } from "react";

import { Button } from "../../components/ui/button";

export interface Header2Props {
  wordmark?: ReactNode;
  links?: string[];
  signIn?: string;
  cta?: string;
}

export const Header2 = ({
  wordmark = <span className="font-display text-title tracking-title">staywire</span>,
  links = ["Product", "Docs", "Customers", "Pricing"],
  signIn = "Sign in",
  cta = "Start building",
}: Header2Props = {}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between gap-4">
          {wordmark}
          <nav className="hidden gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-label leading-label tracking-label text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm">
              {signIn}
            </Button>
            <Button size="sm">{cta}</Button>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t py-lg lg:hidden">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-body leading-body text-muted-foreground"
              >
                {link}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="sm">
                {signIn}
              </Button>
              <Button size="sm">{cta}</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
