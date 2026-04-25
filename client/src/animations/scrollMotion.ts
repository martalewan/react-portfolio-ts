import { useTransform, useScroll } from "framer-motion";

export const useHorizontalParallax = (
    progress,
    start: number,
    end: number
) => {
    return useTransform(progress, [0, 1], [start, end]);
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