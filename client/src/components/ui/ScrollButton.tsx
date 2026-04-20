type ScrollButtonProps = {
    direction?: "up" | "down";
    scrollToId?: "hero" | "about" | "skills" | "projects" | "contact";
};

const ScrollButton = ({ direction = "down", scrollToId = "hero" }: ScrollButtonProps) => {
    return (
        <button
            onClick={() => document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-pointer w-10 h-10 items-center justify-center z-1 hidden xl:flex"
        >
            <span className="absolute w-10 h-10 rounded-full border border-border-15 animate-ping" />
            <span className="absolute w-10 h-10 rounded-full border border-border-80" />

            <span className="text-text-80 text-sm">{direction === "down" ? "↓" : "↑"}</span>
        </button>
    );
};

export default ScrollButton;