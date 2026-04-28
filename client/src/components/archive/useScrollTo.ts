export function useScrollTo(offset = 80) {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top =
            el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    return scrollTo;
}