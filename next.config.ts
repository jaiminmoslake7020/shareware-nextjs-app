import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    implementation: 'sass-embedded',
  },
  output: 'export'
};

export default nextConfig;
