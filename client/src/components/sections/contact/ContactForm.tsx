import { useState, type SyntheticEvent } from "react";
import Button from "../../ui/Button";
import EmailSuccessMessage from "../../ui/EmailSuccessMessage";
import emailjs from "@emailjs/browser";
import { itemReveal } from "../../../animations";
import { motion } from "framer-motion";

const inputClass =
    "w-full px-4 py-3 rounded-xs bg-bg-inverse-05 border border-border-15 text-text-80 placeholder-text-faint focus:outline-none focus:border-accent transition-colors";

const ContactForm = () => {
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const form = e.currentTarget;

        const name = (form.name as any).value.trim();
        const email = (form.email as any).value.trim();
        const message = (form.message as any).value.trim();

        if (!name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Invalid email.");
            return;
        }

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name,
                    email,
                    message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSent(true);
            setTimeout(() => setSent(false), 3000);
            form.reset();

        } catch (err) {
            setError("Failed to send message.");
        }
    };
    return (
        <>
            <form
                className="flex flex-col gap-5"
                onSubmit={onSubmit}
            >
                <motion.div
                    variants={itemReveal}
                    className="flex flex-col gap-4">
                    <input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className={inputClass}
                        required />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        className={inputClass}
                        required />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        className={`${inputClass} resize-none`}
                        required
                    />
                </motion.div>


                {
                    error && (
                        <p className="text-red-400 text-sm">{error}</p>
                    )
                }

                <div className="pt-2">
                    <Button type="submit" text="Send message" />
                </div>

            </form >
            <EmailSuccessMessage visible={sent} />

        </>
    );
};

export default ContactForm;