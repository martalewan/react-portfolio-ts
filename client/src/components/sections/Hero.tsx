import { FiDownload, } from "react-icons/fi";
import portrait from "../../assets/portrait.svg";
import Button from "../ui/Button";
import Socials from "../modules/Socials";
import ScrollButton from "../ui/ScrollButton";
import RadialGrandientBackground from "../modules/RadialGradientBackground";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section id="home" className="page-padding min-h-screen">
            <RadialGrandientBackground />

            <div className="container z-1 ">
                <div className="min-h-screen flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-3 mt-5 xl:mt-0">
                    <div className="flex flex-col items-center gap-6 xl:items-start text-center xl:text-left order-2 xl:order-0">
                        <div>

                            <span className="section-subtitle">
                                Frontend Developer & UI/UX Enthusiast | Based in Paris
                            </span>

                            <h1>
                                <span className="hidden md:block">
                                    Hi, I am
                                </span>
                                <span className="text-neon-flicker">
                                    Marta Lewandowska
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-137.5 p-large">
                            Building modern, high-quality web applications. Transforming design systems into scalable, modular digital experiences.
                        </p>
                        <div className="flex flex-col gap-6 w-full max-w-md">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a href="/CV_Marta_Lewandowska.pdf" download>
                                    <Button text="Download my CV" icon={FiDownload} />
                                </a>

                                <Link to="contact" smooth duration={500}>
                                    <Button text="Contact Me" variant="secondary" />
                                </Link>
                            </div>

                            <Socials
                                wrapperStyles="flex gap-8 justify-center xl:justify-start w-full"
                                iconsStyles="flex items-center justify-center border border-(--secondary-color)/80 rounded-full p-2 w-9 h-9"
                            />

                        </div>
                    </div>
                    <div className="relative flex justify-center items-center w-[clamp(4rem,8vw,16rem)] xl:w-[clamp(12rem,16vw,18rem)] group">

                        <img
                            src={portrait}
                            draggable={false}
                            className="invert brightness-0 blur-md opacity-20 absolute scale-110 pointer-events-none 
                   transition duration-500 ease-out
                   group-hover:scale-110 group-hover:opacity-40 group-hover:blur-xl"
                        />

                        <img
                            src={portrait}
                            draggable={false}
                            className="invert brightness-0 blur-sm opacity-30 absolute scale-105 pointer-events-none 
                   transition duration-500 ease-out
                   group-hover:scale-105 group-hover:opacity-50 group-hover:blur-md"
                        />

                        <img
                            src={portrait}
                            alt="Portrait of Marta Lewandowska"
                            loading="eager"
                            draggable={false}
                            className="invert brightness-0 relative z-10"
                        />
                    </div>
                </div>
            </div>
            <ScrollButton direction="down" scrollToId="about" />
        </section>
    );
};

export default Hero;