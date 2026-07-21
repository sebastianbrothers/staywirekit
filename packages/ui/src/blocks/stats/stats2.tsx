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
  badge = "The network",
  title = "Canada's co-operation network",
  description = "Neutral, open-access fibre for multi-family buildings. Owners keep the asset and earn recurring revenue, any provider can serve residents on equal terms, and residents are online the day they move in.",
  stats = [
    { value: "500.000", delta: "+20.1%", label: "Units online day one" },
    { value: "20.105", delta: "-2%", label: "Active subscriptions" },
    { value: "$523.520", delta: "+8%", label: "Owner revenue share" },
    { value: "$1052", delta: "+2%", label: "Annual revenue per door" },
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
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
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
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
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
