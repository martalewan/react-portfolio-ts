import { motionTokens } from "./tokens";

export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: motionTokens.stagger.normal,
        },
    },
};

export const itemReveal = {
    hidden: {
        opacity: 0,
        y: motionTokens.distance.md,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: motionTokens.duration.slow,
            ease: motionTokens.ease.primary,
        },
    },
};