import Socials from "./Socials"
import profil from "../../assets/profil.jpeg";
import { motion } from "framer-motion";
import { FiMapPin, FiMail } from "react-icons/fi";

const ContactInfo = () => {
    return (
        <div className="flex flex-col md:flex-row md:ml-auto gap-6 md:gap-4">

            <Socials
                wrapperStyles="flex flex-row md:flex-col justify-center md:justify-start gap-4 shrink-0"
                iconsStyles="z-10 flex items-center justify-center border border-(--color-border) rounded-xs p-2 w-9 h-9"
            />

            <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start w-full">

                <motion.img
                    src={profil}
                    alt="Portrait"
                    className="rounded-sm w-40 sm:w-52 md:w-88 h-auto object-contain"
                />

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <div className="badge text-[11px] px-3 py-1.5 flex items-center gap-2">
                        <FiMapPin className="text-xs text-accent" />
                        <span>Paris</span>
                    </div>

                    <div className="badge text-[11px] px-3 py-1.5 flex items-center gap-2">
                        <FiMail className="text-sm text-accent" />
                        <span className="break-all">
                            mlewan.design@gmail.com
                        </span>
                    </div>
                </div>

            </div>
        </div>)
}

export default ContactInfo