import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";

const HighlightItem = ({ item }) => (
    <motion.div
        variants={itemReveal}
        className="flex flex-row gap-2"
    >
        <h1 className="text-[70px] sm:text-[90px] lg:text-[100px] leading-none text-neon min-w-20">
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
);

export default HighlightItem;