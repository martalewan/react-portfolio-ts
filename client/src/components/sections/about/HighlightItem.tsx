import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";

type HighlightItemData = {
    prefix: string;
    title: string;
    text: string;
};

type HighlightItemProps = {
    item: HighlightItemData;
};

const HighlightItem = ({
    item,
}: HighlightItemProps) => (
    <motion.div
        variants={itemReveal}
        className="flex flex-row gap-2"
    >
        <div className="text-[70px] sm:text-[90px] lg:text-[100px] leading-none text-neon min-w-20">
            {item.prefix}
        </div>

        <div className="flex flex-col gap-2">
            <div className="text-sm text-text-40">
                {item.title}
            </div>

            <p className="text-sm leading-relaxed">
                {item.text}
            </p>
        </div>
    </motion.div>
);

export default HighlightItem;
