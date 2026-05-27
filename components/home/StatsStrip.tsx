"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { FOUNDING_FACTS } from "@/lib/data";

export default function StatsStrip() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-stat]", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current!,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative border-y border-line bg-primary py-16 md:py-20"
    >
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {FOUNDING_FACTS.map((s, i) => (
          <div
            key={s.label}
            data-stat
            className={`flex flex-col gap-3 ${
              i !== 0 ? "lg:border-l lg:border-line lg:pl-10" : ""
            }`}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="font-display text-3xl font-bold leading-none text-ink md:text-4xl lg:text-5xl">
              {s.value}
            </div>
            <p className="text-sm text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
