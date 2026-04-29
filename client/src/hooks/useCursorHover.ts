import { useEffect, useState } from "react";

export const useCursorHover = () => {
    const [hovered, setHovered] = useState(false);
    const [label, setLabel] = useState<string | null>(null);

    useEffect(() => {
        const handleEnter = (e: Event) => {
            const target = e.currentTarget as HTMLElement;

            setHovered(true);

            if (target.classList.contains("portfolio-image")) {
                setLabel("Explore Project");
            }
        };

        const handleLeave = () => {
            setHovered(false);
            setLabel(null);
        };

        const hoverables = document.querySelectorAll(
            "a, [data-hover], button, .portfolio-image"
        );

        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, []);

    return { hovered, label };
};