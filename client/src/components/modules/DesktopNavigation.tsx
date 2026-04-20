import { Link } from "react-scroll";
import Button from "../ui/Button";

export type NavigationProps = {
    navData: { id: string; label: string }[];
};

const DesktopNavigation = ({ navData }: NavigationProps) => {
    return (
        <div className="hidden xl:flex items-center gap-7">
            {
                navData.map((item) => (
                    <Link
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        className="text-[13px] text-(--color-text-muted) uppercase cursor-pointer transition-all duration-600 ease-in-out hover:text-text">
                        {item.label}
                    </Link>
                ))
            }
            <Link to="contact" smooth={true} duration={500}>
                <Button text="Hire Me" />
            </Link>
        </div >
    )
}

export default DesktopNavigation