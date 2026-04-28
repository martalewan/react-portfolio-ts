import { motion } from "framer-motion";
import { itemReveal, useHorizontalParallax } from "../../../animations";
import ParallaxPhrase from "./ParallaxPhrase";

type ParallaxRowProps = {
    progress,
    index: number,
    text: string;
    left?: number | string;
    highlights?: number[];
};

const parallaxConfig = [
    {
        start: 300,
        end: -800,
    },
    {
        start: -650,
        end: 40,
    },
    {
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

    const config = parallaxConfig[index % 3];

    const x = useHorizontalParallax(
        progress,
        config.start,
        config.end
    );

    return (
        <motion.div
            style={{ x, left }}
            variants={itemReveal}
            className="relative flex items-center whitespace-nowrap p-4"
        >
            <ParallaxPhrase text={text} highlights={highlights} />
            <span className="px-6 text-text-80 text-[80px] leading-none"> • </span>
            <ParallaxPhrase text={text} highlights={highlights} />
            <span className="px-6 text-text-80 text-[80px] leading-none"> • </span>
            <ParallaxPhrase text={text} highlights={highlights} />
        </motion.div>
    );
};

export default ParallaxRow