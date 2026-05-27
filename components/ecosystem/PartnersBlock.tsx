"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";

const MENTOR_KINDS = [
  "Operator mentors",
  "Founder-mentors",
  "Investor mentors",
  "Function specialists",
  "Domain experts",
  "Office hours",
];

export default function PartnersBlock() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-partner-tile]", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Mentors & Capital"
          title="The bench we're building."
          subtitle="Curated, not crowd-sourced. We're assembling a small bench of operators, founders and investors - every name will have either built a company through scale or led an investment cycle."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <article
            data-partner-tile
            className="rounded-3xl border border-line bg-surface p-8 lg:col-span-7 lg:p-12"
          >
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                Mentor Bench
              </p>
              <span className="text-xs text-text-muted">Forming now</span>
            </div>
            <p className="mt-6 font-display text-5xl font-bold leading-none text-ink md:text-6xl">
              Hand-picked.
            </p>
            <p className="mt-4 max-w-md text-base text-text-muted md:text-lg">
              Matched to founders on real questions - not coffee chats. We&rsquo;d
              rather start with a handful of the right people than a directory of
              the wrong ones.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-ink sm:grid-cols-3">
              {MENTOR_KINDS.map((m) => (
                <li
                  key={m}
                  className="rounded-xl border border-line bg-primary px-3 py-2"
                >
                  {m}
                </li>
              ))}
            </ul>
          </article>

          <article
            data-partner-tile
            className="flex flex-col justify-between rounded-3xl border border-line bg-ink p-8 text-primary lg:col-span-5 lg:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">
              Our Promise
            </p>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug md:text-3xl">
              No borrowed logos. No rented credibility. We&rsquo;ll show you the
              bench as it&rsquo;s built - name by name.
            </p>
            <p className="mt-6 text-sm text-primary/70">
              Founder-funded and independent. Starting in Lucknow, 2026.
            </p>
          </article>

          <article
            data-partner-tile
            className="rounded-3xl border border-line bg-surface p-8 lg:col-span-12 lg:p-10"
          >
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                  Capital Room
                </p>
                <p className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
                  We&rsquo;re assembling the room.
                </p>
              </div>
              <p className="max-w-md text-sm text-text-muted md:text-base">
                Pre-seed angels through growth funds, starting with the investors
                and operators closest to the UP ecosystem. Cohort 01&rsquo;s demo
                day will put them in the same room as your slot.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
