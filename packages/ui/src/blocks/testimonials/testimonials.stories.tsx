import type { Meta, StoryObj } from "@storybook/react-vite";
import { Testimonials1 } from "./testimonials1";

const meta: Meta = {
  title: "Blocks/Testimonials",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Testimonials 1", render: () => <Testimonials1 /> };
