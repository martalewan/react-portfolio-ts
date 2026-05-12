import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";

type CarouselIndicatorTypes = {
    images: string[];
    active: number
}

const CarouselIndicator = ({ images, active }: CarouselIndicatorTypes) => {
    return (
        <motion.div className="flex justify-center gap-3" variants={itemReveal}>
            {images.map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${active === i ? "bg-bg-inverse-80" : "bg-bg-inverse-15"}`}></span>
            ))}
        </motion.div>)
}

export default CarouselIndicator