"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message.");
      }

      setSubmitState("success");
      setMessage("Thanks for reaching out — I’ll get back to you soon.");
      event.currentTarget.reset();
    } catch (error) {
      setSubmitState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
          Name
          <input
            type="text"
            name="name"
            required
            minLength={2}
            className="rounded-xl border border-slate-300 bg-white/50 px-4 py-3 text-slate-900 outline-none ring-emerald-500/40 transition placeholder:text-slate-400 hover:bg-slate-50 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:bg-slate-800/80"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-xl border border-slate-300 bg-white/50 px-4 py-3 text-slate-900 outline-none ring-emerald-500/40 transition placeholder:text-slate-400 hover:bg-slate-50 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:bg-slate-800/80"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          className="rounded-xl border border-slate-300 bg-white/50 px-4 py-3 text-slate-900 outline-none ring-emerald-500/40 transition placeholder:text-slate-400 hover:bg-slate-50 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:bg-slate-800/80"
          placeholder="Tell me about your idea, role, or project..."
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={submitState === "loading"}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 dark:focus:ring-offset-slate-900"
        >
          {submitState === "loading" ? "Sending..." : "Send Message"}
        </button>
        {message ? (
          <p
            className={`text-sm font-medium ${
              submitState === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}