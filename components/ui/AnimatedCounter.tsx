"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration,
        ease: "power2.out",
        snap: { val: 1 },
        scrollTrigger: {
          trigger: ref.current!,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(obj.val)}${suffix}`;
          }
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [end, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
