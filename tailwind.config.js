/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: "var(--tw-prose-headings)",
              fontWeight: "700",
              fontSize: theme("fontSize.2xl")[0],
              ...theme("fontSize.2xl")[1],
              marginBottom: theme("spacing.2"),
            },
            h2: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
              fontSize: theme("fontSize.xl")[0],
              ...theme("fontSize.xl")[1],
              marginTop: theme("spacing.7"),
              marginBottom: theme("spacing.2"),
            },
            h3: {
              color: "var(--tw-prose-headings)",
              fontSize: theme("fontSize.lg")[0],
              ...theme("fontSize.lg")[1],
              fontWeight: "600",
              marginTop: theme("spacing.9"),
              marginBottom: theme("spacing.2"),
            },
            pre: {
              "overflow-x": "auto",
            },
          },
        },
      }),
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
