import { motion, MotionValue } from "framer-motion"
import ParallaxRow from "./ParallaxRow"
import { PARALLAX_ROWS } from "../../../data/parallaxData";
import { staggerContainer } from "../../../animations";

type ParallaxProps = {
    scrollYProgress: MotionValue<number>
}

const Parallax = ({ scrollYProgress }: ParallaxProps) => {
    return (
        <motion.div
            variants={staggerContainer({ delay: .5 })}
            className="flex flex-col py-55"
            initial="hidden"
            animate="show"
        >
            {PARALLAX_ROWS.map((row, index) => (
                <ParallaxRow
                    key={index}
                    index={index}
                    progress={scrollYProgress}
                    text={row.text}
                    highlights={row.highlights}
                />
            ))}
        </motion.div>
    );
};

export default Parallax