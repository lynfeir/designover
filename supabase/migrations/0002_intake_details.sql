-- Extended intake answers (industry, purpose, style, colors, SEO, etc.)
-- stored as a single jsonb blob so the form can grow without new columns.
-- The intake API falls back to inserting without this column if it's missing,
-- so apply this whenever convenient — no leads are lost in the meantime.

alter table public.intake_submissions
  add column if not exists details jsonb not null default '{}'::jsonb;
