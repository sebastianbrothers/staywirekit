import type { Meta, StoryObj } from "@storybook/react-vite";
import { Case1 } from "./case1";
import { Case2 } from "./case2";

const meta: Meta = {
  title: "Blocks/Case",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Case 1", render: () => <Case1 /> };
export const Variant2: Story = { name: "Case 2", render: () => <Case2 /> };
