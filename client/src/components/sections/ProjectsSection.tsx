import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import { useState } from "react";
import Carousel from "../modules/Carousel";
import CarouselIndicator from "../modules/CarouselIndicator";
import ProjectInfo from "../modules/ProjectInfo";

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
        <section
            id="projects"
            className="relative flex flex-col pt-40 gap-16"
        >
            <div className="page-padding relative flex flex-col items-start gap-2 pl-10">
                <div className="absolute left-0 top-1/2 w-6 h-px bg-white/20" />

                <span className="text-xs tracking-widest text-white/30 uppercase">
                    Engineering-focused projects
                </span>

                <h2 className="tracking-tight">
                    <span className="neon-flicker numero-font">01.</span>
                    Selected Work
                </h2>
            </div>
            <div className="flex flex-col pb-90 gap-12">
                <Carousel images={project.images} active={active} setActive={setActive} />
                <CarouselIndicator images={project.images} active={active} />
                <ProjectInfo project={project} />
            </div>

        </section>
    );
};

export default ProjectsSection;