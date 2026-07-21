import type { NextConfig } from "next";
import path from "path";

// Monorepo: pin the workspace root so Turbopack/file-tracing resolve
// @sendwirekit/* source packages when built via `vercel build` (CI cwd differs).
const workspaceRoot = path.join(__dirname, "../..");

const nextConfig: NextConfig = {
  turbopack: { root: workspaceRoot },
  outputFileTracingRoot: workspaceRoot,
};

export default nextConfig;
