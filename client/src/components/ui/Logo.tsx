import { Link } from "react-scroll"
import logo from "../../assets/logo-white.svg";

const Logo = () => {
    return (
        <header>
            <Link className="cursor-pointer" to="home" smooth={true} duration={500}>
                <div className="w-9 h-9">
                    <img
                        src={logo}
                        draggable={false}
                        className="w-full h-full object-contain"
                    />
                </div>
            </Link>
        </header>
    )
}

export default Logo