import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        scrollRestoration: true,
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    headers() {
        return [
            {
                source: '/me.jpeg',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    }
                ]
            }
        ]
    }
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
