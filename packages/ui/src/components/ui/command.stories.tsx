import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="w-[360px] rounded-lg border shadow-md">
      <CommandInput placeholder="Search buildings or actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Buildings">
          <CommandItem>Riverside Tower</CommandItem>
          <CommandItem>Maple Court</CommandItem>
          <CommandItem>Harbor Lofts</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            New work order
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Open reports
            <CommandShortcut>⌘R</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
