import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "./button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Connect to us</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Join Canada&apos;s co-operation network</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
