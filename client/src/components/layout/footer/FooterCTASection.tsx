import FooterSectionShell from "./FooterSectionShell";
import type { FooterSectionsData } from "../../../data/footer";
import Socials from "../../ui/Socials";
import Button from "../../ui/Button";

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

            <a href="#contact" aria-label="Open contact section"
            >
                <Button text="Start a project" />
            </a>
        </FooterSectionShell>
    );
};

export default FooterCTASection;
