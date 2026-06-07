"use client";

import { useActionState } from "react";
import {
  updateAccount,
  changePassword,
  type AccountState,
} from "@/app/account/actions";

export default function AccountSettings({
  email,
  fullName,
  company,
  phone,
}: {
  email: string;
  fullName: string;
  company: string;
  phone: string;
}) {
  const [profileState, profileAction, profilePending] = useActionState<
    AccountState,
    FormData
  >(updateAccount, undefined);
  const [pwState, pwAction, pwPending] = useActionState<AccountState, FormData>(
    changePassword,
    undefined
  );

  return (
    <div className="space-y-8">
      {/* Profile */}
      <section className="glass rounded-2xl border border-border/30 p-6 lg:p-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-1">
          Your details
        </h2>
        <p className="text-muted-fg text-sm mb-6 font-[family-name:var(--font-ui)]">
          This is how we reach you about your project.
        </p>
        <form action={profileAction} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name">
              <input
                name="fullName"
                defaultValue={fullName}
                className="doa-input"
                placeholder="Full name"
                autoComplete="name"
              />
            </Field>
            <Field label="Company">
              <input
                name="company"
                defaultValue={company}
                className="doa-input"
                placeholder="Company"
                autoComplete="organization"
              />
            </Field>
          </div>
          <Field label="Phone">
            <input
              name="phone"
              type="tel"
              defaultValue={phone}
              className="doa-input"
              placeholder="Phone number"
              autoComplete="tel"
            />
          </Field>
          <Field label="Email">
            <input
              value={email}
              disabled
              className="doa-input opacity-60 cursor-not-allowed"
              aria-label="Email (contact us to change)"
            />
            <span className="text-muted-fg text-xs mt-1 block font-[family-name:var(--font-ui)]">
              To change your email, message Hunter and we&apos;ll move it for you.
            </span>
          </Field>

          <div className="flex items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={profilePending}
              className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-7 py-3 text-sm tracking-[0.15em] uppercase transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              {profilePending ? "Saving…" : "Save Changes"}
            </button>
            {profileState?.ok && (
              <span
                role="status"
                className="text-success text-sm font-[family-name:var(--font-ui)]"
              >
                {profileState.ok}
              </span>
            )}
            {profileState?.error && (
              <span
                role="alert"
                className="text-destructive text-sm font-[family-name:var(--font-ui)]"
              >
                {profileState.error}
              </span>
            )}
          </div>
        </form>
      </section>

      {/* Password */}
      <section className="glass rounded-2xl border border-border/30 p-6 lg:p-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-1">
          Password
        </h2>
        <p className="text-muted-fg text-sm mb-6 font-[family-name:var(--font-ui)]">
          Set a new password for signing in.
        </p>
        <form action={pwAction} className="space-y-4 max-w-md">
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
          <div className="flex items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={pwPending}
              className="border border-primary/40 text-primary hover:border-primary/70 font-[family-name:var(--font-ui)] font-bold px-7 py-3 text-sm tracking-[0.15em] uppercase rounded-full transition-colors disabled:opacity-50"
            >
              {pwPending ? "Updating…" : "Update Password"}
            </button>
            {pwState?.ok && (
              <span
                role="status"
                className="text-success text-sm font-[family-name:var(--font-ui)]"
              >
                {pwState.ok}
              </span>
            )}
            {pwState?.error && (
              <span
                role="alert"
                className="text-destructive text-sm font-[family-name:var(--font-ui)]"
              >
                {pwState.error}
              </span>
            )}
          </div>
        </form>
      </section>
    </div>
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
      <span className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}
