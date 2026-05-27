import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Founder's HQ in Lucknow.",
};

export default function ContactPage() {
  return (
    <LegalLayout title="Contact" updated="27 May 2026">
      <p>
        We read every message and usually reply within 48 hours. The fastest way
        to reach us is the form on the <Link href="/join">Join</Link> page - it
        doubles as the cohort application.
      </p>

      <h2>Email</h2>
      <p>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      {SITE.phone && (
        <>
          <h2>Phone</h2>
          <p>
            <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>{SITE.phone}</a>
          </p>
        </>
      )}

      <h2>Address</h2>
      <p>{SITE.address}</p>

      <h2>Operated by</h2>
      <p>
        [Legal entity name], [entity type] - registered at {SITE.address}. GSTIN:
        [if registered].
      </p>
    </LegalLayout>
  );
}
