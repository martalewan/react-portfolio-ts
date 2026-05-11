import { useState } from "react";
import Carousel from "./Carousel";
import CarouselIndicator from "./CarouselIndicator";
import ProjectInfo from "./ProjectInfo";

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
        <div className="flex flex-col gap-6 overflow-hidden">
            <Carousel
                images={project.images}
                active={active}
                setActive={setActive}
            />
            <CarouselIndicator
                images={project.images}
                active={active}
            />
            <div className="w-[60%] mx-auto">
                <ProjectInfo project={project} />
            </div>
        </div>
    );
};

export default ProjectCard;