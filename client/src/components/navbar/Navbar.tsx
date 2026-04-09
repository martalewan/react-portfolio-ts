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
            <nav className="w-full fixed flex items-center h-17 px-7 transition-colors bg-(--primary-color) z-10 text-(--secondary-color) border-b border-(--secondary-color)/20">
                <div className="w-full flex items-center justify-between">
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