import { FiMapPin, FiMail, FiHeart } from "react-icons/fi";
import { navData } from "../../data/navbarData";
import { Link } from "react-scroll";
import Socials from "../modules/Socials";

const Footer = () => {
    return (
        <footer className="
            w-full
            flex flex-col
            gap-20
            md:gap-12
            page-padding
            py-13
            text-text
            z-10
            backdrop-blur-md
            border-t border-border-15
        ">

            <div className="
                grid grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-10
            ">

                <div className="flex flex-col gap-3">
                    <h3>Marta Lewandowska</h3>

                    <p className="text-sm">
                        Crafting digital experiences with modern web technologies
                    </p>

                    <div className="flex flex-col gap-2">
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

                <div className="flex flex-col gap-3">
                    <h3>Quick Links</h3>

                    <div className="flex flex-col gap-2)">
                        {navData.map((item) => (
                            <Link
                                key={item.id}
                                to={item.id}
                                smooth
                                duration={500}
                                className="
                                    text-sm
                                    text-text-80
                                    uppercase
                                    cursor-pointer
                                    transition-colors duration-300
                                    hover:text-text
                                "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3>Connect With Me</h3>

                    <p className="text-sm">
                        Let's connect and create something amazing together!
                    </p>

                    <Socials
                        wrapperStyles="
                            flex
                            gap-4
                            justify-start
                            md:justify-start
                        "
                        iconsStyles="
                            flex items-center justify-center
                            border border-border-80
                            rounded-xs
                            p-2
                            w-9 h-9
                        "
                    />
                </div>
            </div>

            <div className="
                flex flex-col
                md:flex-row
                justify-between
                items-center
                gap-3
                text-center md:text-left
            ">

                <h4 className="text-sm">
                    © 2026 Marta Lewandowska. All rights reserved.
                </h4>

                <h4 className="text-sm flex items-center gap-1 whitespace-nowrap">
                    Built with
                    <FiHeart className="text-xs text-accent" />
                    React, TypeScript & Tailwind CSS
                </h4>
            </div>

        </footer>
    );
};

export default Footer;