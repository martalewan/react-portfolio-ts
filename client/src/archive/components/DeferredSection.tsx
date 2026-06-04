import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredSectionProps = {
    children: ReactNode;
    fallbackHeight?: string;
    rootMargin?: string;
};

export default function DeferredSection({
    children,
    fallbackHeight = "100vh",
    rootMargin = "500px 0px",
}: DeferredSectionProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || shouldRender) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [rootMargin, shouldRender]);

    return (
        <div ref={ref} style={!shouldRender ? { minHeight: fallbackHeight } : undefined}>
            {shouldRender ? children : null}
        </div>
    );
}
