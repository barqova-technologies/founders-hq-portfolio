"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COHORT_COMPANIES } from "@/lib/data";

export default function CohortGrid() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cgrid-card]",
        { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: {
            trigger: root.current!,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Portfolio"
          title="Companies built inside the HQ."
          subtitle="A working snapshot of what alumni and current cohort founders are shipping right now."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COHORT_COMPANIES.map((c, i) => (
            <article
              key={c.name}
              data-cgrid-card
              className="group relative h-[360px] overflow-hidden rounded-3xl border border-line"
              style={{ background: c.gradient }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:5px_5px] opacity-60 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.75)_100%)]" />

              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    {c.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    {c.cohort}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold leading-tight text-white">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">{c.blurb}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                    <span>{c.founder}</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
