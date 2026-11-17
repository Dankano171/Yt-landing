-- Run this SQL in your Supabase SQL Editor to create the waitlist table.
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  channel_url text not null,
  sells text,
  consent boolean not null default false
);

alter table public.waitlist enable row level security;

-- Allow anonymous inserts only if you use SUPABASE_ANON_KEY from the server.
-- If you use SUPABASE_SERVICE_ROLE_KEY on the server, no public insert policy is needed.
create policy "Allow waitlist inserts"
  on public.waitlist
  for insert
  to anon
  with check (consent = true);
