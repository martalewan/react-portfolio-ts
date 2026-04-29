import SectionTitle from "../../layout/SectionTitle";
import { projects } from "../../../data/projects";
import { staggerContainer } from "../../../animations";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (

        <motion.section
            id="projects"
            className="relative"
            variants={staggerContainer({ delay: .5 })}
            initial="hidden"
            animate="show"
        >

            <div className="page-padding">
                <SectionTitle label="03." title="Selected Work" subtitle="Engineering-focused projects" />
            </div>

            <div className="flex flex-col gap-40">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>


        </motion.section>
    );
};

export default Projects;