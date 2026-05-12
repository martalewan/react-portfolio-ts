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
            staggerChildren: motionTokens.stagger.fast,
        },
    },
});


export const itemReveal = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: motionTokens.ease.soft,
        },
    },
};

export const imageReveal = {
    hidden: {
        opacity: 0,
        y: 8,
        scale: 0.985,
        filter: "blur(6px)",
    },

    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",

        transition: {
            duration: 0.7,
            ease: motionTokens.ease.smooth,
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