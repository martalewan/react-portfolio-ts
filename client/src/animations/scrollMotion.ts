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
        [0, 0.03, 0.06],
        [0, 0.8, 1]
    );

    const y = useTransform(scrollYProgress, [0, 0.02], [-60, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.02], [0.98, 1]);

    return { opacity, y, scale };
};