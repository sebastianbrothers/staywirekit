import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "staywire — the booking engine for independent stays",
  description:
    "The API-first booking engine for independent stays. Quote, confirm, and deliver bookings from your own product — double-booking is impossible at the database layer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
