import { motion } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../../layout/SectionTitle";
import AboutExperience from "./AboutExperience";
import { ABOUT_HIGHLIGHTS } from "../../../data/about";
import { staggerContainer, itemReveal } from "../../../animations";
import { useAboutScroll } from "../../../hooks/useAboutScroll";
import { AboutContent } from "./AboutContent";
import Parallax from "../../layout/parallax/Parallax";
import HighlightItem from "./HighlightItem";

const About = () => {
    const aboutSectionRef = useRef(null);
    const { motionStyle } = useAboutScroll(aboutSectionRef);

    return (
        <motion.section
            id="about"
            className="page-padding relative w-full"
            variants={staggerContainer({ delay: 0.3 })}
            initial="hidden"
            animate="show"
        >
            <Parallax />
            <SectionTitle
                label="01."
                title="Crafting Digital Experiences That Matter"
                subtitle="Background"
            />

            <div
                ref={aboutSectionRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
            >
                <motion.div style={motionStyle} className="w-full">
                    <motion.span
                        variants={itemReveal}
                        className="text-xs tracking-widest text-text-40 uppercase block mb-7"
                    >
                        About me
                    </motion.span>

                    <AboutContent />
                </motion.div>

                <div className="flex flex-col">
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
            <div className="mt-30">
                <AboutExperience />

            </div>
        </motion.section>
    );
};

export default About;