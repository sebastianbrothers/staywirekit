import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconChip } from "./icon-chip";

const meta: Meta = {
  title: "Components/IconChip",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Grid: Story = {
  render: () => (
    <div className="flex gap-4">
      {["Node.js", "Python", "Go", "Ruby", "curl", "MCP"].map((label, i) => (
        <IconChip key={label} label={label} selected={i === 0} />
      ))}
    </div>
  ),
};
