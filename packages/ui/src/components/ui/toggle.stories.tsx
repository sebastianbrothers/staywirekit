import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./toggle";
import { Bold } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["default", "sm", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof Toggle>) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold />
    </Toggle>
  ),
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle bold">
      <Bold />
      Bold
    </Toggle>
  ),
};
