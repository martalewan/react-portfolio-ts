import GlassCard from "../ui/GlassCard";
import { aboutData } from "../data/aboutData";
import SectionTitle from "../modules/SectionTitle";
import AboutIntro from "../modules/AboutIntro";

const About = () => {
    return (
        <section id="about" className="page-padding">

            <SectionTitle label="01." title="What makes me different" subtitle="Background" />

            <AboutIntro />

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