import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArtifactInset } from "./artifact-inset";

const meta: Meta = {
  title: "Components/ArtifactInset",
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ArtifactInset footnote="Free cancellation until Aug 3, 5:00 PM local time." />
  ),
};

export const OnContrastBand: Story = {
  render: () => (
    <div className="flex justify-center rounded-lg bg-secondary p-10">
      <ArtifactInset footnote="Free cancellation until Aug 3, 5:00 PM local time." />
    </div>
  ),
};

export const Pending: Story = {
  render: () => (
    <ArtifactInset
      status="pending"
      totalLabel="CA$397.38 due on confirmation"
      footnote="We hold the room while the payment settles."
    />
  ),
};
