import type { Metadata } from "next";
import JoinHero from "@/components/join/JoinHero";
import BenefitsList from "@/components/join/BenefitsList";
import JoinForm from "@/components/join/JoinForm";
import ApplicationSteps from "@/components/join/ApplicationSteps";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Mentor a founder, partner with us, attend a meetup, or join the Cohort 01 waitlist. We read every message and reply within 48 hours.",
};

export default function JoinPage() {
  return (
    <>
      <JoinHero />
      <BenefitsList />

      <section id="form" className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-ink">
              <span className="h-px w-10 bg-ink" /> Get in touch
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
              One form. <span className="brand-gradient-text">Any reason.</span>
            </h2>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.35em] sm:text-base">
              <span className="brand-gradient-text">Exclusive.</span>{" "}
              <span className="brand-gradient-text">Curated.</span>{" "}
              <span className="brand-gradient-text">Invite Only.</span>
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
              Tell us a little about you and what you&rsquo;re after - mentor,
              partner, or future founder. The same form holds the Cohort 01
              waitlist, so there&rsquo;s no second one.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <JoinForm />
          </div>
        </div>
      </section>

      <ApplicationSteps />
    </>
  );
}
