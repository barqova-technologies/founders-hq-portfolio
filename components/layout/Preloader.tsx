"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

const STORAGE_KEY = "fhq:preloader-shown";
const LETTERS = ["F", "O", "U", "N", "D", "E", "R", "S", " ", "H", "Q"];

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setShouldShow(false);
      return;
    }

    if (prefersReducedMotion()) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setShouldShow(false);
      return;
    }

    document.body.classList.add("no-scroll");

    const overlay = overlayRef.current;
    if (!overlay) return;

    const letters = overlay.querySelectorAll("[data-pre-letter]");
    const bar = overlay.querySelector("[data-pre-bar]");
    const countEl = overlay.querySelector<HTMLElement>("[data-pre-count]");
    const counter = { v: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove("no-scroll");
        sessionStorage.setItem(STORAGE_KEY, "1");
        setShouldShow(false);
      },
    });

    // Letters slide up from behind their clip, with a slight skew for life.
    gsap.set(letters, { yPercent: 120, skewY: 6, opacity: 0 });

    tl.to(
      letters,
      {
        yPercent: 0,
        skewY: 0,
        opacity: 1,
        stagger: 0.045,
        duration: 0.8,
        ease: "expo.out",
      },
      0.1
    )
      // Count 0 -> 100, in lockstep with the loading bar.
      .to(
        counter,
        {
          v: 100,
          duration: 1.7,
          ease: "power2.inOut",
          onUpdate: () => {
            if (countEl)
              countEl.textContent = String(Math.round(counter.v)).padStart(
                2,
                "0"
              );
          },
        },
        0.1
      )
      .to(bar, { scaleX: 1, duration: 1.7, ease: "power2.inOut" }, 0.1)
      // Exit: letters fly up, meta fades, panel curtains away.
      .to(
        letters,
        {
          yPercent: -120,
          skewY: -5,
          opacity: 0,
          stagger: 0.03,
          duration: 0.5,
          ease: "expo.in",
        },
        "+=0.2"
      )
      .to(
        [bar?.parentElement, countEl, overlay.querySelector("[data-pre-meta]")],
        { opacity: 0, duration: 0.3 },
        "<"
      )
      .to(overlay, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "-=0.15");

    return () => {
      tl.kill();
      document.body.classList.remove("no-scroll");
    };
  }, []);

  if (!shouldShow) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-primary"
    >
      <div className="font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">
        {LETTERS.map((c, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.12em" }}
          >
            <span
              data-pre-letter
              className="inline-block whitespace-pre will-change-transform"
            >
              {c}
            </span>
          </span>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <div className="h-px w-56 origin-left bg-line sm:w-64">
          <div
            data-pre-bar
            className="h-full w-full origin-left scale-x-0 bg-ink"
          />
        </div>
        <span
          data-pre-count
          className="font-display text-sm font-semibold tabular-nums text-ink"
        >
          00
        </span>
      </div>

      <div
        data-pre-meta
        className="mt-6 text-xs uppercase tracking-[0.4em] text-text-muted"
      >
        Where founders find their people
      </div>
    </div>
  );
}
