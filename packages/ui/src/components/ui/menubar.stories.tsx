import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./menubar";

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: () => {
    const [region, setRegion] = React.useState("on");
    const [showInactive, setShowInactive] = React.useState(false);
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Network</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Connect to us <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>View 48 active units</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Disconnect</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              checked={showInactive}
              onCheckedChange={setShowInactive}
            >
              Show inactive units
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value={region} onValueChange={setRegion}>
              <MenubarRadioItem value="on">Ontario</MenubarRadioItem>
              <MenubarRadioItem value="bc">British Columbia</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};
