type ColorStop = { color: string; stop: string };

const colors: ColorStop[] = [
    { color: "rgba(235, 245, 255, 0.28)", stop: "45%" },
    { color: "rgba(235, 245, 255, 0.22)", stop: "55%" },
    { color: "rgba(235, 245, 255, 0.12)", stop: "65%" },
    { color: "rgba(235, 245, 255, 0.18)", stop: "75%" },
    { color: "rgba(235, 245, 255, 0.08)", stop: "85%" },
];

const createGradient = (colors: ColorStop[]) => {
    const colorStops = colors
        .map(({ color, stop }) => `${color} ${stop}`)
        .join(", ");

    return `radial-gradient(circle at 60% 40%,
        transparent 25%,
        ${colorStops},
        transparent 90%
    )`;
};

const blobs = [
    "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-20 right-10",
    "bottom-20 right-20",
];

const RadialGradientBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {blobs.map((pos, i) => (
                <div
                    key={i}
                    className={`absolute w-[92vw] h-[92vw] rounded-full ${pos}`}
                    style={{
                        background: createGradient(colors),
                        filter: `blur(${80 + i * 40}px)`,
                        opacity: 0.12 + i * 0.03,
                    }}
                />
            ))}
        </div>
    );
};

export default RadialGradientBackground;