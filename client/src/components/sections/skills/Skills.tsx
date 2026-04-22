import SectionTitle from "../../ui/SectionTitle";
import SkillsList from "./SkillsList";

const Skills = () => {
    return (
        <section id="skills" className="page-padding">
            <SectionTitle
                label="02."
                title="My Skills & Expertise"
                subtitle="Developer Stack"
            />

            <SkillsList />
        </section>
    );
};

export default Skills;