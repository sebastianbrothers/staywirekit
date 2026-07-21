import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer1 } from "./footer1";
import { Footer2 } from "./footer2";

const meta: Meta = {
  title: "Blocks/Footer",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Footer 1", render: () => <Footer1 /> };

export const Variant2: Story = { name: "Footer 2 — staywire mega-footer", render: () => <Footer2 /> };
