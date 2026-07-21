import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer1 } from "./footer1";

const meta: Meta = {
  title: "Blocks/Footer",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Footer 1", render: () => <Footer1 /> };
