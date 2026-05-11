import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";
import SkillCard from "./SkillsCard";

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

type SkillCategoryData = {
    title: string;
    skills: Skill[];
};

type SkillCategoryProps = {
    category: SkillCategoryData;
};

const SkillCategory = ({
    category,
}: SkillCategoryProps) => {
    return (
        <div className="space-y-3 group">
            <motion.div
                variants={itemReveal}
                className="flex items-center gap-3"
            >
                <h4 className="text-xs uppercase tracking-widest text-text-40 group-hover:text-accent transition">
                    {category.title}
                </h4>

                <div className="w-6 h-px bg-bg-inverse-15 flex-1" />
            </motion.div>

            <div className="space-y-3">
                {category.skills.map((skill: Skill) => (
                    <SkillCard
                        key={skill.name}
                        skill={skill}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillCategory;