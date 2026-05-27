import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Founder's HQ collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="27 May 2026">
      <p>
        This Privacy Policy explains how {SITE.name} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects, uses and protects your information when you
        use our website and Services. We follow applicable Indian law, including
        the Digital Personal Data Protection Act, 2023.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Application data</strong> you submit through our form: name,
          email, company/startup, stage, and your message.
        </li>
        <li>
          <strong>Payment data</strong>: when you pay a fee, our payment gateway
          (Razorpay) processes your payment. We receive confirmation of payment
          but do not collect or store your full card or banking details.
        </li>
        <li>
          <strong>Usage data</strong>: basic, non-identifying analytics about
          how the site is used (if analytics are enabled).
        </li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>To review applications and run our cohorts, meetups and programs.</li>
        <li>To contact you about your application and community activity.</li>
        <li>To process payments and provide receipts.</li>
        <li>To improve the website and Services.</li>
      </ul>

      <h2>3. Who we share it with</h2>
      <p>
        We share information only with service providers that help us run the
        Services - our form/email provider and our payment gateway (Razorpay) - and where required by law. We do not sell your personal data.
      </p>

      <h2>4. Cookies & analytics</h2>
      <p>
        The site uses minimal cookies necessary for it to function, and
        optionally privacy-respecting analytics. You can control cookies through
        your browser settings.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We keep your information only as long as needed for the purposes above
        or as required by law, then delete or anonymise it.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Subject to applicable law, you may request access to, correction of, or
        deletion of your personal data, and withdraw consent. To exercise these
        rights, email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2>7. Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect your
        information. No method of transmission or storage is completely secure,
        and we cannot guarantee absolute security.
      </p>

      <h2>8. Children</h2>
      <p>
        The Services are not directed to anyone under 18, and we do not
        knowingly collect their data.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update this policy; the &ldquo;last updated&rdquo; date reflects
        the current version.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy questions, email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or write to us at{" "}
        {SITE.address}.
      </p>
    </LegalLayout>
  );
}
