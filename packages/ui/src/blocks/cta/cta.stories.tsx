import type { Meta, StoryObj } from "@storybook/react-vite";
import { CTA1 } from "./cta1";
import { CTA2 } from "./cta2";

const meta: Meta = {
  title: "Blocks/CTA",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "CTA 1", render: () => <CTA1 /> };
export const Variant2: Story = { name: "CTA 2", render: () => <CTA2 /> };
