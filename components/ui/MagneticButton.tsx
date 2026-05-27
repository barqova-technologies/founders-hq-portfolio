"use client";

import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

type Variant = "primary" | "ghost" | "inverse";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-primary shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_18px_60px_-12px_rgba(0,0,0,0.45)]",
  ghost:
    "bg-transparent text-ink border border-ink/20 hover:border-ink",
  inverse:
    "bg-primary text-ink shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_60px_-12px_rgba(0,0,0,0.3)]",
};

const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", className = "", ...rest }, _ref) => {
    const btnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      const el = btnRef.current;
      if (!el) return;
      if (window.matchMedia("(max-width: 1023px)").matches) return;
      if (prefersReducedMotion()) return;

      let mouseX = 0;
      let mouseY = 0;

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        mouseX = e.clientX - rect.left - rect.width / 2;
        mouseY = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          x: mouseX * 0.3,
          y: mouseY * 0.3,
          duration: 0.7,
          ease: "expo.out",
        });
      };

      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "expo.out" });
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    }, []);

    return (
      <button
        ref={btnRef}
        className={`relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 ${variants[variant]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";
export default MagneticButton;
