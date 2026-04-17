import NeonFrame from "./NeonFrame"
import { FiCode, FiLayers, FiMusic, FiZap } from "react-icons/fi";
const AboutIntro = () => {
    return (
        <div className="relative mb-40">
            <div className="relative w-[45%]">
                <NeonFrame>
                    <div className="flex items-center gap-3">
                        <FiCode className="w-4 h-4 text-(--accent-color)" />
                        <h3>Strong frontend foundation</h3>
                    </div>


                    <p className="mt-4 text-(--secondary-color)/90">
                        I specialize in building scalable, performant web applications using modern technologies like React and TypeScript. I focus on clean architecture, maintainable code, and creating interfaces that are not only visually refined, but also fast, accessible, and reliable in real-world use.
                    </p>
                </NeonFrame>

            </div>

            <div className="relative w-[45%] ml-auto -mt-12">
                <NeonFrame>
                    <div className="flex items-center gap-3">
                        <FiLayers className="w-4 h-4 text-(--accent-color)" />
                        <h3>Design-first engineering</h3>
                    </div>

                    <p className="mt-4 text-(--secondary-color)/90">
                        My background is rooted in graphic design, with over 7 years of experience shaping visual systems, layouts, and user experiences. That foundation still drives how I approach frontend development today. I don’t just build interfaces — I think about structure, hierarchy, and clarity from the very first line of code.
                    </p>
                </NeonFrame>

            </div>

            <div className="relative w-[45%] -mt-12">

                <NeonFrame>
                    <div className="flex items-center gap-3">
                        <FiMusic className="w-4 h-4 text-(--accent-color)" />
                        <h3>Creative discipline</h3>
                    </div>

                    <p className="mt-4 text-(--secondary-color)/90">
                        Before tech, I spent years as a cellist. That experience shaped my discipline, patience, and attention to nuance — qualities I bring into my work every day. Whether refining UI details or structuring complex components, I approach problems with focus and precision.
                    </p>
                </NeonFrame>

            </div>
            <div className="relative w-[45%] ml-auto -mt-12">
                <NeonFrame>
                    <div className="flex items-center gap-3">
                        <FiZap className="w-4 h-4 text-(--accent-color)" />
                        <h3>Curiosity & continuous growth</h3>
                    </div>

                    <p className="mt-4 text-(--secondary-color)/90">
                        Transitioning from design to frontend wasn’t a switch — it was a deliberate evolution. I enjoy learning, experimenting, and improving with every project. I’m motivated by building better experiences and pushing my craft forward, both technically and creatively.
                    </p>
                </NeonFrame>

            </div>

        </div>)
}

export default AboutIntro