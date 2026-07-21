import { Header2 } from "@staywirekit/ui/blocks/header/header2";
import { Hero6 } from "@staywirekit/ui/blocks/hero/hero6";
import { Feature6 } from "@staywirekit/ui/blocks/feature/feature6";
import { Feature1 } from "@staywirekit/ui/blocks/feature/feature1";
import { Stats2 } from "@staywirekit/ui/blocks/stats/stats2";
import { FAQ2 } from "@staywirekit/ui/blocks/faq/faq2";
import { Cta3 } from "@staywirekit/ui/blocks/cta/cta3";
import { Footer2 } from "@staywirekit/ui/blocks/footer/footer2";

export default function Home() {
  return (
    <main>
      <Header2 />
      <Hero6 />
      <Feature6
        badge="The wire"
        title="Three calls to a confirmed stay"
        description="Availability, quote, booking. A firm price with itemized taxes and a policy snapshot — then an atomic confirm. Replays are safe; the same idempotency key returns the same booking."
        items={[
          {
            title: "Availability that tells the truth",
            description:
              "Every room, every night, with structured reasons when a date can't be booked — never a silent omission.",
          },
          {
            title: "Quotes that hold their price",
            description:
              "Fifteen-minute price locks with per-night lines and the cancellation policy frozen at quote time.",
          },
          {
            title: "Bookings that can't collide",
            description:
              "Double-booking is refused by the database itself. Application bugs can't overbook a room.",
          },
          {
            title: "Agents book too",
            description:
              "The MCP server speaks the same API. A voice agent can quote, confirm, and read back the reference.",
          },
        ]}
      />
      <Feature1
        badge="For your stack"
        title="Built for the team that ships"
        description="One secret key, one error envelope, one docs page that never drifts from the implementation."
        items={[
          {
            title: "Webhooks with receipts",
            description:
              "booking.created, payment.refunded, no_show — signed, replayable, delivered from the event log.",
          },
          {
            title: "Emails that land",
            description:
              "Confirmation and cancellation notices with itemized totals and a cancel link that just works.",
          },
          {
            title: "An admin your host will use",
            description:
              "Calendar, day sheet, manual bookings, refunds computed from the policy snapshot — not from memory.",
          },
        ]}
      />
      <Stats2
        badge="In production"
        title="Numbers from the wire"
        description="Measured on the live engine, not projected."
        stats={[
          { value: "180ms", delta: "p50", label: "quote to price" },
          { value: "0", delta: "ever", label: "double-bookings stored" },
          { value: "6", delta: "tools", label: "on the MCP server" },
          { value: "100%", delta: "of routes", label: "in the public API" },
        ]}
      />
      <FAQ2
        badge="Questions"
        title="Asked by builders"
        description="The short answers. The long ones live in the docs."
        cta="Read the docs"
        items={[
          {
            question: "How does staywire prevent double-bookings?",
            answer:
              "A Postgres exclusion constraint on the room and stay range. It's the last line of defense — even a logic bug upstream can't store two overlapping confirmed bookings.",
          },
          {
            question: "Can I keep my own website?",
            answer:
              "Yes. The embed drops into your site and talks to the same public API as everyone else. No iframe, no redirect.",
          },
          {
            question: "What happens when a guest cancels?",
            answer:
              "The refund is computed from the policy snapshot taken at booking time, executed on the original payment, and the room frees immediately.",
          },
          {
            question: "Do agents get a different API?",
            answer:
              "No. The MCP server is a thin adapter over the same core. Same availability math, same idempotency, same error codes.",
          },
        ]}
      />
      <Cta3 />
      <Footer2 />
    </main>
  );
}
