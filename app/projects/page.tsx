import type { Metadata } from "next";
import projects from "./projects.json";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Projects | Gaurish Sethia",
    description: "Projects by Gaurish Sethia",
};

export default function Projects() {
    return (
        <ul className="m-auto max-w-2xl w-full divide-y divide-zinc-200 dark:divide-zinc-700">
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
    );
}
