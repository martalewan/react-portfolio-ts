import GlassCard from "../glassCard/GlassCard"
import { aboutData } from "./aboutData"

const About = () => {
    return (
        <section id="about" className="flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center">
                <h2>About Me</h2>
                <span className="section-subtitle">Get to know more about me and my journey and my professional experience</span>
            </div>

            <GlassCard glow>
                <div className="flex relative gap-14 z-10">
                    <div className="flex-1">
                        <div>
                            <h3 className="mb-2">Who I am?</h3>
                            <p className="mb-6">
                                I am a Frontend Engineer with 4+ years of experience building scalable, accessible web applications using React and TypeScript. I specialize in creating clean, modular, and maintainable code while leveraging modern frontend tools and architectures to solve complex problems efficiently. I am excited to contribute to projects that challenge me, improve user experiences, and push the boundaries of frontend development.
                            </p>
                            <p className="mb-6">
                                Outside of coding, I am a former cellist and have 8 years of experience as a graphic designer - both of which continue to inspire my creativity. I also enjoy tennis, chess, and learning new languages, which sharpen my curiosity, discipline, and problem-solving skills - qualities I bring to every project.
                            </p>

                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <p className="text-(--secondary-color)/80">Name:<br />
                                <span className="font-bold">Marta Lewandowska</span>
                            </p>

                            <p className="text-(--secondary-color)/80">Based in:<br />
                                <span className="font-bold">Paris, France</span>
                            </p>

                            <p className="text-(--secondary-color)/80">Availability:<br />
                                <span className="font-bold">Full-Time & Freelance</span>
                            </p>

                            <p className="text-(--secondary-color)/80">Email:<br />
                                <span className="font-bold">                   <a href="mailto:mlewan.design@gmail.com" className="hover:underline">
                                    mlewan.design@gmail.com
                                </a>
                                </span>

                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="mb-2">My Experience</h3>
                        <div className="flex flex-col gap-6">
                            {aboutData.map((item, index) => {
                                return (
                                    <div key={index} className="glass-block p-4 flex items-start justify-between">
                                        <div>
                                            <h4 className="text-(--secondary-color)/80">
                                                {item.position}
                                            </h4>
                                            <p className="text-(--secondary-color)/60">
                                                {item.place}
                                            </p>
                                        </div>
                                        <div className="glass-block min-w-20 text-center"><span className="section-subtitle ">{item.years}</span></div>
                                    </div>
                                )
                            })}</div>


                    </div>

                </div>
            </GlassCard>



        </section >
    )
}

export default About