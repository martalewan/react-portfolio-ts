import { Link } from "react-scroll";
import type { NavigationProps } from "./DesktopNavigation";
import ActionButton from "../actionButton/ActionButton";

const MobileNavigation = ({ navData, setActive, active }: NavigationProps) => {
    return (
        <div className="flex flex-col items-center gap-5">
            {
                navData.map((item) => (
                    <Link
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        onClick={() => setActive(item.id)}
                        className={`bg-white bg-clip-text text-transparent uppercase cursor-pointer transition-all duration-600 ease-in-out
                                                    ${active === item.id
                                ? "bg-linear-to-r items-center from-blue-500 via-teal-500 to-pink-500 drop-shadow-sm"
                                : "hover:bg-linear-to-r hover:from-blue-500 hover:to-teal-400 "
                            }`}>{item.label}
                    </Link>
                ))
            }
            <ActionButton text="Hire Me" />
        </div>
    )
}

export default MobileNavigation;