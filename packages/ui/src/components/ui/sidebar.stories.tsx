import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InfoIcon,
  CodeIcon,
  WifiIcon,
  UsersIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

const nav = [
  { title: "About", icon: InfoIcon, active: true },
  { title: "Developers", icon: CodeIcon, active: false },
  { title: "ISPs", icon: WifiIcon, active: false },
  { title: "Residents", icon: UsersIcon, active: false },
];

export const Default: Story = {
  render: () => (
    <div style={{ height: 400 }}>
      <SidebarProvider>
        <Sidebar collapsible="none">
          <SidebarHeader className="px-4 py-3 text-sm font-semibold">
            sendwire
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Network</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {nav.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={item.active}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="p-4">
          <SidebarTrigger />
          <p className="mt-2 text-sm text-muted-foreground">
            Main content area. Select a section from the sidebar.
          </p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
};
