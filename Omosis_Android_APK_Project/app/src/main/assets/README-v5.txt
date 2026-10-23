OMOSIS / LOCALIO v5 — Supabase Orders

DO THIS BEFORE TESTING ORDERS:
1. Open Supabase -> your Localio project -> SQL Editor.
2. Open the included file: supabase-orders-setup.sql
3. Copy all of it into SQL Editor and click Run.
4. To use the admin order page, run the final commented UPDATE statement separately after replacing YOUR-LOGIN-EMAIL@example.com with your own Omosis login email.
5. Deploy this entire folder/ZIP to the SAME Netlify site.
6. Login -> add product -> checkout -> place COD order -> My Orders.
7. Admin: /admin/orders.html

Netlify Forms is still kept as a best-effort backup copy of checkout submissions.
Never put a Supabase secret/service-role key in these website files.
