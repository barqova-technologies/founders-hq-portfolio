"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(ref.current!.querySelectorAll("[data-anim]"), {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current!,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          data-anim
          className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink"
        >
          <span className="h-px w-8 bg-ink" />
          {eyebrow}
        </p>
      )}
      <h2
        data-anim
        className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          data-anim
          className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
