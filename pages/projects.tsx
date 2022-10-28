import SEO from "@/components/global/SEO";
import ProjectCard from "@/components/projects/Project";
import config from "@/config";

export default function Projects() {
  let description = "Find all the projects that i have worked on.";
  return (
    <>
      <SEO title="Projects - Gaurish Sethia" description={description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="container mx-auto py-12">
          <ul className="divide-y dark:divide-gray-700">
            {config.projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}