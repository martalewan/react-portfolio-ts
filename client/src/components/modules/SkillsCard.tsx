import { motion } from "framer-motion";

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

const SkillCard = ({ skill }) => {
    return (
        <motion.div
            className="p-2 border border-white/10 bg-white/5 hover:bg-white/10 transition rounded-xs group"
            variants={item}
        >
            <div className="flex items-center gap-2 mb-1">
                <div className="text-base text-white/70 group-hover:text-(--accent-color) transition">
                    {skill.icon}
                </div>

                <span className="text-[12px]">{skill.name}</span>
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
    );
};

export default SkillCard;