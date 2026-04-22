import { FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HERO_DATA } from "../../../data/heroData";
import { itemReveal } from "../../../animations";
import Button from "../../ui/Button";

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
        <div
            className="flex flex-col items-center gap-8 xl:items-start text-center xl:text-left order-2 xl:order-0">
            <motion.div>
                <motion.span
                    variants={itemReveal}
                    className="text-subtitle block">
                    {subtitle}
                </motion.span>
                <h1>
                    <motion.span
                        variants={itemReveal}
                        className="text-neon-flicker block">
                        {name}
                    </motion.span>
                </h1>

            </motion.div>

            <h3 className="max-w-200">
                {lines.map((line, i) => (
                    <motion.span
                        key={i}
                        variants={itemReveal}
                        className="block"
                    >
                        {line}
                    </motion.span>
                ))}
            </h3>

            <motion.div
                variants={itemReveal}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 block"
            >

                <Link to="contact" smooth duration={500}>
                    <Button text={contactLabel} />
                </Link>

                <a href={cvFile} download aria-label="Download CV">
                    <Button text={downloadLabel} icon={FiDownload} variant="secondary" />
                </a>
            </motion.div>
        </div>
    );
};

export default HeroPresentation;