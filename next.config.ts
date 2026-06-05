import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGithubPages ? "/navaco-website" : "",
  assetPrefix: isGithubPages ? "/navaco-website/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
