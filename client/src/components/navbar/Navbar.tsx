import { useState } from "react";
import ActionButton from "../actionButton/ActionButton";
import { navData } from "./navbarData";
import { Link } from "react-scroll";

const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <>
            <nav className="fixed w-full transition-all bg-white">
                <div className="px-4 py-6 flex items-center justify-between">
                    <div>MARTA LEWAN</div>
                    <div className="flex items-center gap-7">
                        {
                            navData.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.id}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setActive(item.id)}
                                    className={`uppercase cursor-pointer transition-all duration-400 ease-in-out
                                        ${active === item.id
                                            ? "bg-linear-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-medium text-transparent drop-shadow-sm"
                                            : "text-gray-700 hover:bg-linear-to-r hover:from-blue-400 hover:to-teal-400 hover:bg-clip-text hover:text-transparent"
                                        }`}>{item.label}
                                </Link>
                            ))
                        }
                    </div>
                    <ActionButton text="Hire Me" />

                </div>
            </nav >
        </>
    );
};


export default Navbar;