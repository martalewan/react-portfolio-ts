import { motion } from "framer-motion";
import { useHorizontalParallax } from "../../../animations";

type PhraseProps = {
    text: string;
    className?: string;
    highlights?: number[];
};

type ParallaxRowProps = {
    progress,
    index: number,
    text: string;
    left?: number | string;
    highlights?: number[];
};

const Phrase = ({ text, highlights = [], className = "" }: PhraseProps) => {
    return (
        <span
            className={`
                inline-flex 
                items-center
                px-3
                text-[130px]
                leading-none
                whitespace-pre
                ${className}
            `}
        >
            {text.split("").map((char, i) => {
                const isHighlighted = highlights.includes(i);

                return (
                    <motion.span
                        key={i}
                        className={
                            isHighlighted
                                ? "text-accent"
                                : "text-text"
                        }
                    >
                        {char}
                    </motion.span>
                );
            })}
        </span>
    );
};

const Separator = () => (
    <span className="px-6 text-text-80 text-[80px] leading-none">
        •
    </span>
);

const ParallaxRow = ({
    progress,
    index,
    text,
    highlights = [],
    left,
}: ParallaxRowProps) => {
    const direction = index % 2 === 0 ? "right" : "left";
    const speeds = [1, 2.2, 0.5];

    const x = useHorizontalParallax(
        progress,
        direction,
        300,
        speeds[index] ?? 1
    );

    return (
        <motion.div
            style={{ x, left }}
            className="relative flex items-center whitespace-nowrap p-4"
        >
            <Phrase text={text} highlights={highlights} />
            <Separator />
            <Phrase text={text} highlights={highlights} />
            <Separator />
            <Phrase text={text} highlights={highlights} />
        </motion.div>
    );
};

export default ParallaxRow