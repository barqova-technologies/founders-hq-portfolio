"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

export default function Manifesto() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const words =
        root.current!.querySelectorAll<HTMLSpanElement>("[data-mword]");
      gsap.fromTo(
        words,
        { color: "#C9C9C9" },
        {
          color: "#0A0A0A",
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

  const text =
    "Founder's HQ is a working community of operators, builders and outliers — a place where conviction gets stress-tested, capital gets close, and the next ten years of Indian startups get written in private rooms before they show up on Twitter.";
  const words = text.split(" ");

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
