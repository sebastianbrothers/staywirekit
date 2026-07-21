import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/Navigation Menu",
  component: NavigationMenu,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Buildings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[240px] gap-2 p-2">
              <NavigationMenuLink href="#">Riverside Tower</NavigationMenuLink>
              <NavigationMenuLink href="#">Maple Court</NavigationMenuLink>
              <NavigationMenuLink href="#">Harbor Lofts</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Reports</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[240px] gap-2 p-2">
              <NavigationMenuLink href="#">Uptime</NavigationMenuLink>
              <NavigationMenuLink href="#">Occupancy</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
