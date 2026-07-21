import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Table>;

const buildings = [
  { name: "Riverside Tower", units: 124, uptime: "99.98%" },
  { name: "Maple Court", units: 48, uptime: "99.91%" },
  { name: "Harbor Lofts", units: 86, uptime: "100.00%" },
  { name: "Cedar Heights", units: 210, uptime: "99.84%" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Live status across sendwire-managed buildings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Building</TableHead>
          <TableHead>Units</TableHead>
          <TableHead className="text-right">Uptime</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {buildings.map((b) => (
          <TableRow key={b.name}>
            <TableCell className="font-medium">{b.name}</TableCell>
            <TableCell>{b.units}</TableCell>
            <TableCell className="text-right">{b.uptime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
