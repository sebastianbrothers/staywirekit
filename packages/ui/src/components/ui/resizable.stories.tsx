import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-[240px] w-[480px] rounded-md border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
          Building list
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
          Unit details
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
