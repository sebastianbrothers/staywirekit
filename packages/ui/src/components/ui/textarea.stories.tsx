import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";
import { Label } from "./label";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  args: { placeholder: "Tell us how we can connect with you..." },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true, value: "This field is disabled." },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Tell us how we can connect with you..." />
    </div>
  ),
};
