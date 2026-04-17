import { useEffect, useState } from "react";

export const useCursorHover = () => {
    const [hovered, setHovered] = useState(false);


    useEffect(() => {
        const handleEnter = () => setHovered(true);
        const handleLeave = () => setHovered(false);
        const hoverables = document.querySelectorAll(
            "a, [data-hover], .portfolio-image"
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
        }
    }, []);

    return hovered;
}