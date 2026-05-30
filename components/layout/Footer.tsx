"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PILLARS, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="absolute inset-x-0 top-0 h-px bg-ink" />

      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center leading-none" aria-label={SITE.name}>
              <Image
                src="/foundershq_light.png"
                alt={SITE.name}
                width={990}
                height={738}
                className="h-[4.8rem] w-auto object-contain dark:hidden"
              />
              <Image
                src="/foundershq_dark.png"
                alt={SITE.name}
                width={987}
                height={734}
                className="hidden h-[4.8rem] w-auto object-contain dark:block"
              />
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted">
              {SITE.tagline} A new working community of operators, builders and
              outliers - starting in Lucknow.
            </p>
            <Link
              href="/join"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-ink bg-ink px-5 py-3 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
            >
              Join the Waitlist
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-ink">
                Pages
              </h4>
              <ul className="space-y-3 text-sm text-text-muted">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-ink">
                Programs
              </h4>
              <ul className="space-y-3 text-sm text-text-muted">
                {PILLARS.filter((p) => !p.comingSoon).map((p) => (
                  <li key={p.slug}>
                    <Link href="/ecosystem" className="transition-colors hover:text-ink">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-ink">
                Reach Us
              </h4>
              <address className="not-italic space-y-3 text-sm text-text-muted">
                <p>{SITE.address}</p>
                <p>
                  <a href={`mailto:${SITE.email}`} className="hover:text-ink">
                    {SITE.email}
                  </a>
                </p>
                {SITE.phone && (
                  <p>
                    <a
                      href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                      className="hover:text-ink"
                    >
                      {SITE.phone}
                    </a>
                  </p>
                )}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="text-xs text-text-muted">
            &copy; 2026 Founder&rsquo;s HQ. Built quietly. Shared loudly. &middot;{" "}
            Crafted by{" "}
            <a
              href="https://barqova.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink/80 transition-colors hover:text-ink"
            >
              Barqova Technologies
            </a>
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
            <Link href="/legal/terms" className="hover:text-ink">
              Terms
            </Link>
            <Link href="/legal/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/legal/refunds" className="hover:text-ink">
              Refunds
            </Link>
            <Link href="/contact" className="hover:text-ink">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {[
              { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
              { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
              { Icon: Twitter, href: SITE.socials.x, label: "X" },
              { Icon: Youtube, href: SITE.socials.youtube, label: "YouTube" },
            ]
              .filter(({ href }) => href)
              .map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-primary text-text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
