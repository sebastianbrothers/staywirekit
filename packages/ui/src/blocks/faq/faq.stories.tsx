import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAQ1 } from "./faq1";
import { FAQ2 } from "./faq2";

const meta: Meta = {
  title: "Blocks/FAQ",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "FAQ 1", render: () => <FAQ1 /> };
export const Variant2: Story = { name: "FAQ 2", render: () => <FAQ2 /> };
