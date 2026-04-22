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