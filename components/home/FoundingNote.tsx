"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const REASONS = [
  {
    title: "You shape it",
    body: "Cohort 01 founders set the tone for everything that follows. The earliest rooms are the ones you help build.",
  },
  {
    title: "Smallest it'll ever be",
    body: "The network is most useful when everyone in it knows everyone. It starts here - before the room gets crowded.",
  },
  {
    title: "Built in the open",
    body: "No fabricated track record, no borrowed logos. We'd rather earn your trust than rent it. This is day one, and we're saying so.",
  },
];

export default function FoundingNote() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-fn]", {
        y: 80,
        opacity: 0,
        stagger: 0.12,
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
    <section ref={root} className="section-pad relative bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-fade"
      />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why Join Something New"
          title="We're new. That's the point."
          subtitle="Founder's HQ is starting in Lucknow in 2026. Here's why the first room is the one to be in."
        />

        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 no-scrollbar sm:mx-0 sm:px-0 sm:pb-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {REASONS.map((r) => (
            <article
              key={r.title}
              data-fn
              className="flex min-w-[80%] shrink-0 snap-start flex-col rounded-3xl border border-line bg-primary p-8 sm:min-w-[46%] lg:min-w-0 lg:shrink"
            >
              <h3 className="font-display text-2xl font-semibold leading-snug text-ink">
                {r.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {r.body}
              </p>
            </article>
          ))}
        </div>

        <div
          data-fn
          className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink bg-ink p-8 text-primary md:flex-row md:items-center md:p-10"
        >
          <p className="max-w-2xl font-display text-xl font-semibold leading-snug md:text-2xl">
            We&rsquo;re not selling you a community that already exists. We&rsquo;re
            inviting you to help start one.
          </p>
          <Link href="/join" className="inline-block">
            <span className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
              Become a mentor
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
