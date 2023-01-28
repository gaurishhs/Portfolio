import Link from "next/link";
import { BlogPost } from "types";
import Image from "next/image";
import { AiOutlineCalendar, AiOutlineHeart } from "react-icons/ai";

export default function Post(post: BlogPost) {
  return (
    <div className="p-4 lg:w-1/2 md:w-1/2">
      <div className="h-full border-2 ease-in-out duration-200 transition-all border-gray-500 hover:border-gray-300 rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={post.cover_image}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="tracking-widest text-lg title-font font-medium text-white mb-1">
            {post.title}
          </h1>
          <p className="title-font text-sm font-medium text-gray-300 mb-3">
            {post.description}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              href={post.url}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <AiOutlineCalendar size={20} className="mr-1" />
              {post.readable_publish_date}
            </span>
            <span className="text-gray-200 inline-flex items-center leading-none text-sm">
              <AiOutlineHeart size={20} className="mr-1" />
              {post.public_reactions_count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
