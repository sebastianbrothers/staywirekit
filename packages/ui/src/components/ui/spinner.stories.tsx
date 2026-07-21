import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner />
      Loading units…
    </div>
  ),
};
