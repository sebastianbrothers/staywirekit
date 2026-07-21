import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "staywire — Canada's co-operation network",
  description:
    "Open-access fibre networks that create new revenue, greater efficiency, and real choice for multi-family buildings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
