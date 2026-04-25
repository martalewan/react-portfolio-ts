import { FiArrowRight } from "react-icons/fi";
import { EXPERIENCES_DATA } from "../../../data/aboutData";
import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";

const AboutExperience = () => {

    return (
        <div className="flex flex-col gap-8">

            <motion.div
                variants={itemReveal}
                initial="hidden"
                animate="show"
                whileHover="hover"
                className="inline-flex items-center gap-2 group cursor-default"
            >
                <span
                    className="text-xs tracking-widest text-text-40 uppercase"
                >
                    Experience
                </span>

                <motion.span
                    animate={{
                        x: [0, 55, 55, 0, 0],
                        rotate: [0, 0, 180, 180, 0],
                    }}
                    transition={{
                        duration: 8,
                        ease: "easeInOut",
                        times: [0, 0.35, 0.5, 0.75, 1],
                        repeat: Infinity,
                    }}
                    className="text-text-40"

                >
                    <FiArrowRight />
                </motion.span>
            </motion.div>


            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {EXPERIENCES_DATA.map((item, index) => (
                    <div key={index} className="flex-1">
                        <ExperienceItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutExperience;