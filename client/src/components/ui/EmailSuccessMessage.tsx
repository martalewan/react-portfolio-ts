type EmailSuccessMessageProps = {
    visible: boolean;
    message?: string;
};

const EmailSuccessMessage = ({
    visible,
    message = "Email successfully sent!",
}: EmailSuccessMessageProps) => {
    if (!visible) return null;

    return (
        <div
            className="
                fixed bottom-6 left-1/2 -translate-x-1/2
                backdrop-blur-md
                animate-fadeIn
            "
        >
            <span className="text-green-400">✔</span>
            <span className="text-sm tracking-wide">{message}</span>
        </div>
    );
};

export default EmailSuccessMessage;