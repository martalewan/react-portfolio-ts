import NeonFrame from "../modules/NeonFrame"
import SectionTitle from "../modules/SectionTitle"
import GlassCard from "../ui/GlassCard"
import profil from "../../assets/profil.jpeg";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Socials from "../modules/Socials";
import { FiMapPin, FiMail } from "react-icons/fi";

const Contact = () => {
    return (
        <section id="contact" className="page-padding pb-50 pointer-none">
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
                                className="w-full px-4 py-3 rounded-xs bg-(--secondary-color)/7 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-(--accent-color)"
                            />

                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-xs bg-(--secondary-color)/7 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-(--accent-color)"
                            />

                            <textarea
                                placeholder="Your message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-xs bg-(--secondary-color)/7 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-(--accent-color) resize-none"
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
                    <div className="flex justify-end gap-4">
                        <Socials wrapperStyles="flex flex-col gap-4" iconsStyles="z-10 flex items-center justify-center border-1 border-(--secondary-color)/80 rounded-xs p-2 w-9 h-9" />

                        <div className="flex flex-col gap-8 items-start">
                            <motion.img
                                src={profil}
                                alt="Portrait"
                                className="rounded-sm max-w-80 w-full h-auto object-contain"
                            />
                            <div className="flex gap-3">
                                <div className="badge text-[11px] px-3 py-1.5 flex items-center gap-2">
                                    <FiMapPin className="text-xs text-(--accent-color)" />
                                    <span>Paris</span>
                                </div>

                                <div className="badge text-[11px] px-3 py-1.5 flex items-center gap-2">
                                    <FiMail className="text-sm text-(--accent-color)" />
                                    <span>mlewan.design@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </NeonFrame>

        </section>
    )
}

export default Contact