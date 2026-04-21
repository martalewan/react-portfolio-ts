export const motionTokens = {
    duration: {
        fast: 0.28,
        normal: 0.65,
        slow: 1.05,
    },

    stagger: {
        fast: 0.04,
        normal: 0.07,
        slow: 0.3,
    },

    distance: {
        sm: 8,
        md: 16,
        lg: 28,
        xl: 120,
    },

    ease: {
        primary: [0.22, 1, 0.36, 1],
        soft: [0.25, 0.1, 0.25, 1],
        smooth: [0.76, 0, 0.24, 1],

    },
} as const;