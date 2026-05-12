import { useTransform, useScroll, MotionValue } from "framer-motion";
import type { RefObject } from "react";

export const useHorizontalParallax = (
    progress: MotionValue<number>,
    start: number,
    end: number
) => {
    return useTransform(progress, [0, 1], [start, end]);
};


export const useScrollFadeIn = (targetRef: RefObject<HTMLElement | null>) => {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.012, 0.025],
        [0, 0.9, 1]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.025],
        [-28, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 0.025],
        [0.99, 1]
    );

    return { opacity, y, scale };
};