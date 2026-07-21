import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-72" />,
};

export const Range: Story = {
  render: () => (
    <Slider defaultValue={[25, 75]} max={100} step={1} className="w-72" />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Slider defaultValue={[40]} max={100} step={1} disabled className="w-72" />
  ),
};
