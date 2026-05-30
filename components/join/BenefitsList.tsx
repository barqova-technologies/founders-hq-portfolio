"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import {
  Users,
  Landmark,
  Building2,
  Briefcase,
  Megaphone,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const BENEFITS = [
  {
    icon: Users,
    title: "Inner Circle",
    body: "A curated community of ambitious founders, meeting every month across meet-ups and events.",
  },
  {
    icon: Landmark,
    title: "Capital Bridge",
    body: "Direct access to investors, funding opportunities and meaningful capital connections.",
  },
  {
    icon: Building2,
    title: "Build Space",
    body: "A high-energy coworking space in Lucknow, built for focus, collaboration and execution.",
  },
  {
    icon: Briefcase,
    title: "Talent Vault",
    body: "A vetted pool of skilled talent ready to join and scale your startup.",
  },
  {
    icon: Megaphone,
    title: "Spotlight",
    body: "PR, social and speaking - Reels, podcasts and media interviews to get you seen.",
  },
  {
    icon: TrendingUp,
    title: "Scale Engine",
    body: "Structured support, resources and guidance to accelerate your growth.",
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
