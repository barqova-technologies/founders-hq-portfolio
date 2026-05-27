import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern use of the Founder's HQ website and community.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="27 May 2026">
      <p>
        These Terms & Conditions (&ldquo;Terms&rdquo;) govern your use of the{" "}
        {SITE.name} website and your participation in our community, cohorts,
        meetups and related programs (together, the &ldquo;Services&rdquo;). By
        using the Services you agree to these Terms.
      </p>

      <h2>1. Who we are</h2>
      <p>
        {SITE.name} is a founder community based in {SITE.city}, India,
        operated by [legal entity name], [entity type], having its registered
        office at {SITE.address}. References to &ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo; mean that entity.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and able to enter into a binding
        contract to use the Services. By applying you confirm the information
        you provide is accurate and complete.
      </p>

      <h2>3. Applications & membership</h2>
      <p>
        Submitting an application does not guarantee admission to a cohort,
        meetup or the community. We review applications and admit members at our
        discretion. We may decline, suspend or revoke participation for conduct
        that harms the community or breaches these Terms.
      </p>

      <h2>4. Code of conduct</h2>
      <ul>
        <li>Treat other members, mentors and staff with respect.</li>
        <li>
          Keep what is shared in private rooms private unless you have consent
          to share it.
        </li>
        <li>No harassment, discrimination, spam or unsolicited pitching.</li>
        <li>Do not misrepresent yourself, your company or your affiliations.</li>
      </ul>

      <h2>5. Fees & payments</h2>
      <p>
        Applications are free. Where a cohort, membership or workspace plan
        carries a fee, the amount and what it covers will be communicated to you
        before payment. Payments are processed by our third-party payment
        gateway (Razorpay); we do not store your card details. All fees are in
        Indian Rupees (INR) unless stated otherwise and are exclusive of
        applicable taxes (e.g. GST), which will be added where required.
      </p>

      <h2>6. Refunds & cancellation</h2>
      <p>
        Refunds and cancellations are governed by our{" "}
        <a href="/legal/refunds">Cancellation & Refund Policy</a>.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The website, brand, content and materials are owned by us or our
        licensors and are protected by law. You may not copy, reproduce or
        redistribute them without permission. You retain ownership of the
        information you submit to us.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The Services are provided &ldquo;as is&rdquo;. We make no guarantee of
        any specific outcome - including funding, introductions or business
        results - from participation. Any mentor, investor or partner
        interaction is facilitated, not warranted, by us.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for indirect,
        incidental or consequential losses arising from your use of the
        Services. Our total liability is limited to the fees you paid to us in
        the 12 months preceding the claim.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the Services at any time. We may suspend or end your
        access if you breach these Terms or the code of conduct.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of India. Courts at {SITE.city},
        Uttar Pradesh, have exclusive jurisdiction over any disputes, subject to
        applicable law.
      </p>

      <h2>12. Changes</h2>
      <p>
        We may update these Terms from time to time. The &ldquo;last
        updated&rdquo; date above reflects the current version. Continued use
        after changes means you accept the updated Terms.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or see our{" "}
        <a href="/contact">Contact</a> page.
      </p>
    </LegalLayout>
  );
}
