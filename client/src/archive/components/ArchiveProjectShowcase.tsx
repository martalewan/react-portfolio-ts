import { useRef, type RefObject } from "react";
import eyeBlinkGif from "../../assets/designArchive/icons/eye-blink.gif";

type ProjectShowcaseProps = {
    id: string;
    title: string;
    tags: string;
    images: string[];
};

type ScrollDirection = "left" | "right";

export default function ProjectShowcase({
    id,
    title,
    tags,
    images,
}: ProjectShowcaseProps) {
    const ref: RefObject<HTMLDivElement | null> =
        useRef<HTMLDivElement>(null);

    const scroll = (dir: ScrollDirection) => {
        if (!ref.current) return;

        ref.current.scrollBy({
            left: dir === "left" ? -300 : 300,
            behavior: "smooth",
        });
    };

    return (
        <section
            id={id}
            className="scroll-mt-24"
        >
            <div className="w-full h-px bg-black mt-10 md:mt-15 mb-10 md:mb-15" />

            <div className="flex justify-between items-center gap-4">
                <div className="text-3xl sm:text-4xl md:text-6xl font-[Playfair_Display] pb-5 leading-tight">
                    {title}
                </div>

                <img
                    src={eyeBlinkGif}
                    className="h-10 w-10 md:h-15 md:w-15 shrink-0"
                    alt="Portfolio image item"
                    loading="lazy"
                />
            </div>

            <div className="uppercase tracking-wide text-xs md:text-sm opacity-60 pb-5 text-black">
                {tags}
            </div>

            <div className="relative">
                <button
                    onClick={() => scroll("left")}
                    className="
                        hidden md:block
                        absolute -left-15 top-1/2 -translate-y-1/2 z-10
                        px-3 py-2
                        bg-white/70
                        border border-black/80
                        text-black
                        rounded-full
                        shadow-sm
                        hover:bg-white/90 transition cursor-pointer
                    "
                >
                    ←
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="
                        hidden md:block
                        absolute -right-15 top-1/2 -translate-y-1/2 z-10
                        bg-white/80 
                        px-3 py-2
                        border border-black/80
                        text-black
                        rounded-full
                        shadow-sm
                        hover:bg-white/90 transition cursor-pointer
                    "
                >
                    →
                </button>

                <div
                    ref={ref}
                    className="
                        flex gap-4 md:gap-6 overflow-x-auto
                        snap-x snap-mandatory
                        pb-6 scroll-smooth
                    "
                >
                    {images.map((img: string, i: number) => (
                        <img
                            key={i}
                            src={img}
                            className="h-[45vh] sm:h-[55vh] md:h-[70vh] max-w-[85vw] object-contain shrink-0 snap-center"
                            alt="Portfolio image item"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}