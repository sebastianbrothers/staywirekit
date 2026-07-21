import type { Meta, StoryObj } from "@storybook/react-vite";
import { BuildingIcon, ChevronRightIcon, WifiIcon } from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./item";
import { Button } from "./button";

const meta: Meta<typeof Item> = {
  title: "Components/Item",
  component: Item,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: () => (
    <Item variant="outline" className="w-96">
      <ItemMedia variant="icon">
        <BuildingIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Maple Co-operative</ItemTitle>
        <ItemDescription>48 active residents across 3 buildings.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <ChevronRightIcon />
        </Button>
      </ItemActions>
    </Item>
  ),
};

export const Group: Story = {
  render: () => (
    <ItemGroup className="w-96 rounded-md border">
      <Item>
        <ItemMedia variant="icon">
          <BuildingIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>About</ItemTitle>
          <ItemDescription>What sendwire is and who it serves.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <WifiIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>ISPs</ItemTitle>
          <ItemDescription>Connectivity partners on the network.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};
