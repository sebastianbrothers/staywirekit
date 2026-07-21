import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio Group",
  component: RadioGroup,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="weekly">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="daily" id="daily" />
        <Label htmlFor="daily">Daily digest</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="weekly" id="weekly" />
        <Label htmlFor="weekly">Weekly digest</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="never" id="never" />
        <Label htmlFor="never">Never</Label>
      </div>
    </RadioGroup>
  ),
};
