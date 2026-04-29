import profil from "../../../assets/profil.jpeg";
import { FiMapPin, FiMail } from "react-icons/fi";
import Socials from "../../ui/Socials";
import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";
import { FaTelegramPlane } from "react-icons/fa";

const ContactIdentity = () => {
    return (
        <div>
            <motion.span
                variants={itemReveal}
                className="text-xs tracking-widest text-text-40 uppercase block mb-7"
            >
                Where you can find me
            </motion.span>
            <div className="flex flex-col md:flex-row md:ml-auto gap-6 md:gap-4">

                <Socials
                    wrapperStyles="flex flex-row md:flex-col justify-center md:justify-start gap-4 shrink-0"
                    iconsStyles="flex items-center justify-center border border-border-80 rounded-xs p-2 w-9 h-9"
                />

                <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start w-full">

                    <motion.img
                        variants={itemReveal}
                        src={profil}
                        alt="Portrait"
                        className="rounded-sm w-40 sm:w-52 md:w-88 object-contain"
                    />

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">

                        <div className="ui-elevated text-xs">
                            <motion.div
                                variants={itemReveal}
                                className="flex items-center gap-2 whitespace-nowrap">
                                <FiMapPin className="text-accent text-sm shrink-0" />
                                <span>Paris, FR</span>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={itemReveal} className="ui-elevated text-xs">
                            <div className="flex items-center gap-2 whitespace-nowrap">

                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>

                                <span className="text-text-80">
                                    Available for freelance & full-time
                                </span>
                            </div>
                        </motion.div>

                    </div>
                    <motion.span
                        variants={itemReveal}
                        className="text-xs tracking-widest text-text-40 uppercase block"
                    >
                        Quick contact
                    </motion.span>

                    <motion.div
                        variants={itemReveal}
                        className="flex items-center whitespace-nowrap"
                    >
                        <div className="flex flex-col gap-3">
                            <motion.a
                                href="mailto:mlewan.design@gmail.com"
                                className="text-xs"
                                variants={itemReveal}
                            >
                                <div
                                    className="flex items-center gap-2 whitespace-nowrap"
                                >
                                    <FiMail className="text-accent text-sm shrink-0" />
                                    <span>mlewan.design@gmail.com</span>
                                </div>
                            </motion.a>
                            <motion.a
                                href="https://t.me/martalewan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs cursor-pointer"
                                variants={itemReveal}
                            >
                                <div
                                    className="flex items-center gap-2 whitespace-nowrap"
                                >
                                    <FaTelegramPlane className="text-accent text-sm shrink-0" />
                                    <span>telegram</span>
                                </div>
                            </motion.a>
                        </div>

                    </motion.div>
                </div>

            </div>

        </div >
    );
};

export default ContactIdentity;