import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchIcon, MailIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group";

const meta: Meta<typeof InputGroup> = {
  title: "Components/Input Group",
  component: InputGroup,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: () => (
    <InputGroup className="w-80">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search units…" />
    </InputGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <InputGroup className="w-80">
      <InputGroupAddon>
        <MailIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="you" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@staywire.ca</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithButton: Story = {
  render: () => (
    <InputGroup className="w-80">
      <InputGroupInput placeholder="Invite a co-op…" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="default" size="sm">
          Invite
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="w-80">
      <InputGroupTextarea placeholder="Leave a note for the steward…" />
      <InputGroupAddon align="block-end">
        <InputGroupText>Markdown supported</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};
