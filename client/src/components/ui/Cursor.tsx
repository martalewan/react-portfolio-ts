import { useCursorHover } from "../../hooks/useCursorHover";
import { useCursorPosition } from "../../hooks/useCursorPosition";

const Cursor = () => {
    const pos = useCursorPosition();
    const { hovered, label } = useCursorHover();

    return (
        <div className="pointer-events-none fixed inset-0 mix-blend-difference hidden md:block z-20">
            <div
                className="absolute w-4 h-4 rounded-full bg-bg-inverse transition-transform duration-300 ease-out flex items-center justify-center"
                style={{
                    transform: `
                        translate(${pos.x + 12}px, ${pos.y + 12}px)
                        scale(${hovered ? (label ? 7 : 5) : 0.5})
                    `,
                }}
            >
                {hovered && label && (
                    <span className="text-[2px] font-bold mix-blend-difference p-3">
                        {label}
                    </span>
                )}
            </div>

        </div>
    );
};

export default Cursor;