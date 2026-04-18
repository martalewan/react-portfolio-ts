type ScrollButtonProps = {
    direction?: "up" | "down";
    scrollToId?: "hero" | "about" | "skills" | "projects" | "contact";
};

const ScrollButton = ({ direction = "down", scrollToId = "hero" }: ScrollButtonProps) => {
    return (
        <button
            onClick={() => document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" })}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer
            w-10 h-10 flex items-center justify-center z-1"
        >
            <span className="absolute w-10 h-10 rounded-full border border-white/20 animate-ping" />
            <span className="absolute w-10 h-10 rounded-full border border-white/30" />

            <span className="text-white/70 text-sm">{direction === "down" ? "↓" : "↑"}</span>
        </button>
    );
};

export default ScrollButton;