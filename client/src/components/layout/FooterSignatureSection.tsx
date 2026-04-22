import { FiHeart } from "react-icons/fi";

type FooterSignatureProps = {
    credit: string;
    madeWith: string;
    year: string;
    copyright: string;
};

const FooterSignature = ({ credit, madeWith, year, copyright }: FooterSignatureProps) => {
    return (
        <div
            className="
                border-t border-border-15
                pt-12 pb-2
                flex flex-col md:flex-row
                justify-between
                items-center
                gap-4
                text-xs text-text-80
                uppercase
                z-10 text-relaxed
            "
        >
            <span>{credit}</span>

            <span className="flex items-center gap-1 whitespace-nowrap tracking-wide">
                {madeWith}
                <FiHeart className="text-accent text-xs" />
                in {year} {copyright}
            </span>
        </div>
    );
};

export default FooterSignature;