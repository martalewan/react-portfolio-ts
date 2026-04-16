const RadialGrandientBackground = () => {
    const createGradient = (colors) => {
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

    const colors = [
        { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
        { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
        { color: "rgba(141, 255, 105, 0.05)", stop: "100%" },
        { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
        { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden">
            <div
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[97vw] h-[97vw] rounded-full"
                style={{
                    background: createGradient(colors),
                    filter: "blur(0px)",
                    opacity: 0.3,
                }}
            />

            <div
                className="absolute top-10 left-0 w-[97vw] h-[97vw] rounded-full"
                style={{
                    background: createGradient(colors),
                    filter: "blur(0px)",
                    opacity: 0.3,
                }}
            />

            <div
                className="absolute bottom-1 left-10 w-[100vw] h-[100vw] rounded-full"
                style={{
                    background: createGradient(colors),
                    filter: "blur(0px)",
                    opacity: 0.3,
                }}
            />
        </div>
    );
};

export default RadialGrandientBackground;