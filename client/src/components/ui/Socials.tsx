import { motion } from "framer-motion";
import { socialsData } from "../../data/socialsData";
import { itemReveal } from "../../animations";

type SocialsProps = {
    wrapperStyles: string;
    iconsStyles: string;
};

const Socials = ({ wrapperStyles, iconsStyles }: SocialsProps) => {
    return (
        <motion.div className={wrapperStyles} variants={itemReveal}
        >
            {socialsData.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={iconsStyles}>
                    {social.icon}
                </a>
            ))}
        </motion.div>
    )
}

export default Socials