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
                        className="text-text-80 uppercase cursor-pointer transition-all duration-600 ease-in-out hover:text-text"
                    >{item.label}
                    </Link>
                ))
            }
            <Link to="contact" smooth={true} duration={500}>
                <Button text="Start a project" />
            </Link>
        </div >
    )
}

export default MobileNavigation;