import { Link } from "react-scroll";
import Button from "../ui/Button";
import type { NavigationProps } from "./NavigationDesktop";
import { Link as RouterLink } from "react-router-dom";

const MobileNavigation = ({ navData }: NavigationProps) => {
    return (
        <div className="flex flex-col items-center gap-6">
            {
                navData.map((item) => (
                    <Link
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        className="text-text-80 text-[13px] uppercase cursor-pointer transition-all duration-600 ease-in-out hover:text-text"
                    >{item.label}
                    </Link>
                ))
            }
            <RouterLink
                to="/design"
                className="text-text-40 text-[13px] uppercase transition hover:text-text"
            >
                Design Archive
            </RouterLink>
            <Link to="contact" smooth={true} duration={500}>
                <Button text="Start a project" />
            </Link>
        </div >
    )
}

export default MobileNavigation;