import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type ToastMessageProps = {
    visible: boolean;
    message: string;
    type?: "success" | "error";
};

const styles = {
    success: {
        wrapper: "border-white/15 bg-bg-20 text-white",
        iconBg: "bg-bg-20",
        icon: <FiCheckCircle className="text-lg text-text-80" />,
    },

    error: {
        wrapper: "border-red-400/20 bg-red-500/10 text-red-200",
        iconBg: "bg-red-500/20",
        icon: <FiAlertCircle className="text-lg text-red-300" />,
    },
};

const ToastMessage = ({
    visible,
    message,
    type = "success",
}: ToastMessageProps) => {
    if (!visible) return null;

    const current = styles[type];

    return (
        <div
            className={`
                flex items-center gap-3
                rounded-xs
                border
                px-5 py-2.5
                shadow-2xl
                backdrop-blur-xl
                animate-fadeIn
                ${current.wrapper}
            `}
        >
            <div
                className={`
                    flex h-8 w-8 items-center justify-center
                    rounded-full
                    ${current.iconBg}
                `}
            >
                {current.icon}
            </div>

            <span className="text-sm font-medium tracking-wide">
                {message}
            </span>
        </div>
    );
};

export default ToastMessage;