import { FiCode, FiLayers, FiZap } from "react-icons/fi";

const AboutContent = () => {
    return (
        <div>

            <p className="mb-10 p-large text-(--secondary-color)/90">
                I am a Frontend Engineer with 4+ years of experience building scalable,
                accessible web applications using React and TypeScript. I specialize in
                clean, modular architecture and modern UI systems.
            </p>

            <p className="mb-20 p-large text-(--secondary-color)/90">
                Outside of coding, I’m a former cellist and graphic designer, which
                influences my creative approach. I also enjoy tennis, chess, and learning
                new languages.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-start badge">

                    <div className="flex items-center gap-3 mb-3">
                        <FiCode className="w-4 h-4 text-cyan-400/70" />
                        <h4>Expertise</h4>
                    </div>

                    <p className="text-sm leading-7 text-(--secondary-color)/70">
                        Specialized in building scalable web applications
                    </p>
                </div>

                <div className="flex flex-col items-start badge">

                    <div className="flex items-center gap-3 mb-3">
                        <FiLayers className="w-4 h-4 text-cyan-400/70" />
                        <h4>Clean Code</h4>
                    </div>

                    <p className="text-sm leading-7 text-(--secondary-color)/70">
                        Writing maintainable well-documented code that scales
                    </p>
                </div>

                <div className="flex flex-col items-start badge">

                    <div className="flex items-center gap-3 mb-3">
                        <FiZap className="w-4 h-4 text-cyan-400/70" />
                        <h4>Performance</h4>
                    </div>

                    <p className="text-sm leading-7 text-(--secondary-color)/70">
                        Optimizing for speed and efficiency in every project
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;