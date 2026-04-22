import Button from "../../ui/Button";

const inputClass =
    "w-full px-4 py-3 rounded-xs bg-bg-inverse-05 border border-border-15 text-text-80 placeholder-text-faint focus:outline-none focus:border-accent transition-colors";

const ContactForm = () => {
    return (
        <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
                e.preventDefault();

                window.location.href =
                    "mailto:youremail@example.com?subject=Contact from website";
            }}
        >
            <div className="flex flex-col gap-4">
                <input type="text" placeholder="Your name" className={inputClass} />
                <input type="email" placeholder="Your email" className={inputClass} />
                <textarea
                    placeholder="Your message"
                    rows={5}
                    className={`${inputClass} resize-none`}
                />
            </div>

            <div className="pt-2">
                <Button type="submit" text="Send message" />
            </div>
        </form>
    );
};

export default ContactForm;