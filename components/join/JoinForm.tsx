"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check } from "lucide-react";

const reasons = [
  "I'm applying to a cohort",
  "I want to attend a meetup",
  "I'd like to mentor",
  "I'm a fund / capital partner",
  "Press / podcast / partnership",
  "Something else",
];

const stages = [
  "Idea / pre-product",
  "Pre-seed",
  "Seed",
  "Series A or later",
  "Not a founder",
];

export default function ContactForm() {
  const root = useRef<HTMLFormElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      ref={root}
      onSubmit={onSubmit}
      className="relative space-y-6 rounded-3xl border border-line bg-primary p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] md:p-12"
    >
      <div className="absolute -top-3 left-8 rounded-full bg-ink px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
        Join the Community
      </div>

      <div data-field className="grid gap-6 md:grid-cols-2">
        <Field label="Your name">
          <input
            required
            type="text"
            placeholder="Maya Krishnan"
            className="form-input"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            placeholder="you@startup.com"
            className="form-input"
          />
        </Field>
      </div>

      <div data-field className="grid gap-6 md:grid-cols-2">
        <Field label="Company / startup">
          <input
            type="text"
            placeholder="Optional"
            className="form-input"
          />
        </Field>
        <Field label="Why are you reaching out?">
          <select required className="form-input bg-primary">
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
          <select className="form-input bg-primary">
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
            rows={6}
            placeholder="What you're building, what you're looking for, or whatever you'd say if we were at the same dinner table."
            className="form-input resize-none"
          />
        </Field>
      </div>

      <div data-field className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-text-muted">
          We read every message. Usually reply within 48 hours.
        </p>
        <button
          type="submit"
          disabled={submitted}
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-primary shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
        >
          {submitted ? (
            <>
              Application received <Check size={16} />
            </>
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
          background: #fafafa;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          padding: 14px 18px;
          color: #0a0a0a;
          font-family: inherit;
          font-size: 0.95rem;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }
        .form-input::placeholder {
          color: #a0a0a0;
        }
        .form-input:focus {
          outline: none;
          border-color: #0a0a0a;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(10, 10, 10, 0.06);
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
