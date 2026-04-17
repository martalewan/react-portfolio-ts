type ColorStop = { color: string; stop: string };

const colors: ColorStop[] = [
    { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
    { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
    { color: "rgba(141, 255, 105, 0.05)", stop: "100%" },
    { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
    { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
];

const createGradient = (colors: ColorStop[]) => {
    const colorStops = colors
        .map(({ color, stop }) => `${color} ${stop}`)
        .join(", ");

    return `radial-gradient(circle at center,
    transparent 30%,
    transparent 50%,    
    ${colorStops},
    transparent 60%,
    transparent 100%)`;
};

const blobs = [
    "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-10 left-0",
    "bottom-1 left-10",
];

const RadialGradientBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {blobs.map((pos, i) => (
                <div
                    key={i}
                    className={`absolute w-[97vw] h-[97vw] rounded-full ${pos}`}
                    style={{
                        background: createGradient(colors),
                        filter: "blur(0px)",
                        opacity: 0.3,
                    }}
                />
            ))}
        </div>
    );
};

export default RadialGradientBackground;