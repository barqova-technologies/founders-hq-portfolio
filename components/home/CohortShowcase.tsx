"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COHORT_COMPANIES } from "@/lib/data";

export default function CohortShowcase() {
  const root = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current || !trackRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!isDesktop) return;

      const track = trackRef.current!;
      const distance = () => track.scrollWidth - window.innerWidth + 64;

      gsap.to(track, {
        x: () => `-${distance()}px`,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.fromTo(
        "[data-cohort-card]",
        { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          stagger: 0.08,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: root.current!,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-primary">
      <div className="container-x pt-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Built In The HQ"
            title="A few of the companies the community is shipping."
            subtitle="A rotating cut of cohort companies — climate-tech to AI infrastructure."
          />
          <span className="hidden text-xs uppercase tracking-[0.3em] text-text-muted md:inline-flex md:items-center md:gap-2">
            <span className="hidden h-px w-10 bg-text-muted lg:inline-block" />
            Scroll horizontally
          </span>
        </div>
      </div>

      <div className="mt-16 lg:mt-24">
        <div ref={trackRef} className="flex w-max gap-6 px-6 sm:px-10 lg:px-16">
          {COHORT_COMPANIES.map((c, i) => (
            <article
              key={c.name}
              data-cohort-card
              className="group relative h-[420px] w-[320px] shrink-0 overflow-hidden rounded-3xl border border-line sm:h-[520px] sm:w-[420px] lg:h-[560px] lg:w-[480px]"
              style={{ background: c.gradient }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:5px_5px] opacity-60" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                {c.category}
              </div>
              <div className="absolute right-6 top-6 text-xs font-semibold tracking-[0.25em] text-white/70">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                    {c.name}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-white/80">
                    {c.blurb}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">
                    {c.founder} &middot; {c.cohort}
                  </p>
                </div>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-ink">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
