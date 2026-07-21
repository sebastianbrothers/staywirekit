import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-[280px]">
      <CarouselContent>
        {["Riverside", "Maple", "Harbor", "Cedar"].map((name) => (
          <CarouselItem key={name}>
            <div className="flex h-40 items-center justify-center rounded-md border bg-muted text-lg font-medium">
              {name}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
