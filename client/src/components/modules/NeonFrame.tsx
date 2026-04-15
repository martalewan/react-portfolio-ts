type NeonFrameProps = {
    children: React.ReactNode;
};

const NeonFrame = ({ children }: NeonFrameProps) => {
    return (
        <div className="neon-frame">

            <div className="relative p-7">
                {children}
            </div>
        </div>
    );
};

export default NeonFrame;