import { useState } from "react";
import SectionTitle from "../../layout/SectionTitle";
import Carousel from "./Carousel";
import CarouselIndicator from "./CarouselIndicator";
import ProjectInfo from "./ProjectInfo";
import { project } from "../../../data/projectsData";
import { staggerContainer } from "../../../animations";
import { motion } from "framer-motion";

const Projects = () => {
    const [active, setActive] = useState(0);

    return (

        <motion.section
            id="projects"
            className="page-padding relative"
            variants={staggerContainer({ delay: .5 })}
            initial="hidden"
            animate="show"
        >

            <div className="page-padding">
                <SectionTitle label="03." title="Selected Work" subtitle="Engineering-focused projects" />
            </div>

            <div className="flex flex-col pb-90 gap-12 overflow-hidden">
                <Carousel images={project.images} active={active} setActive={setActive} />
                <CarouselIndicator images={project.images} active={active} />
                <div className="page-padding">
                    <ProjectInfo project={project} />
                </div>
            </div>

        </motion.section>
    );
};

export default Projects;