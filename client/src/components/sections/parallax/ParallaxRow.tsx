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
                                ? "text-neon"
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