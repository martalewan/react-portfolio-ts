import { FiMapPin, FiMail, FiHeart } from "react-icons/fi";
import { navData } from "../../data/navbarData";
import { Link } from "react-scroll";
import Socials from "../modules/Socials";

const Footer = () => {
    return (
        <div className="w-full flex flex-col gap-30 justify-around page-padding pb-20 pt-10 text-(--color-text) z-10 bg-linear-to-b from-(--color-bg) to-(--color-bg-muted) backdrop-blur-md border-b border-(--color-border)">
            <div className="flex justify-between flex-wrap">
                <div className="flex flex-col gap-3">
                    <h3>Marta Lewandowska</h3>
                    <p className="text-sm text-(--color-text-muted)">Crafting digital experiences with modern web technologies</p>
                    <div className="flex flex-col gap-3 justify-center md:justify-start">
                        <div className="badge text-[11px] px-3 py-1.5 flex items-center gap-2">
                            <FiMapPin className="text-xs text-(--color-accent)" />
                            <span>Paris</span>
                        </div>

                        <div className="badge text-[11px] px-3 py-1.5 flex items-center gap-2">
                            <FiMail className="text-sm text-(--color-accent)" />
                            <span className="break-all">
                                mlewan.design@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3>Quick Links</h3>
                    {
                        navData.map((item) => (
                            <Link
                                key={item.id}
                                to={item.id}
                                smooth={true}
                                duration={500}
                                className="text-[13px] text-(--color-text-muted) uppercase cursor-pointer transition-all duration-600 ease-in-out hover:text-(--color-text)">
                                {item.label}
                            </Link>
                        ))
                    }

                </div>
                <div className="flex flex-col gap-3">
                    <h3>Connect With Me</h3>
                    <p className="text-sm text-(--color-text-muted)">Let's connect and create something amazing together!</p>
                    <Socials
                        wrapperStyles="flex justify-center md:justify-start gap-4"
                        iconsStyles="z-10 flex items-center justify-center border border-(--color-border) rounded-xs p-2 w-9 h-9"
                    />
                </div>
            </div>
            <div className="flex justify-between">
                <h4 className="text-sm ">© 2026 Marta Lewandowska. All rights reserved.</h4>
                <h4 className="text-sm flex items-center gap-1 whitespace-nowrap">
                    Build with
                    <FiHeart className="text-xs text-(--color-accent)" />
                    using React, TypeScript & Tailwind CSS
                </h4>
            </div>


        </div>
    )
}

export default Footer