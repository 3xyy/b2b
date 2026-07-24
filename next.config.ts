import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root. Without it Turbopack walks up and finds the stray
  // lockfile in the parent Documents folder, then warns on every build.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
