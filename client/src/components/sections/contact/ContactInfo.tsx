import profil from "../../../assets/profil.jpeg";
import { FiMapPin, FiMail } from "react-icons/fi";
import Socials from "../../ui/Socials";

const ContactInfo = () => {
    return (
        <div className="flex flex-col md:flex-row md:ml-auto gap-6 md:gap-4">

            <Socials
                wrapperStyles="flex flex-row md:flex-col justify-center md:justify-start gap-4 shrink-0"
                iconsStyles="flex items-center justify-center border border-border-80 rounded-xs p-2 w-9 h-9"
            />

            <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start w-full">

                <img
                    src={profil}
                    alt="Portrait"
                    className="rounded-sm w-40 sm:w-52 md:w-88 object-contain"
                />

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">

                    <div className="ui-elevated text-xs">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <FiMapPin className="text-accent text-sm shrink-0" />
                            <span>Paris, FR</span>
                        </div>
                    </div>

                    <div className="ui-elevated text-xs">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <FiMail className="text-accent text-sm shrink-0" />
                            <span className="truncate max-w-[200px]">
                                mlewan.design@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className="ui-elevated text-xs">
                        <div className="flex items-center gap-2 whitespace-nowrap">

                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>

                            <span className="text-text-80">
                                Open to work
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;