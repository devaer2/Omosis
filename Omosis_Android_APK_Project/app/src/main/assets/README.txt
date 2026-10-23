OMOSIS MULTI-PAGE MARKETPLACE

DEPLOY TO NETLIFY
1. Upload this whole folder (or ZIP) to Netlify.
2. Enable form detection.
3. Deploy.
4. Place a test COD order.
5. In Netlify > Forms, look for customer-order.
6. Seller leads appear under seller-enquiry; contact messages under contact.

IMPORTANT
- Product images are embedded SVG data images generated in js/products.js, so default product images do not depend on external image hosting.
- Cart works with browser localStorage.
- COD checkout posts to Netlify Forms.
- Seller/admin/account dashboards are UI demos until a real authentication + database/API backend is connected.
- Do not treat the demo coupon codes as real retailer offers.


SUPABASE AUTH ADDED
- signup.html: real Supabase email/password signup
- login.html: real Supabase login
- account.html: protected account + logout
- js/auth.js: Supabase client config

IMPORTANT: In Supabase Authentication > URL Configuration, set Site URL to your live Netlify URL and add your Netlify URL to Redirect URLs. Email confirmation may be enabled by default.
