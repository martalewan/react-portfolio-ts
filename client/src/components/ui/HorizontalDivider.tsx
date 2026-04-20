type HorizontalDividerProps = {
    className?: string;
};

const HorizontalDivider = ({ className = "" }: HorizontalDividerProps) => {
    return (
        <div
            className={`w-6 h-px bg-bg-inverse-15 ${className}`}
        />
    );
};

export default HorizontalDivider;