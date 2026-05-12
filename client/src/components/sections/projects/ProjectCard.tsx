import { useState } from "react";
import Carousel from "./Carousel";
import CarouselIndicator from "./CarouselIndicator";
import ProjectInfo from "./ProjectInfo";
import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";

type Project = {
    id: string;
    title: string;
    description: string;
    images: string[];
    techStack: string[];
    link?: string;
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-col gap-8 overflow-hidden">
            <Carousel
                images={project.images}
                active={active}
                setActive={setActive}
            />
            <CarouselIndicator
                images={project.images}
                active={active}
            />
            <motion.div className="ml-[7%] mr-[7%] md:ml-[20%] md:mr-[20%]" variants={itemReveal}>
                <ProjectInfo project={project} />
            </motion.div>
        </div >
    );
};

export default ProjectCard;