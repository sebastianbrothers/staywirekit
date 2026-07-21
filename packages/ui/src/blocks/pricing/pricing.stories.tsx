import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pricing1 } from "./pricing1";
import { Pricing2 } from "./pricing2";

const meta: Meta = {
  title: "Blocks/Pricing",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Pricing 1", render: () => <Pricing1 /> };
export const Variant2: Story = { name: "Pricing 2", render: () => <Pricing2 /> };
