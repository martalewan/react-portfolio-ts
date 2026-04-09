import type { IconType } from "react-icons";

type ActionButtonProps = {
    text: string;
    icon?: IconType;
};

const ActionButton = ({ text, icon }: ActionButtonProps) => {
    const Icon = icon;
    return (
        <button className="group relative cursor-pointer w-fit">
            <div className="relative z-1 inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-white transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
                {text}
                {icon && <Icon />}
            </div>
            <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:[box-shadow:1px_1px_#a3a3a3,2px_2px_#d4d4d4,3px_3px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div>

        </button>
    )
}

export default ActionButton;