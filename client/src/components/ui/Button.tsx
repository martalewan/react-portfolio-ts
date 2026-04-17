import type { IconType } from "react-icons";

type ButtonProps = {
    onClick?: () => void;
    variant?: "primary" | "secondary";
    text: string;
    icon?: IconType;
    type?: "button" | "submit" | "reset";
};

const Button = ({ text, icon, variant = "primary", type = "button", onClick }: ButtonProps) => {
    const Icon = icon;

    return (
        <button
            type={type}
            onClick={onClick}
            className={`group relative flex items-center justify-center overflow-hidden rounded-xs 
            border border-transparent
            transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:-translate-y-px
            ${variant === "primary" ? "bg-(--accent-color) text-(--primary-color)  hover:bg-(--secondary-color)" : "bg-(--secondary-color)/15 text-(--secondary-color)"}`}
        >

            <span className="flex items-center gap-2 h-full will-change-transform cursor-pointer ">

                <span className="flex items-center uppercase gap-2 w-full px-5 py-2
                    transition-transform duration-300 
                    group-hover:-translate-y-full 
                ">
                    {text}
                    {Icon && <Icon className="text-sm" />}
                </span>

                <span className="uppercase absolute left-0 flex items-center gap-2 h-full w-full px-5 py-3
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