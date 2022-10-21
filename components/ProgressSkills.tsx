import { Skill } from "types";

export default function ProgressSkills(props: { skills: Skill[] }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {props.skills.map((skill) => {
          return (
            <div className="flex flex-col border-2 border-gray-700 items-center justify-center">
              <div className="p-5">
                <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 object-cover h-10"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mt-2">
                  {skill.name}
                </h3>
                <div className="w-64 h-2 bg-gray-800 rounded-full mt-2">
                  <div style={{ width: skill.progress }} className="h-full bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
