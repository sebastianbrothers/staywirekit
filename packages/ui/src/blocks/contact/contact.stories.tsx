import type { Meta, StoryObj } from "@storybook/react-vite";
import { Contact1 } from "./contact1";

const meta: Meta = {
  title: "Blocks/Contact",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Contact 1", render: () => <Contact1 /> };
