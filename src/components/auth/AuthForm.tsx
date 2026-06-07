"use client";

import { useState } from "react";
import { useActionState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signUp, type AuthState } from "@/app/login/actions";

export default function AuthForm({
  initialMode = "signin",
  redirectTo = "",
}: {
  initialMode?: "signin" | "signup";
  redirectTo?: string;
}) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [signInState, signInAction, signInPending] = useActionState<
    AuthState,
    FormData
  >(signIn, undefined);
  const [signUpState, signUpAction, signUpPending] = useActionState<
    AuthState,
    FormData
  >(signUp, undefined);

  const state = mode === "signin" ? signInState : signUpState;
  const pending = mode === "signin" ? signInPending : signUpPending;

  return (
    <div className="w-full max-w-md">
      {/* Mode toggle */}
      <div className="flex gap-1 mb-8 p-1 rounded-full border border-border/40 bg-card/40 w-fit">
        {(["signin", "signup"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] font-[family-name:var(--font-ui)] transition-colors ${
              mode === m ? "text-background" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {mode === m && (
              <motion.span
                layoutId="auth-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">
              {m === "signin" ? "Sign In" : "Sign Up"}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight mb-2">
            {mode === "signin" ? "Welcome back." : "Create your account."}
          </h1>
          <p className="text-muted-fg text-sm mb-8 font-[family-name:var(--font-ui)]">
            {mode === "signin"
              ? "Sign in to track your projects and demos."
              : "Track your project, review demos, and message Hunter — all in one place."}
          </p>

          <form
            action={mode === "signin" ? signInAction : signUpAction}
            className="space-y-4"
          >
            <input type="hidden" name="redirect" value={redirectTo} />

            {mode === "signup" && (
              <>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    name="fullName"
                    className="doa-input"
                    placeholder="Full name"
                    aria-label="Full name"
                    autoComplete="name"
                  />
                  <input
                    name="company"
                    className="doa-input"
                    placeholder="Company"
                    aria-label="Company"
                    autoComplete="organization"
                  />
                </div>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="doa-input"
                  placeholder="Phone number"
                  aria-label="Phone number"
                  autoComplete="tel"
                />
              </>
            )}

            <input
              name="email"
              type="email"
              required
              className="doa-input"
              placeholder="Email address"
              aria-label="Email address"
              autoComplete="email"
            />
            <input
              name="password"
              type="password"
              required
              className="doa-input"
              placeholder={
                mode === "signin" ? "Password" : "Password (8+ characters)"
              }
              aria-label={
                mode === "signin" ? "Password" : "Password, at least 8 characters"
              }
              autoComplete={
                mode === "signin" ? "current-password" : "new-password"
              }
            />

            {state?.error && (
              <p
                role="alert"
                className="text-sm text-destructive font-[family-name:var(--font-ui)]"
              >
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="btn-shimmer w-full text-background font-[family-name:var(--font-ui)] font-bold py-3.5 text-sm tracking-[0.15em] uppercase transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              {pending
                ? "One moment…"
                : mode === "signin"
                  ? "Sign In"
                  : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-sm text-muted-fg font-[family-name:var(--font-ui)]">
            {mode === "signin" ? (
              <>
                New here?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-primary underline-draw font-medium"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Need a build first?{" "}
                <Link href="/start" className="text-primary underline-draw font-medium">
                  Start a project
                </Link>
              </>
            )}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
