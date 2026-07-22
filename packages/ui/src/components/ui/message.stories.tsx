import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "./message";
import { Bubble, BubbleContent } from "./bubble";

const meta: Meta<typeof Message> = {
  title: "Components/Message",
  component: Message,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  render: () => (
    <MessageGroup className="w-96">
      <Message>
        <MessageAvatar>
          <span className="flex size-8 items-center justify-center text-xs font-medium">G</span>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="secondary">
            <BubbleContent>Do you have parking on site?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>Yes — two spots behind the house, first come.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
};
