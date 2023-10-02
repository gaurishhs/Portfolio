import { Header } from "./header";
import posts from "../posts.json";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <article className="prose mx-auto max-w-full overflow-x-scroll prose-sm prose-zinc dark:prose-invert">
            <Header posts={posts} />
            {children}
        </article>
    );
}
