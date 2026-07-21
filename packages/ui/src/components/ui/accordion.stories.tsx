import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="what">
        <AccordionTrigger>What is sendwire?</AccordionTrigger>
        <AccordionContent>
          Canada&apos;s co-operation network — a place to connect to us and the
          people building together.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="units">
        <AccordionTrigger>How many units are active?</AccordionTrigger>
        <AccordionContent>
          There are 48 active units coordinating across the network right now.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="join">
        <AccordionTrigger>How do I join?</AccordionTrigger>
        <AccordionContent>
          Connect to us and a steward will onboard your co-operative within a
          week.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
