import { useEffect, useState } from "react";

const Cursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const handleEnter = () => setHovered(true);
        const handleLeave = () => setHovered(false);

        window.addEventListener("mousemove", move);

        const addHoverListeners = () => {
            const hoverables = document.querySelectorAll(
                "a, [data-hover], .portfolio-image"
            );

            hoverables.forEach((el) => {
                el.addEventListener("mouseenter", handleEnter);
                el.addEventListener("mouseleave", handleLeave);
            });
        };

        addHoverListeners();

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-12 mix-blend-difference">

            <div
                className="absolute w-4 h-4 rounded-full bg-white transition-transform duration-300 ease-out"
                style={{
                    transform: `
            translate(${pos.x - 4}px, ${pos.y - 4}px)
            scale(${hovered ? 5 : 0.5})
          `,
                }}
            />
        </div>
    );
};

export default Cursor;