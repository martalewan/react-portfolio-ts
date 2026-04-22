import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const useAboutScroll = () => {
    useEffect(() => {

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        const ctx = gsap.context(() => {

            requestAnimationFrame(() => {
                ScrollTrigger.refresh(true);
            });

            ScrollTrigger.create({
                trigger: "#vertical",
                start: "top top",
                end: "+=1500",
                pin: ".about-left",
                pinSpacing: true,
            });

        });

        return () => {
            lenis.destroy();
            ctx.revert();
        };

    }, []);
};