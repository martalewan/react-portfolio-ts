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
            left: dir === "left" ? -600 : 600,
            behavior: "smooth",
        });
    };

    return (
        <section
            id={id}
            className="min-h-screen scroll-mt-24"
        >
            <div className="w-full h-px bg-black mt-15 mb-15" />

            <div className="flex justify-between items-center">
                <div className="text-4xl md:text-6xl font-[Playfair_Display] pb-5">
                    {title}
                </div>

                <img
                    src={eyeBlinkGif}
                    className="h-15 w-15"
                    alt=""
                />
            </div>

            <div className="uppercase tracking-wide text-sm opacity-60 pb-5 text-black">
                {tags}
            </div>

            <div className="relative">
                <button
                    onClick={() => scroll("left")}
                    className="
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
                        flex gap-6 overflow-x-auto
                        snap-x snap-mandatory
                        pb-6 scroll-smooth
                    "
                >
                    {images.map((img: string, i: number) => (
                        <img
                            key={i}
                            src={img}
                            className="h-[70vh] flex-shrink-0 snap-center"
                            alt=""
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}