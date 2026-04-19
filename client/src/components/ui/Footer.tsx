import { FiMapPin, FiMail, FiHeart } from "react-icons/fi";
import { navData } from "../../data/navbarData";
import { Link } from "react-scroll";
import Socials from "../modules/Socials";

const Footer = () => {
    return (
        <footer className="
            w-full
            flex flex-col
            gap-10
            md:gap-12
            page-padding
            py-10
            text-text
            z-10
            bg-linear-to-b from-(--color-bg) to-bg-muted
            backdrop-blur-md
            border-t border-border-faint
        ">

            <div className="
                grid grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-10
            ">

                <div className="flex flex-col gap-(--space-3)">
                    <h3>Marta Lewandowska</h3>

                    <p className="text-sm text-(--color-text-muted)">
                        Crafting digital experiences with modern web technologies
                    </p>

                    <div className="flex flex-col gap-(--space-2)">
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

                <div className="flex flex-col gap-(--space-3)">
                    <h3>Quick Links</h3>

                    <div className="flex flex-col gap-(--space-2)">
                        {navData.map((item) => (
                            <Link
                                key={item.id}
                                to={item.id}
                                smooth
                                duration={500}
                                className="
                                    text-[13px]
                                    text-(--color-text-muted)
                                    uppercase
                                    cursor-pointer
                                    transition-colors duration-300
                                    hover:text-(--color-text)
                                "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-(--space-3)">
                    <h3>Connect With Me</h3>

                    <p className="text-sm text-(--color-text-muted)">
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
                            border border-(--color-border)
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
                gap-(--space-3)
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