"use client";
import { Post } from "@/app/types";
import ViewCounter from "@/app/views";
import { useSelectedLayoutSegments } from "next/navigation";

export function Header({ posts }: { posts: Post[] }) {
    const currentPostID = useSelectedLayoutSegments()[0];
    const currentPost = posts.find((post) => post.id === currentPostID);
    const postPublished = new Date(currentPost?.publishedAt || 0);
    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-2xl sm:text-xl font-bold tracking-tight">
                    {currentPost?.title}
                </h1>
                <span className="text-sm text-zinc-400 flex flex-col font-mono">
                    {postPublished.toLocaleDateString('en-GB')}
                    <ViewCounter slug={currentPost?.id} />
                </span>
            </div>
        </>
    );
}
