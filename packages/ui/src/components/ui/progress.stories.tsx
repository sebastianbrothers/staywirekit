import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: { layout: "centered" },
  args: { value: 66 },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof Progress>) => (
    <div className="w-72 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Occupancy</span>
        <span className="text-muted-foreground">{args.value}%</span>
      </div>
      <Progress {...args} />
    </div>
  ),
};
