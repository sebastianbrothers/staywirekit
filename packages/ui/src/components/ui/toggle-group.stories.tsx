import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "./toggle-group";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/Toggle Group",
  component: ToggleGroup,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
