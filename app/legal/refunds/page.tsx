import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description:
    "How cancellations and refunds work for Founder's HQ cohorts, memberships and plans.",
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Cancellation & Refund Policy" updated="27 May 2026">
      <p>
        This policy explains how cancellations and refunds work for paid{" "}
        {SITE.name} offerings. Submitting an application is always free - fees
        only apply once you join a paid cohort, membership or workspace plan.
      </p>

      <h2>1. Before payment</h2>
      <p>
        You can withdraw an application at any time at no cost. We will tell you
        the exact fee and what it covers before you are asked to pay.
      </p>

      <h2>2. Cancellation by you</h2>
      <ul>
        <li>
          <strong>Within 7 days of payment</strong> and before the cohort,
          membership or plan begins: eligible for a full refund, less any
          payment-gateway charges where applicable.
        </li>
        <li>
          <strong>After the program/plan has started</strong>: fees are
          generally non-refundable, though we may consider a pro-rated refund at
          our discretion for exceptional circumstances.
        </li>
      </ul>

      <h2>3. Cancellation by us</h2>
      <p>
        If we cancel a cohort, event or plan before it begins, you will receive
        a full refund. If we end your participation for breach of our{" "}
        <a href="/legal/terms">Terms</a> or code of conduct, fees are
        non-refundable.
      </p>

      <h2>4. How to request a refund</h2>
      <p>
        Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with your name,
        the payment reference and the reason. We aim to respond within 5
        business days.
      </p>

      <h2>5. How refunds are processed</h2>
      <p>
        Approved refunds are issued to the original payment method through our
        payment gateway (Razorpay), typically within 7&ndash;10 business days
        of approval. Timing of the credit to your account depends on your bank
        or card issuer.
      </p>

      <h2>6. Non-refundable items</h2>
      <p>
        One-time application or processing fees (if any) and amounts for
        services already delivered are non-refundable.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about cancellations or refunds? Email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </LegalLayout>
  );
}
