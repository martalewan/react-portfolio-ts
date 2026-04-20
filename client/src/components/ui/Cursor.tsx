import { useCursorHover } from "../../hooks/useCursorHover";
import { useCursorPosition } from "../../hooks/useCursorPosition";

const Cursor = () => {
    const pos = useCursorPosition();
    const hovered = useCursorHover();

    return (
        <div className="pointer-events-none fixed inset-0 z-12 mix-blend-difference">

            <div
                className="absolute w-4 h-4 rounded-full bg-bg-inverse transition-transform duration-300 ease-out"
                style={{
                    transform: `
                    translate(${pos.x - 4}px, ${pos.y - 4}px)
                    scale(${hovered ? 5 : 0.5})
                `,
                }}
            />
        </div>
    );
};

export default Cursor;