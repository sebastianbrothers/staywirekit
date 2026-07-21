import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stats1 } from "./stats1";
import { Stats2 } from "./stats2";

const meta: Meta = {
  title: "Blocks/Stats",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Stats 1", render: () => <Stats1 /> };
export const Variant2: Story = { name: "Stats 2", render: () => <Stats2 /> };
