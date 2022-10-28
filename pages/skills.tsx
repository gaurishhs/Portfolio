import Post from "@/components/blogs/Post";
import SEO from "@/components/global/SEO";
import SkillsCard from "@/components/skills/Card";
import config from "@/config";
import { Fragment } from "react";

export default function SkillsPage() {
  let description =
    "Find which all skills i know ;)";
  return (
    <>
      <SEO title="Skills - Gaurish Sethia" description={description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Skills
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex mb-5 mt-4 flex-wrap">
          {config.skills.map((skill) => {
            return (
              <Fragment>
                <h1 className="text-4xl text-left pl-5 pt-5 pb-5 text-gray-300">
                  {skill.category}
                </h1>
                <br />
                <SkillsCard skills={skill.skills} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
