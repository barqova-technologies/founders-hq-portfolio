"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PILLARS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const visualGradients = [
  "linear-gradient(135deg,#0A0A0A 0%,#3F3F3F 100%)",
  "linear-gradient(135deg,#1A1A1A 0%,#5C5C5C 100%)",
  "linear-gradient(135deg,#262626 0%,#737373 100%)",
  "linear-gradient(135deg,#0A0A0A 0%,#525252 100%)",
  "linear-gradient(135deg,#171717 0%,#404040 100%)",
  "linear-gradient(135deg,#0F0F0F 0%,#666666 100%)",
];

export default function PinnedPrograms() {
  const root = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!isDesktop) return;

      const items =
        root.current!.querySelectorAll<HTMLElement>("[data-program-item]");

      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-primary">
      <div className="container-x py-24">
        <SectionHeading
          eyebrow="Inside The HQ"
          title="Six programs. One operating system."
          subtitle="Scroll through what we run. Each program plugs into the others — by design."
        />
      </div>

      <div className="container-x grid gap-10 pb-32 lg:grid-cols-12 lg:gap-16">
        {/* Sticky visual */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-32 space-y-6">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line transition-[background] duration-700"
              style={{ background: visualGradients[active] }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:6px_6px] opacity-60" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.5))]" />

              <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
                  Program {String(active + 1).padStart(2, "0")} / 06
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Live
                </span>
              </div>

              <div className="absolute inset-x-6 bottom-6">
                <div
                  key={active}
                  className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl"
                  style={{ animation: "fadeUp 0.7s ease both" }}
                >
                  {PILLARS[active].title}
                </div>
                <p
                  key={`b-${active}`}
                  className="mt-3 max-w-md text-sm text-white/80"
                  style={{ animation: "fadeUp 0.7s 0.05s ease both" }}
                >
                  {PILLARS[active].short}
                </p>
              </div>

              <style jsx>{`
                @keyframes fadeUp {
                  from {
                    transform: translateY(16px);
                    opacity: 0;
                  }
                  to {
                    transform: translateY(0);
                    opacity: 1;
                  }
                }
              `}</style>
            </div>

            <div className="flex gap-1.5">
              {PILLARS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                    i === active ? "bg-ink" : "bg-line"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling text column */}
        <div className="lg:col-span-7">
          <ol className="space-y-12 lg:space-y-32">
            {PILLARS.map((p, i) => (
              <li
                key={p.slug}
                data-program-item
                className={`relative grid gap-4 transition-opacity duration-500 lg:gap-6 ${
                  active === i ? "opacity-100" : "lg:opacity-40"
                }`}
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                  <span className="h-px w-8 bg-text-muted" />
                  <span>{String(i + 1).padStart(2, "0")} / 06</span>
                </div>
                <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                  {p.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
                  {p.long}
                </p>
                <ul className="mt-2 space-y-2 text-sm text-ink">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <ArrowRight
                        size={14}
                        className="mt-1 shrink-0 text-ink"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Mobile visual under each item */}
                <div
                  className="mt-4 aspect-[16/9] overflow-hidden rounded-2xl border border-line lg:hidden"
                  style={{ background: visualGradients[i] }}
                >
                  <div className="h-full w-full bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:5px_5px] opacity-60" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
