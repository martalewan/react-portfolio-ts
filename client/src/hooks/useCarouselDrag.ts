import { useEffect, type RefObject } from "react";

export function useCarouselDrag(ref: RefObject<HTMLDivElement | null>) {
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

                const itemCenter = elItem.offsetLeft + elItem.offsetWidth / 2;
                const dist = Math.abs(center - itemCenter);

                if (dist < minDist) {
                    minDist = dist;
                    closest = elItem;
                }
            });

            const closestItem = closest as HTMLElement | null;

            if (!closestItem) return;

            el.scrollTo({
                left:
                    closestItem.offsetLeft -
                    el.offsetWidth / 2 +
                    closestItem.offsetWidth / 2,
                behavior: "smooth",
            });
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
}