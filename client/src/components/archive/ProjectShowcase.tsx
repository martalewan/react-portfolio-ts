import { useRef } from "react";
import eyeBlinkGif from "../../assets/designArchive/eye-blink.gif"

export default function ProjectShowcase({ id, title, tags, images }) {
    const ref = useRef(null);

    const scroll = (dir) => {
        if (!ref.current) return;

        ref.current.scrollBy({
            left: dir === "left" ? -600 : 600,
            behavior: "smooth",
        });
    };

    return (
        <section id={id} className="min-h-screen scroll-mt-24">

            <div className="w-full h-px bg-black mt-15 mb-15" />

            <div className="flex justify-between items-center">
                <div className="text-4xl md:text-6xl font-[Playfair_Display] pb-5">
                    {title}
                </div>

                <img src={eyeBlinkGif} className="h-15 w-15" />
            </div>

            <div className="uppercase tracking-wide text-sm opacity-60 pb-5 text-black">
                {tags}
            </div>

            <div className="relative">

                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 px-3 py-2"
                >
                    ←
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 px-3 py-2"
                >
                    →
                </button>

                <div
                    ref={ref}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scroll-smooth"
                >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className="h-[70vh] flex-shrink-0 snap-center"
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}