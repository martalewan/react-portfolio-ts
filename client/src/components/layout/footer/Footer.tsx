import { motion } from "framer-motion";
import { FOOTER_SECTIONS_DATA, SIGNATURE_DATA } from "../../../data/footer";
import FooterBrandSection from "./FooterBrandSection";
import FooterContactSection from "./FooterContactSection";
import FooterCTASection from "./FooterCTASection";
import FooterSignature from "./FooterSignatureSection";
import { staggerContainer } from "../../../animations";

const Footer = () => {
    const { brand, contact, cta } = FOOTER_SECTIONS_DATA;

    return (
        <motion.footer
            variants={staggerContainer({ delay: .5 })}
            initial="hidden"
            animate="show"
            className="
                relative w-full
                flex flex-col
                gap-28
                page-padding
                pt-20 md:pt-38
                pb-10
                text-text
                border-t border-border-15
                overflow-hidden
                mt-15
            "
        >
            <div
                className="
                    absolute inset-1
                    backdrop-blur-xs
                "
            />

            <div className="
                grid grid-cols-1
                md:grid-cols-3
                gap-16 md:gap-24
                items-start
                relative
            ">

                <FooterBrandSection data={brand} />
                <FooterContactSection data={contact} />
                <FooterCTASection data={cta} />
            </div>

            <FooterSignature {...SIGNATURE_DATA} />
        </motion.footer>
    );
};

export default Footer;

