import { Feed } from 'feed';
import posts from '@/app/blog/posts.json'

const feed = new Feed({
    title: "Gaurish's blog",
    description: "Gaurish's personal blog",
    id: "https://gaurishsethia.me/",
    link: "https://gaurishsethia.me/",
    language: "en", 
    image: "https://gaurishsethia.me/me.jpeg",
    favicon: "https://gaurishsethia.me/favicon.ico",
    copyright: "All rights reserved 2023, Gaurish Sethia",
    feedLinks: {
      atom: "https://example.com/atom"
    },
    author: {
      name: "Gaurish Sethia",
      email: "gaurishsethia@yahoo.com",
      link: "https://twitter.com/gaurishhs"
    }
});

posts.forEach(post => {
    return feed.addItem({
        title: post.title,
        id: post.id,
        link: `https://gaurishsethia.me/blog/${post.id}`,
        date: new Date(post.publishedAt)
    });
});

export function GET() {
    return new Response(feed.atom1(), {
        headers: {
            "content-type": "application/xml;charset=UTF-8"
        },
    });
}