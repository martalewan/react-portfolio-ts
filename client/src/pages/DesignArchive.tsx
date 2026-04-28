import { projectsData } from "../data/archiveData";
import ProjectShowcase from "../components/archive/ProjectShowcase";
import Footer from "../components/archive/Footer";
import Home from "../components/archive/Home";
import About from "../components/archive/About";
import Contact from "../components/archive/Contact";
import Navbar from "../components/archive/Navbar";

export default function DesignArchive() {

    return (
        <div className="bg-archive-bg text-archive-text font-[Montserrat] px-[10vw]">

            <Navbar navOpen={undefined} setNavOpen={undefined} />

            <main>

                <Home />

                <About />

                <Contact />

                <section id="projects">
                    <h2 className="font-[Playfair_Display] text-[57px] mt-30">
                        Projects Details
                    </h2>
                    {projectsData.map((p) => (
                        <ProjectShowcase key={p.id} {...p} />
                    ))}
                </section>

                {/* <section className="min-h-screen">
                    <h2 className="font-[Playfair_Display] text-[36px] mb-8.25">
                        Projects Quick Overview
                    </h2>
                    <div className="grid grid-cols-3 gap-5">
                        {portfolioData.map((col, i) => (
                            <div key={i} className="flex flex-col gap-5">
                                {col.map((item, j) => (
                                    <PortfolioItem key={j} {...item} />
                                ))}
                            </div>
                        ))}
                    </div>
                </section> */}
                <Footer />

            </main>
        </div>
    );
}