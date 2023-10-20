import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

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
                    theme: 'dracula',
                    keepBackground: true
                }
            ]
        ],
        remarkPlugins: [remarkGfm]
    }
});
export default withMDX(nextConfig)