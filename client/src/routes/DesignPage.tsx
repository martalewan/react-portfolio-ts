import ArchiveFooter from "../archive/components/ArchiveFooter";
import ArchiveHome from "../archive/components/ArchiveHome";
import ArchiveNavbar from "../archive/components/ArchiveNavbar";
import ArchiveAbout from "../archive/components/ArchiveAbout";
import ArchiveContact from "../archive/components/ArchiveContact";
import ArchiveProjectShowcase from "../archive/components/ArchiveProjectShowcase";
import { projectsData } from "../archive/data/archive";

export default function DesignArchive() {

    return (
        <div className="bg-archive-bg text-archive-text font-[Montserrat] px-[10vw]">

            <ArchiveNavbar navOpen={undefined} setNavOpen={undefined} />

            <main>

                <ArchiveHome />

                <ArchiveAbout />

                <ArchiveContact />

                <section id="projects">
                    <h2 className="font-[Playfair_Display] text-[57px] mt-20">
                        Selected Design Case Studies
                    </h2>
                    {projectsData.map((p) => (
                        <ArchiveProjectShowcase key={p.id} {...p} />
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
                <ArchiveFooter />

            </main>
        </div>
    );
}