import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    content: ReactNode;
};

const Tooltip = ({ children, content }: Props) => {
    return (
        <div className="relative group/icon inline-flex">
            {children}

            <span
                className="
                    absolute left-1/2 -translate-x-1/2 -top-8
                    text-[10px] px-2 py-1
                    bg-black text-white rounded-sm
                    whitespace-nowrap
                    opacity-0 group-hover/icon:opacity-100
                    transition
                    pointer-events-none
                "
            >
                {content}
            </span>
        </div>
    );
};

export default Tooltip;