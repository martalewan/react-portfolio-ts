type NeonFrameProps = {
    children: React.ReactNode;
};

const NeonFrame = ({ children }: NeonFrameProps) => {
    return (
        <div className="effect-neon-frame">

            <div className="relative content">
                {children}
            </div>
        </div>
    );
};

export default NeonFrame;