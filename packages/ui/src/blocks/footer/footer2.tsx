// staywire mega-footer (COMPONENTS-MAP #3): multi-column link grid + address +
// status pill above a soft-divider legal row. Hairlines carry all structure.
import type { ReactNode } from "react";

import { StatusPill } from "../../components/ui/status-pill";

export interface FooterColumn {
  heading: string;
  links: string[];
}

export interface Footer2Props {
  wordmark?: ReactNode;
  address?: string[];
  columns?: FooterColumn[];
  statusLabel?: string;
  legal?: string;
}

export const Footer2 = ({
  wordmark = <span className="font-display text-title tracking-title">staywire</span>,
  address = ["Made in Canada", "hello@staywire.dev"],
  columns = [
    { heading: "Product", links: ["Availability", "Quotes", "Bookings", "Webhooks", "MCP server"] },
    { heading: "Developers", links: ["Documentation", "API reference", "Changelog", "Status", "Coverage"] },
    { heading: "Company", links: ["About", "Blog", "Customers", "Brand"] },
    { heading: "Resources", links: ["Pricing", "Security", "Support", "Migrate"] },
    { heading: "Legal", links: ["Privacy", "Terms", "DPA"] },
  ],
  statusLabel = "All systems operational",
  legal = "© 2026 staywire. Booking infrastructure for independent stays.",
}: Footer2Props = {}) => (
  <footer className="w-full border-t">
    <div className="container mx-auto">
      <div className="grid gap-x-10 gap-y-12 py-16 lg:py-20 md:grid-cols-[1.2fr_repeat(5,1fr)]">
        <div className="flex flex-col items-start gap-4">
          {wordmark}
          <div className="flex flex-col gap-1 text-label leading-label text-muted-foreground">
            {address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <StatusPill live>{statusLabel}</StatusPill>
        </div>
        {columns.map((col) => (
          <nav key={col.heading} className="flex flex-col gap-3">
            <span className="text-label leading-label tracking-label font-medium">
              {col.heading}
            </span>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-label leading-label text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="border-t py-6 text-caption leading-caption text-muted-foreground">
        {legal}
      </div>
    </div>
  </footer>
);
