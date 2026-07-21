import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd, KbdGroup } from "./kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => <Kbd>Enter</Kbd>,
};

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};
