import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    /** Inlines CSS in production HTML so first paint is not blocked on extra stylesheet round-trips (strong for Tailwind-sized bundles). */
    inlineCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-select',
      '@radix-ui/react-slider',
      '@radix-ui/react-label',
      '@radix-ui/react-slot',
    ],
  },
  output: 'export',
  /** Helps S3 static hosting resolve routes as `.../index.html` folders. */
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
