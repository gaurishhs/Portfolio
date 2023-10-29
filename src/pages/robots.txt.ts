import type { APIContext, APIRoute } from "astro";

const robots = (url?: string | URL) => `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", url).href}
`.trim();

export const GET: APIRoute = (ctx: APIContext) =>
  new Response(robots(ctx.site), {
    headers: { "Content-Type": "text/plain" },
  });