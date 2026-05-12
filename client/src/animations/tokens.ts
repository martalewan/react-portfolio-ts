export const motionTokens = {
    duration: {
        fast: 0.2,
        normal: 0.45,
        slow: 0.65,
    },

    stagger: {
        fast: 0.03,
        normal: 0.05,
        slow: 0.12,
    },

    distance: {
        sm: 6,
        md: 12,
        lg: 20,
        xl: 80,
    },

    ease: {
        primary: [0.25, 0.1, 0.25, 1],
        soft: "easeOut",
        smooth: [0.16, 1, 0.3, 1],
    },
} as const;