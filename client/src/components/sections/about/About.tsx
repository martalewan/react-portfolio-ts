import { motion } from "framer-motion";
import { useRef } from "react";

import SectionTitle from "../../layout/SectionTitle";
import AboutContent from "./AboutContent";
import AboutExperience from "./AboutExperience";
import ScrollButton from "../../ui/ScrollButton";
import HighlightItem from "./HighlightItem";

import { ABOUT_HIGHLIGHTS } from "../../../data/aboutData";
import { staggerContainer, itemReveal } from "../../../animations";
import { useAboutScroll } from "../../../hooks/useAboutScroll";

const About = () => {
    const sectionRef = useRef(null);

    const { motionStyle } = useAboutScroll(sectionRef);

    return (
        <motion.section
            id="about"
            className="page-padding relative w-full"
            variants={staggerContainer({ delay: 0.3 })}
            initial="hidden"
            animate="show"
        >
            <SectionTitle
                label="01."
                title="Crafting Digital Experiences That Matter"
                subtitle="Background"
            />

            <div
                ref={sectionRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-14 pt-20 items-start"
            >
                <motion.div style={motionStyle} className="w-full">
                    <motion.span
                        variants={itemReveal}
                        className="text-xs tracking-widest text-text-40 uppercase block mb-6"
                    >
                        About
                    </motion.span>

                    <AboutContent />
                </motion.div>

                <div className="flex flex-col gap-14">
                    <motion.span
                        variants={itemReveal}
                        className="text-xs tracking-widest text-text-40 uppercase mb-6"
                    >
                        ABCD of coding
                    </motion.span>

                    <div className="flex flex-col gap-12">
                        {ABOUT_HIGHLIGHTS.map((item) => (
                            <HighlightItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            <AboutExperience />

            <div className="flex justify-center mt-28">
                <ScrollButton direction="down" scrollToId="skills" />
            </div>
        </motion.section>
    );
};

export default About;