import ArchiveFooter from "../archive/components/ArchiveFooter";
import ArchiveHome from "../archive/components/ArchiveHome";
import ArchiveNavbar from "../archive/components/ArchiveNavbar";
import ArchiveAbout from "../archive/components/ArchiveAbout";
import ArchiveContact from "../archive/components/ArchiveContact";
import ArchiveProjects from "../archive/components/ArchiveProjects";
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

                <ArchiveProjects />
                <ArchiveFooter />

            </div>
        </main>
    );
}
