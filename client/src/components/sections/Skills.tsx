import { skillsData } from "../../data/sillsData";
import SectionTitle from "../modules/SectionTitle";
import SkillCategory from "../modules/SkillsCategory";

const columns = [
    ["Frontend"],
    ["Backend"],
    ["Languages", "Testing"],
    ["Tools", "Design"],
];

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

                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-8">
                        {column.map((title) => {
                            const category = skillsData.find(
                                (c) => c.title === title
                            );
                            if (!category) return null;

                            return (
                                <SkillCategory
                                    key={category.title}
                                    category={category}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;