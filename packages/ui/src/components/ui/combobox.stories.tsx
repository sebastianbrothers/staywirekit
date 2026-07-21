import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./combobox";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const buildings = [
  "Riverside Tower",
  "Maple Court",
  "Harbor Lofts",
  "Cedar Heights",
];

export const Default: Story = {
  render: () => (
    <div className="w-[280px]">
      <Combobox items={buildings}>
        <ComboboxInput placeholder="Select a building..." />
        <ComboboxContent>
          <ComboboxEmpty>No building found.</ComboboxEmpty>
          <ComboboxList>
            {buildings.map((b) => (
              <ComboboxItem key={b} value={b}>
                {b}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};
