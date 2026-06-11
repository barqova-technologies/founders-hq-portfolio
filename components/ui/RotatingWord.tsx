"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

type Props = {
  words: string[];
  /** Classes applied to each rotating word (e.g. brand-gradient-text). */
  wordClassName?: string;
  /** Classes applied to the inline container. */
  className?: string;
  /** Seconds each word stays before rolling to the next. */
  hold?: number;
};

/**
 * Rolls through `words` one at a time - fade + rise - mirroring the hero's
 * rotating headline. The first word shows immediately; the rest cycle.
 */
export default function RotatingWord({
  words,
  wordClassName = "",
  className = "",
  hold = 1.8,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const slots = el.querySelectorAll<HTMLSpanElement>("[data-rot]");
    if (!slots.length) return;

    if (prefersReducedMotion()) {
      gsap.set(slots, { yPercent: 110, opacity: 0 });
      gsap.set(slots[0], { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(slots, { yPercent: 110, opacity: 0 });
      gsap.set(slots[0], { yPercent: 0, opacity: 1 });

      const tl = gsap.timeline({ repeat: -1, delay: 1.2 });
      slots.forEach((slot, i) => {
        const next = slots[(i + 1) % slots.length];
        tl.to(
          slot,
          { yPercent: -110, opacity: 0, duration: 0.9, ease: "expo.inOut" },
          `+=${hold}`
        ).fromTo(
          next,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
          "<0.05"
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [hold]);

  // Reserve width via the longest word so the line never reflows mid-roll.
  const longest = words.reduce((m, w) => (w.length > m.length ? w : m), "");

  return (
    <span
      ref={ref}
      aria-hidden
      className={`relative inline-block overflow-hidden align-bottom ${className}`}
      style={{ height: "1em" }}
    >
      <span className={`invisible inline-block ${wordClassName}`}>{longest}</span>
      {words.map((w) => (
        <span
          key={w}
          data-rot
          className={`absolute inset-0 inline-block whitespace-nowrap ${wordClassName}`}
          style={{ willChange: "transform, opacity" }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
