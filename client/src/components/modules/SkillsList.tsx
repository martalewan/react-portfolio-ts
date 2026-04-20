import { SKILLS_DATA } from "../../data/sillsData";
import SkillCategory from "../modules/SkillsCategory";

const getCategory = (title: string) => skillMap[title];

const skillMap = Object.fromEntries(
    SKILLS_DATA.map((c) => [c.title, c])
);

const columns = [
    ["Frontend"],
    ["Backend"],
    ["Languages", "Testing"],
    ["Tools", "Design"],
];

const SkillsList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 relative">
            <div className="absolute left-20 top-0 bottom-0 w-px bg-white/5" />

            {columns.map((column, colIndex) => (
                <div key={colIndex} className="space-y-8">
                    {column.map((title) => {
                        const category = getCategory(title);
                        if (!category) return null;

                        return (
                            <SkillCategory
                                key={category.id}
                                category={category}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    )
}

export default SkillsList