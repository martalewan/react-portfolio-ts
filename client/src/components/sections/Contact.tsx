import NeonFrame from "../modules/NeonFrame"
import SectionTitle from "../modules/SectionTitle"
import GlassCard from "../ui/GlassCard"
import profil from "../../assets/profil.jpeg";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Contact = () => {
    return (
        <section id="contact" className="page-padding pb-50">
            <SectionTitle label="04." title="Get in touch with me" subtitle="Hire me and just tell me hello" />
            <NeonFrame>

                <div className="grid grid-cols-2 gap-20 relative z-10">
                    <GlassCard>
                        <h3>Let's Connect</h3>
                        <p className="mb-7">I am always open to discussing new projects</p>
                        <form
                            className="flex flex-col gap-7"
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-sm bg-(--secondary-color)/7 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-(--accent-color)"
                            />

                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-sm bg-(--secondary-color)/7 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-(--accent-color)"
                            />

                            <textarea
                                placeholder="Your message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-sm bg-(--secondary-color)/7 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-(--accent-color) resize-none"
                            />

                            <Button
                                type="submit"
                                text={"Send message"}
                                onClick={() => {
                                    window.location.href =
                                        "mailto:youremail@example.com?subject=Contact from website";
                                }} />
                        </form>

                    </GlassCard>
                    <div>
                        <div className="absolute right-0">
                            <motion.img
                                src={profil}
                                alt="Portrait"
                                className="rounded-sm max-w-80 relative"
                            />
                        </div>



                    </div>

                </div>

            </NeonFrame>
        </section>
    )
}

export default Contact