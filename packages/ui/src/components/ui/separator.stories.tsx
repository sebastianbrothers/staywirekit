import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm font-medium">8 Michael St</p>
      <p className="text-sm text-muted-foreground">48 active units</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-3 text-sm">
        <span>Units</span>
        <Separator orientation="vertical" />
        <span>Leases</span>
        <Separator orientation="vertical" />
        <span>Tenants</span>
      </div>
    </div>
  ),
};
