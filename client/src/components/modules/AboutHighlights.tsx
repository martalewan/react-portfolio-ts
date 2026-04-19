import NeonFrame from "./NeonFrame"
import { FiCode, FiLayers, FiMusic, FiZap } from "react-icons/fi";

const AboutHighlights = () => {
    return (
        <div className="relative mb-24 lg:mb-40 space-y-20 lg:space-y-0">
            <div className="relative w-full lg:w-[45%]">
                <NeonFrame>
                    <div className="flex items-center gap-3">
                        <FiCode className="w-4 h-4 text-(--color-accent)" />
                        <h3>Strong frontend foundation</h3>
                    </div>

                    <p className="mt-4 text-(--color-text-muted)">
                        I build <span className="font-medium text-white/90">scalable, high-performance web applications</span> using React and TypeScript.
                        My focus is <span className="font-medium text-white/90">clean architecture</span>, maintainable code, and interfaces that feel fast,
                        accessible, and reliable in real-world use.
                    </p>
                </NeonFrame>
            </div>

            <div className="relative w-full lg:w-[45%] ml-auto -mt-12">
                <NeonFrame>
                    <div className="flex items-center gap-3">
                        <FiLayers className="w-4 h-4 text-(--color-accent)" />
                        <h3>Design-first engineering</h3>
                    </div>

                    <p className="mt-4 text-(--color-text-muted)">
                        With a background in graphic design, I approach frontend development through
                        <span className="font-medium text-white/90"> structure, hierarchy, and visual clarity</span>.
                        I care about how interfaces communicate — not just how they look.
                    </p>
                </NeonFrame>
            </div>

            <div className="relative w-full lg:w-[45%] -mt-12">
                <NeonFrame>
                    <div className="flex items-center gap-3">
                        <FiMusic className="w-4 h-4 text-(--color-accent)" />
                        <h3>Creative discipline</h3>
                    </div>

                    <p className="mt-4 text-(--color-text-muted)">
                        Years as a cellist shaped my <span className="font-medium text-white/90">discipline, patience, and attention to detail</span>.
                        I bring that same mindset into development, especially when refining UI details
                        and working through complex component logic.
                    </p>
                </NeonFrame>
            </div>

            <div className="relative w-full lg:w-[45%] ml-auto -mt-12">
                <NeonFrame>
                    <div className="flex items-center gap-3">
                        <FiZap className="w-4 h-4 text-(--color-accent)" />
                        <h3>Curiosity & continuous growth</h3>
                    </div>

                    <p className="mt-4 text-(--color-text-muted)">
                        My path from design to engineering has been <span className="font-medium text-(--color-text-muted)">intentional and continuous</span>.
                        I enjoy learning, experimenting, and improving with every project — always
                        pushing toward better systems and better user experiences.
                    </p>
                </NeonFrame>
            </div>

        </div>
    )
}

export default AboutHighlights