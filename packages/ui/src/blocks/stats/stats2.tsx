// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export interface Stats2Props {
  badge?: string;
  title?: string;
  description?: string;
  stats?: { value: string; delta: string; label: string }[];
}

export const Stats2 = ({
  badge = "The engine",
  title = "Numbers from the wire",
  description = "One API confirms the stay, locks the quote, and delivers every event to your systems. The engine keeps score in the open — here's what it reports.",
  stats = [
    { value: "312.408", delta: "+18%", label: "Nights confirmed through the API" },
    { value: "180ms", delta: "-22ms", label: "p50 quote, taxes itemized" },
    { value: "15 min", delta: "±0", label: "Quote lock, policy attached" },
    { value: "0", delta: "±0", label: "Double-bookings stored, ever" },
  ],
}: Stats2Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="font-display text-headline leading-headline tracking-headline font-normal lg:max-w-xl text-left">
              {title}
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            {stats.map((stat, index) => (
              <div
                className="flex gap-0 flex-col justify-between p-6 border rounded-md"
                key={index}
              >
                {index === 1 ? (
                  <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
                ) : (
                  <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                )}
                <h2 className="font-display text-headline leading-headline tracking-headline max-w-xl text-left flex flex-row gap-4 items-end">
                  {stat.value}
                  <span className="text-muted-foreground text-sm tracking-normal">
                    {stat.delta}
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
