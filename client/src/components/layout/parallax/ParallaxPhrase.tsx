import { motion } from "framer-motion";

type ParallaxPhraseProps = {
    text: string;
    className?: string;
    highlights?: number[];
};

const ParallaxPhrase = ({ text, highlights = [], className = "" }: ParallaxPhraseProps) => {
    return (
        <span
            className={`
                inline-flex 
                items-center
                px-3
                leading-none
                whitespace-pre
                text-inherit
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

export default ParallaxPhrase