import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import NetworkBento from "@/components/ecosystem/NetworkBento";
import ProgramsDetail from "@/components/ecosystem/ProgramsDetail";
import CohortGrid from "@/components/ecosystem/CohortGrid";
import PartnersBlock from "@/components/ecosystem/PartnersBlock";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Ecosystem — Founder's HQ",
  description:
    "Six programs, 1,200+ founders, 84 portfolio companies, 200+ mentors and 60+ capital partners — connected by cohorts, meetups and demo days across six Indian cities.",
};

export default function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <NetworkBento />
      <ProgramsDetail />
      <CohortGrid />
      <PartnersBlock />

      <section className="section-pad">
        <div className="container-x">
          <div className="rounded-[2.5rem] border border-line bg-surface p-10 text-center md:p-20">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink">
              Ready To Plug In?
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Apply to the cohort. <br />
              <span className="brand-gradient-text">Or come to a meetup.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-text-muted">
              Cohort 13 applications close June 06. Meetups run every week. Drop
              us a line and we&rsquo;ll point you at the right room.
            </p>
            <div className="mt-10 inline-block">
              <Link href="/join">
                <MagneticButton variant="primary">
                  Join the Community <ArrowUpRight size={16} />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
