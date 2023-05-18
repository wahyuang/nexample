/** @type {import('next').NextConfig} */
const ENV = process.env.NODE_ENV;

const nextConfig = {
  output: ENV == "production" ? "standalone" : undefined,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["strapi.nexample.xyz"],
  },
};

module.exports = nextConfig;
