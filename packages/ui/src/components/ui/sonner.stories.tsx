import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";

import { Toaster } from "./sonner";
import { Button } from "./button";

const meta: Meta<typeof Toaster> = {
  title: "Components/Sonner",
  component: Toaster,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => toast("Unit invited to the network.")}>
        Show toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Co-operative onboarded.", {
            description: "A steward will follow up within a week.",
          })
        }
      >
        Show success toast
      </Button>
      <Toaster />
    </div>
  ),
};
