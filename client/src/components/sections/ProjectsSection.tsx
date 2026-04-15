import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import { useState } from "react";
import Carousel from "../modules/Carousel";
import CarouselIndicator from "../modules/CarouselIndicator";
import ProjectInfo from "../modules/ProjectInfo";
import SectionTitle from "../modules/SectionTitle";

const project = {
    title: "Scalable Design System Engine for Modern Web Applications",
    description:
        "A highly scalable and maintainable design system built to unify UI development across large-scale applications. It provides a consistent set of reusable components, strict design tokens, and structured styling guidelines to ensure visual and functional consistency. The system is optimized for collaboration between designers and developers, enabling rapid feature development while maintaining a cohesive user experience across all products.",
    images: [pic1, pic2, pic3],
    techStack: ["React", "TypeScript", "Tailwind", "Storybook"],
};

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