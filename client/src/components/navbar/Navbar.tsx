import { useState } from "react";
import Logo from "../logo/Logo";
import Drawer from "./Drawer";
import DesktopNavigation from "./DesktopNavigation";
import { navData } from "./navbarData";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <>
            <nav className="w-full fixed flex items-center h-17 transition-colors bg-gray-000 z-10 text-white border-b border-gray-700">
                <div className="px-4 w-full flex items-center justify-between">
                    <Logo />
                    <DesktopNavigation navData={navData} active={active} setActive={setActive} />
                    <Drawer>
                        <MobileNavigation navData={navData} active={active} setActive={setActive} />
                    </Drawer>
                </div>
            </nav >
        </>
    );
};


export default Navbar;