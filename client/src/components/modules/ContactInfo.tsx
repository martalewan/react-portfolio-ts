import Socials from "./Socials"
import profil from "../../assets/profil.jpeg";
import { motion } from "framer-motion";
import { FiMapPin, FiMail } from "react-icons/fi";

const ContactInfo = () => {
    return (
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
        </div>)
}

export default ContactInfo