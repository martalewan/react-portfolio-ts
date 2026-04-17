import { useEffect } from "react";

export function useAmbientDots(containerRef: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const getDots = () =>
            Array.from(container.querySelectorAll(".dot")) as HTMLDivElement[];

        const handleMove = (e: MouseEvent) => {
            const dots = getDots();

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            dots.forEach((el) => {
                const dotRect = el.getBoundingClientRect();

                const dx = dotRect.left + dotRect.width / 2 - mouseX;
                const dy = dotRect.top + dotRect.height / 2 - mouseY;

                const distance = Math.sqrt(dx * dx + dy * dy);

                const maxDistance = 140;

                const strength = Math.max(0, 1 - distance / maxDistance);

                const scale = 1 + strength * 1.3;

                el.style.transform = `scale(${scale})`;
                el.style.opacity = `${0.25 + strength}`;
            });
        };

        const reset = () => {
            const dots = getDots();

            dots.forEach((el) => {
                el.style.transform = "scale(1)";
                el.style.opacity = "0.3";
            });
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseleave", reset);
        window.addEventListener("resize", reset);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseleave", reset);
            window.removeEventListener("resize", reset);
        };
    }, []);
}