import ArchiveFooter from "../archive/components/ArchiveFooter";
import ArchiveHome from "../archive/components/ArchiveHome";
import ArchiveNavbar from "../archive/components/ArchiveNavbar";
import ArchiveAbout from "../archive/components/ArchiveAbout";
import ArchiveContact from "../archive/components/ArchiveContact";
import ArchiveProjectShowcase from "../archive/components/ArchiveProjectShowcase";
import { projectsData } from "../archive/data/archiveData";

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
                <ArchiveFooter />

            </main>
        </div>
    );
}