import { useRef } from "react";
import { useCarouselDrag } from "../../hooks/useCarouselDrag";
import { useCarouselInit } from "../../hooks/useCarouselInit";
import { useCarouselScroll } from "../../hooks/useCarouselScroll";

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
        <div
            ref={ref}
            className="
                flex overflow-x-auto
                cursor-grab select-none
                hide-scrollbar
            "
        >
            {data.map((src, i) => {
                const isActive = active === i % images.length;

                return (
                    <div
                        key={i}
                        className={`
                            carousel-item
                            min-w-[73%]
                            transition-all duration-500
                            ${isActive ? "scale-100 opacity-100" : "scale-99 opacity-50"}
                        `}
                    >
                        <div className="overflow-hidden">
                            <img
                                src={src}
                                className="w-full h-150 object-cover portfolio-image"
                                draggable={false}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Carousel;