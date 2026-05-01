"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

const paragraphs = [
  "Founder's HQ wasn't built. It accreted — one founder dinner, then another, then a Slack group, then a cohort.",
  "By the time we noticed it had a name, there were already 200 founders in the network and a pattern in how they were helping each other.",
  "What we run now is a more deliberate version of that early thing. Cohorts so the introductions get structured. Mentor matching so the asks land in the right inbox. Demo days so the strongest companies get a room. Forums so the rest of it stays private.",
  "We optimize for the founder in the room — not the brand on the wall, not the press release, not the next conference invite. Most of what matters here happens with the doors closed.",
];

export default function OriginStory() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
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
            eyebrow="Origin"
            title="How a dinner became a community."
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
              By The Numbers
            </p>
            <ul className="mt-8 space-y-5 text-ink">
              <li className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                <span className="font-display text-4xl font-bold leading-none md:text-5xl">
                  2018
                </span>
                <span className="text-sm text-text-muted">First dinner</span>
              </li>
              <li className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                <span className="font-display text-4xl font-bold leading-none md:text-5xl">
                  12
                </span>
                <span className="text-sm text-text-muted">Cohorts run</span>
              </li>
              <li className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                <span className="font-display text-4xl font-bold leading-none md:text-5xl">
                  84
                </span>
                <span className="text-sm text-text-muted">Portfolio companies</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="font-display text-4xl font-bold leading-none md:text-5xl">
                  1,200+
                </span>
                <span className="text-sm text-text-muted">Active founders</span>
              </li>
            </ul>
            <div className="mt-10 rounded-2xl bg-ink p-6 text-primary">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
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
