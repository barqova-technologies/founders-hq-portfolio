"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-tcard]", {
        y: 100,
        opacity: 0,
        stagger: 0.18,
        duration: 1.2,
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
          eyebrow="Words That Move Us"
          title="Quiet wins. Loud reactions."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              data-tcard
              className="relative flex flex-col rounded-3xl border border-line bg-primary p-8"
            >
              <Quote className="text-ink" size={28} />
              <p className="mt-6 text-base leading-relaxed text-ink md:text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-primary"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg,#0A0A0A,#3F3F3F)"
                        : "linear-gradient(135deg,#1A1A1A,#737373)",
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    {t.role} &middot; {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
