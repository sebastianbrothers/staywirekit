import type { Meta, StoryObj } from "@storybook/react-vite";
import { Blog1 } from "./blog1";
import { Blog2 } from "./blog2";

const meta: Meta = {
  title: "Blocks/Blog",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Blog 1", render: () => <Blog1 /> };
export const Variant2: Story = { name: "Blog 2", render: () => <Blog2 /> };
