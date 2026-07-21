import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "./native-select";
import { Label } from "./label";

const meta: Meta<typeof NativeSelect> = {
  title: "Components/Native Select",
  component: NativeSelect,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "default"] },
  },
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args} defaultValue="email">
      <NativeSelectOption value="email">Email</NativeSelectOption>
      <NativeSelectOption value="phone">Phone</NativeSelectOption>
      <NativeSelectOption value="social">Social</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Grouped: Story = {
  render: () => (
    <div className="grid w-56 gap-2">
      <Label htmlFor="channel">Connect to us</Label>
      <NativeSelect id="channel" defaultValue="email">
        <NativeSelectOptGroup label="Inbound">
          <NativeSelectOption value="email">Email</NativeSelectOption>
          <NativeSelectOption value="phone">Phone</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Social">
          <NativeSelectOption value="x">X</NativeSelectOption>
          <NativeSelectOption value="linkedin">LinkedIn</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled defaultValue="email">
      <NativeSelectOption value="email">Email</NativeSelectOption>
      <NativeSelectOption value="phone">Phone</NativeSelectOption>
    </NativeSelect>
  ),
};
