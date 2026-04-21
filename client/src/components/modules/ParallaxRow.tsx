import { motion } from "framer-motion";
import { useHorizontalParallax } from "../../animations/parallax";

type PhraseProps = {
    text: string;
    className?: string;
};
type ParallaxRowProps = {
    progress,
    direction: "left" | "right",
    text: string;
    left?: number | string;
};

const Phrase = ({ text, className = "" }: PhraseProps) => {
    return (
        <span
            className={`
                inline-flex items-center
                whitespace-nowrap
                px-6
                ${className}
            `}
        >
            {text}
        </span>
    );
};

const ParallaxRow = ({ progress, direction, text, left }: ParallaxRowProps) => {
    const x = useHorizontalParallax(
        progress,
        direction
    );

    return (
        <motion.div
            style={{ x, left: left }}
            className="relative flex whitespace-nowrap"
        >
            <Phrase text={text} />
            <Phrase text={text} />
            <Phrase text={text} />
        </motion.div>
    );
}

export default ParallaxRow