import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="section-pad pt-32">
      <div className="container-x max-w-3xl">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-ink">
          <span className="h-px w-10 bg-ink" /> Legal
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-text-muted">Last updated {updated}</p>

        <div className="legal-prose mt-10">{children}</div>
      </div>
    </section>
  );
}
