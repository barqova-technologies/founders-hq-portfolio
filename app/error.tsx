"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for whatever error reporting you wire up later.
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 pt-32">
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink">
          Something broke
        </p>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-ink md:text-6xl">
          A wire came <span className="brand-gradient-text">loose.</span>
        </h1>
        <p className="mt-6 text-text-muted">
          That&rsquo;s on us, not you. Try again - and if it keeps happening,
          let us know.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
