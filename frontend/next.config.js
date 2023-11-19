/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID,
    LIGHTHOUSE_API_KEY: process.env.LIGHTHOUSE_API_KEY,
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
  },
};

module.exports = nextConfig;
