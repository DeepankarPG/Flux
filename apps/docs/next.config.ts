import path from "path";
import type { NextConfig } from "next";

const monorepoRoot = path.resolve(process.cwd(), "../..");

const nextConfig: NextConfig = {
  transpilePackages: ["@payglocal_flux/ui"],
  outputFileTracingRoot: monorepoRoot,
};

export default nextConfig;
