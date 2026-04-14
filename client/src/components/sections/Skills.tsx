import { motion } from "framer-motion";
import { skillsData } from "../data/sillsData";
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const Skills = () => {
    return (
        <section id="skills" className="page-padding relative flex flex-col px-20 gap-16 pb-20">

            <div className="relative flex flex-col items-start gap-2 pl-10">

                <div className="absolute left-0 top-1/2 w-6 h-px bg-white/20" />

                <span className="text-xs tracking-widest text-white/30 uppercase">
                    Developer Stack
                </span>

                <h2>
                    <span className="neon-flicker numero-font ">02.</span>
                    My Skills
                </h2>
            </div>

            <div className="flex flex-col gap-10 relative">

                <div className="absolute left-20 top-0 bottom-0 w-px bg-white/5" />

                {skillsData.map((category) => (
                    <motion.div
                        key={category.title}
                        className="group flex gap-12 items-start"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={container}
                    >
                        {/* CATEGORY TITLE */}
                        <div className="min-w-32 pt-2 relative">
                            <h4 className="text-xs uppercase tracking-widest text-white/40">
                                {category.title}
                            </h4>

                            <div className="mt-2 h-px w-0 bg-(--accent-color) transition-all duration-500 group-hover:w-full" />
                        </div>

                        {/* SKILLS */}
                        <div className="flex flex-wrap gap-x-4 gap-y-3">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 bg-white/5 text-white/70"
                                    variants={item}
                                >
                                    <div className="text-lg text-white/70">
                                        {skill.icon}
                                    </div>

                                    <span className="text-sm">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;