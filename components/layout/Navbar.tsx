"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/85 backdrop-blur-xl border-b border-line"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-5">
          <Link href="/" className="group flex items-center gap-3 leading-none">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-[10px] font-bold tracking-[0.2em] text-primary">
              FHQ
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-ink">
                Founder&rsquo;s HQ
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-text-muted">
                Community &middot; Cohorts &middot; Capital
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-ink"
                >
                  <span className={active ? "text-ink" : ""}>{link.label}</span>
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-ink transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/join"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-primary shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Join the Community
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-primary lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 font-display text-5xl font-bold tracking-tight text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-line px-8 py-6 text-sm text-text-muted">
              hello@foundershq.in
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
