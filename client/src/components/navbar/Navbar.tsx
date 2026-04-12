import { useState } from "react";
import Logo from "../logo/Logo";
import Drawer from "./Drawer";
import DesktopNavigation from "./DesktopNavigation";
import { navData } from "./navbarData";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
    return (
        <>
            <nav className="w-full fixed flex items-center h-17 px-7 text-(--secondary-color) z-10 bg-linear-to-b from-(--primary-color) to-(--primary-color)/80 backdrop-blur-md border-b border-(--secondary-color)/5">
                <div className="w-full flex items-center justify-between">
                    <Logo />
                    <DesktopNavigation navData={navData} />
                    <Drawer>
                        <MobileNavigation navData={navData} />
                    </Drawer>
                </div>
            </nav >
        </>
    );
};


export default Navbar;