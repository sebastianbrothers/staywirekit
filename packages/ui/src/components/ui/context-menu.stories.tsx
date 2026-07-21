import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "./context-menu";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/Context Menu",
  component: ContextMenu,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => {
    const [pinned, setPinned] = React.useState(true);
    const [region, setRegion] = React.useState("on");
    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-36 w-72 items-center justify-center rounded-md border border-dashed text-sm">
          Right-click a unit
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuLabel>Unit actions</ContextMenuLabel>
          <ContextMenuItem>
            Connect to us
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuCheckboxItem
            checked={pinned}
            onCheckedChange={setPinned}
          >
            Pin to network
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Region</ContextMenuLabel>
          <ContextMenuRadioGroup value={region} onValueChange={setRegion}>
            <ContextMenuRadioItem value="on">Ontario</ContextMenuRadioItem>
            <ContextMenuRadioItem value="bc">British Columbia</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};
