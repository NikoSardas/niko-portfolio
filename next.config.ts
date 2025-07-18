import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? "/niko-portfolio/" : "",
  basePath: isProd ? '/niko-portfolio' : '',
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
