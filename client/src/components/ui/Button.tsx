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
            className={`w-full group relative flex items-center justify-center overflow-hidden rounded-xs 
            transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:-translate-y-px cursor-pointer
            ${variant === "primary" ? "bg-accent text-text-inverse hover:bg-bg-inverse" : "bg-bg-inverse-15 text-text"}`}
        >

            <div className="flex items-center gap-2 h-full will-change-transform uppercase whitespace-nowrap">

                <span className="flex items-center gap-2 w-full px-3 md:px-5 py-2
                    transition-transform duration-300  will-change-transform
                    group-hover:-translate-y-full
                ">
                    {text}
                    {Icon && <Icon />}
                </span>

                <span className="absolute left-0 flex items-center gap-2 h-full w-full px-3 md:px-5 py-2
                    translate-y-full 
                    transition-transform duration-300 will-change-transform
                    group-hover:translate-y-0">
                    {text}
                    {Icon && <Icon />}
                </span>

            </div>
        </button>
    );
};

export default Button;