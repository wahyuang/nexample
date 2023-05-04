/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["wp.nexample.local"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
