import { FiDownload, } from "react-icons/fi";
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

                            <span className="section-subtitle">Frontend Developer & UI/UX Enthusiast | Based in Paris</span>

                            <h1>
                                <span className="hidden md:block">Hi, I am<br />
                                </span>
                                <span className="text-neon-flicker">
                                    Marta Lewandowska
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-137.5 p-large">
                            Building modern, high-quality web applications. Transforming design systems into scalable, modular digital experiences.
                        </p>
                        <div className="flex flex-wrap gap-9">
                            <div className="flex gap-4">
                                <Button text="Download my CV" icon={FiDownload} />
                                <Button text="Contact Me" variant="secondary" />
                            </div>

                            <Socials wrapperStyles="flex gap-10" iconsStyles="flex items-center justify-center border-1 border-(--secondary-color)/80 rounded-full p-2 w-9 h-9" />
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src={portrait} className="w-65 invert brightness-0 blur-md opacity-20 absolute scale-110" />
                        <img src={portrait} className="w-65 invert brightness-0 blur-sm opacity-30 absolute scale-105" />
                        <img src={portrait} className="w-65 invert brightness-0 relative z-10" />
                    </div>
                </div>
            </div>
            <ScrollButton direction="down" scrollToId="about" />
        </section>
    );
};

export default Hero;