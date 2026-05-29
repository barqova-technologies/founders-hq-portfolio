"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/ui/SplitText";
import { prefersReducedMotion } from "@/lib/motion";

export default function JoinHero() {
  const root = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (prefersReducedMotion()) {
      if (video) video.pause();
      if (root.current) {
        gsap.set(root.current.querySelectorAll("[data-split-char]"), {
          opacity: 1,
          y: 0,
          rotateX: 0,
        });
        gsap.set(root.current.querySelectorAll("[data-j-eyebrow]"), {
          opacity: 1,
          y: 0,
        });
      }
      return;
    }
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    // Copy holds until the chair is pulled in the clip, then drops in.
    const REVEAL_AT = 1.3; // seconds into the 3.08s clip, chair settled
    let cleanup: (() => void) | undefined;

    const ctx = gsap.context(() => {
      gsap.set(root.current!.querySelectorAll("[data-split-char]"), {
        rotateX: -90,
        transformOrigin: "50% 100%",
      });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "expo.out" },
      });
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
        .from("[data-j-sub]", { y: 30, opacity: 0, duration: 1 }, "-=0.7")
        .from(
          "[data-j-meta] > *",
          { y: 24, opacity: 0, stagger: 0.08, duration: 0.8 },
          "-=0.6"
        );

      let played = false;
      const reveal = () => {
        if (played) return;
        played = true;
        tl.play();
      };
      const onTime = () => {
        if (video && video.currentTime >= REVEAL_AT) reveal();
      };
      video?.addEventListener("timeupdate", onTime);
      // Fallback if autoplay is blocked and no timeupdate ever fires.
      const fallback = window.setTimeout(reveal, 2200);

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

      cleanup = () => {
        video?.removeEventListener("timeupdate", onTime);
        window.clearTimeout(fallback);
      };
    }, root);

    return () => {
      cleanup?.();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[80vh] items-center overflow-hidden pt-32"
      style={{ perspective: 1200 }}
    >
      {/* "Pull up a chair" footage, blended into the page on the right. */}
      <div
        data-j-parallax
        aria-hidden
        className="pointer-events-none absolute -inset-y-[10%] right-0 w-[94%] max-w-[920px]"
      >
        <video
          ref={videoRef}
          className="chair-video absolute inset-0 h-full w-full object-cover"
          src="/pull-chair.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
        />
        <div className="chair-scrim absolute inset-0" />
      </div>
      {/* Faint dot texture, kept off the right side so the chair stays clean. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:6px_6px] opacity-20 [mask-image:linear-gradient(90deg,#000,transparent)]"
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
          Now inviting mentors &middot; Lucknow
        </div>

        <h1 className="font-display text-display font-bold text-ink">
          <SplitText text="Pull up a chair." as="span" className="block" />
          <SplitText text="The room is small." as="span" className="block" />
        </h1>

        <p
          data-j-sub
          className="mt-8 max-w-2xl text-base leading-relaxed text-ink md:text-lg"
        >
          Mentor a founder, back the room, or partner with us - or join the
          Cohort 01 waitlist. There&rsquo;s no wrong reason to write. We read
          every message, and if it isn&rsquo;t a fit yet, we&rsquo;ll point you
          at the room that is.
        </p>

        <div
          data-j-meta
          className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.3em] text-ink"
        >
          <span>Cohort 01 Forming</span>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>Based In Lucknow</span>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>We read every message</span>
        </div>
      </div>
    </section>
  );
}
