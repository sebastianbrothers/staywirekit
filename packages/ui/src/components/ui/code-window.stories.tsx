import type { Meta, StoryObj } from "@storybook/react-vite";
import { CodeWindow } from "./code-window";

const meta: Meta = {
  title: "Components/CodeWindow",
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <CodeWindow
      tabs={[
        {
          label: "curl",
          code: `curl https://api.staywire.dev/v1/quotes \\
  -H "Authorization: Bearer sk_test_..." \\
  -d room_id=rm_12 -d check_in=2026-08-10 \\
  -d check_out=2026-08-12 -d guests=2`,
        },
        {
          label: "Node.js",
          code: `const quote = await staywire.quotes.create({
  room_id: "rm_12",
  check_in: "2026-08-10",
  check_out: "2026-08-12",
  guests: 2,
});`,
        },
        {
          label: "MCP",
          code: `> quote_stay room:"Garden Room" aug 10–12, 2 guests
Garden Room, 2 nights, CA$179/night,
CA$397.38 total incl. tax — quote expires 15:42 UTC`,
        },
      ]}
    />
  ),
};

export const Chromeless: Story = {
  render: () => <CodeWindow chromeless tabs={[{ label: "log", code: "booking.created  SW-4F7K2X  confirmed  180ms" }]} />,
};
