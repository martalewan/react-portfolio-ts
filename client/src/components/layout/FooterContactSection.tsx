import { FiMapPin, FiMail } from "react-icons/fi";
import { useCopyEmail } from "../../hooks/useCopyEmail";
import FooterSectionShell from "./FooterSectionShell";
import { GLOBAL_DATA } from "../../data/globalData";
import type { FooterSectionsData } from "../../data/footerData";

type FooterContactProps = {
    data: FooterSectionsData["contact"];
};

const FooterContactSection = ({ data }: FooterContactProps) => {
    const { email, location } = GLOBAL_DATA;
    const { copied, copy } = useCopyEmail(email);

    return (

        <FooterSectionShell data={data}>
            <div className="flex items-center gap-2 text-xs text-text-80 border-b border-border-15 py-3">
                <FiMapPin className="text-accent" />
                <span>{location}</span>
            </div>

            <div
                className="
                    flex items-center justify-between
                    text-xs text-text-80
                    border-b border-border-15
                    py-3
                    cursor-pointer
                    hover:text-text
                    transition
                    group
                "
                onClick={copy}
            >
                <div className="flex items-center gap-2">
                    <FiMail className="text-accent" />
                    <span className="break-all">{email}</span>
                </div>

                <span className="text-[11px] text-text-40 uppercase group-hover:text-text-80 transition">
                    {copied ? "Copied" : "Copy"}
                </span>
            </div>
        </FooterSectionShell>
    );
};

export default FooterContactSection;