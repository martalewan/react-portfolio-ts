import SkillCard from "./SkillsCard";
import HorizontalDivider from "../ui/HorizontalDivider";

const SkillCategory = ({ category }) => {
    return (
        <div className="space-y-3 group">

            <div className="flex items-center gap-3">
                <h4 className="text-xs uppercase tracking-widest text-text-40 group-hover:text-accent transition">
                    {category.title}
                </h4>
                <HorizontalDivider className="flex-1" />

            </div>

            <div className="space-y-3">
                {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default SkillCategory;