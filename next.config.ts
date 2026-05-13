import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  compress: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  turbopack: {},
  allowedDevOrigins: ['slacked-scowling-shortwave.ngrok-free.dev'],
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.museobucolico.it' },
      { protocol: 'https', hostname: 'www.cloudsami.net' },
    ],
  },
};

export default nextConfig;
