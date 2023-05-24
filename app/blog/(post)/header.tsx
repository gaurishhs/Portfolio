"use client";
import { Post } from "@/app/types";
import { useSelectedLayoutSegments } from "next/navigation";

export function Header({ posts }: { posts: Post[] }) {
    const currentPostID = useSelectedLayoutSegments()[0];
    const currentPost = posts.find(post => post.id === currentPostID);
    const postPublished = new Date(currentPost?.publishedAt || 0);
    return (
        <>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{currentPost?.title}</h1>
            <span className="text-sm text-zinc-400">
                Posted on {postPublished.toDateString()}
            </span>
        </>
    );
}