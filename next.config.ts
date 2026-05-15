// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 생략
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
