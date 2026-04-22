import { useEffect } from "react";

export function useCarouselScroll(
    ref: React.RefObject<HTMLDivElement>,
    imagesLength: number,
    setActive: (i: number) => void
) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const oneSet = el.scrollWidth / 3;

        let rafId: number;

        const update = () => {
            if (!el) return;

            if (el.scrollLeft <= 0) el.scrollLeft += oneSet;
            if (el.scrollLeft >= oneSet * 2) el.scrollLeft -= oneSet;

            const items = el.querySelectorAll<HTMLElement>(".carousel-item");
            const center = el.scrollLeft + el.offsetWidth / 2;

            let closest = 0;
            let minDist = Infinity;

            items.forEach((item, i) => {
                const itemCenter = item.offsetLeft + item.offsetWidth / 2;
                const dist = Math.abs(center - itemCenter);

                if (dist < minDist) {
                    minDist = dist;
                    closest = i % imagesLength;
                }
            });

            setActive(closest);

            rafId = requestAnimationFrame(update);
        };

        rafId = requestAnimationFrame(update);

        return () => cancelAnimationFrame(rafId);
    }, [imagesLength, setActive]);
}