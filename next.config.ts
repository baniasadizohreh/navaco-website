import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/navaco-website",
  assetPrefix: "/navaco-website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;