import Button from "../ui/Button";

const ContactForm = () => {
    return (
        <form
            className="flex flex-col gap-7"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xs bg-(--color-bg-inverse-faint) border border-(--color-border-faint) text-(--color-text-muted) placeholder-(--color-text-faint) focus:outline-none focus:border-(--color-accent)"
            />

            <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xs bg-(--color-bg-inverse-faint) border border-(--color-border-faint) text-(--color-text-muted) placeholder-(--color-text-faint) focus:outline-none focus:border-(--color-accent)"
            />

            <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-3 rounded-xs bg-(--color-bg-inverse-faint) border border-(--color-border-faint) text-(--color-text-muted) placeholder-(--color-text-faint) focus:outline-none focus:border-(--color-accent) resize-none"
            />

            <Button
                type="submit"
                text={"Send message"}
                onClick={() => {
                    window.location.href =
                        "mailto:youremail@example.com?subject=Contact from website";
                }} />
        </form>)
}

export default ContactForm