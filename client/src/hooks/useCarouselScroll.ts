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

        const handleScroll = () => {
            if (el.scrollLeft <= 0) el.scrollLeft += oneSet;
            if (el.scrollLeft >= oneSet * 2) el.scrollLeft -= oneSet;

            const items = el.querySelectorAll(".carousel-item");

            const center = el.scrollLeft + el.offsetWidth / 2;

            let closest = 0;
            let minDist = Infinity;

            items.forEach((item, i) => {
                const rect = item as HTMLElement;
                const itemCenter = rect.offsetLeft + rect.offsetWidth / 2;

                const dist = Math.abs(center - itemCenter);

                if (dist < minDist) {
                    minDist = dist;
                    closest = i % imagesLength;
                }
            });

            setActive(closest);
        };

        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, [imagesLength]);
}