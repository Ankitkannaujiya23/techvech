"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm({ defaultType }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORMSPREE_ID || FORMSPREE_ID === "your_formspree_id_here") {
      // Loud, honest failure state instead of pretending it worked —
      // set NEXT_PUBLIC_FORMSPREE_ID in .env.local to activate this form.
      setStatus("error");
      return;
    }

    const form = e.target;
    const data = new FormData(form);
    // Record which page the lead came from (useful for knowing what converts).
    data.append("page", window.location.pathname);
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="What do you need" htmlFor="type">
          <select id="type" name="type" defaultValue={defaultType} className={inputClass}>
            <option>Website</option>
            <option>Mobile App</option>
            <option>AI Project</option>
            <option>Hire Developers</option>
            <option>Something else</option>
          </select>
        </Field>
        <Field label="Approx. budget" htmlFor="budget">
          <select id="budget" name="budget" className={inputClass}>
            <option>Under ₹1L</option>
            <option>₹1L – ₹5L</option>
            <option>₹5L – ₹15L</option>
            <option>₹15L+</option>
            <option>Not sure yet</option>
          </select>
        </Field>
      </div>

      <Field label="Project details" htmlFor="message">
        <textarea
          id="message"
          name="message"
          placeholder="What are you trying to build?"
          rows={4}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && <ArrowRight size={16} />}
      </button>

      <p
        className={`text-xs ${
          status === "success" ? "text-teal" : status === "error" ? "text-amber" : "text-muted"
        }`}
        role="status"
      >
        {status === "success" &&
          "Thanks — we've got your project details and will reply within one business day."}
        {status === "error" &&
          "Couldn't send that. Set NEXT_PUBLIC_FORMSPREE_ID in .env.local (see README) or email us directly."}
        {status === "idle" && "We reply within one business day. No spam, ever."}
        {status === "sending" && "Sending your message…"}
      </p>
    </form>
  );
}

const inputClass =
  "rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-teal";

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="font-mono text-xs text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
