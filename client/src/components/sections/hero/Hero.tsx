import { motion } from "framer-motion";
import { useRef } from "react";
import { itemReveal, staggerContainer, useScrollFadeIn } from "../../../animations";
import HeroPresentation from "./HeroPresentation";
import ScrollButton from "../../ui/ScrollButton";
import Portrait from "../../ui/Portrait";

const Hero = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { opacity } = useScrollFadeIn(sectionRef);

    return (
        <motion.section
            id="home"
            className="page-padding relative"
            variants={staggerContainer({ delay: .5 })}
            initial="hidden"
            animate="show"
        >

            <div className="min-h-[93vh] w-full flex items-center justify-start relative">
                <HeroPresentation />
                <motion.div
                    className="absolute top-1/2 right-0 "
                    style={{ opacity }}
                >
                    <Portrait />
                </motion.div>

            </div>

            <motion.div
                variants={itemReveal}
                className="absolute bottom-11 left-1/2 -translate-x-1/2 block">
                <ScrollButton direction="down" scrollToId="about" />
            </motion.div>

        </motion.section>
    );
};

export default Hero;