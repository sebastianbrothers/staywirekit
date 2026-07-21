import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hero1 } from "./hero1";
import { Hero2 } from "./hero2";
import { Hero3 } from "./hero3";
import { Hero4 } from "./hero4";
import { Hero5 } from "./hero5";

const meta: Meta = {
  title: "Blocks/Hero",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Hero 1", render: () => <Hero1 /> };
export const Variant2: Story = { name: "Hero 2", render: () => <Hero2 /> };
export const Variant3: Story = { name: "Hero 3", render: () => <Hero3 /> };
export const Variant4: Story = { name: "Hero 4", render: () => <Hero4 /> };
export const Variant5: Story = { name: "Hero 5", render: () => <Hero5 /> };
