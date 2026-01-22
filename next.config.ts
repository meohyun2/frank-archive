import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "www.notion.so",
      },
      {
        hostname: "producthunt.com",
      },
    ],
  },
};

export default nextConfig;
