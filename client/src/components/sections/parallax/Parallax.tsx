import { MotionValue } from "framer-motion"
import ParallaxRow from "./ParallaxRow"

type ParallaxProps = {
    scrollYProgress: MotionValue<number>
}

const Parallax = ({ scrollYProgress }: ParallaxProps) => {
    return (
        <div className="flex flex-col py-55">
            <ParallaxRow index={0} progress={scrollYProgress} text="Frontend Developer" />
            <ParallaxRow index={1} progress={scrollYProgress} text="Based in Paris" />
            <ParallaxRow index={2} progress={scrollYProgress} text="Open to collaborations" />

        </div>)
}

export default Parallax