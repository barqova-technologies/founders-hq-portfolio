"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import {
  Coffee,
  HeartHandshake,
  MessageCircle,
  Mic,
  Rocket,
  Building2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const BENEFITS = [
  {
    icon: Rocket,
    title: "Cohort Access",
    body: "A founding cohort of 6–12 founders. The shortest version of a peer group that actually works.",
  },
  {
    icon: HeartHandshake,
    title: "Mentor Matching",
    body: "A hand-picked bench of operators and investors. Matched on real questions, not coffee chats.",
  },
  {
    icon: Mic,
    title: "Demo Days",
    body: "An invite-only room with a curated set of investors. Short slot, moderated Q&A.",
  },
  {
    icon: MessageCircle,
    title: "Private Forums",
    body: "Stage-based channels with a strict no-pitch policy. The questions you don't put on LinkedIn.",
  },
  {
    icon: Coffee,
    title: "Founder Dinners",
    body: "Small and frequent, in Lucknow. The work happens in private rooms, on purpose.",
  },
  {
    icon: Building2,
    title: "Studios & Coworking",
    body: "A working space in Lucknow - desks for cohort founders, community plans as we grow.",
  },
];

export default function BenefitsList() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-benefit]", {
        y: 80,
        opacity: 0,
        stagger: 0.08,
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
    <section ref={root} className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="What's Inside The Door"
          title="What you get when you join."
          subtitle="No tiered memberships. No firehose emails. Six things, used heavily."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <li
                key={b.title}
                data-benefit
                className="group relative flex flex-col rounded-3xl border border-line bg-primary p-7 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-primary">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs text-text-muted">
                    {String(i + 1).padStart(2, "0")} / 06
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {b.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
