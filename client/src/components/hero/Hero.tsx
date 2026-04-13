import { FiDownload } from "react-icons/fi";
import profil from "../../assets/profil.png";
import Button from "../button/Button";
import { motion } from "framer-motion";
import Socials from "../socials/Socials";
import ScrollButton from "../scrollButton/ScrollButton";

const Hero = () => {
    return (
        <section id="home" className="page-padding relative min-h-screen pt-10">

            <div className="container">
                <div className="h-full flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-6">
                    <div className="flex flex-col items-center gap-5 xl:items-start text-center xl:text-left order-2 xl:order-0">
                        <div>
                            <span className="section-subtitle">Frontend Developer</span>
                            <h1>
                                <span className="hidden md:block">Hi, I am<br />
                                </span>
                                <span className="neon-flicker">
                                    Marta Lewandowska
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-137.5 p-large">
                            I build high-quality frontend experiences, transforming design systems into scalable, modular, and future-ready applications.
                        </p>
                        <div className="flex gap-9">
                            <div className="flex gap-4">
                                <Button text="Download my CV" icon={FiDownload} />
                                <Button text="Contact Me" variant="secondary" />
                            </div>

                            <Socials wrapperStyles="flex gap-10" iconsStyles="flex items-center justify-center border-1 border-white rounded-full p-2 w-9 h-9 hover:text-(--accent-color) hover:border-(--accent-color) hover:transition-all duration-500" />
                        </div>
                    </div>
                    <div className="relative w-52 xl:w-130 flex justify-center items-center">
                        <motion.div
                            className="absolute w-50 h-50 xl:w-120 xl:h-120 bg-pink-500 rounded-full opacity-20 blur-sm"
                            initial={{ x: -50, y: -50 }}
                            animate={{ x: [0, 50, -50], y: [0, -30, 30] }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                        />
                        <motion.div
                            className="absolute w-50 h-50 xl:w-120 xl:h-120 bg-teal-400 rounded-full opacity-25 blur-sm"
                            initial={{ x: 50, y: 50 }}
                            animate={{ x: [-40, 40, -40], y: [20, -20, 20] }}
                            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
                        />
                        <motion.img
                            src={profil}
                            alt="Portrait"
                            className="w-90 xl:maxw-140 rounded-full relative mix-blend-lighten"
                            transition={{ type: "spring", stiffness: 80 }}
                        />
                    </div>
                </div>
            </div>
            <ScrollButton direction="down" scrollToId="about" />
        </section>
    );
};

export default Hero;