import { Header } from "./header";
import posts from "../posts.json";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <article className="prose mx-auto max-w-full overflow-x-scroll prose-zinc dark:prose-invert">
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
        </article>
    );
}
