import { useState } from "react";
import ActionButton from "../actionButton/ActionButton";
import { navData } from "./navbarData";
import { Link } from "react-scroll";

const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <>
            <nav className="fixed w-full transition-colors bg-white">
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
                                    className={` bg-gray-700 bg-clip-text text-transparent uppercase cursor-pointer transition-all duration-600 ease-in-out
                                        ${active === item.id
                                            ? "bg-linear-to-r items-center from-blue-500 via-teal-500 to-pink-500 font-medium drop-shadow-sm"
                                            : "hover:bg-linear-to-r hover:from-blue-500 hover:to-teal-400 "
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