import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronLeftIcon, ChevronRightIcon, CopyIcon } from "lucide-react";

import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "./button-group";
import { Button } from "./button";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">About</Button>
      <Button variant="outline">Developers</Button>
      <Button variant="outline">ISPs</Button>
      <Button variant="outline">Residents</Button>
    </ButtonGroup>
  ),
};

export const WithSeparatorAndText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <ChevronLeftIcon /> Prev
      </Button>
      <ButtonGroupText>Unit 24</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="outline">
        Next <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">
        <CopyIcon /> Copy link
      </Button>
      <Button variant="outline">Share</Button>
      <Button variant="outline">Archive</Button>
    </ButtonGroup>
  ),
};
