import { useEffect, useRef, useState } from "react";
import ArchiveProjectShowcase from "./ArchiveProjectShowcase";
import { projectsData } from "../data/archiveData";

export default function ArchiveProjects() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [shouldRenderProjects, setShouldRenderProjects] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || shouldRenderProjects) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRenderProjects(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "500px 0px" }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [shouldRenderProjects]);

    return (
        <section id="projects" ref={sectionRef}>
            <h1 className="font-[Playfair_Display] text-[36px] md:text-[56px] mt-20">
                Selected Design Case Studies
            </h1>

            {shouldRenderProjects &&
                projectsData.map((p) => (
                    <ArchiveProjectShowcase key={p.id} {...p} />
                ))}
        </section>
    );
}
