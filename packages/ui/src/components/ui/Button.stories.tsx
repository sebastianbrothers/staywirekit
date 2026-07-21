import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

// Sample story proving the component → Storybook pipeline. Each shadcn component
// in the sendwire suite should ship one of these. Variants below are shadcn's
// defaults; they render branded once tokens.json is authored from the upload.
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
  },
  args: { children: "Button" },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };
