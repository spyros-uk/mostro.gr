/** @type {import('next').NextConfig} */
const nextConfig = {
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
