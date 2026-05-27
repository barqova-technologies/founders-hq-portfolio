"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PILLARS } from "@/lib/data";

const gradients = [
  "linear-gradient(135deg,#0A0A0A 0%,#3F3F3F 100%)",
  "linear-gradient(135deg,#1A1A1A 0%,#5C5C5C 100%)",
  "linear-gradient(135deg,#262626 0%,#737373 100%)",
  "linear-gradient(135deg,#0A0A0A 0%,#525252 100%)",
  "linear-gradient(135deg,#171717 0%,#404040 100%)",
  "linear-gradient(135deg,#0F0F0F 0%,#666666 100%)",
];

export default function ProgramsDetail() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) {
      gsap.set("[data-program-img]", { opacity: 1, x: 0, clipPath: "none" });
      gsap.set("[data-program-text] > *", { opacity: 1, x: 0 });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const blocks =
        root.current!.querySelectorAll<HTMLElement>("[data-program-block]");
      blocks.forEach((block, i) => {
        const flipped = i % 2 === 1;
        gsap.fromTo(
          block.querySelector("[data-program-img]"),
          {
            x: flipped ? 80 : -80,
            opacity: 0,
            clipPath: flipped ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
          },
          {
            x: 0,
            opacity: 1,
            clipPath: "inset(0 0 0 0)",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
        gsap.from(block.querySelectorAll("[data-program-text] > *"), {
          x: flipped ? -60 : 60,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: block,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative">
      <div className="container-x py-16 md:py-20">
        <SectionHeading
          eyebrow="Programs In Detail"
          title="Each program is a small, opinionated thing."
          subtitle="No catch-all memberships. No firehose emails. Each program is sized small on purpose, and feeds the others by design."
        />
      </div>

      <div>
        {PILLARS.map((p, i) => {
          const flipped = i % 2 === 1;
          return (
            <div
              key={p.slug}
              data-program-block
              className="border-t border-line py-20 last:border-b md:py-28"
            >
              <div className="container-x">
                <div
                  className={`grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16 ${
                    flipped ? "lg:[&>*:first-child]:order-last" : ""
                  }`}
                >
                  <div data-program-img className="lg:col-span-6">
                    <div
                      className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-line"
                      style={{ background: gradients[i] }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:5px_5px] opacity-60" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.6))]" />
                      <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
                        Program {String(i + 1).padStart(2, "0")} / 06
                      </div>
                      <div className="absolute inset-x-6 bottom-6">
                        <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                          {p.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div data-program-text className="lg:col-span-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
                      {String(i + 1).padStart(2, "0")} &middot; Program
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                      {p.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
                      {p.long}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm text-ink md:text-base"
                        >
                          <ArrowRight
                            size={14}
                            className="mt-1 shrink-0 text-ink"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
