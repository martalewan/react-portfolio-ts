import { useState } from "react";
import Carousel from "./Carousel";
import CarouselIndicator from "./CarouselIndicator";
import ProjectInfo from "./ProjectInfo";

const ProjectCard = ({ project }) => {
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
            <div className="page-padding">
                <ProjectInfo project={project} />
            </div>
        </div>
    );
};

export default ProjectCard;