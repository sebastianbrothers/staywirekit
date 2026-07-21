import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";
import { Input } from "./input";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: { layout: "centered" },
  args: { children: "Email" },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@staywire.com" />
    </div>
  ),
};
