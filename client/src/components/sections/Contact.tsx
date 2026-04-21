import NeonFrame from "../modules/NeonFrame";
import SectionTitle from "../modules/SectionTitle";
import GlassCard from "../ui/GlassCard";
import ContactForm from "../modules/ContactForm";
import ContactInfo from "../modules/ContactInfo";

const Contact = () => {
    return (
        <section id="contact" className="page-padding pb-50">
            <SectionTitle
                label="04."
                title="Get in touch"
                subtitle="Let’s build something meaningful together"
            />

            <NeonFrame>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 relative z-10">

                    <GlassCard>
                        <div className="flex flex-col gap-2 mb-10">
                            <h3 className="text-text">Let’s work together</h3>
                            <p className="text-text-80 text-sm leading-relaxed">
                                I usually respond within a day. Open to freelance, collaborations, or new ideas.
                            </p>
                        </div>

                        <ContactForm />
                    </GlassCard>

                    <ContactInfo />
                </div>
            </NeonFrame>
        </section>
    );
};

export default Contact;