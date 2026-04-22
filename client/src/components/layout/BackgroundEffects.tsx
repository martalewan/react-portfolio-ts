export default function BackgroundEffects() {
    return (
        <>
            <div className="grid-glow absolute bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
                      bg-size-[64px_64px] bg-position-[0_0] inset-0 z-0 pointer-events-none" />

            <div className="effect-grain absolute z-0 pointer-events-none" />

            {/* <div className="absolute top-0 left-0 w-full h-[120vh] overflow-hidden">
                <RadialGrandientBackground />
            </div> */}

        </>
    );
}   