import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./switch";
import { Label } from "./label";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "default"] },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Small: Story = {
  args: { size: "sm", defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notify" defaultChecked />
      <Label htmlFor="notify">Connect to us via email</Label>
    </div>
  ),
};
