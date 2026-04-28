import { motionTokens } from "./tokens";


type StaggerOptions = {
    delay?: number;
};

export const staggerContainer = ({
    delay = 0,
}: StaggerOptions = {}) => ({
    hidden: {},
    show: {
        transition: {
            delayChildren: delay,
            staggerChildren: motionTokens.stagger.normal,
        },
    },
});


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

export const imageReveal = {
    hidden: {
        opacity: 0,
        y: -10,
        scale: 1.03,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export const pageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.35, ease: "easeOut" as const },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.25, ease: "easeInOut" as const },
    },
};