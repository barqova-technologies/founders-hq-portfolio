"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MARQUEE_WORDS } from "@/lib/data";

export default function MarqueeStrip() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const trackRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const track = trackRef.current;
    const track2 = trackRef2.current;
    if (!track || !track2) return;

    const ctx = gsap.context(() => {
      const half = track.scrollWidth / 2;
      const tween = gsap.to(track, {
        x: -half,
        duration: 40,
        ease: "none",
        repeat: -1,
      });

      const half2 = track2.scrollWidth / 2;
      const tween2 = gsap.fromTo(
        track2,
        { x: -half2 },
        { x: 0, duration: 55, ease: "none", repeat: -1 }
      );

      // Speed up briefly on scroll
      ScrollTrigger.create({
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const boost = 1 + Math.abs(self.getVelocity()) / 4000;
          tween.timeScale(Math.min(boost, 4));
          tween2.timeScale(Math.min(boost, 4));
        },
      });
    }, track);

    return () => ctx.revert();
  }, []);

  const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <section className="relative overflow-hidden border-y border-line bg-primary py-8">
      <div ref={trackRef} className="flex w-max items-center gap-12 whitespace-nowrap">
        {words.map((w, i) => (
          <div key={`${w}-${i}`} className="flex items-center gap-12">
            <span
              className={`font-display text-5xl font-extrabold tracking-tight md:text-7xl ${
                i % 2 === 0 ? "text-ink" : "text-stroke"
              }`}
            >
              {w}
            </span>
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-ink" />
          </div>
        ))}
      </div>

      <div
        ref={trackRef2}
        className="mt-3 flex w-max items-center gap-10 whitespace-nowrap opacity-50"
      >
        {words.map((w, i) => (
          <div key={`b-${w}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-3xl font-bold tracking-tight text-text-muted md:text-4xl">
              {w}
            </span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-text-muted" />
          </div>
        ))}
      </div>
    </section>
  );
}
