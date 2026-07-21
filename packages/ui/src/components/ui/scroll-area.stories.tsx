import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "./scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/Scroll Area",
  component: ScrollArea,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const units = Array.from({ length: 30 }, (_, i) => `Unit ${i + 1}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[240px] w-[240px] rounded-md border p-4">
      <h4 className="mb-3 text-sm font-medium">Riverside Tower units</h4>
      {units.map((unit) => (
        <div key={unit} className="py-1 text-sm">
          {unit}
        </div>
      ))}
    </ScrollArea>
  ),
};
