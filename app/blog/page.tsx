import type { Metadata } from "next";
import posts from './posts.json';
import Link from "next/link";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Blog | Gaurish Sethia",
}


export default function Blog() {
    return (
        <div>
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 mb-8 dark:text-zinc-100 sm:text-5xl">
                    Blogs
                </h1>
            </div>
            <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
                {posts.map((post, i) => (
                    <li key={i} className="py-3 justify-between flex cursor-pointer">
                        <Link className="flex w-full group justify-between text-sm text-zinc-600 dark:text-zinc-500" href={`/blog/${post.id}`}>
                            <span className="group-hover:text-zinc-700 transition dark:group-hover:text-zinc-400">
                                {post.title}
                            </span>
                            <span className="group-hover:text-zinc-700 transition dark:group-hover:text-zinc-400">
                                {new Date(post.publishedAt).toDateString()}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
