import {
    motion,
    useScroll,
    useSpring,
    useTransform
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

import SectionTitle from "../../layout/SectionTitle";
import AboutContent from "./AboutContent";
import { ABOUT_HIGHLIGHTS } from "../../../data/aboutData";
import AboutExperience from "./AboutExperience";
import ScrollButton from "../../ui/ScrollButton";
import { itemReveal, staggerContainer } from "../../../animations";

const About = () => {
    const sectionRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");

        const update = () => setIsDesktop(mq.matches);

        update(); // set initial value
        mq.addEventListener("change", update);

        return () => mq.removeEventListener("change", update);
    }, []);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const rawY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 300],
    );

    const y = useSpring(rawY, {
        stiffness: 80,
        damping: 25
    });

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 pt-20 items-start" ref={sectionRef}
            >
                <motion.div
                    style={isDesktop ? { y } : undefined}
                    className="w-full"
                >
                    <motion.span variants={itemReveal} className="text-xs tracking-widest text-text-40 uppercase block mb-4">
                        About
                    </motion.span>

                    <AboutContent />
                </motion.div>


                <div className="flex flex-col gap-14">

                    <div className="flex flex-col gap-3">
                        <motion.span variants={itemReveal} className="text-xs tracking-widest text-text-40 uppercase">
                            ABCD of coding
                        </motion.span>

                        <div className="flex flex-col divide-y divide-white/10">
                            {ABOUT_HIGHLIGHTS.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemReveal}
                                    className="flex flex-col sm:flex-row gap-6 py-6"
                                >
                                    <h1 className="text-[70px] sm:text-[90px] lg:text-[100px] leading-none text-neon-flicker">
                                        {item.prefix}
                                    </h1>

                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-sm text-text-40">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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