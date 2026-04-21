import { FiDownload } from "react-icons/fi";
import Button from "../ui/Button";
import { Link } from "react-scroll";
import { HERO_DATA } from "../../data/heroData";
import { motion } from "framer-motion";
import { itemReveal, staggerContainer } from "../../animations/variants";

const HeroPresentation = () => {
    const {
        subtitle,
        name,
        description,
        cvFile,
        actions: { downloadLabel, contactLabel }
    } = HERO_DATA;
    const lines = description.split("\n");

    return (
        <div className="flex flex-col items-center gap-8 xl:items-start text-center xl:text-left order-2 xl:order-0">
            <div>
                <span className="text-subtitle">
                    {subtitle}
                </span>
                <h1>
                    <span className="text-neon-flicker">
                        {name}
                    </span>
                </h1>

            </div>

            <motion.h3
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="max-w-200"
            >
                {lines.map((line, i) => (
                    <motion.span
                        key={i}
                        variants={itemReveal}
                        className="block"
                    >
                        {line}
                    </motion.span>
                ))}
            </motion.h3>

            <div className="flex flex-col gap-12 w-full max-w-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link to="contact" smooth duration={500}>
                        <Button text={contactLabel} />
                    </Link>

                    <a href={cvFile} download aria-label="Download CV">
                        <Button text={downloadLabel} icon={FiDownload} variant="secondary" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroPresentation;