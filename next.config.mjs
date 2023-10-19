import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

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
        ]
    }
});
export default withMDX(nextConfig)