import { Link } from "react-scroll";
import Button from "../button/Button";

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
                        className="text-[13px] text-(--secondary-color) uppercase cursor-pointer transition-all duration-600 ease-in-out hover:text-(--accent-color)">
                        {item.label}
                    </Link>
                ))
            }
            <Button text="Hire Me" />

        </div >
    )
}

export default DesktopNavigation