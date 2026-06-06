import { motion } from "framer-motion";
import { useRef } from "react";
import { itemReveal, staggerContainer, useScrollFadeIn } from "../../../animations";
import ScrollButton from "../../ui/ScrollButton";
import HeroContent from "./HeroContent";
import PortraitIllustration from "../../ui/PortraitIllustration";

const Hero = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { y, opacity, scale } = useScrollFadeIn(sectionRef);

    return (
        <motion.section
            ref={sectionRef}
            id="home"
            className="page-padding relative"
            variants={staggerContainer({ delay: .5 })}
            initial="hidden"
            animate="show"
        >

            <div className="min-h-[93vh] w-full flex items-center justify-center xl:justify-start relative">
                <HeroContent />
                <motion.div
                    className="absolute top-1/2 right-0 hidden lg:block"
                    style={{
                        opacity,
                        scale,
                    }}
                >
                    <PortraitIllustration />
                </motion.div>

            </div>

            <motion.div
                variants={itemReveal}
                className="absolute bottom-11 left-1/2 -translate-x-1/2 block">
                <ScrollButton direction="down" scrollToId="parallax" />
            </motion.div>

        </motion.section>
    );
};

export default Hero;
