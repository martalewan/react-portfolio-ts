import Lenis from "lenis";
import { useEffect } from "react";

export const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            lerp: 0.08,
            smoothWheel: true,
            wheelMultiplier: 1,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
};