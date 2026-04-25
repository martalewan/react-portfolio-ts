import { MotionValue } from "framer-motion"
import ParallaxRow from "./ParallaxRow"
import { PARALLAX_ROWS } from "../../../data/parallaxData";

type ParallaxProps = {
    scrollYProgress: MotionValue<number>
}

const Parallax = ({ scrollYProgress }: ParallaxProps) => {
    return (
        <div className="flex flex-col py-55">
            {PARALLAX_ROWS.map((row, index) => (
                <ParallaxRow
                    key={index}
                    index={index}
                    progress={scrollYProgress}
                    text={row.text}
                    highlights={row.highlights}
                />
            ))}
        </div>
    );
};

export default Parallax