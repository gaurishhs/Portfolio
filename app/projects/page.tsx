import type { Metadata } from "next";
import projects from "./projects.json";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Projects | Gaurish Sethia",
};

export default function Projects() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
                        {projects.map((project, i) => (
                            <li
                                key={i}
                                className="py-3 justify-between flex cursor-pointer"
                            >
                                <a
                                    target="_blank"
                                    className="flex w-full group justify-between text-sm text-zinc-600 dark:text-zinc-500"
                                    href={project.url}
                                >
                                    <span className="group-hover:text-zinc-700 mr-2 transition dark:group-hover:text-zinc-400">
                                        {project.title}
                                    </span>
                                    <span className="group-hover:text-zinc-700 transition dark:group-hover:text-zinc-400">
                                        {project.description}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
