import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        scrollRestoration: true,
        serverComponentsExternalPackages: ['@libsql/client']
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

const withMDX = nextMDX({ 
    extension: /\.mdx?$/,
    options: {
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: {
                        dark: 'min-dark',
                        light: 'min-light'
                    },
                    keepBackground: true
                }
            ],
            rehypeAutolinkHeadings,
        ],
        remarkPlugins: [remarkGfm],
    }
});
export default withMDX(nextConfig)