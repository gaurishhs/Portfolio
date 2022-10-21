import Layout from "@/components/Layout";
import ProgressSkills from "@/components/ProgressSkills";
import { Fragment } from "react";
import config from '../config.json';

export default function SkillsPage() {
    return (
        <Layout>
            <h1 className="text-4xl text-white text-center">Skills</h1>

            <div className="flex mt-4 flex-wrap">
                {config.skills.map((skill) => {
                    return (
                        <Fragment>
                            <h1 className="text-4xl text-left pl-5 pt-5 pb-5 text-gray-300">{skill.category}</h1>
                            <ProgressSkills skills={skill.skills} />
                        </Fragment>
                    )
                })}
            </div>
        </Layout>
    )
}