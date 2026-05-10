import type { NextConfig } from 'next';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  /** Stable root when multiple lockfiles exist under `projects/` parents. */
  outputFileTracingRoot: root,
};

export default nextConfig;
