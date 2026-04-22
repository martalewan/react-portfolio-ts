import HeroPresentation from "../modules/HeroPresentation";
import HeroPortrait from "../modules/HeroPortrait";
import ScrollButton from "../ui/ScrollButton";
import { motion } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, useScrollFadeIn } from "../../animations";
import { itemReveal } from "../../animations";

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
                    <HeroPortrait />
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