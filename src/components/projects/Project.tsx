import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Project } from "types";

export default function ProjectCard(project: Project) {
  return (
    <li className="mt-3">
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <div className="space-y-3 xl:col-span-3">
          <div>
            <h3 className="text-2xl mt-2 font-bold text-gray-200 leading-8 tracking-tight">
              {project.title}
            </h3>
          </div>
          <div className="prose text-gray-500 dark:text-white">
            {project.description}
          </div>
          <div className="inline-flex gap-1 mt-3">
            {project.githubURL ? (
              <Link href={project.githubURL}>
                <AiOutlineGithub size={24} className="text-white" />
              </Link>
            ) : null}
            {project.url ? (
              <Link href={project.url}>
                <BiLinkExternal size={24} className="text-white" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}
