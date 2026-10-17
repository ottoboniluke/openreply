import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  // Lets the dev server answer through a tunnel (ngrok) set as NEXTAUTH_URL.
  allowedDevOrigins: process.env.NEXTAUTH_URL
    ? [new URL(process.env.NEXTAUTH_URL).hostname]
    : [],
};

export default nextConfig;
