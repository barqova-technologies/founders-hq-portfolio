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

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove("no-scroll");
        sessionStorage.setItem(STORAGE_KEY, "1");
        setShouldShow(false);
      },
    });

    tl.from(overlay.querySelectorAll("[data-pre-letter]"), {
      yPercent: 110,
      opacity: 0,
      stagger: 0.05,
      duration: 0.9,
      ease: "expo.out",
    })
      .to(
        overlay.querySelector("[data-pre-bar]"),
        { scaleX: 1, duration: 1.1, ease: "expo.inOut" },
        "-=0.3"
      )
      .to(
        overlay.querySelectorAll("[data-pre-letter]"),
        {
          yPercent: -110,
          opacity: 0,
          stagger: 0.04,
          duration: 0.55,
          ease: "expo.in",
        },
        "+=0.05"
      )
      .to(
        overlay,
        { yPercent: -100, duration: 1.1, ease: "expo.inOut" },
        "-=0.1"
      );

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
          <span key={i} data-pre-letter className="inline-block whitespace-pre">
            {c}
          </span>
        ))}
      </div>
      <div className="mt-10 h-px w-64 origin-left bg-line">
        <div
          data-pre-bar
          className="h-full w-full origin-left scale-x-0 bg-ink"
        />
      </div>
      <div className="mt-6 text-xs uppercase tracking-[0.4em] text-text-muted">
        Where founders find their people
      </div>
    </div>
  );
}
