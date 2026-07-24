"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { site } from "@/lib/content";

// Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in the environment
// (repo secret / .env) to enable server-free submissions. Without it, the form
// gracefully falls back to opening the visitor's email client.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus-visible:border-brand/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Fallback: no key configured → hand off to the visitor's mail client.
    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(
        (fd.get("subject") as string) || "Website enquiry",
      );
      const body = encodeURIComponent(
        `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`,
      );
      window.location.href = `mailto:${site.contact.primaryEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    setError("");
    fd.append("access_key", ACCESS_KEY);
    fd.append("from_name", "Bin to Better Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <Card className="p-10 text-center">
        <CircleCheck className="mx-auto mb-4 h-14 w-14 text-brand" aria-hidden />
        <h2 className="text-2xl font-bold text-white">Message sent!</h2>
        <p className="mt-3 text-white/70">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
        <div className="mt-6">
          <Button variant="secondary" onClick={() => setStatus("idle")}>
            Send another
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 md:p-10">
      <form onSubmit={onSubmit} className="space-y-5">
        {/* Honeypot anti-spam field (hidden from users) */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-white/70">
              Name
            </label>
            <input id="name" name="name" required className={inputBase} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputBase}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm text-white/70">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            className={inputBase}
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-white/70">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`${inputBase} resize-y`}
            placeholder="Tell us a bit more…"
          />
        </div>

        {status === "error" && (
          <p role="alert" className="text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-surface-950 transition-all hover:bg-brand-light hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>

        {!ACCESS_KEY && (
          <p className="text-xs text-white/40">
            Prefer email? Write to{" "}
            <a
              href={`mailto:${site.contact.primaryEmail}`}
              className="text-brand hover:underline"
            >
              {site.contact.primaryEmail}
            </a>
            .
          </p>
        )}
      </form>
    </Card>
  );
}
