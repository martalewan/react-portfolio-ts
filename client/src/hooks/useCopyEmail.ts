import { useState } from "react";

export const useCopyEmail = (email: string) => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return { copied, copy };
};