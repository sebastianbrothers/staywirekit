import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "./empty";
import { Button } from "./button";
import { Building2 } from "lucide-react";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Building2 />
          </EmptyMedia>
          <EmptyTitle>No units yet</EmptyTitle>
          <EmptyDescription>
            Add your first unit to 8 Michael St to start tracking occupancy.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Add unit</Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
};
