"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";

const tiles = [
  {
    label: "Founding Cohort",
    value: "Cohort 01",
    body: "Now forming - a small founding batch, kept deliberately tight.",
    span: "lg:col-span-7 lg:row-span-2",
    big: true,
  },
  {
    label: "Mentors",
    value: "Hand-picked",
    body: "Operators, founders and investors. Vetted, not crowd-sourced.",
    span: "lg:col-span-5",
  },
  {
    label: "Capital",
    value: "Curated room",
    body: "We're assembling the angels and funds closest to UP.",
    span: "lg:col-span-5",
  },
  {
    label: "Base",
    value: "Lucknow",
    body: "Starting in Lucknow, built for founders across Uttar Pradesh.",
    span: "lg:col-span-7",
  },
  {
    label: "Programs",
    value: "10 live, more soon",
    body: "Community, capital, talent, workspace, PR, growth - and more on the way.",
    span: "lg:col-span-5",
  },
];

export default function NetworkBento() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-bento]", {
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
          eyebrow="The Network"
          title="What we're building."
          subtitle="The moving parts we're standing up to make the community work - honestly, from day one."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:auto-rows-[180px]">
          {tiles.map((t) => (
            <article
              key={t.label}
              data-bento
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-7 ${t.span}`}
            >
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-ink opacity-[0.04] blur-2xl transition-opacity duration-700 group-hover:opacity-[0.08]" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                {t.label}
              </p>
              <div className="space-y-2">
                <p
                  className={`font-display font-bold leading-[1.05] text-ink ${
                    t.big ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
                  }`}
                >
                  {t.value}
                </p>
                <p className="max-w-md text-sm text-text-muted md:text-base">
                  {t.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
