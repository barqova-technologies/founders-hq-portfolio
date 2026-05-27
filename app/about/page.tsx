import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import OriginStory from "@/components/about/OriginStory";
import Timeline from "@/components/about/Timeline";
import ValuesGrid from "@/components/about/ValuesGrid";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we're starting Founder's HQ in Lucknow, the roadmap ahead, and the four working rules we build against.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <Timeline />
      <ValuesGrid />

      <section className="section-pad">
        <div className="container-x">
          <div className="rounded-[2.5rem] border border-line bg-surface p-10 text-center md:p-20">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink">
              Curious how it works?
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
              See what&rsquo;s inside <br />
              <span className="brand-gradient-text">the ecosystem.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-text-muted">
              Six connected programs, one founding cohort, and a community
              we&rsquo;re building in the open. Take a closer look.
            </p>
            <div className="mt-10 inline-block">
              <Link href="/ecosystem">
                <MagneticButton variant="primary">
                  Explore the Ecosystem <ArrowUpRight size={16} />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
