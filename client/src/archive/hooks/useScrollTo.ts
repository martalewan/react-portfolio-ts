export function useScrollTo(offset: number = 80) {
    const scrollTo = (id: string): void => {
        const el = document.getElementById(id);

        if (!el) return;

        const top =
            el.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    return scrollTo;
}