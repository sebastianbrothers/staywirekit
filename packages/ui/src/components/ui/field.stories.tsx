import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./field";
import { Input } from "./input";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="you@sendwire.com" />
        <FieldDescription>We'll use this to connect with you.</FieldDescription>
      </Field>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-80">
      <Field data-invalid="true">
        <FieldLabel htmlFor="email-err">Email</FieldLabel>
        <Input id="email-err" type="email" aria-invalid placeholder="you@sendwire.com" />
        <FieldError errors={[{ message: "Enter a valid email address." }]} />
      </Field>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="w-80">
      <FieldSet>
        <FieldLegend>Connect to us</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" placeholder="Ada Lovelace" />
          </Field>
          <FieldSeparator>then</FieldSeparator>
          <Field orientation="horizontal">
            <Checkbox id="subscribe" defaultChecked />
            <FieldContent>
              <FieldTitle>Subscribe</FieldTitle>
              <FieldDescription>Get the weekly Sendwire digest.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};
