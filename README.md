# mostro.gr

Marketing site for **Mostro RIBs**—premium sport rigid inflatable boats. Built with [Next.js](https://nextjs.org/) (App Router), React 19, TypeScript, and Tailwind CSS v4. The production build is a **fully static** site suitable for hosting on AWS S3 (or any static file host) with no application server.

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
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build; with static export enabled, output is written to **`out/`** |
| `npm run export` | Same as `build` (alias for static export workflows) |
| `npm run preview` | Runs `next build`, then serves **`out/`** locally with [`serve`](https://github.com/vercel/serve) |
| `npm run preview:static` | Serves **`out/`** only (run after `build`) |
| `npm start` | Serves **`out/`** (same as `preview:static`; there is no `next start` for static export) |
| `npm run lint` | ESLint |

## Static export and S3

This project uses Next.js **`output: 'export'`** and **`trailingSlash: true`** (see `next.config.mjs`):

- **`out/`** is the folder to upload to your bucket (website root).
- Trailing slashes map cleanly to S3-style paths (`/boats/my-boat/` → `boats/my-boat/index.html`).
- Images use **`images.unoptimized: true`**, so no Next.js image optimization server is required.

Typical flow:

1. Set **`NEXT_PUBLIC_BASE_URL`** to your public site URL for correct Open Graph and absolute URLs in metadata (see below).
2. Run **`npm run build`**.
3. Sync **`out/`** to the S3 bucket (for example with the AWS CLI, `aws s3 sync out/ s3://your-bucket --delete`).
4. Enable **static website hosting** on the bucket and set the index document to **`index.html`**.
5. For HTTPS, custom domains, and smoother URL handling, use **CloudFront** (or another CDN) in front of the bucket.

`@vercel/analytics` is included for production; it reports to Vercel when configured. For S3-only hosting you can remove it or replace it with another analytics approach if you prefer.

## Environment variables

| Variable | When | Purpose |
|----------|------|---------|
| `NEXT_PUBLIC_BASE_URL` | Build (optional but recommended) | Canonical site URL, e.g. `https://mostro.gr`. Used as **`metadataBase`** in `app/layout.tsx` so Open Graph and Twitter metadata resolve absolute image URLs correctly. Defaults to `https://mostro.gr` if unset. |

Example for a staging build:

```bash
NEXT_PUBLIC_BASE_URL=https://staging.example.com npm run build
```

## Project layout

| Path | Role |
|------|------|
| `app/` | Routes: home (`page.tsx`), boat detail (`boats/[slug]/page.tsx`), root layout and global CSS |
| `components/` | Page sections (hero, boats, contact, footer, etc.) and shared UI (`components/ui/`) |
| `lib/boats.ts` | Boat catalog, categories, helpers (`getBoatBySlug`, etc.) |
| `lib/site-contact.ts` | Address, phone, email, maps link, social URLs, hours |
| `lib/boat-filters-storage.ts` | Client-side filter reset behavior (session storage + custom events) |
| `public/` | Static assets referenced by URL path |

Boat detail pages are generated at build time from `generateStaticParams` in `app/boats/[slug]/page.tsx`.

## Troubleshooting

### “Next.js inferred your workspace root, but it may not be correct” (multiple lockfiles)

If a **`package-lock.json`** (or other lockfile) exists in a **parent** directory of this repo, Turbopack may pick the wrong root. Options:

- Remove or relocate the extra lockfile if it is not needed, **or**
- Pin the project root in `next.config.mjs` (ESM):

```js
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  turbopack: { root: projectRoot },
  // …rest of config
}
```

See [Turbopack `root`](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory).

### `metadataBase` / Open Graph warnings during build

Ensure **`NEXT_PUBLIC_BASE_URL`** matches the URL where the site will be served, and run the build from **this** project folder so `app/layout.tsx` metadata is applied. Boat pages use relative image paths in Open Graph; they are resolved against `metadataBase`.

### `npm start` fails or serves an empty site

`npm start` serves the **`out/`** directory. Run **`npm run build`** first so `out/` exists.

## Docs

Additional product and content notes live in **`docs/mosto-gr.md`**.
