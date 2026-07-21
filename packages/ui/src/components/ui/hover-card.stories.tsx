import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./hover-card";
import { Button } from "./button";

const meta: Meta<typeof HoverCard> = {
  title: "Components/Hover Card",
  component: HoverCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@sendwire</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Canada&apos;s co-operation network</h4>
          <p className="text-sm text-muted-foreground">
            48 active units building together. Connect to us to join.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
