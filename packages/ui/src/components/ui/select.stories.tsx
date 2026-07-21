import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Label } from "./label";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Pick a topic" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="general">General</SelectItem>
        <SelectItem value="support">Support</SelectItem>
        <SelectItem value="partnerships">Partnerships</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Grouped: Story = {
  render: () => (
    <div className="grid w-56 gap-2">
      <Label htmlFor="topic">How can we connect?</Label>
      <Select>
        <SelectTrigger id="topic" className="w-56">
          <SelectValue placeholder="Choose a channel" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Inbound</SelectLabel>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Social</SelectLabel>
            <SelectItem value="x">X</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};
