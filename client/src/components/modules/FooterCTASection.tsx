import { Link } from "react-scroll";
import Socials from "./Socials";
import Button from "../ui/Button";
import FooterSectionShell from "./FooterSectionShell";
import type { FooterSectionsData } from "../../data/footerData";

type FooterCTAProps = {
    data: FooterSectionsData["cta"];
};

const FooterCTASection = ({ data }: FooterCTAProps) => {
    return (
        <FooterSectionShell data={data}>

            <Socials
                wrapperStyles="flex gap-4 justify-start"
                iconsStyles="
                    flex items-center justify-center
                    border border-border-80
                    rounded-xs
                    p-2
                    w-9 h-9
                "
            />

            <Link to="contact" smooth={true} duration={500}>
                <Button text="Start a project" />
            </Link>
        </FooterSectionShell>
    );
};

export default FooterCTASection;