import { useEffect, useState, type RefObject } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

export const useAboutScroll = (ref: RefObject<HTMLElement>) => {
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== "undefined" && window.innerWidth >= 1024
    );

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const y = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 260]),
        { stiffness: 80, damping: 25 }
    );

    return {
        motionStyle: isDesktop ? { y } : {},
    };
};