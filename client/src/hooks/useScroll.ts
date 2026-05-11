import { useScroll } from "framer-motion";
import type { UseScrollOptions } from "framer-motion";

type ScrollOffset = UseScrollOptions["offset"];

export const useScrollAnimation = (
    offset: ScrollOffset = ["start end", "end end"]
) => {
    const { scrollYProgress } = useScroll({
        offset,
    });

    return { scrollYProgress };
};