import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";

type SkillLevel =
    | "Expert"
    | "Advanced"
    | "Intermediate"
    | "Beginner";

type Skill = {
    name: string;
    level: SkillLevel;
    years: number;
    icon: IconType;
};

type SkillCardProps = {
    skill: Skill;
};

const getWidth = (level: SkillLevel): string => {
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

const SkillCard = ({
    skill,
}: SkillCardProps) => {
    const Icon = skill.icon;

    return (
        <motion.div
            variants={itemReveal}
            className="ui-elevated group"
        >
            <div className="flex w-full gap-2">
                <div className="text-text-80 group-hover:text-accent transition-colors">
                    <Icon />
                </div>

                <span className="text-xs text-text">
                    {skill.name}
                </span>
            </div>

            <div className="w-full space-y-2">
                <div className="w-full h-0.5 bg-bg-inverse-15 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-bg-inverse transition-all duration-500"
                        style={{
                            width: getWidth(skill.level),
                        }}
                    />
                </div>

                <div className="flex justify-between w-full text-xs text-text-40">
                    <span>{skill.level}</span>
                    <span>
                        + {skill.years} years
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default SkillCard;