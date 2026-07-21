// Adapted from TWBlocks (https://github.com/tommyjepsen/twblocks), MIT © 2024 Tommy Jepsen.
import { MoveDownLeft, MoveUpRight } from "lucide-react";

export interface Stats1Props {
  stats?: { value: string; delta: string; label: string }[];
}

export const Stats1 = ({
  stats = [
    { value: "500.000", delta: "+20.1%", label: "Units online day one" },
    { value: "20.105", delta: "-2%", label: "Active subscriptions" },
    { value: "$523.520", delta: "+8%", label: "Owner revenue share" },
    { value: "$1052", delta: "+2%", label: "Annual revenue per door" },
  ],
}: Stats1Props = {}) => (
  <div className="w-full py-section">
    <div className="container mx-auto">
      <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
        {stats.map((stat, index) => (
          <div
            className="flex gap-0 flex-col justify-between p-6 border rounded-md"
            key={index}
          >
            {index === 1 ? (
              <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
            ) : (
              <MoveUpRight
                className={
                  index === 2
                    ? "w-4 h-4 mb-10 text-success"
                    : "w-4 h-4 mb-10 text-primary"
                }
              />
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
);
