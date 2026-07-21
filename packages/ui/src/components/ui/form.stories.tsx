import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";

type ConnectValues = {
  email: string;
};

function ConnectForm() {
  const form = useForm<ConnectValues>({
    defaultValues: { email: "" },
  });

  const onSubmit = (values: ConnectValues) => {
    // eslint-disable-next-line no-console
    console.log("submitted", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-80 space-y-6">
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@sendwire.com" {...field} />
              </FormControl>
              <FormDescription>We'll only use this to connect to us.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Connect</Button>
      </form>
    </Form>
  );
}

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => <ConnectForm />,
};
