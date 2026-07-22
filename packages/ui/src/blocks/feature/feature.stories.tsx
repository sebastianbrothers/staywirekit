import type { Meta, StoryObj } from "@storybook/react-vite";
import { Feature1 } from "./feature1";
import { Feature2 } from "./feature2";
import { Feature3 } from "./feature3";
import { Feature4 } from "./feature4";
import { Feature5 } from "./feature5";
import { Feature6 } from "./feature6";
import { Feature7 } from "./feature7";
import { Feature8 } from "./feature8";
import { Feature9 } from "./feature9";
import { Feature10 } from "./feature10";

const meta: Meta = {
  title: "Blocks/Feature",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Variant1: Story = { name: "Feature 1", render: () => <Feature1 /> };
export const Variant2: Story = { name: "Feature 2", render: () => <Feature2 /> };
export const Variant3: Story = { name: "Feature 3", render: () => <Feature3 /> };
export const Variant4: Story = { name: "Feature 4", render: () => <Feature4 /> };
export const Variant5: Story = { name: "Feature 5", render: () => <Feature5 /> };
export const Variant6: Story = { name: "Feature 6", render: () => <Feature6 /> };
export const Variant7: Story = { name: "Feature 7", render: () => <Feature7 /> };
export const Variant8: Story = { name: "Feature 8", render: () => <Feature8 /> };
export const Variant9: Story = { name: "Feature 9", render: () => <Feature9 /> };
export const Variant10: Story = { name: "Feature 10", render: () => <Feature10 /> };
