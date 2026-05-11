import { useEffect, type RefObject } from "react";

export function useCarouselInit(
    ref: RefObject<HTMLDivElement | null>,
    images: string[]
) {
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
}