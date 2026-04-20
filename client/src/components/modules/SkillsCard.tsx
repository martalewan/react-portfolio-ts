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
    const Icon = skill.icon;
    return (
        <motion.div
            className="flex flex-col gap-2 p-2 border border-border-15 bg-bg-inverse-05 hover:bg-bg-inverse-15 transition rounded-xs group"
            variants={item}
        >
            <div className="flex items-center gap-2">
                <div className="text-text-80">
                    <Icon />
                </div>

                <span className="text-xs">{skill.name}</span>
            </div>

            <div>
                <div className="w-full h-0.5 bg-bg-inverse-15 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-accent transition-all duration-500"
                        style={{
                            width: getWidth(skill.level),
                        }}
                    />

                </div>
                <div className="flex justify-between text-xs text-text-40 mt-1">
                    <span>{skill.level}</span>
                    <span>+ {skill.years} years</span>
                </div></div>


        </motion.div>
    );
};

export default SkillCard;