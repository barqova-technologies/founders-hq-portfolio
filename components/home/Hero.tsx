"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";
import { ROTATING_WORDS, SITE } from "@/lib/data";

export default function Hero() {
  const root = useRef<HTMLDivElement | null>(null);
  const wordsRef = useRef<HTMLSpanElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Intro timeline + rotating word loop
  useEffect(() => {
    if (!root.current) return;

    if (prefersReducedMotion()) {
      const r = root.current;
      gsap.set(r.querySelectorAll("[data-split-char]"), {
        opacity: 1,
        y: 0,
        rotateX: 0,
      });
      gsap.set(r.querySelectorAll("[data-eyebrow]"), { opacity: 1, y: 0 });
      const slots = wordsRef.current?.querySelectorAll<HTMLSpanElement>("[data-rot]");
      if (slots && slots.length) {
        gsap.set(slots, { yPercent: 110, opacity: 0 });
        gsap.set(slots[0], { yPercent: 0, opacity: 1 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(root.current!.querySelectorAll("[data-split-char]"), {
        rotateX: -90,
        transformOrigin: "50% 100%",
      });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to("[data-eyebrow]", { opacity: 1, y: 0, duration: 0.8 }, 0.2)
        .to(
          root.current!.querySelectorAll("[data-split-char]"),
          {
            y: 0,
            rotateX: 0,
            opacity: 1,
            stagger: 0.035,
            duration: 1.4,
          },
          0.35
        )
        .from(
          "[data-hero-sub]",
          { y: 40, opacity: 0, duration: 1 },
          "-=0.7"
        )
        .from(
          "[data-hero-cta]",
          { y: 60, opacity: 0, stagger: 0.12, duration: 1 },
          "-=0.6"
        )
        .from(
          "[data-hero-meta] > *",
          { y: 24, opacity: 0, stagger: 0.08, duration: 0.7 },
          "-=0.7"
        )
        .from(
          "[data-scroll-indicator]",
          { opacity: 0, y: 20, duration: 0.8 },
          "-=0.5"
        );

      // Rotating word loop - smooth fade + rise
      const slots = wordsRef.current?.querySelectorAll<HTMLSpanElement>("[data-rot]");
      if (slots && slots.length) {
        gsap.set(slots, { yPercent: 110, opacity: 0 });
        gsap.set(slots[0], { yPercent: 0, opacity: 1 });

        const rot = gsap.timeline({ repeat: -1, delay: 1.6 });
        slots.forEach((slot, i) => {
          const next = slots[(i + 1) % slots.length];
          rot
            .to(slot, {
              yPercent: -110,
              opacity: 0,
              duration: 0.9,
              ease: "expo.inOut",
            }, "+=1.4")
            .fromTo(
              next,
              { yPercent: 110, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.9,
                ease: "expo.out",
              },
              "<0.05"
            );
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  // Particle backdrop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (prefersReducedMotion()) return;

    const dotColor = `rgb(${
      getComputedStyle(document.documentElement)
        .getPropertyValue("--ink")
        .trim() || "10 10 10"
    })`;

    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      const count = window.innerWidth < 768 ? 28 : 56;
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.18 * dpr,
        vy: (Math.random() - 0.5) * 0.18 * dpr,
        r: (Math.random() * 1.2 + 0.4) * dpr,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = 0.4;
        ctx.fill();
      }
      ctx.globalAlpha = 0.07;
      ctx.strokeStyle = dotColor;
      ctx.lineWidth = 0.5 * dpr;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 150 * dpr;
          if (d2 < max * max) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Width of the longest rotating word, used to reserve space
  const maxWord = ROTATING_WORDS.reduce(
    (m, w) => (w.length > m.length ? w : m),
    ""
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32"
      style={{ perspective: 1200 }}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.05),_transparent_60%)]"
      />

      <div className="container-x relative z-10 grid w-full gap-10">
        <div
          data-eyebrow
          className="inline-flex translate-y-4 items-center gap-3 self-start rounded-full border border-line bg-surface px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink opacity-0"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
          </span>
          Cohort 01 applications open &middot; Lucknow
        </div>

        <div className="font-display text-display font-bold text-ink">
          <SplitText text="We help founders" as="span" className="block" />
          <span className="relative block leading-[0.9]">
            <span
              ref={wordsRef}
              aria-hidden
              className="relative inline-block overflow-hidden align-bottom"
              style={{ height: "1em" }}
            >
              {/* Reserve width via invisible longest word */}
              <span className="invisible inline-block font-display brand-gradient-text">
                {maxWord}
              </span>
              {ROTATING_WORDS.map((w, i) => (
                <span
                  key={w}
                  data-rot
                  className="absolute inset-0 inline-block whitespace-nowrap brand-gradient-text"
                  style={{ willChange: "transform, opacity" }}
                >
                  {w}
                </span>
              ))}
            </span>
            <span className="sr-only">
              {ROTATING_WORDS.join(", ")}
            </span>
          </span>
        </div>

        <p
          data-hero-sub
          className="max-w-2xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          {SITE.tagline} A new working community of operators, builders and
          outliers - starting in Lucknow with one founding cohort, regular
          meetups and a hand-picked mentor bench.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div data-hero-cta>
            <Link href="/join" className="inline-block">
              <MagneticButton variant="primary">
                Join the Community <ArrowUpRight size={16} />
              </MagneticButton>
            </Link>
          </div>
          <div data-hero-cta>
            <Link href="/ecosystem" className="inline-block">
              <MagneticButton variant="ghost">Explore the Ecosystem</MagneticButton>
            </Link>
          </div>
        </div>

        <div
          data-hero-meta
          className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.3em] text-text-muted"
        >
          <span>Founding Cohort Forming</span>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>Based In Lucknow</span>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>Built For UP Founders</span>
        </div>
      </div>

      <div
        data-scroll-indicator
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 text-text-muted"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="inline-flex h-9 w-9 animate-scroll-bounce items-center justify-center rounded-full border border-line bg-surface">
          <ArrowDown size={14} />
        </span>
      </div>
    </section>
  );
}
