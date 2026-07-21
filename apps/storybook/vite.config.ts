import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// "@/*" is the path alias sendwire's shadcn components use internally
// (see packages/ui/components.json). Storybook bundles those component
// sources directly, so the alias must resolve to the ui package src.
const uiSrc = fileURLToPath(new URL("../../packages/ui/src", import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": uiSrc,
    },
  },
});
