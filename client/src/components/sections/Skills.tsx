import { motion } from "framer-motion";
import { skillsData } from "../data/sillsData";
import SectionTitle from "../modules/SectionTitle";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0 },
};

const getWidth = (level: string) => {
    switch (level) {
        case "Expert":
            return "100%";
        case "Advanced":
            return "80%";
        case "Intermediate":
            return "60%";
        default:
            return "40%";
    }
};

const Skills = () => {
    return (
        <section id="skills" className="page-padding">
            <SectionTitle
                label="02."
                title="My Skills"
                subtitle="Developer Stack"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 relative">

                <div className="absolute left-20 top-0 bottom-0 w-px bg-white/5" />

                {skillsData.map((category) => (
                    <motion.div
                        key={category.title}
                        className="space-y-3"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={container}
                    >
                        <div className="flex items-center gap-3">
                            <h4 className="text-[10px] uppercase tracking-widest text-white/40">
                                {category.title}
                            </h4>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <div className="space-y-3">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="p-2 border border-white/10 bg-white/5 hover:bg-white/10 transition rounded-xs group"
                                    variants={item}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="text-base text-white/70 group-hover:text-(--accent-color) transition">
                                            {skill.icon}
                                        </div>

                                        <span className="text-[12px]">
                                            {skill.name}
                                        </span>
                                    </div>

                                    <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-(--accent-color) transition-all duration-500"
                                            style={{
                                                width: getWidth(skill.level),
                                            }}
                                        />
                                    </div>

                                    <div className="flex justify-between text-[11px] text-white/40 mt-1">
                                        <span>{skill.level}</span>
                                        <span>{skill.years}y</span>
                                    </div>
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