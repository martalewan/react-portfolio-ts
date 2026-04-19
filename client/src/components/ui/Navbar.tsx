import Logo from "./Logo";
import Drawer from "../modules/Drawer";
import DesktopNavigation from "../modules/DesktopNavigation";
import MobileNavigation from "../modules/MobileNavigation";
import { navData } from "../../data/navbarData";

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