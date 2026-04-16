import { Link } from "react-scroll";
import type { NavigationProps } from "./DesktopNavigation";
import Button from "../ui/Button";

const MobileNavigation = ({ navData }: NavigationProps) => {
    return (
        <div className="flex flex-col items-center gap-5">
            {
                navData.map((item) => (
                    <Link
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        className="text-(--secondary-color)/70 uppercase cursor-pointer transition-all duration-600 ease-in-out hover:text-(--accent-color)"
                    >{item.label}
                    </Link>
                ))
            }
            <Button text="Hire Me" />
        </div >
    )
}

export default MobileNavigation;