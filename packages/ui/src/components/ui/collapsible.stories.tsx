import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./collapsible";
import { Button } from "./button";
import { ChevronsUpDown } from "lucide-react";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="w-72 space-y-2"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">8 Michael St — 48 units</span>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon">
              <ChevronsUpDown />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-sm">Unit 101 — Occupied</div>
          <div className="rounded-md border px-4 py-2 text-sm">Unit 102 — Vacant</div>
          <div className="rounded-md border px-4 py-2 text-sm">Unit 103 — Occupied</div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
