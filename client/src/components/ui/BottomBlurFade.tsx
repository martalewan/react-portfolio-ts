type BottomBlurFadeProps = {
    height?: string;
};

export default function BottomBlurFade({ height = "h-18" }: BottomBlurFadeProps) {
    return (
        <div className={`fixed bottom-0 left-0 w-full ${height} pointer-events-none z-2`}>

            <div className="absolute inset-0
            backdrop-blur-sm
            mask-[linear-gradient(to_top,black_40%,transparent_100%)]">
            </div>

            <div className="absolute inset-0
            bg-linear-to-t from-white/5 to-transparent">
            </div>

        </div>
    );
}