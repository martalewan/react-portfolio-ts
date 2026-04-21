type GlassCardProps = {
    children: React.ReactNode;
    className?: string;
};

const GlassCard = ({ children, className = "" }: GlassCardProps) => {
    return (
        <div className={`max-w-350 relative bg-bg-inverse-05 backdrop-blur-sm border border-border-15 rounded-xs shadow-lg p-4 md:p-8 ${className}`}>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlassCard;