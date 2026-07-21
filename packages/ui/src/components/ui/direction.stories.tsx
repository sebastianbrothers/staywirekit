import type { Meta, StoryObj } from "@storybook/react-vite";

import { DirectionProvider } from "./direction";
import { Button } from "./button";

// DirectionProvider is a context-only wrapper (radix-ui DirectionProvider).
// It has no visuals of its own — it sets the reading direction (LTR/RTL) for
// descendant Radix components. These stories render children inside it so the
// `dir` propagation is observable on the rendered DOM.
const meta: Meta<typeof DirectionProvider> = {
  title: "Components/Direction",
  component: DirectionProvider,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof DirectionProvider>;

export const LeftToRight: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div dir="ltr" className="flex gap-2">
        <Button>About</Button>
        <Button variant="outline">Developers</Button>
      </div>
    </DirectionProvider>
  ),
};

export const RightToLeft: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div dir="rtl" className="flex gap-2">
        <Button>حول</Button>
        <Button variant="outline">المطورون</Button>
      </div>
    </DirectionProvider>
  ),
};
