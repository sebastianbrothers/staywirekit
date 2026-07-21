import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="units">Units</TabsTrigger>
        <TabsTrigger value="alerts">Alerts</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Portfolio health summary for all staywire buildings.
      </TabsContent>
      <TabsContent value="units">
        Per-unit occupancy and maintenance status.
      </TabsContent>
      <TabsContent value="alerts">No active alerts right now.</TabsContent>
    </Tabs>
  ),
};
