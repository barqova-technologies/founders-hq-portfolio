"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/ui/SplitText";

export default function JoinHero() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(root.current!.querySelectorAll("[data-split-char]"), {
        rotateX: -90,
        transformOrigin: "50% 100%",
      });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to("[data-j-eyebrow]", { y: 0, opacity: 1, duration: 0.8 }, 0.1)
        .to(
          root.current!.querySelectorAll("[data-split-char]"),
          {
            y: 0,
            rotateX: 0,
            opacity: 1,
            stagger: 0.035,
            duration: 1.4,
          },
          0.25
        )
        .from(
          "[data-j-sub]",
          { y: 30, opacity: 0, duration: 1 },
          "-=0.7"
        )
        .from(
          "[data-j-meta] > *",
          {
            y: 24,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
          },
          "-=0.6"
        );

      gsap.to("[data-j-parallax]", {
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
      className="relative flex min-h-[80vh] items-center overflow-hidden pt-32"
      style={{ perspective: 1200 }}
    >
      <div
        data-j-parallax
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
        <div
          data-j-eyebrow
          className="mb-6 inline-flex translate-y-4 items-center gap-3 rounded-full border border-line bg-surface px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink opacity-0"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
          </span>
          Cohort 13 applications open &middot; closes Jun 06
        </div>

        <h1 className="font-display text-display font-bold text-ink">
          <SplitText text="Pull up a chair." as="span" className="block" />
          <SplitText
            text="The room is small."
            as="span"
            className="block brand-gradient-text"
          />
        </h1>

        <p
          data-j-sub
          className="mt-8 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          Apply to a cohort, RSVP for a meetup, sign up to mentor — or just say
          hi. There&rsquo;s no wrong reason to write. We read every message,
          and if it isn&rsquo;t a fit yet, we&rsquo;ll point you at the room
          that is.
        </p>

        <div
          data-j-meta
          className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.3em] text-text-muted"
        >
          <span>1,200+ Founders</span>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>6 Chapter Cities</span>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>Reply within 48 hours</span>
        </div>
      </div>
    </section>
  );
}
