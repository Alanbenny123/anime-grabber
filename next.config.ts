import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    domains: ["m.media-amazon.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "**",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
  staticPageGenerationTimeout: 120,
  poweredByHeader: false,
};

export default nextConfig;
