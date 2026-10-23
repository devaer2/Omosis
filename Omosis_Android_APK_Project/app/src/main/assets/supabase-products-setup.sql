-- Omosis v7: marketplace products + seller profiles
create table if not exists public.seller_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  store_name text not null,
  city text,
  approved boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  description text not null default '',
  category text not null default 'other' check (category in ('fashion','electronics','home','beauty','other')),
  price numeric(12,2) not null check (price >= 0),
  mrp numeric(12,2) not null check (mrp >= price),
  stock integer not null default 0 check (stock >= 0),
  image_url text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.seller_profiles enable row level security;
alter table public.products enable row level security;

drop policy if exists "Public seller profiles readable" on public.seller_profiles;
create policy "Public seller profiles readable" on public.seller_profiles for select using (approved = true or auth.uid() = user_id);
drop policy if exists "Users manage own seller profile" on public.seller_profiles;
create policy "Users manage own seller profile" on public.seller_profiles for insert with check (auth.uid() = user_id);
drop policy if exists "Users update own seller profile" on public.seller_profiles;
create policy "Users update own seller profile" on public.seller_profiles for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Public active products readable" on public.products;
create policy "Public active products readable" on public.products for select using (active = true or auth.uid() = seller_id);
drop policy if exists "Sellers insert own products" on public.products;
create policy "Sellers insert own products" on public.products for insert with check (auth.uid() = seller_id);
drop policy if exists "Sellers update own products" on public.products;
create policy "Sellers update own products" on public.products for update using (auth.uid() = seller_id) with check (auth.uid() = seller_id);
drop policy if exists "Sellers delete own products" on public.products;
create policy "Sellers delete own products" on public.products for delete using (auth.uid() = seller_id);

create index if not exists products_seller_id_idx on public.products(seller_id);
create index if not exists products_category_idx on public.products(category);
create index if not exists products_active_idx on public.products(active);
