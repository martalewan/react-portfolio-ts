import { useTransform, useScroll } from "framer-motion";

export const useHorizontalParallax = (
    progress,
    direction: "left" | "right" = "right",
    distance = 300,
    speed = 1
) => {
    const factor = direction === "left" ? -1 : 1;

    return useTransform(
        progress,
        [0, 1],
        [distance * factor * speed, -distance * factor * speed]
    );
};



export const useScrollFadeIn = (targetRef: React.RefObject<HTMLElement>) => {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.02],
        [0, 0.99, 1]
    );

    return { opacity };
};