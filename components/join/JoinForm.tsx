"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/data";

const joinOptions = [
  "Member",
  "Mentor",
  "Investor/VC",
  "College Ambassador",
  "Creator Member (Influencers)",
];

// Submissions POST to the internal Resend-backed route (see app/api/join/route.ts).
const FORM_ENDPOINT = "/api/join";

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
    const fd = new FormData(form);

    setStatus("submitting");
    setError("");

    // Honeypot: silently succeed for bots that fill the hidden field.
    if (fd.get("_gotcha")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: fd.get("name"),
      company: fd.get("company"),
      title: fd.get("title"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      estYear: fd.get("estYear"),
      joinType: fd.get("joinType"),
      lookingFor: fd.get("lookingFor"),
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setError(
          data?.error ??
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
        Join the Waitlist
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
        <Field label="Full Name *">
          <input
            required
            name="name"
            type="text"
            placeholder="Your full name"
            className="form-input"
          />
        </Field>
        <Field label="Company / Startup Name *">
          <input
            required
            name="company"
            type="text"
            placeholder="Company or startup name"
            className="form-input"
          />
        </Field>
      </div>

      <div data-field className="grid gap-6 md:grid-cols-2">
        <Field label="Title *">
          <input
            required
            name="title"
            type="text"
            placeholder="Your role / designation"
            className="form-input"
          />
        </Field>
        <Field label="Email *">
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
        <Field label="Contact Number *">
          <input
            required
            name="phone"
            type="tel"
            placeholder="+91 00000 00000"
            className="form-input"
          />
        </Field>
        <Field label="Establishment Year *">
          <input
            required
            name="estYear"
            type="number"
            inputMode="numeric"
            min={1900}
            max={2100}
            placeholder="e.g. 2024"
            className="form-input"
          />
        </Field>
      </div>

      <div data-field>
        <Field label="How do you want to join? *">
          <select required name="joinType" defaultValue="" className="form-input bg-primary">
            <option value="" disabled>
              Select one
            </option>
            {joinOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div data-field>
        <Field label="What are you looking for? *">
          <textarea
            required
            name="lookingFor"
            rows={6}
            placeholder="Tell us what you're looking for."
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
