import SectionTitle from "../modules/SectionTitle";
import SkillsList from "../modules/SkillsList";

const Skills = () => {
    return (
        <section id="skills" className="page-padding">
            <SectionTitle
                label="02."
                title="My Skills"
                subtitle="Developer Stack"
            />

            <SkillsList />
        </section>
    );
};

export default Skills;