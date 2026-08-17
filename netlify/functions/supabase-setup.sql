-- Run this once in the Supabase SQL Editor for the project at
-- https://joeoakmtmlmuktitfawh.supabase.co

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text default '',
  content text default '',
  image text default '',
  category text default '',
  author text default '',
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

-- Safe to re-run against an existing table created before "featured" existed.
alter table posts add column if not exists featured boolean not null default false;

-- Public (anon key) can only READ. All writes go through the Netlify
-- function using the service_role key, which bypasses RLS entirely,
-- so no insert/update/delete policy is added for anon on purpose.
alter table posts enable row level security;

drop policy if exists "public read" on posts;
create policy "public read" on posts for select using (true);
