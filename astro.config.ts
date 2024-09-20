import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import sitemap from '@astrojs/sitemap';
import remarkFootnotes from 'remark-footnotes';
import { remarkReadingTime } from './remark-reading-time';
import { sharpImageService } from 'astro/config';
import { readFileSync } from 'fs';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://gaurishhs.xyz',
  integrations: [tailwind(), preact(), mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [rehypePrettyCode, {
        theme: 'min-dark',
        keepBackground: false
      }],
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        properties: {
          className: ['anchor']
        }
      },
      ]
    ],
    remarkPlugins: [remarkGfm, remarkFootnotes, remarkReadingTime]
  },
  image: {
    service: sharpImageService()
  },
  vite: {
    plugins: [rawFonts(['.woff', '.ttf'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});

function rawFonts(ext: string[]) {
  return {
    name: "vite-plugin-raw-fonts",
    transform(_: any, id: string) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}
