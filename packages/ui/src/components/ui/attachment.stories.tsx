import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileText } from "lucide-react";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "./attachment";

const meta: Meta<typeof Attachment> = {
  title: "Components/Attachment",
  component: Attachment,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Attachment>;

export const Default: Story = {
  render: () => (
    <Attachment>
      <AttachmentMedia>
        <FileText />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>booking-confirmation.pdf</AttachmentTitle>
        <AttachmentDescription>128 KB · PDF</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
};

export const Group: Story = {
  render: () => (
    <AttachmentGroup>
      <Attachment>
        <AttachmentMedia>
          <FileText />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>day-sheet.csv</AttachmentTitle>
          <AttachmentDescription>12 KB · CSV</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment>
        <AttachmentMedia>
          <FileText />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>rate-card.pdf</AttachmentTitle>
          <AttachmentDescription>96 KB · PDF</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  ),
};
