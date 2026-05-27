"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";

const paragraphs = [
  "Founder's HQ isn't built yet - it's being built, in the open, starting in Lucknow.",
  "The idea is old and simple: founders move faster in a room with a few others who actually get it. Most of what matters happens there - not on a stage, not in a press release.",
  "So we're starting deliberately. One founding cohort. A handful of mentors we've chosen by hand. Regular meetups in Lucknow. A demo day when the first cohort is ready. Forums to keep the rest of it private.",
  "We optimize for the founder in the room - not the brand on the wall, not the next conference invite. We'll grow this with its members, and we'll keep every room small on purpose.",
];

export default function OriginStory() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const lines = root.current!.querySelectorAll<HTMLElement>("[data-origin-line]");
      gsap.from(lines, {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Parallax on the side card
      gsap.to("[data-origin-card]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-pad">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Why Now"
            title="Why we're starting this."
          />
          <div className="mt-12 space-y-7 text-lg leading-relaxed text-text-muted md:text-xl">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                data-origin-line
                className={i === 0 ? "text-ink" : ""}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div
            data-origin-card
            className="sticky top-32 overflow-hidden rounded-3xl border border-line bg-surface p-8 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink">
              The Plan
            </p>
            <ul className="mt-8 space-y-5 text-ink">
              <li className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                <span className="font-display text-4xl font-bold leading-none md:text-5xl">
                  2026
                </span>
                <span className="text-sm text-text-muted">We launch</span>
              </li>
              <li className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                <span className="font-display text-4xl font-bold leading-none md:text-5xl">
                  01
                </span>
                <span className="text-sm text-text-muted">Founding cohort</span>
              </li>
              <li className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                <span className="font-display text-3xl font-bold leading-none md:text-4xl">
                  Lucknow
                </span>
                <span className="text-sm text-text-muted">Where we start</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="font-display text-4xl font-bold leading-none md:text-5xl">
                  Small
                </span>
                <span className="text-sm text-text-muted">Rooms, always</span>
              </li>
            </ul>
            <div className="mt-10 rounded-2xl bg-ink p-6 text-primary">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">
                The Promise
              </p>
              <p className="mt-3 font-display text-xl font-semibold leading-snug">
                We&rsquo;ll keep the rooms small. Forever.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
