"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

const tiles = [
  {
    label: "Founders",
    value: "1,200+",
    body: "Active in private channels, peer cohorts and city chapters.",
    span: "lg:col-span-7 lg:row-span-2",
    big: true,
  },
  {
    label: "Mentors",
    value: "200+",
    body: "Operators, founders and investors. Vetted, not crowd-sourced.",
    span: "lg:col-span-5",
  },
  {
    label: "Capital Network",
    value: "60+ Funds",
    body: "From pre-seed angels to growth, plus partner CVCs.",
    span: "lg:col-span-5",
  },
  {
    label: "Cities",
    value: "6 Chapters",
    body: "Hyderabad · Bengaluru · Mumbai · Delhi · Pune · Chennai.",
    span: "lg:col-span-7",
  },
  {
    label: "Programs",
    value: "30+ / month",
    body: "Curated meetups, dinners, deep-dives and demo sessions.",
    span: "lg:col-span-5",
  },
];

export default function NetworkBento() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-bento]", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
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
          eyebrow="The Network"
          title="What's actually inside the HQ."
          subtitle="A snapshot of the four moving parts that make the community work."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:auto-rows-[180px]">
          {tiles.map((t) => (
            <article
              key={t.label}
              data-bento
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-7 ${t.span}`}
            >
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-ink opacity-[0.04] blur-2xl transition-opacity duration-700 group-hover:opacity-[0.08]" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                {t.label}
              </p>
              <div className="space-y-2">
                <p
                  className={`font-display font-bold leading-none text-ink ${
                    t.big ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl"
                  }`}
                >
                  {t.value}
                </p>
                <p className="max-w-md text-sm text-text-muted md:text-base">
                  {t.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
