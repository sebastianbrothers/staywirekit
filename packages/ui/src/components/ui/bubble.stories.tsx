import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bubble, BubbleContent, BubbleGroup } from "./bubble";

const meta: Meta<typeof Bubble> = {
  title: "Components/Bubble",
  component: Bubble,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Bubble>;

export const Default: Story = {
  render: () => (
    <BubbleGroup className="w-80">
      <Bubble variant="secondary">
        <BubbleContent>Hi — is the garden room free this weekend?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>It is — two nights from Friday. Want me to hold it?</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
};
