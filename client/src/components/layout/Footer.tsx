import { FOOTER_SECTIONS_DATA, SIGNATURE_DATA } from "../../data/footerData";
import FooterBrandSection from "./FooterBrandSection";
import FooterContactSection from "./FooterContactSection";
import FooterCTASection from "./FooterCTASection";
import FooterSignature from "./FooterSignatureSection";

const Footer = () => {
    const { brand, contact, cta } = FOOTER_SECTIONS_DATA;

    return (
        <footer
            className="
                relative w-full
                flex flex-col
                gap-28
                page-padding
                pt-40 md:pt-48
                pb-24
                text-text
                border-t border-border-15
                overflow-hidden
            "
        >
            <div
                className="
                    absolute inset-1
                    z-0
                    backdrop-blur-xs
                "
            />

            <div className="
                grid grid-cols-1
                md:grid-cols-3
                gap-16 md:gap-24
                items-start
                relative z-10
            ">

                <FooterBrandSection data={brand} />
                <FooterContactSection data={contact} />
                <FooterCTASection data={cta} />
            </div>

            <FooterSignature {...SIGNATURE_DATA} />
        </footer>
    );
};

export default Footer;

