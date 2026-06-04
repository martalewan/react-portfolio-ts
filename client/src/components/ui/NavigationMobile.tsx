import Button from "../ui/Button";
import type { NavigationProps } from "./NavigationDesktop";
import { Link as RouterLink } from "react-router-dom";

const MobileNavigation = ({ navData }: NavigationProps) => {
    return (
        <div className="flex flex-col items-center gap-6">
            {
                navData.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-text-80 text-[13px] uppercase cursor-pointer transition-all duration-600 ease-in-out hover:text-text"
                        aria-label={`Open ${item.label} section`}
                    >{item.label}
                    </a>
                ))
            }
            <RouterLink
                to="/design"
                className="text-text-40 text-[13px] uppercase transition hover:text-text"
            >
                Design Archive
            </RouterLink>
            <a href="#contact" aria-label="Open contact section">
                <Button text="Start a project" />
            </a>
        </div >
    )
}

export default MobileNavigation;
