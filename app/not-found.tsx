import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 pt-32">
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink">
          404
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink md:text-7xl">
          This room <span className="brand-gradient-text">isn&rsquo;t open yet.</span>
        </h1>
        <p className="mt-6 text-text-muted">
          The page you&rsquo;re looking for has either moved or never made it past the front door.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
