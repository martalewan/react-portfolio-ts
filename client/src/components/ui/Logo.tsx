import logo from "../../assets/logo-white.svg";

const Logo = () => {
    return (
        <header>
            <a className="cursor-pointer" href="#home" aria-label="Open homepage"
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
            </a>
        </header>
    )
}

export default Logo
