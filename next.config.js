/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '**',
      },
    ],
    domains: [
      'cdn.myanimelist.net',
      'm.media-amazon.com'
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig 