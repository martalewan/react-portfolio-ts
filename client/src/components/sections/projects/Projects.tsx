import { useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import Carousel from "./Carousel";
import CarouselIndicator from "./CarouselIndicator";
import ProjectInfo from "./ProjectInfo";
import { project } from "../../../data/projectsData";

const Projects = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="projects">

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

        </section>
    );
};

export default Projects;