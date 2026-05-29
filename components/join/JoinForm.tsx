"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/data";

const reasons = [
  "I'd like to mentor",
  "I'm a fund / capital partner",
  "I want to partner / collaborate",
  "Join the Cohort 01 waitlist",
  "I want to attend a meetup",
  "Something else",
];

const stages = [
  "Idea / pre-product",
  "Pre-seed",
  "Seed",
  "Series A or later",
  "Not a founder",
];

// Set this to your form endpoint (e.g. a Formspree form URL: https://formspree.io/f/xxxxxxx).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

export default function JoinForm() {
  const root = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-field]", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current!,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!FORM_ENDPOINT) {
      setStatus("error");
      setError(
        "The form isn't connected yet. Set NEXT_PUBLIC_FORM_ENDPOINT, or email us directly."
      );
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setError(
          data?.errors?.[0]?.message ??
            "Something went wrong. Try again, or email us directly."
        );
      }
    } catch {
      setStatus("error");
      setError("Network error. Try again, or email us directly.");
    }
  };

  const submitting = status === "submitting";
  const succeeded = status === "success";

  return (
    <form
      ref={root}
      onSubmit={onSubmit}
      className="relative space-y-6 rounded-3xl border border-line bg-primary p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] md:p-12"
    >
      <div className="absolute -top-3 left-8 rounded-full bg-ink px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
        Join the Community
      </div>

      {/* Honeypot - hidden from users, catches bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input
        type="hidden"
        name="_subject"
        value="New Founder's HQ application"
      />

      <div data-field className="grid gap-6 md:grid-cols-2">
        <Field label="Your name">
          <input
            required
            name="name"
            type="text"
            placeholder="Your full name"
            className="form-input"
          />
        </Field>
        <Field label="Email">
          <input
            required
            name="email"
            type="email"
            placeholder="you@startup.com"
            className="form-input"
          />
        </Field>
      </div>

      <div data-field className="grid gap-6 md:grid-cols-2">
        <Field label="Company / startup">
          <input
            name="company"
            type="text"
            placeholder="Optional"
            className="form-input"
          />
        </Field>
        <Field label="Why are you reaching out?">
          <select required name="reason" className="form-input bg-primary">
            <option value="">Pick the closest match</option>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div data-field>
        <Field label="Stage (if applicable)">
          <select name="stage" className="form-input bg-primary">
            <option value="">Optional</option>
            {stages.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div data-field>
        <Field label="Tell us more">
          <textarea
            required
            name="message"
            rows={6}
            placeholder="What you're building, what you're looking for, or whatever you'd say if we were at the same dinner table."
            className="form-input resize-none"
          />
        </Field>
      </div>

      {error && (
        <p
          data-field
          role="alert"
          className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-ink"
        >
          {error}{" "}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>
        </p>
      )}

      <div data-field className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-text-muted">
          We read every message. Usually reply within 48 hours.
        </p>
        <button
          type="submit"
          disabled={submitting || succeeded}
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-primary shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
        >
          {succeeded ? (
            <>
              Application received <Check size={16} />
            </>
          ) : submitting ? (
            <>Sending&hellip;</>
          ) : (
            <>
              Send Application
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </>
          )}
        </button>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          background: rgb(var(--surface));
          border: 1px solid rgb(var(--line));
          border-radius: 14px;
          padding: 14px 18px;
          color: rgb(var(--text));
          font-family: inherit;
          font-size: 0.95rem;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }
        .form-input::placeholder {
          color: rgb(var(--text-muted));
        }
        .form-input:focus {
          outline: none;
          border-color: rgb(var(--ink));
          background: rgb(var(--primary));
          box-shadow: 0 0 0 4px rgb(var(--ink) / 0.08);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
