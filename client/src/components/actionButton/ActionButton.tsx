import type { IconType } from "react-icons";

type ActionButtonProps = {
    text: string;
    icon?: IconType;
};

const ActionButton = ({ text, icon }: ActionButtonProps) => {
    const Icon = icon;

    return (
        <button
            className="group relative overflow-hidden rounded-xs px-5
            bg-(--accent-color) border border-(--accent-color)
            transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:bg-white hover:border-white
            hover:-translate-y-px
            hover:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
        >

            <span className="relative flex items-center gap-2 h-full will-change-transform cursor-pointer">

                <span className="p-2 flex items-center uppercase gap-2 
                    transition-transform duration-300 
                    group-hover:-translate-y-full 
                text-(--primary-color)">
                    {text}
                    {Icon && <Icon className="text-sm" />}
                </span>

                <span className="p-2 uppercase absolute left-0 flex items-center gap-2 h-full 
                    translate-y-full 
                    transition-transform duration-300 
                    group-hover:translate-y-0 
                    text-(--primary-color)">
                    {text}
                    {Icon && <Icon className="text-sm" />}
                </span>

            </span>
        </button>
    );
};

export default ActionButton;