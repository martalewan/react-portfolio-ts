import { useRef } from "react";
import { useAmbientDots } from "../../hooks/useAmbientDots";

const COLS = 80;
const ROWS = 14;
const TOTAL = COLS * ROWS;
const SIZE = 16;

const AmbientDots = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useAmbientDots(containerRef);

    return (
        <div className="w-full h-full flex items-center justify-center pt-15 pb-15">
            <div
                ref={containerRef}
                className="grid"
                style={{
                    gridTemplateColumns: `repeat(${COLS}, ${SIZE}px)`,
                    gridAutoRows: `${SIZE}px`,
                    gap: "8px",
                    width: "max-content",
                    height: "max-content",
                }}
            >
                {Array.from({ length: TOTAL }).map((_, i) => (
                    <div
                        key={i}
                        className="dot w-1 h-1 bg-bg-inverse-80 rounded-full transition-transform duration-150 ease-out pointer-events-none"
                    />
                ))}
            </div>
        </div>
    );
};

export default AmbientDots;