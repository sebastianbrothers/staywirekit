import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart";

const meta: Meta<typeof ChartContainer> = {
  title: "Components/Chart",
  component: ChartContainer,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const chartData = [
  { month: "Jan", occupancy: 86 },
  { month: "Feb", occupancy: 91 },
  { month: "Mar", occupancy: 88 },
  { month: "Apr", occupancy: 94 },
  { month: "May", occupancy: 97 },
];

const chartConfig = {
  occupancy: {
    label: "Occupancy %",
    color: "var(--color-chart-1)",
  },
} satisfies ChartConfig;

export const Default: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-[240px] w-[480px]">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="occupancy" fill="var(--color-occupancy)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};
