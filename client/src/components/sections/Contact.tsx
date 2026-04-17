import NeonFrame from "../modules/NeonFrame"
import SectionTitle from "../modules/SectionTitle"
import GlassCard from "../ui/GlassCard"
import ContactForm from "../modules/ContactForm";
import ContactInfo from "../modules/ContactInfo";

const Contact = () => {
    return (
        <section id="contact" className="page-padding pb-50">
            <SectionTitle label="04." title="Get in touch with me" subtitle="Hire me and just tell me hello" />
            <NeonFrame>

                <div className="grid grid-cols-2 gap-20 relative z-10">

                    <GlassCard>
                        <h3>Let's Connect</h3>
                        <p className="mb-7">I am always open to discussing new projects</p>
                        <ContactForm />
                    </GlassCard>
                    <ContactInfo />

                </div>

            </NeonFrame>

        </section>
    )
}

export default Contact