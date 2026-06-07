"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
      setError("Enter a valid email address.");
      return;
    }
    setPending(true);
    setError("");
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(clean, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset`,
    });
    setPending(false);
    if (error) setError(error.message);
    else setSent(true);
  }

  if (sent) {
    return (
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 w-14 h-14 rotate-45 border border-primary/40 flex items-center justify-center">
          <svg
            className="w-6 h-6 -rotate-45 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight mb-2">
          Check your email.
        </h1>
        <p className="text-muted-fg text-sm font-[family-name:var(--font-ui)] mb-8">
          If an account exists for {email}, a reset link is on its way. The link
          opens a page to set a new password.
        </p>
        <Link
          href="/login"
          className="font-[family-name:var(--font-ui)] text-sm text-primary underline-draw font-medium"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight mb-2">
        Reset your password.
      </h1>
      <p className="text-muted-fg text-sm mb-8 font-[family-name:var(--font-ui)]">
        Enter your email and we&apos;ll send you a link to set a new one.
      </p>
      <form onSubmit={submit} className="space-y-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="doa-input"
          placeholder="Email address"
          aria-label="Email address"
          autoComplete="email"
        />
        {error && (
          <p
            role="alert"
            className="text-sm text-destructive font-[family-name:var(--font-ui)]"
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="btn-shimmer w-full text-background font-[family-name:var(--font-ui)] font-bold py-3.5 text-sm tracking-[0.15em] uppercase transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
        >
          {pending ? "Sending…" : "Send Reset Link"}
        </button>
      </form>
      <p className="mt-6 text-sm text-muted-fg font-[family-name:var(--font-ui)]">
        Remembered it?{" "}
        <Link href="/login" className="text-primary underline-draw font-medium">
          Back to sign in
        </Link>
      </p>
    </div>
  );
}
