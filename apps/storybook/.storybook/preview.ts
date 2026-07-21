import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import React from "react";

// The staywire-branded shadcn entry stylesheet: Tailwind v4 + staywire token preset
// (@staywirekit/tokens) + the shadcn→staywire theme mapping. @tailwindcss/vite
// processes the @import "tailwindcss" inside it.
import "@staywirekit/ui/styles";

const preview: Preview = {
  parameters: {
    options: {
      // Foundations first — this Storybook reads as a brand guideline, not just
      // a component dump.
      storySort: {
        order: ["Foundations", ["Overview", "Logo", "Colour", "Typography", "Spacing & radius", "Assets"], "Blocks", "Components"],
      },
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    layout: "centered",
  },
  decorators: [
    // Light by default; the toolbar paintbrush toggles the dark-first canvas.
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
    // Brand font + padding. The canvas background itself is themed on <body>
    // (see preview-head.html) so the whole iframe follows the theme, not just
    // this wrapper.
    (Story) =>
      React.createElement(
        "div",
        { className: "text-foreground font-sans p-(--space-xl)" },
        React.createElement(Story),
      ),
  ],
  tags: ["autodocs"],
};

export default preview;
