import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        scrollRestoration: true,
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

const withMDX = nextMDX({
    options: {
        rehypePlugins: [
            [rehypePrettyCode, {
                theme: 'dracula',
                keepBackground: false
            }]
        ],
    },  
    extension: /\.mdx?$/,
});
export default withMDX(nextConfig)