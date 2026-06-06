-- ════════════════════════════════════════════════════════════════════
-- Design over Atlanta — auth, leads, and client portal schema
-- Apply once in the Supabase SQL editor for project lbiqsfkmuomwfbpncdmi.
-- ════════════════════════════════════════════════════════════════════

-- ── profiles ──────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  full_name   text,
  company     text,
  role        text not null default 'client' check (role in ('client', 'admin')),
  created_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Admin check via SECURITY DEFINER so RLS policies don't recurse.
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- Auto-create a profile whenever an auth user is created.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, company, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'company', ''),
    coalesce(new.raw_user_meta_data ->> 'role', 'client')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── intake_submissions (leads) ────────────────────────────────────────
create table if not exists public.intake_submissions (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users (id) on delete set null,
  name          text not null,
  email         text not null,
  company       text,
  phone         text,
  project_type  text,
  project_name  text,
  description   text,
  goals         text,
  budget        text,
  timeline      text,
  pages         text[] default '{}',
  features      jsonb not null default '[]',
  status        text not null default 'new'
                  check (status in ('new','reviewing','quoted','won','archived')),
  created_at    timestamptz not null default now()
);

alter table public.intake_submissions enable row level security;

drop policy if exists intake_select on public.intake_submissions;
create policy intake_select on public.intake_submissions
  for select using (user_id = auth.uid() or public.is_admin());

-- Public submissions go through the service role (server route); signed-in
-- users may also insert their own.
drop policy if exists intake_insert_own on public.intake_submissions;
create policy intake_insert_own on public.intake_submissions
  for insert to authenticated with check (user_id = auth.uid());

drop policy if exists intake_update_admin on public.intake_submissions;
create policy intake_update_admin on public.intake_submissions
  for update using (public.is_admin()) with check (public.is_admin());

-- ── client_projects ───────────────────────────────────────────────────
create table if not exists public.client_projects (
  id            uuid primary key default gen_random_uuid(),
  client_id     uuid references auth.users (id) on delete cascade,
  name          text not null,
  slug          text unique,
  status        text not null default 'active'
                  check (status in ('discovery','demo','in_progress','review','launched','active','paused')),
  summary       text,
  project_type  text,
  repo_url      text,
  live_url      text,
  features      jsonb default '[]',
  progress      int not null default 0 check (progress between 0 and 100),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table public.client_projects enable row level security;

drop policy if exists projects_select on public.client_projects;
create policy projects_select on public.client_projects
  for select using (client_id = auth.uid() or public.is_admin());

drop policy if exists projects_admin_write on public.client_projects;
create policy projects_admin_write on public.client_projects
  for all using (public.is_admin()) with check (public.is_admin());

-- ── project_milestones ────────────────────────────────────────────────
create table if not exists public.project_milestones (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid not null references public.client_projects (id) on delete cascade,
  title       text not null,
  detail      text,
  status      text not null default 'pending' check (status in ('pending','active','done')),
  position    int not null default 0,
  created_at  timestamptz not null default now()
);

alter table public.project_milestones enable row level security;

drop policy if exists milestones_select on public.project_milestones;
create policy milestones_select on public.project_milestones
  for select using (
    exists (
      select 1 from public.client_projects p
      where p.id = project_id
        and (p.client_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists milestones_admin_write on public.project_milestones;
create policy milestones_admin_write on public.project_milestones
  for all using (public.is_admin()) with check (public.is_admin());

-- ── helpful indexes ───────────────────────────────────────────────────
create index if not exists idx_intake_created on public.intake_submissions (created_at desc);
create index if not exists idx_projects_client on public.client_projects (client_id);
create index if not exists idx_milestones_project on public.project_milestones (project_id, position);
