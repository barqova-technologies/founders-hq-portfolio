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
  FlaskConical,
  HeartHandshake,
  Library,
  CalendarDays,
  Hammer,
  Gauge,
  GraduationCap,
  Factory,
  Presentation,
  Globe,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PILLARS } from "@/lib/data";
import Link from "next/link";

const icons = {
  Users,
  Landmark,
  Building2,
  Briefcase,
  Megaphone,
  TrendingUp,
  FlaskConical,
  HeartHandshake,
  Library,
  CalendarDays,
  Hammer,
  Gauge,
  GraduationCap,
  Factory,
  Presentation,
  Globe,
  Lightbulb,
};

export default function PillarsGrid() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-pillar-card]", {
        y: 100,
        opacity: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "[data-pillar-grid]",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // 3D tilt
      const cards =
        root.current!.querySelectorAll<HTMLElement>("[data-pillar-card]");
      const cleanup: Array<() => void> = [];
      cards.forEach((card) => {
        const move = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(card, {
            rotateX: -py * 5,
            rotateY: px * 5,
            translateY: -6,
            duration: 0.7,
            ease: "expo.out",
            transformPerspective: 800,
          });
        };
        const leave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            translateY: 0,
            duration: 0.9,
            ease: "expo.out",
          });
        };
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        cleanup.push(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        });
      });

      return () => cleanup.forEach((fn) => fn());
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-pad relative bg-surface">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Offerings"
            title="What you'll find inside the HQ."
            subtitle="Everything a founder needs to build, fund, hire and scale - in one place. They overlap on purpose."
          />
          <Link
            href="/ecosystem"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-ink bg-ink px-5 py-3 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5 md:self-end"
          >
            All Programs
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div
          data-pillar-grid
          className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
          style={{ perspective: 1000 }}
        >
          {PILLARS.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <article
                key={p.slug}
                data-pillar-card
                className="group relative flex min-w-[80%] shrink-0 snap-start flex-col rounded-3xl border border-line bg-primary p-7 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] sm:min-w-0 sm:shrink"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-primary">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs text-text-muted">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(PILLARS.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {p.short}
                </p>
                {p.comingSoon ? (
                  <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-text-muted">
                    Coming soon
                  </span>
                ) : (
                  <Link
                    href="/ecosystem"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-text-muted transition-colors group-hover:text-ink"
                  >
                    Learn more
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:rotate-45"
                    />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
