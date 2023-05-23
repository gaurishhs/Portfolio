import { NextResponse } from "next/server";
import posts from "@/app/blog/posts.json";

export const dynamic = "force-dynamic";

export function GET() {
    return NextResponse.json(posts);
}