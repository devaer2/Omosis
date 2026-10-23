OMOSIS v7 — SUPABASE PRODUCTS + SELLER INVENTORY

1) Keep your working v6 deployment as a rollback backup.
2) In Supabase > SQL Editor, run: supabase-products-setup.sql
3) Deploy this entire ZIP to the same Netlify site.
4) Log in, open seller-products.html, save a Store Profile, then add a product.
5) Open products.html. Supabase products will appear automatically. If the products table is empty, the starter catalog remains visible.

Security:
- Browser contains only the Supabase publishable key.
- RLS is enabled.
- A signed-in user can create/update/delete only products whose seller_id is their own auth user id.
- Public visitors can read active products.

Image URLs are optional in v7. Supabase Storage upload UI can be added next.

Embedded starter product pictures: the 24 sample products include self-contained SVG data images generated in js/products.js. No external image hosting is required for the starter catalog.
