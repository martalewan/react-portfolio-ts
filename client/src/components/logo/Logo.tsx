import { Link } from "react-scroll"

const Logo = () => {
    return (
        <header>
            <Link className="text-xl font-bold cursor-pointer" to="home" smooth={true} duration={500}>
                Marta
                <span className="text-gradient font-bold bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Lewan.</span>
            </Link>
        </header>
    )
}

export default Logo