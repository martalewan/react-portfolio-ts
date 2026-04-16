import { FiDownload } from "react-icons/fi";
import portrait from "../../assets/portrait.svg";
import Button from "../ui/Button";
import Socials from "../modules/Socials";
import ScrollButton from "../ui/ScrollButton";
import RadialGrandientBackground from "../modules/RadialGrandientBackground";

const Hero = () => {
    return (
        <section id="home" className="page-padding min-h-screen">
            <RadialGrandientBackground />

            <div className="container h-screen z-1">
                <div className="h-full flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-6">
                    <div className="flex flex-col items-center gap-5 xl:items-start text-center xl:text-left order-2 xl:order-0">
                        <div>
                            <span className="section-subtitle">Frontend Developer</span>

                            <h1>
                                <span className="hidden md:block">Hi, I am<br />
                                </span>
                                <span className="text-neon-flicker">
                                    Marta Lewandowska
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-137.5 p-large">
                            I build high-quality frontend experiences, transforming design systems into scalable, modular, and future-ready applications.
                        </p>
                        <div className="flex flex-wrap gap-9">
                            <div className="flex gap-4">
                                <Button text="Download my CV" icon={FiDownload} />
                                <Button text="Contact Me" variant="secondary" />
                            </div>

                            <Socials wrapperStyles="flex gap-10" iconsStyles="flex items-center justify-center border-1 border-white rounded-full p-2 w-9 h-9 hover:text-(--accent-color) hover:border-(--accent-color) hover:transition-all duration-500" />
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src={portrait} alt="portrait" className="w-65 invert brightness-0" />
                    </div>
                </div>
            </div>
            <ScrollButton direction="down" scrollToId="about" />
        </section>
    );
};

export default Hero;