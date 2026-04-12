import { skillsData } from "./sillsData"

const Skills = () => {

    return (
        <section id="skills" className="flex-col items-center gap-12">
            <div className="flex flex-col items-center">
                <h2>My Skills</h2>
                <span className="section-subtitle">Tools, technologies, and expertise I bring to projects</span>
            </div>

            <div className="flex flex-col gap-2">
                {
                    skillsData.map((category) => (
                        <div key={category.title} className="w-full flex gap-2">
                            <div className="flex items-start min-w-30">
                                <h4 className="text-xs uppercase tracking-widest text-(--secondary-color)/60">
                                    {category.title}
                                </h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    category.skills.map((skill) => (
                                        <div key={skill.name} className="flex flex-col items-center justify-center gap-1 glass-block min-w-22 min-h-22 px-1 rounded-xs transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                            <div className="text-xl transition duration-300 hover:drop-shadow-[0_0_8px_#0ff]">
                                                {skill.icon}
                                            </div>
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