import Post from "@/components/blogs/Post";
import SEO from "@/components/global/SEO";
import { BlogPost } from "types";

interface Props {
  posts: BlogPost[];
}

export default function Blog(props: Props) {
  let description = "I mainly write my blog posts on dev.to. You can find all my blog posts here.";
  return (
    <>
      <SEO title="Blog - Gaurish Sethia" description={description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blogs
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="container mx-auto py-12">
          <div className="flex flex-wrap -m-4">
            {props.posts.map((post) => (
              <Post key={post.title} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let res = await fetch("https://dev.to/api/articles?username=gaurishhs");
  let data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
