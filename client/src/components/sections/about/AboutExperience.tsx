import { FiArrowRight } from "react-icons/fi";
import { EXPERIENCES_DATA } from "../../../data/about";
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
                    <motion.div key={index} variants={itemReveal} className="flex-1">
                        <ExperienceItem item={item} />
                    </motion.div>
                ))}
            </div>
            <motion.div variants={itemReveal} className="pt-4 border-t border-border-15 max-w-md self-end">
                <p className="text-xs tracking-widest text-text-40 uppercase mb-3">
                    Achievements
                </p>

                <div className="flex flex-col gap-2">

                    <div className="flex items-start justify-between gap-4">
                        <span className="text-sm text-text leading-snug">
                            HackYeah — 1st place
                        </span>

                        <span className="text-xs text-text-40 whitespace-nowrap">
                            2019
                        </span>
                    </div>

                    <p className="text-xs text-text-40 leading-relaxed">
                        Orlen Mobile — First Aid Module
                    </p>

                </div>
            </motion.div>
        </div>
    );
};

export default AboutExperience;