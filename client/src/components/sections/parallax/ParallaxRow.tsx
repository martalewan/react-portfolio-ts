import { motion } from "framer-motion";
import { useHorizontalParallax } from "../../../animations";

type PhraseProps = {
    text: string;
    className?: string;
};

type ParallaxRowProps = {
    progress,
    index: number,
    text: string;
    left?: number | string;
};

const Phrase = ({ text, className = "" }: PhraseProps) => {
    return (
        <span
            className={`
                inline-flex 
                items-center
                whitespace-nowrap
                px-3
                text-[140px]
                ${className}
                leading-none
            `}
        >
            {text}
        </span>
    );
};

const Separator = () => (
    <span className="px-6 text-white/30 text-[80px] leading-none">
        •
    </span>
);

const ParallaxRow = ({ progress, index, text, left }: ParallaxRowProps) => {
    const direction = index % 2 === 0 ? "right" : "left";
    const speeds = [1, 2.2, 1.4];
    const x = useHorizontalParallax(progress, direction, 300, speeds[index] ?? 1);
    return (
        <motion.div
            style={{ x, left }}
            className="relative flex items-center whitespace-nowrap p-4"
        >
            <Phrase text={text} />
            <Separator />
            <Phrase text={text} />
            <Separator />
            <Phrase text={text} />
        </motion.div>
    );
};

export default ParallaxRow