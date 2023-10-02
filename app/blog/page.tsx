import type { Metadata } from "next";
import posts from "./posts.json";
import Link from "next/link";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Blog | Gaurish Sethia",
};

export default function Blog() {
    return (
        <div>
            <ul className="divide-y w-full divide-zinc-200 dark:divide-zinc-700">
                {posts.map((post, i) => (
                    <li
                        key={i}
                        className="py-3 w-full justify-between flex gap-2 cursor-pointer"
                    >
                        <Link
                            className="flex w-full group justify-between text-sm text-zinc-600 dark:text-zinc-500"
                            href={`/blog/${post.id}`}
                        >
                            <span className="group-hover:text-zinc-700 mr-2 transition dark:group-hover:text-zinc-400">
                                {post.title}
                            </span>
                            <span className="group-hover:text-zinc-700 transition dark:group-hover:text-zinc-400">
                                {new Date(post.publishedAt).toDateString()}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-center flex-row gap-2">
                <Link
                    className="font-medium text-zinc-800 dark:text-zinc-200 transition hover:text-teal-500 dark:hover:text-teal-500"
                    href={"/atom"}
                >
                    Atom
                </Link>
                <Link
                    className="font-medium text-zinc-800 dark:text-zinc-200 transition hover:text-teal-500 dark:hover:text-teal-500"
                    href={"/api/posts"}
                >
                    JSON
                </Link>
            </div>
        </div>
    );
}
