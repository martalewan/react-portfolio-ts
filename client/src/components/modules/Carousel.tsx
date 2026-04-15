import { useEffect, useRef } from "react";

type CarouselTypes = {
    images: string[]
    active: number
    setActive: (i: number) => void
}

const Carousel = ({ images, active, setActive }: CarouselTypes) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const stopDragging = () => {
            isDown = false;
            container.classList.remove("cursor-grabbing");
        };

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            container.classList.add("cursor-grabbing");

            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();

            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.2;

            container.scrollLeft = scrollLeft - walk;
        };

        const onMouseUp = () => stopDragging();
        const onMouseLeave = () => stopDragging();

        // Touch support
        const onTouchStart = (e: TouchEvent) => {
            isDown = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!isDown) return;

            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 1.2;

            container.scrollLeft = scrollLeft - walk;
        };

        const onTouchEnd = () => stopDragging();

        window.addEventListener("mouseup", onMouseUp);

        container.addEventListener("mousedown", onMouseDown);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseLeave);

        container.addEventListener("touchstart", onTouchStart);
        container.addEventListener("touchmove", onTouchMove);
        container.addEventListener("touchend", onTouchEnd);

        return () => {
            window.removeEventListener("mouseup", onMouseUp);

            container.removeEventListener("mousedown", onMouseDown);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseLeave);

            container.removeEventListener("touchstart", onTouchStart);
            container.removeEventListener("touchmove", onTouchMove);
            container.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const items = container.querySelectorAll(".carousel-item");

        const middleIndex = Math.floor(items.length / 2);
        const middleEl = items[middleIndex] as HTMLElement;

        if (middleEl) {
            container.scrollTo({
                left:
                    middleEl.offsetLeft -
                    container.offsetWidth / 2 +
                    middleEl.offsetWidth / 2,
                behavior: "instant" as ScrollBehavior,
            });
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(
                            (entry.target as HTMLElement).dataset.index
                        );
                        setActive(index);
                    }
                });
            },
            {
                root: container,
                threshold: 0.6,
            }
        );

        items.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    return (

        <div className="relative">

            <div
                ref={containerRef}
                className="
                        flex overflow-x-auto
                        scroll-smooth snap-x snap-mandatory
                        px-[calc(50%-40%)]
                        no-scrollbar
                        cursor-grab
                        select-none
                        [-ms-overflow-style:none]
                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden
                    "
            >
                {images.map((src, i) => (
                    <div
                        key={i}
                        data-index={i}
                        className={`
                                carousel-item
                                min-w-[87%]
                                snap-center
                                transition-all duration-500
                                ${active === i
                                ? "scale-100 opacity-100"
                                : "scale-98 opacity-40"
                            }
                            `}
                    >
                        <div className=" overflow-hidden border border-white/10">
                            <img
                                src={src}
                                className="w-full h-150 object-cover portfolio-image"
                                draggable={false}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Carousel