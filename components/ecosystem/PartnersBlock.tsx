"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PARTNERS } from "@/lib/data";

export default function PartnersBlock() {
  const root = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Infinite marquee for partner logos
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ctx = gsap.context(() => {
      const half = track.scrollWidth / 2;
      gsap.fromTo(
        track,
        { x: -half },
        { x: 0, duration: 50, ease: "none", repeat: -1 }
      );
    }, track);
    return () => ctx.revert();
  }, []);

  // Reveal animations
  useEffect(() => {
    if (!root.current) return;
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

  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section ref={root} className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Capital &amp; Mentor Network"
          title="The people the community runs alongside."
          subtitle="A curated bench of capital partners and operator mentors. Vetted, not crowd-sourced — every name has either run a company through scale or led an investment cycle."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <article
            data-partner-tile
            className="rounded-3xl border border-line bg-surface p-8 lg:col-span-7 lg:p-12"
          >
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                Mentor Collective
              </p>
              <span className="text-xs text-text-muted">Updated quarterly</span>
            </div>
            <p className="mt-6 font-display text-6xl font-bold leading-none text-ink md:text-7xl lg:text-8xl">
              200+
            </p>
            <p className="mt-4 max-w-md text-base text-text-muted md:text-lg">
              Vetted operators, founders and investors. Matched to founders on
              real questions — not coffee chats.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-ink sm:grid-cols-3">
              {[
                "Operator mentors",
                "Founder-mentors",
                "Investor mentors",
                "Function specialists",
                "Domain experts",
                "Quarterly office hours",
              ].map((m) => (
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
            className="rounded-3xl border border-line bg-ink p-8 text-primary lg:col-span-5 lg:p-10"
          >
            <Quote size={28} className="text-white" />
            <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
              &ldquo;The best mentor I&rsquo;ve ever had was a founder who said
              one thing in fifteen minutes. The HQ is the only place
              that&rsquo;s consistently produced that kind of conversation.&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                MK
              </div>
              <div>
                <p className="text-sm font-semibold">Maya Krishnan</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Founder &middot; FHQ
                </p>
              </div>
            </div>
          </article>

          <article
            data-partner-tile
            className="rounded-3xl border border-line bg-surface p-8 lg:col-span-12 lg:p-10"
          >
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                  Capital Partners
                </p>
                <p className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
                  60+ funds in the room.
                </p>
              </div>
              <p className="max-w-md text-sm text-text-muted md:text-base">
                Pre-seed angels through growth funds, plus partner CVCs. Every
                cohort demo day puts them in the same room as your six-minute
                slot.
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
              <div ref={trackRef} className="flex w-max items-center gap-4">
                {items.map((c, i) => (
                  <div
                    key={`${c}-${i}`}
                    className="inline-flex h-16 w-36 items-center justify-center rounded-2xl border border-line bg-primary text-text-muted"
                  >
                    <span className="font-display text-xl font-bold tracking-[0.2em]">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
