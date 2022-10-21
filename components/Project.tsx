import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineFolder } from "react-icons/ai";

interface Props {
  title: string;
  description: string;
  url?: string;
  githubURL?: string;
}

export const Project: FC<Props> = ({ title, description, githubURL, url }) => {
  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <AiOutlineFolder size={80} className="text-indigo-500" />
        </div>
        <div className="flex align-middle space-x-4 justify-center">
          {githubURL && (
            <a aria-label="github link" href={githubURL} target="_blank">
              <FaGithub
                size={30}
                className="text-indigo-500 motion-reduce:transition-none motion-reduce:hover:transform-none hover:-translate-y-1 hover:scale-110 ease-in-out duration-300 hover:cursor-pointer"
              />
            </a>
          )}
          {url && (
            <a aria-label="project link" href={url} target="_blank">
              <BiLinkExternal
                size={30}
                className="text-indigo-500 motion-reduce:transition-none motion-reduce:hover:transform-none hover:-translate-y-1 hover:scale-110 ease-in-out duration-300 hover:cursor-pointer"
              />
            </a>
          )}
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="block">
            <h3 className="text-xl font-semibold text-fuchsia-400">{title}</h3>
          </div>
          <p className="leading-snug text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};
