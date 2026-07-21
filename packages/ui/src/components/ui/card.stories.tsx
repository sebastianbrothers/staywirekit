import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "./button";
import { MoreHorizontal } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Occupancy</CardTitle>
        <CardDescription>48 active units — 8 Michael St</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">94%</p>
        <p className="text-sm text-muted-foreground">
          45 of 48 units occupied this month
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View units</Button>
      </CardFooter>
    </Card>
  ),
};
