"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTABanner() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-cta-headline]", {
        scale: 0.85,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
      gsap.from("[data-cta-sub], [data-cta-btn]", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
      gsap.to("[data-cta-orb]", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="px-4 py-20 md:px-8 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-10 md:p-20">
          <div
            data-cta-orb
            className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          />
          <div
            data-cta-orb
            className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-white/[0.07] blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:6px_6px]" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Cohort 13 &middot; Applications close Jun 06
              </p>
              <h2
                data-cta-headline
                className="font-display text-4xl font-bold leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Bring a deck. Or just bring a problem.
              </h2>
              <p
                data-cta-sub
                className="mt-6 max-w-xl text-base text-white/70 md:text-lg"
              >
                We read every application. If your company isn&rsquo;t a fit
                yet, we&rsquo;ll point you at the meetup, mentor or peer cohort
                that is.
              </p>
            </div>
            <div data-cta-btn className="lg:col-span-4 lg:text-right">
              <Link href="/join" className="inline-block">
                <MagneticButton
                  variant="inverse"
                  className="bg-white text-ink hover:bg-white/90"
                >
                  Join the Community
                  <ArrowUpRight size={16} />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
