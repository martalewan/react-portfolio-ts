import { FiDownload } from "react-icons/fi";
import profil from "../../assets/profil.png";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import Socials from "../modules/Socials";
import ScrollButton from "../ui/ScrollButton";

const Hero = () => {
    return (
        <section id="home" className="page-padding min-h-screen">
            <div className="neon-bg">
                <div className="blob b1"></div>
                <div className="blob b2"></div>
                <div className="blob b3"></div>
            </div>

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
                    {/* <div className="relative flex justify-center items-center">
                        <div className="neon-frame rounded-full p-0 opacity-99">
                            <motion.img
                                src={profil}
                                alt="Portrait"
                                className="rounded-full max-w-80 relative"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            <ScrollButton direction="down" scrollToId="about" />
        </section>
    );
};

export default Hero;