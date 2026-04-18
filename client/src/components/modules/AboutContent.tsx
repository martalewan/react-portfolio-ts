import { FiCode, FiLayers, FiZap } from "react-icons/fi";

const AboutContent = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
            <div className="flex flex-col gap-8 max-w-210">
                <p className="p-large text-(--secondary-color)/90">
                    I’m a Frontend Engineer with 4+ years of experience building scalable,
                    accessible web applications using React and TypeScript.
                </p>

                <p className="p-large text-(--secondary-color)/90">
                    I focus on crafting clean, modular architectures and thoughtful UI systems
                    that balance performance, maintainability, and user experience.
                </p>

                <p className="p-large text-(--secondary-color)/90">
                    Outside of engineering, I’m a former cellist and graphic designer, which
                    shapes my attention to detail and design sensibility. I also enjoy tennis,
                    chess, and learning new languages.
                </p>
            </div>

            <div className="flex flex-col gap-6">

                <div className="flex flex-col items-start badge">

                    <div className="flex items-center gap-3 mb-3">
                        <FiCode className="w-4 h-4 text-cyan-400/70" />
                        <h4>Expertise</h4>
                    </div>

                    <p className="text-sm leading-relaxed text-(--secondary-color)/70">
                        Specialized in building scalable web applications
                    </p>
                </div>

                <div className="flex flex-col items-start badge">

                    <div className="flex items-center gap-3 mb-3">
                        <FiLayers className="w-4 h-4 text-cyan-400/70" />
                        <h4>Clean Code</h4>
                    </div>

                    <p className="text-sm text-(--secondary-color)/70">
                        Writing maintainable well-documented code that scales
                    </p>
                </div>

                <div className="flex flex-col items-start badge">

                    <div className="flex items-center gap-3 mb-3">
                        <FiZap className="w-4 h-4 text-cyan-400/70" />
                        <h4>Performance</h4>
                    </div>

                    <p className="text-sm text-(--secondary-color)/70">
                        Optimizing for speed and efficiency in every project
                    </p>
                </div>
            </div>
        </div>

    );
};

export default AboutContent;