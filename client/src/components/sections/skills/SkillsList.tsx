import { SKILLS_LAYOUT_COLUMNS } from "../../../data/skillsData";
import SkillCategory from "./SkillsCategory";

const SkillsList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
            {SKILLS_LAYOUT_COLUMNS.map((col, i) => (
                <div key={i} className="space-y-8">
                    {col.map((category) => (
                        <SkillCategory key={category.id} category={category} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SkillsList;