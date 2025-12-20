import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time";
import { readFileSync } from "fs";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gaurishhs.xyz",
  integrations: [preact(), mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      // [
      //   rehypePrettyCode,
      //   {
      //     theme: "min-dark",
      //     keepBackground: false,
      //   },
      // ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    plugins: [rawFonts([".woff", ".ttf"]), tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});

function rawFonts(ext: string[]) {
  return {
    name: "vite-plugin-raw-fonts",
    transform(_: any, id: string) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
}
