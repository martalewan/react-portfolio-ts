import ArchiveFooter from "../archive/components/ArchiveFooter";
import ArchiveHome from "../archive/components/ArchiveHome";
import ArchiveNavbar from "../archive/components/ArchiveNavbar";
import ArchiveAbout from "../archive/components/ArchiveAbout";
import ArchiveContact from "../archive/components/ArchiveContact";
import ArchiveProjectShowcase from "../archive/components/ArchiveProjectShowcase";
import { projectsData } from "../archive/data/archiveData";
import { useState } from "react";

export default function DesignArchive() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    return (
        <main className="bg-archive-bg text-archive-text font-[Montserrat] px-[10vw]">

            <ArchiveNavbar navOpen={navOpen} setNavOpen={setNavOpen} />

            <div>

                <ArchiveHome />

                <ArchiveAbout />

                <ArchiveContact />

                <section id="projects">
                    <h2 className="font-[Playfair_Display] text-[36px] md:text-[56px] mt-20">
                        Selected Design Case Studies
                    </h2>
                    {projectsData.map((p) => (
                        <ArchiveProjectShowcase key={p.id} {...p} />
                    ))}
                </section>
                <ArchiveFooter />

            </div>
        </main>
    );
}