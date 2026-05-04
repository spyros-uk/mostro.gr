# mostro.gr

Marketing site for **Mostro RIBs**—premium sport rigid inflatable boats. Built with **Vite + React 19 + TypeScript + React Router + Tailwind CSS v4**. The production build is static and can be hosted on S3/CloudFront or any static host.

## Requirements

- **Node.js** 20 or newer (LTS recommended)
- **npm**, **pnpm**, or **yarn** for dependencies

## Getting started

```bash
git clone <repository-url>
cd mostro.gr
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit routes under `app/`, UI under `components/`, and shared data under `lib/`.

## npm scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build output in **`dist/`** |
| `npm run export` | Same as `build` |
| `npm run preview` | Build then preview **`dist/`** locally |
| `npm run preview:static` | Preview **`dist/`** only |
| `npm start` | Alias to Vite preview |
| `npm run lint` | ESLint |
| `npm run optimize:images` | Regenerate **`.webp`** files from JPEGs in `public/images/` (uses **sharp**; run after adding or changing JPEGs) |

## Image assets

The UI prefers **WebP** with JPEG fallback (`<picture>`). JPEGs in `public/images/` should have matching **`.webp`** siblings (see `lib/image-webp.ts` and `scripts/optimize-public-images.mjs`). After you add or replace a `.jpg`, run **`npm run optimize:images`** before **`npm run build`** so Lighthouse and mobile LCP stay fast.

## Static hosting

- Upload **`dist/`** to your static host (S3, CloudFront, Netlify, Cloudflare Pages, etc.).
- For absolute social URLs, set `VITE_BASE_URL` at build time.

Typical flow:

1. Set **`VITE_BASE_URL`** to your public site URL for correct absolute URLs in share metadata.
2. Run **`npm run build`**.
3. Sync **`dist/`** to the S3 bucket (for example with the AWS CLI, `aws s3 sync dist/ s3://your-bucket --delete`).
4. Enable **static website hosting** on the bucket and set the index document to **`index.html`**.
5. For HTTPS, custom domains, and smoother URL handling, use **CloudFront** (or another CDN) in front of the bucket.

`@vercel/analytics` is included for production; it reports to Vercel when configured. For S3-only hosting you can remove it or replace it with another analytics approach if you prefer.

## Environment variables

| Variable | When | Purpose |
|----------|------|---------|
| `VITE_BASE_URL` | Build (optional but recommended) | Canonical site URL, e.g. `https://mostro.gr`, used when generating share URLs on boat detail pages. |

Example for a staging build:

```bash
VITE_BASE_URL=https://staging.example.com npm run build
```

## Project layout

| Path | Role |
|------|------|
| `src/` | Vite entry and routes (`src/main.tsx`, `src/App.tsx`, `src/pages/*`) |
| `components/` | Page sections (hero, boats, contact, footer, etc.) and shared UI (`components/ui/`) |
| `lib/boats.ts` | Boat catalog, categories, helpers (`getBoatBySlug`, etc.) |
| `lib/site-contact.ts` | Address, phone, email, maps link, social URLs, hours |
| `lib/boat-filters-storage.ts` | Client-side filter reset behavior (session storage + custom events) |
| `public/` | Static assets referenced by URL path |

Boat detail pages are rendered client-side via React Router (`/boats/:slug`) using the data in `lib/boats.ts`.

## Troubleshooting

### Vite dev server does not start

Run `npm install` first, then `npm run dev` from this project root. If port `5173` is occupied, Vite will choose another available port automatically.

### Share links use localhost in production

Set `VITE_BASE_URL` in your build environment and rebuild, e.g. `VITE_BASE_URL=https://mostro.gr npm run build`.

### `npm start` fails or serves an empty site

`npm start` serves the built **`dist/`** output. Run **`npm run build`** first so `dist/` exists.

## Docs

Additional product and content notes live in **`docs/mosto-gr.md`**.
