import { useScrollTo } from "./useScrollTo";
import { Link } from "react-router-dom";

export default function Navbar({ navOpen, setNavOpen }) {

    const scrollTo = useScrollTo();

    const NavButton = ({ id, label }) => (
        <button
            onClick={() => scrollTo(id)}
            className="hover:opacity-60 transition cursor-pointer"
        >
            {label}
        </button>
    );

    const RouteButton = ({ to, label }) => (
        <Link
            to={to}
            className="
                px-4 py-1.5
                border border-black
                rounded-full
                text-sm
                hover:bg-black hover:text-white
                transition
                cursor-pointer
            "
        >
            {label}
        </Link>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-archive-bg">
            <nav className="h-16 flex justify-between items-center px-[10vw]">

                <Link
                    to="/"
                    className="font-semibold tracking-wide cursor-pointer"
                >
                    marta.lewan
                </Link>

                <div className="hidden md:flex gap-8 tracking-wide items-center">

                    <NavButton id="home" label="Home" />
                    <NavButton id="about" label="About" />
                    <NavButton id="projects" label="Projects" />

                    <RouteButton to="/" label="Back to Frontend" />
                </div>

                <button
                    onClick={() => setNavOpen(!navOpen)}
                    className="md:hidden flex flex-col gap-1 cursor-pointer"
                >
                    <span className="w-5 h-0.5 bg-black" />
                    <span className="w-5 h-0.5 bg-black" />
                    <span className="w-5 h-0.5 bg-black" />
                </button>
            </nav>

            {navOpen && (
                <div className="md:hidden flex flex-col gap-6 px-[10vw] py-6 uppercase">
                    <NavButton id="home" label="Home" />
                    <NavButton id="about" label="About" />
                    <NavButton id="projects" label="Projects" />

                    <RouteButton to="/" label="Back to Frontend" />
                </div>
            )}
        </header>
    );
}