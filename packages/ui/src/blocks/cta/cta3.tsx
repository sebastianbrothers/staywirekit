// staywire closing band (COMPONENTS-MAP #23): two-line serif close + CTA pair
// over a 4%-ink wordmark watermark. The reference's "Email reimagined." close,
// re-set in staywire's language.
import { MoveRight } from "lucide-react";

import { Button } from "../../components/ui/button";

export interface Cta3Props {
  titleLine1?: string;
  titleLine2?: string;
  primaryCta?: string;
  secondaryCta?: string;
  /** Watermark word rendered at 4% ink behind the band. */
  watermark?: string;
}

export const Cta3 = ({
  titleLine1 = "Booking, rewired.",
  titleLine2 = "Live today.",
  primaryCta = "Start building",
  secondaryCta = "Book a demo",
  watermark = "staywire",
}: Cta3Props = {}) => (
  <div className="relative w-full overflow-hidden">
    <div className="container relative mx-auto">
      <div className="flex flex-col items-center gap-8 py-section text-center">
        <h2 className="font-display text-headline leading-display tracking-display font-normal">
          {titleLine1}
          <br />
          {titleLine2}
        </h2>
        <div className="flex flex-row gap-3">
          <Button size="lg" className="gap-2">
            {primaryCta} <MoveRight className="size-4" />
          </Button>
          <Button size="lg" variant="ghost" className="gap-2">
            {secondaryCta} <MoveRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display text-[22vw] leading-none tracking-display text-foreground/[0.04]"
    >
      {watermark}
    </div>
  </div>
);
