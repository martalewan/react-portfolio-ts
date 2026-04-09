import { Link } from "react-scroll";
import ActionButton from "../actionButton/ActionButton";

export type NavigationProps = {
    navData: { id: string; label: string }[];
    setActive: (id: string) => void;
    active: string;
};

const DesktopNavigation = ({ navData, setActive, active }: NavigationProps) => {
    return (
        <div className="hidden xl:flex items-center gap-7">
            {
                navData.map((item) => (
                    <Link
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        onClick={() => setActive(item.id)}
                        className={` bg-white bg-clip-text text-transparent uppercase cursor-pointer transition-all duration-600 ease-in-out
                                        ${active === item.id
                                ? "bg-linear-to-r items-center from-blue-500 via-teal-500 to-pink-500 drop-shadow-sm"
                                : "hover:text-(--accent-color)"
                            }`}>{item.label}
                    </Link>
                ))
            }
            <ActionButton text="Hire Me" />

        </div >
    )
}

export default DesktopNavigation