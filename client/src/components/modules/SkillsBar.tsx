import { useRef, useEffect } from "react";
import { skillsData } from "../data/sillsData";

const SkillsBar = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const allSkills = skillsData.flatMap((cat) => cat.skills);

    useEffect(() => {
        const update = () => {
            const items = document.querySelectorAll(".skill-item");
            const center = window.innerWidth / 2;

            items.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const itemCenter = rect.left + rect.width / 2;
                const distance = (itemCenter - center) / center;

                const rotate = distance * 60;
                const scale = 1 - Math.abs(distance) * 0.1;
                const opacity = 1 - Math.abs(distance) * 0.6;

                (el as HTMLElement).style.transform = `
          rotateY(${rotate}deg)
          scale(${scale})
        `;
                (el as HTMLElement).style.opacity = `${opacity}`;
            });
        };

        const interval = setInterval(update, 16);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="relative overflow-hidden py-10 perspective-[1000px]">

            <div className="absolute left-0 top-0 h-full w-40 bg-linear-to-r from-(--primary-color) to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-40 bg-linear-to-l from-(--primary-color) to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-scroll">
                {[...allSkills, ...allSkills].map((skill, i) => (
                    <div key={i} className="skill-item mx-8 text-2xl transpare">
                        {skill.icon}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default SkillsBar;