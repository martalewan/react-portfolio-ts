import GlassCard from "../ui/GlassCard";
import { aboutData } from "../data/aboutData";

const About = () => {
    return (
        <section id="about" className="page-padding relative flex flex-col pt-40 gap-16">

            <div className="relative flex flex-col items-start gap-2 pl-10">

                <div className="absolute left-0 top-1/2 w-6 h-px bg-white/20" />

                <span className="text-xs tracking-widest text-white/30 uppercase">
                    Background
                </span>
                <h2 className="tracking-tight">
                    <span className="neon-flicker numero-font ">01.</span>
                    What makes me different
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-22 mt-20 mb-40">
                <div>
                    <h3 className="mb-10">Strong frontend foundation</h3>
                    <p className="mt-4 text-(--secondary-color)/90">
                        I specialize in building scalable, performant web applications using modern technologies like React and TypeScript. I focus on clean architecture, maintainable code, and creating interfaces that are not only visually refined, but also fast, accessible, and reliable in real-world use.
                    </p>
                </div>

                <div>
                    <h3 className="mb-10">Design-first engineering</h3>
                    <p className="mt-4 text-(--secondary-color)/90">
                        My background is rooted in graphic design, with over 7 years of experience shaping visual systems, layouts, and user experiences. That foundation still drives how I approach frontend development today. I don’t just build interfaces — I think about structure, hierarchy, and clarity from the very first line of code.
                    </p>
                </div>

                <div>
                    <h3 className="mb-10">Creative discipline</h3>
                    <p className="mt-4 text-(--secondary-color)/90">
                        Before tech, I spent years as a cellist. That experience shaped my discipline, patience, and attention to nuance — qualities I bring into my work every day. Whether refining UI details or structuring complex components, I approach problems with focus and precision.
                    </p>
                </div>
                <div>
                    <h3 className="mb-10">Curiosity & continuous growth</h3>
                    <p className="mt-4 text-(--secondary-color)/90">
                        Transitioning from design to frontend wasn’t a switch — it was a deliberate evolution. I enjoy learning, experimenting, and improving with every project. I’m motivated by building better experiences and pushing my craft forward, both technically and creatively.
                    </p>
                </div>

            </div>
            <GlassCard glow>
                <div className="grid grid-cols-2 gap-20 relative z-10">

                    <div>

                        <p className="mb-6 text-(--secondary-color)/70">
                            I am a Frontend Engineer with 4+ years of experience building scalable,
                            accessible web applications using React and TypeScript. I specialize in
                            clean, modular architecture and modern UI systems.
                        </p>

                        <p className="mb-10 text-(--secondary-color)/70 leading-7">
                            Outside of coding, I’m a former cellist and graphic designer, which
                            influences my creative approach. I also enjoy tennis, chess, and learning
                            new languages.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">

                            <p className="text-(--secondary-color)/60">
                                Name:<br />
                                <span className="text-(--secondary-color)">
                                    Marta Lewandowska
                                </span>
                            </p>

                            <p className="text-(--secondary-color)/60">
                                Based in:<br />
                                <span className="text-(--secondary-color)">
                                    Paris, France
                                </span>
                            </p>

                            <p className="text-(--secondary-color)/60">
                                Availability:<br />
                                <span className="text-(--secondary-color)">
                                    Full-Time & Freelance
                                </span>
                            </p>

                            <p className="text-(--secondary-color)/60">
                                Email:<br />
                                <a
                                    href="mailto:mlewan.design@gmail.com"
                                    className="text-(--secondary-color) hover:text-(--accent-color) transition"
                                >
                                    mlewan.design@gmail.com
                                </a>
                            </p>

                        </div>
                    </div>

                    <div className="relative">

                        <h3 className="mb-10">Experience</h3>

                        <div className="absolute left-0 top-17 bottom-0 w-px bg-white/10" />

                        <div className="flex flex-col gap-8">

                            {aboutData.map((item, index) => (
                                <div key={index} className="relative pl-10 group">

                                    <div className="absolute left-[-3.5px] top-1/2 -translate-y-1/2 w-2 h-2">

                                        <span className="absolute w-2 h-2 rounded-full bg-(--secondary-color)" />
                                        <span className="absolute w-2 h-2 rounded-full bg-(--secondary-color) animate-ping opacity-80" />

                                    </div>


                                    <div className="flex items-start justify-between p-4 rounded-md border border-(--secondary-color)/10 bg-(--secondary-color)/5 group-hover:bg-(--secondary-color)/10 transition">

                                        <div>
                                            <h4 className="text-(--secondary-color)/80">
                                                {item.position}
                                            </h4>
                                            <p className="text-(--secondary-color)/60 text-sm">
                                                {item.place}
                                            </p>
                                        </div>

                                        <div className="px-3 py-1 rounded-full border border-(--secondary-color)/15 text-xs text-(--secondary-color)/70">
                                            {item.years}
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </GlassCard>

        </section>
    );
};

export default About;