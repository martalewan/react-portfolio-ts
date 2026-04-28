import { motion, useScroll } from "framer-motion"
import ParallaxRow from "./ParallaxRow"
import { staggerContainer } from "../../../animations";
import { PARALLAX_ROWS } from "../../../data/parallax";

const Parallax = () => {

    const { scrollYProgress } = useScroll({
        offset: ["start end", "end start"],
    });

    return (
        <motion.div
            id="parallax"
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