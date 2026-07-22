import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "./message-scroller";
import { Bubble, BubbleContent } from "./bubble";

const meta: Meta<typeof MessageScroller> = {
  title: "Components/MessageScroller",
  component: MessageScroller,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof MessageScroller>;

export const Default: Story = {
  render: () => (
    <MessageScroller className="h-72 w-96 rounded-lg border">
      <MessageScrollerViewport>
        <MessageScrollerContent className="p-3">
          {Array.from({ length: 12 }, (_, i) => (
            <MessageScrollerItem key={i}>
              <Bubble
                variant={i % 2 ? "default" : "secondary"}
                align={i % 2 ? "end" : "start"}
              >
                <BubbleContent>Message {i + 1}</BubbleContent>
              </Bubble>
            </MessageScrollerItem>
          ))}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  ),
};
