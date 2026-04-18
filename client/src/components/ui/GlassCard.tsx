type GlassCardProps = {
    children: React.ReactNode;
    className?: string;
    glow?: boolean;
};

const GlassCard = ({ children, className = "", glow = false }: GlassCardProps) => {
    return (
        <div className={`max-w-350 relative bg-(--secondary-color)/1 backdrop-blur-xl border border-(--secondary-color)/20 rounded-xsm shadow-lg p-4 md:p-8 ${className}`}>
            {glow && (
                <div className="absolute -inset-1 bg-linear-to-r from-blue-400 via-teal-400 to-pink-500 rounded-3xl opacity-10 blur-2xl"></div>
            )}

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlassCard;