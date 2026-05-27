// Returns true when the user has asked the OS to reduce motion.
// Call inside client effects to skip decorative GSAP/canvas animation.
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
