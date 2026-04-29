import NeonFrame from "../../effects/NeonFrame";
import GlassCard from "../../ui/GlassCard";
import SectionTitle from "../../layout/SectionTitle";
import ContactForm from "./ContactForm";
import ContactIdentity from "./ContactIdentity";
import { motion } from "framer-motion";
import { itemReveal, staggerContainer } from "../../../animations";

const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="page-padding relative"
            variants={staggerContainer({ delay: .5 })}
            initial="hidden"
            animate="show"
        >
            <SectionTitle
                label="04."
                title="Get in touch"
                subtitle="Let’s build something meaningful together"
            />


            <motion.div
                variants={itemReveal}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 relative ">
                <NeonFrame>

                    <GlassCard>
                        <motion.div
                            variants={itemReveal}
                            className="flex flex-col gap-2 mb-10"
                        >
                            <h3 className="text-text">Let’s talk about your project and the next steps</h3>
                            <p className="text-text-80 text-sm leading-relaxed">
                                I usually respond within a day. Open to freelance, collaborations, or new ideas.
                            </p>
                        </motion.div>

                        <ContactForm />
                    </GlassCard>
                </NeonFrame>

                <ContactIdentity />
            </motion.div>
        </motion.section>
    );
};

export default Contact;