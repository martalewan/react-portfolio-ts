import ActionButton from "../actionButton/ActionButton";
import { navData } from "./navbarData";

const Navbar = () => {
    return (
        <>
            <nav className="fixed w-full transition-all">
                <div className="px-4 py-6 flex items-center justify-between">
                    <div>MARTA LEWAN</div>
                    <div className="flex items-center gap-7">
                        {
                            navData.map((item) => (
                                <a key={item.id} className="uppercase">
                                    {item.label}
                                </a>
                            ))
                        }
                    </div>
                    <ActionButton text="Hire Me" />

                </div>
            </nav>
        </>
    );
};


export default Navbar;