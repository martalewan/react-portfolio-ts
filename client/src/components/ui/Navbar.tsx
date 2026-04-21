import Logo from "./Logo";
import Drawer from "../modules/Drawer";
import DesktopNavigation from "../modules/DesktopNavigation";
import MobileNavigation from "../modules/MobileNavigation";
import { navData } from "../../data/navbarData";

const Navbar = () => {
    return (
        <>
            <nav className="w-full fixed flex items-center h-14 px-10 z-10 bg-linear-to-b from-bg to-bg-80 backdrop-blur-md border-b border-border-15">
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