import { useEffect, useRef } from "react";

type CarouselTypes = {
    images: string[];
    active: number;
    setActive: (index: number) => void;
};

const Carousel = ({ images, active, setActive }: CarouselTypes) => {
    const ref = useRef<HTMLDivElement>(null);


    const data = [...images, ...images, ...images];

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const items = el.querySelectorAll(".carousel-item") as NodeListOf<HTMLElement>;
        if (!items.length) return;

        const activeIndex = images.length;

        const target = items[activeIndex];

        if (!target) return;

        const offset =
            target.offsetLeft -
            el.offsetWidth / 2 +
            target.offsetWidth / 2;

        el.scrollLeft = offset;
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const oneSet = el.scrollWidth / 3;

        const handleScroll = () => {
            if (el.scrollLeft <= 0) el.scrollLeft += oneSet;
            if (el.scrollLeft >= oneSet * 2) el.scrollLeft -= oneSet;

            const items = el.querySelectorAll(".carousel-item");

            const center = el.scrollLeft + el.offsetWidth / 2;

            let closest = 0;
            let minDist = Infinity;

            items.forEach((item, i) => {
                const rect = item as HTMLElement;
                const itemCenter =
                    rect.offsetLeft + rect.offsetWidth / 2;

                const dist = Math.abs(center - itemCenter);

                if (dist < minDist) {
                    minDist = dist;
                    closest = i % images.length;
                }
            });

            setActive(closest);
        };

        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, [images.length]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const snapToClosest = () => {
            const items = el.querySelectorAll(".carousel-item");

            const center = el.scrollLeft + el.offsetWidth / 2;

            let closest: HTMLElement | null = null;
            let minDist = Infinity;

            items.forEach((item) => {
                const elItem = item as HTMLElement;

                const itemCenter =
                    elItem.offsetLeft + elItem.offsetWidth / 2;

                const dist = Math.abs(center - itemCenter);

                if (dist < minDist) {
                    minDist = dist;
                    closest = elItem;
                }
            });

            if (closest) {
                el.scrollTo({
                    left:
                        closest.offsetLeft -
                        el.offsetWidth / 2 +
                        closest.offsetWidth / 2,
                    behavior: "smooth",
                });
            }
        };

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            el.classList.add("cursor-grabbing");

            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;

            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * 1.2;

            el.scrollLeft = scrollLeft - walk;
        };

        const stop = () => {
            if (!isDown) return;
            isDown = false;

            el.classList.remove("cursor-grabbing");

            snapToClosest();
        };

        el.addEventListener("mousedown", onMouseDown);
        el.addEventListener("mousemove", onMouseMove);
        el.addEventListener("mouseup", stop);
        el.addEventListener("mouseleave", stop);

        el.addEventListener("touchstart", (e: TouchEvent) => {
            isDown = true;
            startX = e.touches[0].pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        });

        el.addEventListener("touchmove", (e: TouchEvent) => {
            if (!isDown) return;

            const x = e.touches[0].pageX - el.offsetLeft;
            const walk = (x - startX) * 1.2;

            el.scrollLeft = scrollLeft - walk;
        });

        el.addEventListener("touchend", stop);

        return () => {
            el.removeEventListener("mousedown", onMouseDown);
            el.removeEventListener("mousemove", onMouseMove);
            el.removeEventListener("mouseup", stop);
            el.removeEventListener("mouseleave", stop);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="
                flex overflow-x-auto
                cursor-grab select-none
                no-scrollbar
                [&::-webkit-scrollbar]:hidden
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
                            ${isActive ? "scale-100 opacity-100" : "scale-98 opacity-40"}
                        `}
                    >
                        <div className="border border-white/10 overflow-hidden rounded-sm">
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