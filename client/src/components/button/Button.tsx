import type { IconType } from "react-icons";

type ButtonProps = {
    variant?: "primary" | "secondary";
    text: string;
    icon?: IconType;

};

const Button = ({ text, icon, variant = "primary" }: ButtonProps) => {
    const Icon = icon;

    return (
        <button
            className={`group relative overflow-hidden rounded-xs px-5
            border border-transparent
            transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:-translate-y-px
            ${variant === "primary" ? "bg-(--accent-color) text-(--primary-color)  hover:bg-(--secondary-color)" : "bg-(--secondary-color)/15 text-(--secondary-color)"}`}
        >

            <span className="relative flex items-center gap-2 h-full will-change-transform cursor-pointer">

                <span className="p-2 flex items-center uppercase gap-2 
                    transition-transform duration-300 
                    group-hover:-translate-y-full 
                ">
                    {text}
                    {Icon && <Icon className="text-sm" />}
                </span>

                <span className="p-2 uppercase absolute left-0 flex items-center gap-2 h-full 
                    translate-y-full 
                    transition-transform duration-300 
                    group-hover:translate-y-0">
                    {text}
                    {Icon && <Icon className="text-sm" />}
                </span>

            </span>
        </button>
    );
};

export default Button;