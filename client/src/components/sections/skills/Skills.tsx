import { motion } from "framer-motion";
import SectionTitle from "../../layout/SectionTitle";
import SkillsList from "./SkillsList";
import { staggerContainer } from "../../../animations";

const Skills = () => {
    return (
        <motion.section
            id="skills"
            variants={staggerContainer({ delay: .5 })}
            className="page-padding"
            initial="hidden"
            animate="show">
            <SectionTitle
                label="02."
                title="My Skills & Expertise"
                subtitle="Developer Stack"
            />

            <SkillsList />
        </motion.section>
    );
};

export default Skills;