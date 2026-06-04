import { Link } from "react-scroll"
import logo from "../../assets/logo-white.svg";

const Logo = () => {
    return (
        <header>
            <Link className="cursor-pointer" to="home" smooth={true} duration={500} aria-label="Open homepage"
            >
                <div className="w-8 h-8">
                    <img
                        src={logo}
                        draggable={false}
                        className="w-full h-full object-contain"
                        alt="Main Logo"
                        loading="lazy"
                    />
                </div>
            </Link>
        </header>
    )
}

export default Logo