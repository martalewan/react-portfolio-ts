import { FiDownload } from "react-icons/fi";
import profil from "../../assets/profil.png";
import ActionButton from "../actionButton/ActionButton";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="flex min-h-screen text-white bg-gray-900">
            <div className="container mx-auto items-center">
                <div className="flex flex-col gap-7 xl:flex-row justify-center xl:justify-between items-center px-24 h-full">
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-0">
                        <span>Frontend Developer</span>
                        <h1 className="mb-6">
                            Hello, I am <br />
                            <span className="bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent neon-flicker">
                                Marta Lewandowska
                            </span>
                        </h1>
                        <p className="max-w-[550px] mb-6">
                            <span className="font-bold">Frontend Engineer with 4+ years of experience</span> building scalable, accessible web applications using <span className="font-bold">React</span> and <span className="font-bold">TypeScript</span>. I focus on turning design systems into high-quality, performant user experiences with strong attention to detail.
                        </p>
                        <ActionButton text="Download my CV" icon={FiDownload} />
                    </div>

                    <div className="relative w-60 xl:w-130 flex justify-center items-center">
                        <motion.div
                            className="absolute w-60 h-60 xl:w-130 xl:h-130 bg-pink-500 rounded-full opacity-50"
                            initial={{ x: -50, y: -50 }}
                            animate={{ x: [0, 50, -50], y: [0, -30, 30] }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                        />
                        <motion.div
                            className="absolute w-60 h-60 xl:w-130 xl:h-130 bg-teal-400 rounded-full opacity-30"
                            initial={{ x: 50, y: 50 }}
                            animate={{ x: [-40, 40, -40], y: [20, -20, 20] }}
                            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
                        />
                        <motion.img
                            src={profil}
                            alt="Portrait"
                            className="w-90 xl:w-150 rounded-full relative mix-blend-lighten"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;