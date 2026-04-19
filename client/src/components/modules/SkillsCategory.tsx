import { motion } from "framer-motion";
import SkillCard from "./SkillsCard";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const SkillCategory = ({ category }) => {
    return (
        <motion.div
            className="space-y-3 group"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
        >

            <div className="flex items-center gap-3">
                <h4 className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-(--color-accent) transition">
                    {category.title}
                </h4>
                <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-3">
                {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCategory;