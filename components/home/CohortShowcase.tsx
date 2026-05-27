"use client";

import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COHORT_TRACKS } from "@/lib/data";

export default function CohortShowcase() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Who Cohort 01 Is For"
            title="The kinds of founders we're building the first room around."
            subtitle="We're sector-agnostic but conviction-heavy. A few of the tracks we're actively looking for."
          />
          <span className="hidden text-xs uppercase tracking-[0.3em] text-text-muted md:inline-flex md:items-center md:gap-2">
            <span className="hidden h-px w-10 bg-text-muted lg:inline-block" />
            Swipe / scroll
          </span>
        </div>
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 sm:px-8 lg:mt-16 lg:px-[max(4rem,calc((100vw-1280px)/2+2.5rem))]">
        {COHORT_TRACKS.map((c, i) => (
          <article
            key={c.title}
            className="group relative h-[440px] w-[80vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-3xl border border-line sm:h-[500px] sm:w-[400px] sm:max-w-none lg:h-[540px] lg:w-[440px]"
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
                  {c.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/80">{c.blurb}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  Cohort 01 · Now forming
                </p>
              </div>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                <ArrowUpRight size={18} className="text-white" />
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
        {/* trailing spacer so the last card can sit clear of the edge */}
        <div aria-hidden className="w-1 shrink-0 sm:w-5" />
      </div>
    </section>
  );
}
