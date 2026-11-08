# TechVech — Website (multi-page, SEO-first)

Next.js 14 (App Router, JavaScript) + Tailwind CSS + Framer Motion.
Dark/light theme toggle, functional contact form (Formspree), deployable on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev                  # http://localhost:3000
npm run build                # production build (also lints)
```

## Site map (all pre-rendered at build time)

| URL | Source |
|---|---|
| `/` | `app/page.js` (+ FAQ, latest posts) |
| `/services` | hub |
| `/services/website-development` · `mobile-app-development` · `ai-development` | `lib/services.js` |
| `/hire-developers` | hub |
| `/hire-developers/react-developers` · `nodejs-developers` · `flutter-developers` · `python-developers` · `ai-ml-engineers` | `lib/roles.js` |
| `/blog`, `/blog/[slug]` | `lib/blog.js` (4 starter articles) |
| `/case-studies`, `/case-studies/[slug]` | `lib/caseStudies.js` (placeholders hidden in production) |
| `/about`, `/contact`, `/privacy-policy`, `/terms` | `app/*/page.js` |
| `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/manifest.webmanifest` | auto-generated |
| `/opengraph-image`, `/twitter-image` | auto-generated 1200×630 share images |

**To add content you only edit data files** — a new service, hiring role or blog post
appears as a page, in the footer, and in the sitemap automatically.

## SEO built in

- Unique title, description and canonical URL on every page (`lib/seo.js`)
- Open Graph + Twitter cards with generated share image
- JSON-LD: Organization, WebSite, Service, FAQPage, Article, BreadcrumbList
- Breadcrumbs on every inner page, one `<h1>` per page, semantic landmarks, skip-to-content link
- Dynamic `sitemap.xml` and `robots.txt`; RSS feed
- Internal linking via nav, footer hub, related-service/role links and blog cross-links
- Security + performance headers, AVIF/WebP image config, `next/font` self-hosted fonts
- Placeholder case studies are `noindex`, hidden in production, and kept out of the sitemap

## Replace before launch (all flagged in code with PLACEHOLDER)

1. **`lib/site.js`** — email, phone, address (city is an assumption), social profile URLs.
   Everything else (footer, contact page, schema) reads from here.
2. **`components/TrustBar.js` and `components/Hero.js`** — stats ("40+ projects", "4.9/5", "25+ developers", "12d"). Use only numbers you can back up.
3. **`components/Testimonials.js`** — three placeholder quotes → real clients (with permission).
4. **`components/HireDevelopers.js`** — sample developer cards are illustrative.
5. **`lib/caseStudies.js`** — write real case studies, set `placeholder: false`. Until then they stay hidden/noindex.
6. **`app/about/page.js`** — your real story, founders, vetting process (make it match reality).
7. **`app/privacy-policy/page.js`, `app/terms/page.js`** — generic templates; get legal review.
8. **`lib/blog.js`** — starter articles are general guides; add your own experience/examples and keep publishing.
9. **Service/role copy** (`lib/services.js`, `lib/roles.js`) — review claims (turnaround times, vetting, onboarding) against what you really offer.
10. Add a **PNG logo** (square, ≥112px) at `public/logo.png` and point `logo` in `lib/schema.js` to it (Google prefers raster logos).

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://techvech.com` — used for canonicals, sitemap, schema |
| `NEXT_PUBLIC_FORMSPREE_ID` | Makes the contact form actually send (formspree.io) |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics 4 ID |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Optional Search Console verification token |
| `NEXT_PUBLIC_SHOW_PLACEHOLDERS` | `true` on a preview deploy to see placeholder case studies |

Contact form submissions also record which page they came from (`page` field).
A Resend-based alternative lives in `app/api/contact/route.js`.

## Launch checklist

1. Deploy to Vercel, add env vars, connect `techvech.com` (redirect `www` → non-www, or the reverse, in Vercel Domains).
2. Search Console: verify domain, submit `https://techvech.com/sitemap.xml`, request indexing for the top pages.
3. Test: Lighthouse (aim 90+), https://search.google.com/test/rich-results (FAQ/Breadcrumb/Service), share a link on WhatsApp/LinkedIn to check the preview image.
4. Create Google Business Profile, LinkedIn page, Clutch / GoodFirms / Upwork profiles — link back to the site.
5. Publish steadily (2–4 posts/month) and add real case studies as projects complete.
