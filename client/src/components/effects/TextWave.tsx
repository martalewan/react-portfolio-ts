import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const TextWave = () => {
    const { scrollYProgress } = useScroll();
    const paths = useRef<SVGTextPathElement[]>([]);

    useEffect(() => {
        const update = (e: number) => {
            paths.current.forEach((path, i) => {
                if (!path) return;

                path.setAttribute(
                    "startOffset",
                    `${-35 + (i * 17.5) + (e * 40)}%`
                );
            });
        };

        update(scrollYProgress.get()); // 👈 run immediately

        const unsubscribe = scrollYProgress.on("change", update);

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div className="w-full h-170 overflow-hidden flex items-end justify-center">
            <svg className="w-full" viewBox="0 0 170 100">

                <path
                    id="curve"
                    fill="none"
                    d="
                    M0,70
                    C40,20 80,120 120,70
                    C160,20 200,120 240,70
                    C280,25 320,115 360,70
                    C400,35 440,105 480,70
                    C520,55 560,85 600,70
                "
                />

                <text fill="white" className="text-[6px] uppercase">

                    {[...Array(3)].map((_, i) => (

                        < textPath
                            key={i}
                            href="#curve"
                            ref={(el) => {
                                if (el) paths.current[i] = el;
                            }}
                            startOffset={i * 18 + "%"}
                        >
                            Building better life through code.
                        </textPath>
                    ))}

                </text>

            </svg>
        </div >

    );
};

export default TextWave;