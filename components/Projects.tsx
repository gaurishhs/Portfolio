import { useState } from "react";
import * as config from "../config.json";
import { Project } from "./Project";
import { AiOutlineArrowDown } from "react-icons/ai";
export const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div id="projects" className="bg-transparent">
      <h2 className="mb-6 font-sans text-center text-3xl font-bold tracking-tight text-emerald-400 sm:text-4xl sm:leading-none">
        <span className="relative px-1">
          <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
          <span className="relative inline-block text-heading">
            Projects
          </span>
        </span>
      </h2>{" "}
      <div className="relative flex px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.projects.slice(0, 8).map((project, i) => {
            return <Project key={i} {...project} />;
          })}
        </div>
        {isExpanded && (
            <div className="relative pt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {config.projects.slice(8).map((project, i) => {
                return <Project key={i} {...project} />;
              })}
            </div>
          )}
        <div className="flex items-center pt-5 justify-center">
          {config.projects.length > 8 && (
            <a
              className="relative hover:cursor-pointer inline-flex items-center px-8 py-3 overflow-hidden text-indigo-600 border border-current rounded group active:text-indigo-500 focus:outline-none focus:ring"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <AiOutlineArrowDown className="w-5 h-5" />
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                {isExpanded ? "Show Less" : "Show More"}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
