import { Link } from "react-scroll"

const Logo = () => {
    return (
        <header>
            <Link className="text-xl font-bold cursor-pointer" to="home" smooth={true} duration={500}>
                marta
                <span className="text-gradient font-bold text-(--accent-color)">lewan.</span>
            </Link>
        </header>
    )
}

export default Logo