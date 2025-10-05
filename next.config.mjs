/**
 * Next.js config tuned for Vercel deploys.
 */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'oaidalleapiprodscus.blob.core.windows.net' },
      { protocol: 'https', hostname: 'picsum.photos' }
    ]
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
