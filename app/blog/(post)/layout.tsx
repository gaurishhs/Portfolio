import { Header } from "./header";
export const revalidate = 60;
import posts from "../posts.json";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="p-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-10 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="w-full mb-3">
                        <article className="prose prose-sm prose-zinc dark:prose-invert">
                            <Header posts={posts} />
                            {children}
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
