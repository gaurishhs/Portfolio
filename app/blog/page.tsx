import type { Metadata } from "next";
import posts from "./posts.json";
import Link from "next/link";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Blog | Gaurish Sethia",
};

export default function Blog() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-2xl mb-6">
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
                                            {new Date(
                                                post.publishedAt
                                            ).toDateString()}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-2">
                        <Link className="font-medium text-zinc-800 dark:text-zinc-200 transition hover:text-teal-500 dark:hover:text-teal-500" href={"/atom"}>Atom</Link>
                        <Link className="font-medium text-zinc-800 dark:text-zinc-200 transition hover:text-teal-500 dark:hover:text-teal-500" href={"/api/posts"}>JSON</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
