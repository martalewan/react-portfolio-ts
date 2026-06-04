import Button from "../ui/Button";
import { Link as RouterLink } from "react-router-dom";

export type NavigationProps = {
    navData: { id: string; label: string }[];
};

const DesktopNavigation = ({ navData }: NavigationProps) => {
    return (
        <div className="hidden xl:flex items-center gap-7">
            {
                navData.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        aria-label={`Open ${item.label} section`}
                        className="text-[13px] text-text-80 uppercase cursor-pointer transition-all duration-600 ease-in-out hover:text-text">
                        {item.label}
                    </a>
                ))
            }
            <RouterLink
                to="/design"
                className="text-[13px] text-text-40 uppercase transition hover:text-text"
            >
                Design Archive
            </RouterLink>
            <a href="#contact" aria-label="Open contact section"
            >
                <Button text="Start a project" />
            </a>
        </div >
    )
}

export default DesktopNavigation
