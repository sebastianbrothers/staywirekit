import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/Aspect Ratio",
  component: AspectRatio,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md bg-muted">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=640"
          alt="8 Michael St"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};
