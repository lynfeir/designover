"use client";

import { useActionState } from "react";
import { updatePassword, type AuthState } from "@/app/login/actions";

export default function ResetPasswordForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(
    updatePassword,
    undefined
  );

  return (
    <div className="w-full max-w-md">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight mb-2">
        Set a new password.
      </h1>
      <p className="text-muted-fg text-sm mb-8 font-[family-name:var(--font-ui)]">
        Choose a new password for your account.
      </p>
      <form action={action} className="space-y-4">
        <input
          name="password"
          type="password"
          required
          className="doa-input"
          placeholder="New password (8+ characters)"
          aria-label="New password, at least 8 characters"
          autoComplete="new-password"
        />
        <input
          name="confirm"
          type="password"
          required
          className="doa-input"
          placeholder="Confirm new password"
          aria-label="Confirm new password"
          autoComplete="new-password"
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
          {pending ? "Saving…" : "Update Password"}
        </button>
      </form>
    </div>
  );
}
