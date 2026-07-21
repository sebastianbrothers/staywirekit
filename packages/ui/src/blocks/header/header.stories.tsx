import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header1 } from "./header1";
import { Header2 } from "./header2";

const meta: Meta = {
  title: "Blocks/Header",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Header 1", render: () => <Header1 /> };

export const Variant2: Story = { name: "Header 2 — staywire nav", render: () => <Header2 /> };
