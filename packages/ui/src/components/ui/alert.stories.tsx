import type { Meta, StoryObj } from "@storybook/react-vite";
import { Terminal, AlertTriangle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <Terminal className="size-4" />
      <AlertTitle>Connected to us</AlertTitle>
      <AlertDescription>
        Your unit joined Canada&apos;s co-operation network. 48 active units are
        now reachable.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <AlertTriangle className="size-4" />
      <AlertTitle>Sync failed</AlertTitle>
      <AlertDescription>
        We couldn&apos;t reach the network. Check your connection and try again.
      </AlertDescription>
    </Alert>
  ),
};
