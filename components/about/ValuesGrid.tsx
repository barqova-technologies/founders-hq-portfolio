"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { Compass, Hammer, Sparkles, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES } from "@/lib/data";

const icons = [Sparkles, Hammer, Compass, ShieldCheck];

export default function ValuesGrid() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-value-card]", {
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
    <section ref={root} className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Believe"
          title="Four working rules that keep us honest."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = icons[i];
            return (
              <article
                key={v.title}
                data-value-card
                className={`relative overflow-hidden rounded-3xl border border-line bg-surface p-8 ${v.span}`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ink opacity-[0.04] blur-2xl" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-ink">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-snug text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                  {v.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-ink bg-ink p-10 text-primary md:p-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/60">
                One Promise
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold md:text-5xl">
                We&rsquo;ll keep the rooms small and curated.
              </h3>
              <p className="mt-3 max-w-xl text-primary/70">
                However big the community gets, cohorts, peer groups and
                roundtables won&rsquo;t. They&rsquo;ll stay under twelve people.
                They always will be.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/30 px-5 py-3 text-xs uppercase tracking-[0.3em] text-primary/80">
              Est. 2026 &middot; Lucknow &middot; India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
