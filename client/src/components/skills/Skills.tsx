import { skillsData } from "./sillsData"

const Skills = () => {

    return (
        <section id="skills" className="flex-col items-center gap-12">
            <div className="flex flex-col items-center">
                <h2>My Skills</h2>
                <span className="section-subtitle">Tools, technologies, and expertise I bring to projects</span>
            </div>

            <div className="flex flex-col gap-6">
                {
                    skillsData.map((category) => (
                        <div key={category.title} className="w-full flex gap-5">
                            <div className="flex items-start justify-start min-w-20">
                                <h4>
                                    {category.title}
                                </h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    category.skills.map((skill) => (
                                        <div key={skill.name} className="flex items-center justify-start gap-1 glass-block min-w-32 min-h-8 px-2">
                                            <div className="text-xl">{skill.icon}</div>
                                            <span className="section-subtitle">{skill.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Skills