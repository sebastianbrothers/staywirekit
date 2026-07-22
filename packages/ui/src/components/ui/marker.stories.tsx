import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircle2 } from "lucide-react";
import { Marker, MarkerContent, MarkerIcon } from "./marker";

const meta: Meta<typeof Marker> = {
  title: "Components/Marker",
  component: Marker,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Marker>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Marker>
        <MarkerIcon>
          <CheckCircle2 />
        </MarkerIcon>
        <MarkerContent>Booking confirmed — SW-SEED01</MarkerContent>
      </Marker>
    </div>
  ),
};

export const Separator: Story = {
  render: () => (
    <div className="w-80">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
    </div>
  ),
};
