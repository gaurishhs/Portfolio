import type { Metadata } from "next";
import projects from './projects.json';

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Projects | Gaurish Sethia",
}

export default function Projects() {
    return (
        <div>
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 mb-8 dark:text-zinc-100 sm:text-5xl">
                    Projects
                </h1>
            </div>
            <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
                {projects.map((project, i) => (
                    <li key={i} className="py-3 justify-between flex cursor-pointer">
                        <a target="_blank" className="flex w-full group justify-between text-sm text-zinc-600 dark:text-zinc-500" href={project.url}>
                            <span className="group-hover:text-zinc-700 transition dark:group-hover:text-zinc-400">
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
    )
}
