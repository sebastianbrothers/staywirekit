import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Sendwire tenant" />
      <AvatarFallback>KN</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>KN</AvatarFallback>
    </Avatar>
  ),
};
