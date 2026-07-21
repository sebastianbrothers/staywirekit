import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(ts|tsx)",
    "../../../packages/ui/src/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-themes"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: [
    // Serve the vendored brand KB's assets (logos, flow-lines, fonts) at /brand
    // for the Foundations pages. Graphik faces themselves ship in @sendwirekit/ui.
    { from: "../../../brand/reference/brand/assets", to: "/brand" },
  ],
  typescript: {
    check: false,
  },
};

export default config;
