import { motion, MotionValue } from "framer-motion";
import { itemReveal, useHorizontalParallax } from "../../../animations";
import ParallaxPhrase from "./ParallaxPhrase";

type ParallaxRowProps = {
    progress: MotionValue<number>;
    index: number;
    text: string;
    left?: number | string;
    highlights?: number[];
};

const parallaxConfig = [
    {
        mobileStart: 30,
        mobileEnd: -260,
        start: 300,
        end: -800,
    },
    {
        mobileStart: -180,
        mobileEnd: 20,
        start: -650,
        end: 40,
    },
    {
        mobileStart: 10,
        mobileEnd: -340,
        start: 200,
        end: -600,
    },
];

const ParallaxRow = ({
    progress,
    index,
    text,
    highlights = [],
    left,
}: ParallaxRowProps) => {

    const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768;

    const config = parallaxConfig[index % 3];

    const x = useHorizontalParallax(
        progress,
        isMobile ? config.mobileStart : config.start,
        isMobile ? config.mobileEnd : config.end
    );

    return (
        <motion.div
            style={{ x, left }}
            variants={itemReveal}
            className="relative flex items-center whitespace-nowrap text-[32px] md:text-[80px] xl:text-[130px]"
        >
            <ParallaxPhrase text={text} highlights={highlights} />

            <span className="text-inherit leading-none">
                •
            </span>

            <ParallaxPhrase text={text} highlights={highlights} />

            <span className="text-inherit leading-none">
                •
            </span>

            <ParallaxPhrase text={text} highlights={highlights} />
        </motion.div>
    );
};

export default ParallaxRow;