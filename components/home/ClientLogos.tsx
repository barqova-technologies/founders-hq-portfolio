"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PARTNERS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientLogos() {
  const trackRef = useRef<HTMLDivElement | null>(null);

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

  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="section-pad bg-primary">
      <div className="container-x mb-12">
        <SectionHeading
          eyebrow="Capital & Ecosystem Partners"
          title="The funds and networks the HQ runs alongside."
          align="center"
        />
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-primary to-transparent" />
        <div ref={trackRef} className="flex w-max items-center gap-6 px-6">
          {items.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="inline-flex h-20 w-44 items-center justify-center rounded-2xl border border-line bg-surface text-text-muted transition-colors hover:border-ink hover:text-ink"
            >
              <span className="font-display text-2xl font-bold tracking-[0.2em]">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
