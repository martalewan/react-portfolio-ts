import { useState } from "react";
import Carousel from "../modules/Carousel";
import CarouselIndicator from "../modules/CarouselIndicator";
import ProjectInfo from "../modules/ProjectInfo";
import SectionTitle from "../modules/SectionTitle";
import { project } from "../data/projectsData";

const ProjectsSection = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="projects">

            <div className="page-padding">
                <SectionTitle label="03." title="Selected Work" subtitle="Engineering-focused projects" />
            </div>

            <div className="flex flex-col pb-90 gap-12">
                <Carousel images={project.images} active={active} setActive={setActive} />
                <CarouselIndicator images={project.images} active={active} />
                <div className="page-padding">
                    <ProjectInfo project={project} />
                </div>
            </div>

        </section>
    );
};

export default ProjectsSection;