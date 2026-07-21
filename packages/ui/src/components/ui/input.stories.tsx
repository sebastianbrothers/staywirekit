import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: { layout: "centered" },
  args: { placeholder: "you@sendwire.com" },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Email: Story = {
  args: { type: "email", placeholder: "you@sendwire.com" },
};

export const Disabled: Story = {
  args: { disabled: true, value: "Can't touch this" },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@sendwire.com" />
    </div>
  ),
};
