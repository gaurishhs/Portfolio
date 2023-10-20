"use client";

import { Header } from "./header";
import posts from "../posts.json";
import Link from "next/link";
import { MotionArticle } from "@/app/motion";
import { useReducedMotion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
    const shouldReduceMotion = useReducedMotion();
    return (
        <MotionArticle initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: shouldReduceMotion ? 0 : 0.5 }
            },
        }} className="prose mx-auto max-w-full overflow-x-scroll prose-zinc dark:prose-invert">
            <Header posts={posts} />
            {children}
            <footer className="text-center flex flex-col text-sm">
                <Link href="/blog">
                    cd ..
                </Link>
                <p className="mt-0">
                    <a rel="noopener noreferrer" target="_blank" href="https://creativecommons.org/licenses/by/4.0/">
                        CC BY 4.0
                    </a> © {new Date().getFullYear()} Gaurish Sethia
                </p>
            </footer>
        </MotionArticle>
    );
}
