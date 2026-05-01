"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/ui/SplitText";

export default function AboutHero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(root.current!.querySelectorAll("[data-split-char]"), {
        rotateX: -90,
        transformOrigin: "50% 100%",
      });
      gsap.to(root.current!.querySelectorAll("[data-split-char]"), {
        y: 0,
        rotateX: 0,
        opacity: 1,
        stagger: 0.035,
        duration: 1.4,
        ease: "expo.out",
        delay: 0.3,
      });
      gsap.from("[data-about-sub]", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "expo.out",
      });
      gsap.from("[data-about-meta] > *", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        delay: 1.2,
        ease: "expo.out",
      });
      gsap.to("[data-parallax]", {
        yPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-32"
      style={{ perspective: 1200 }}
    >
      <div
        data-parallax
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(0,0,0,0.06), transparent 50%), radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:5px_5px] opacity-50"
      />

      <div className="container-x relative">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-ink">
          <span className="h-px w-10 bg-ink" /> About
        </p>
        <h1 className="font-display text-display font-bold text-ink">
          <SplitText text="It started as" as="span" className="block" />
          <SplitText text="a dinner." as="span" className="block brand-gradient-text" />
        </h1>
        <p
          data-about-sub
          className="mt-8 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          Twelve founders. One long table. A bottle of cheap red. Eight years
          later it&rsquo;s a community of 1,200 across six cities — but the
          rooms are still small, the rules are still simple, and the dinners
          still happen on Tuesdays.
        </p>

        <div
          data-about-meta
          className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.3em] text-text-muted"
        >
          <span>Founded 2018</span>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>Hyderabad, India</span>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>Independent &amp; founder-funded</span>
        </div>
      </div>
    </section>
  );
}
