"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Timeline() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const path = root.current!.querySelector(
        "[data-timeline-path]"
      ) as SVGPathElement | null;
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current!,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-tl-item]").forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Trajectory"
          title="Twelve years. One slow, deliberate climb."
          subtitle="We didn't blow up. We built up — show by show, city by city, mistake by mistake."
        />

        <div ref={root} className="relative mt-20 grid gap-16 lg:grid-cols-12">
          <svg
            aria-hidden
            className="absolute left-[1.65rem] top-2 hidden h-full w-px lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 2 1000"
            style={{ height: "calc(100% - 4rem)" }}
          >
            <path
              data-timeline-path
              d="M1 0 L1 1000"
              stroke="#0A0A0A"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <ol className="lg:col-span-12 lg:pl-20">
            {TIMELINE.map((item) => (
              <li
                key={item.year}
                data-tl-item
                className="relative grid gap-3 border-b border-line py-10 lg:grid-cols-[160px_1fr] lg:gap-12"
              >
                <span
                  aria-hidden
                  className="absolute -left-20 top-12 hidden h-3 w-3 rounded-full bg-ink ring-4 ring-primary lg:block"
                />
                <span className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
