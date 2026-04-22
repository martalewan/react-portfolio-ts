import { useScroll } from "framer-motion";
import { useRef } from "react";

export const useScrollProgress = (
    offset: Parameters<typeof useScroll>[0]["offset"] = ["start end", "end end"]
) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
    });

    return { ref, scrollYProgress };
};