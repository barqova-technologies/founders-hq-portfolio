"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import { Send, MailOpen, Phone, KeyRound } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RotatingWord from "@/components/ui/RotatingWord";

const FIRST_WORDS = ["meetup", "handshake", "intro", "room"];

const STEPS = [
  {
    icon: Send,
    label: "Step 01",
    title: "You hit send",
    body: "Application, RSVP, mentor sign-up - any reason works. One form.",
    when: "0 days",
  },
  {
    icon: MailOpen,
    label: "Step 02",
    title: "We read it",
    body: "An actual human reads every message. We reply within 48 hours.",
    when: "≤ 48 hours",
  },
  {
    icon: Phone,
    label: "Step 03",
    title: "15-min discovery",
    body: "If it's a fit, we set up a call. If it isn't yet, we point you elsewhere.",
    when: "Within 1 week",
  },
  {
    icon: KeyRound,
    label: "Step 04",
    title: "Welcome to the room",
    body: "Channels, roundtables, mentor intros - and a calendar invite to your first meetup.",
    when: "Day one",
  },
];

export default function ApplicationSteps() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-step-card]", {
        y: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      const path = root.current!.querySelector(
        "[data-steps-path]"
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
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="What Happens Next"
          title={
            <>
              From hit-send to your first{" "}
              <RotatingWord
                words={FIRST_WORDS}
                wordClassName="brand-gradient-text"
              />
              .
            </>
          }
          subtitle="Four steps. None of them automated."
        />

        <div className="relative mt-16">
          {/* Desktop: horizontal connecting line */}
          <svg
            aria-hidden
            className="absolute left-[8%] right-[8%] top-[1.625rem] hidden h-px text-ink lg:block"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            style={{ width: "84%" }}
          >
            <path
              data-steps-path
              d="M0 1 L1000 1"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          <ol className="-mx-5 relative flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  data-step-card
                  className="relative flex min-w-[78%] shrink-0 snap-start flex-col gap-4 sm:min-w-0 sm:shrink"
                >
                  <div className="flex items-center justify-between lg:block">
                    <span className="relative z-10 inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-ink bg-primary text-ink">
                      <Icon size={20} />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-muted lg:hidden">
                      {s.label}
                    </span>
                  </div>

                  <div className="rounded-3xl border border-line bg-surface p-6 lg:mt-2">
                    <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-text-muted lg:inline-block">
                      {s.label}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {s.body}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-text-muted">
                      <span className="h-1 w-1 rounded-full bg-ink" />
                      {s.when}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
