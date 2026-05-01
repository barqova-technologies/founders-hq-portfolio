"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import { TEAM } from "@/lib/data";

export default function TeamSection() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-team-card]",
        { y: 100, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          stagger: 0.1,
          duration: 1.2,
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
          eyebrow="The Stewards"
          title="The four people running the rooms."
          subtitle="Founder's HQ is a small core team and a much bigger village. These four hold the whole thing together."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <article
              key={m.name}
              data-team-card
              className="group relative overflow-hidden rounded-3xl border border-line bg-primary"
            >
              <div
                className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-105"
                style={{ background: m.gradient }}
              >
                <div className="h-full w-full bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:5px_5px]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="font-display text-lg font-semibold text-white">
                  {m.name}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  {m.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
