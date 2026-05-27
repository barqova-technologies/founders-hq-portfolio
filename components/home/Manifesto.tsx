"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Manifesto() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const styles = getComputedStyle(document.documentElement);
    const ink = `rgb(${styles.getPropertyValue("--ink").trim() || "10 10 10"})`;
    const muted = `rgb(${
      styles.getPropertyValue("--text-muted").trim() || "107 107 107"
    } / 0.5)`;

    const ctx = gsap.context(() => {
      const words =
        root.current!.querySelectorAll<HTMLSpanElement>("[data-mword]");
      gsap.fromTo(
        words,
        { color: muted },
        {
          color: ink,
          stagger: 0.025,
          ease: "none",
          scrollTrigger: {
            trigger: root.current!,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      gsap.from("[data-m-eyebrow], [data-m-cta]", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const words = SITE.manifesto.split(" ");

  return (
    <section ref={root} className="section-pad">
      <div className="container-x">
        <p
          data-m-eyebrow
          className="mb-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-ink"
        >
          <span className="h-px w-10 bg-ink" />
          The Manifesto
        </p>

        <p className="max-w-5xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-text-muted sm:text-4xl md:text-5xl lg:text-[3.6rem]">
          {words.map((w, i) => (
            <span key={i} data-mword className="inline-block">
              {w}
              {i < words.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </p>

        <div data-m-cta className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/ecosystem"
            className="group inline-flex items-center gap-3 rounded-full border border-ink bg-ink px-6 py-3 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
          >
            Read the full ecosystem
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
          <Link
            href="/join"
            className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Or just say hi
          </Link>
        </div>
      </div>
    </section>
  );
}
