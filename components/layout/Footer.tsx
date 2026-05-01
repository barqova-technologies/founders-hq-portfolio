"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PILLARS, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="absolute inset-x-0 top-0 h-px bg-ink" />

      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 leading-none">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-[10px] font-bold tracking-[0.2em] text-primary">
                FHQ
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-bold tracking-tight text-ink">
                  Founder&rsquo;s HQ
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-text-muted">
                  Community &middot; Cohorts &middot; Capital
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted">
              {SITE.tagline} A working community of operators, builders and
              outliers across six Indian cities.
            </p>
            <Link
              href="/join"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-ink bg-ink px-5 py-3 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
            >
              Join the Community
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
                {PILLARS.map((p) => (
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
                <p>
                  <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:text-ink">
                    {SITE.phone}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="text-xs text-text-muted">
            &copy; 2026 Founder&rsquo;s HQ. Built quietly. Shared loudly.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
              { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
              { Icon: Twitter, href: SITE.socials.x, label: "X" },
              { Icon: Youtube, href: SITE.socials.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
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
