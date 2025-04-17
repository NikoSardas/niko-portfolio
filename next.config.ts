import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/niko-portfolio/",
  basePath: "/niko-portfolio",
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
