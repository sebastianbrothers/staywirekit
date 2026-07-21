// staywire hero (COMPONENTS-MAP #19): editorial serif stripe — badge pill,
// oversized Fraunces display at leading 1.0, subtitle, CTA pair, optional art
// slot right. The reference hero shape in staywire's own light language.
import { MoveRight } from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export interface Hero6Props {
  announcement?: string;
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  /** Optional art/figure slot rendered right of the copy at lg+. */
  art?: ReactNode;
}

export const Hero6 = ({
  announcement = "Announcing the staywire MCP server",
  title = "Booking for builders",
  subtitle = "The API-first booking engine for independent stays. Quote, confirm, and deliver bookings from your own product — double-booking is impossible at the database layer.",
  primaryCta = "Start building",
  secondaryCta = "Read the docs",
  art,
}: Hero6Props = {}) => (
  <div className="w-full border-b">
    <div className="container mx-auto">
      <div className="grid items-center gap-10 py-section-lg lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-label tracking-label">
            {announcement} <MoveRight className="size-3" />
          </Badge>
          <h1 className="max-w-xl font-display text-display leading-display tracking-display font-normal">
            {title}
          </h1>
          <p className="max-w-lg text-body-lg leading-body-lg text-muted-foreground">
            {subtitle}
          </p>
          <div className="flex flex-row gap-3">
            <Button size="lg">{primaryCta}</Button>
            <Button size="lg" variant="ghost" className="gap-2">
              {secondaryCta} <MoveRight className="size-4" />
            </Button>
          </div>
        </div>
        {art ? (
          <div className="hidden lg:block">{art}</div>
        ) : (
          <div
            aria-hidden
            className="hidden h-72 rounded-lg border bg-[radial-gradient(ellipse_at_top,var(--color-indigo-wash),transparent_70%)] lg:block dark:bg-[radial-gradient(ellipse_at_top,rgba(77,91,245,0.12),transparent_70%)]"
          />
        )}
      </div>
    </div>
  </div>
);
