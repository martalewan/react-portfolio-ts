type NeonFrameProps = {
    children: React.ReactNode;
};

const NeonFrame = ({ children }: NeonFrameProps) => {
    return (
        <div className="neon-frame">

            <div className="relative">
                {children}
            </div>
        </div>
    );
};

export default NeonFrame;