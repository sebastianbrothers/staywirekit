import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusPill } from "./status-pill";

const meta: Meta = {
  title: "Components/StatusPill",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj;

export const Operational: Story = { render: () => <StatusPill live /> };
export const Degraded: Story = {
  render: () => <StatusPill status="degraded">Delivery delayed</StatusPill>,
};
export const Down: Story = { render: () => <StatusPill status="down">Webhooks paused</StatusPill> };
