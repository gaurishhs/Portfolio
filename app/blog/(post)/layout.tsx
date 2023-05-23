import { Header } from "./header";
export const revalidate = 60;
import posts from '../posts.json';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="mt-10 mb-10 prose flex flex-col justify-center align-middle prose-zinc dark:prose-invert">
      <Header posts={posts} />
      {children}
    </article>
  );
}