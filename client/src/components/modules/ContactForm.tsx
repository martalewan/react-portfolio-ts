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
                className="w-full px-4 py-3 rounded-xs bg-bg-inverse-faint border border-border-faint text-(--color-text-muted) placeholder-text-faint focus:outline-none focus:border-accent"
            />

            <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xs bg-bg-inverse-faint border border-border-faint text-(--color-text-muted) placeholder-text-faint focus:outline-none focus:border-accent"
            />

            <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-3 rounded-xs bg-bg-inverse-faint border border-border-faint text-(--color-text-muted) placeholder-text-faint focus:outline-none focus:border-accent resize-none"
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