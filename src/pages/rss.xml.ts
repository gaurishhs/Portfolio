import rss from "@astrojs/rss";
import { getPosts } from "../utils/posts";
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: "Gaurish's Blog",
    description: "Gaurish Sethia is a self-taught full stack developer who is passionate about writing code and is an open source enthusiast.",
    site: context.site || "",
    items: posts.map((post) => ({
      link: `blog/${post.slug}`,
      title: post.data.title,
      pubDate: new Date(post.data.date),
    })),
  });
}