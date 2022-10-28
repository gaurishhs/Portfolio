import { Skill } from "types";

export default function SkillsCard(props: { skills: Skill[] }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {props.skills.map((skill) => {
          return (
            <div className="flex w-xl rounded border dark:hover:border-gray-400 dark:border-gray-600 border-gray-300 hover:border-gray-500 cursor-pointer mb-4 lg:mb-0">
              <div className="p-3 lg:p-4">
                <img src={skill.image} alt={skill.name} className="h-16 w-16 lg:h-14 lg:w-14 xl:h-24 xl:w-24" />
              </div>
              <div className="p-3 lg:p-4 md:p-4 overflow-hidden">
                <h5 className="text-md text-white lg:text-xl pr-2 font-bold leading-8 tracking-tight">
                  {skill.name}
                </h5>
                <h6>
                    <span className="text-sm text-gray-400 dark:text-gray-300">
                        {skill.progress}
                    </span>
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
