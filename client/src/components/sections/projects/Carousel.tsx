import { useRef } from "react";
import { motion } from "framer-motion";

import { useCarouselInit } from "../../../hooks/useCarouselInit";
import { useCarouselScroll } from "../../../hooks/useCarouselScroll";
import { useCarouselDrag } from "../../../hooks/useCarouselDrag";
import { imageReveal } from "../../../animations";

type CarouselTypes = {
    images: string[];
    active: number;
    setActive: (index: number) => void;
};

const Carousel = ({ images, active, setActive }: CarouselTypes) => {
    const ref = useRef<HTMLDivElement>(null);

    const data = [...images, ...images, ...images];

    useCarouselInit(ref, images);
    useCarouselScroll(ref, images.length, setActive);
    useCarouselDrag(ref);

    return (
        <motion.div
            ref={ref}
            variants={imageReveal}
            initial="hidden"
            animate="show"
            className="
                flex overflow-x-auto
                cursor-grab select-none
                layout-hide-scrollbar
            "
        >
            {data.map((src, i) => {
                const isActive = active === i % images.length;

                return (
                    <motion.div
                        key={i}
                        className={`
                            carousel-item
                            min-w-[86%] sm:min-w-[72%] lg:min-w-[60%]
                            transition-all duration-500
                            will-change-transform
                            ${isActive
                                ? "scale-100 opacity-100"
                                : "scale-[0.99] opacity-50"
                            }
                        `}
                    >
                        <div className="overflow-hidden aspect-18/11">
                            <img
                                src={src}
                                className="
                                w-full
                                h-full
                                object-cover
                                portfolio-image
                            "
                                draggable={false}
                                alt="Portfolio Image"

                            />
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default Carousel;