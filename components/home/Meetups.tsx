"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { ArrowUpRight, Users, Repeat } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { MEETUP_FORMATS } from "@/lib/data";

export default function Meetups() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-meetup-row]", {
        x: -60,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
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
    <section ref={root} className="section-pad bg-surface">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The First Rooms"
            title="What we're starting with in Lucknow."
            subtitle="The formats we're opening with. RSVP and we'll tell you the moment dates are set."
          />
          <Link
            href="/join"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-ink bg-ink px-5 py-3 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5 md:self-end"
          >
            Request invite
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {MEETUP_FORMATS.map((m, i) => (
            <li
              key={m.title}
              data-meetup-row
              className="group relative grid gap-2 py-7 transition-colors duration-500 hover:bg-primary/60 sm:grid-cols-12 sm:items-center sm:gap-6"
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-text-muted sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="sm:col-span-6">
                <h3 className="font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                  {m.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted sm:col-span-3">
                <Users size={14} className="text-ink" />
                {m.audience}
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted sm:col-span-2">
                <Repeat size={14} className="text-ink" />
                {m.cadence}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
