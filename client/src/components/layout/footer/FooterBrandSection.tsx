import { motion } from "framer-motion";
import logo from "../../../assets/logo-white.svg";
import type { FooterSectionsData } from "../../../data/footer";
import { itemReveal } from "../../../animations";

export type FooterBrandProps = {
    data: FooterSectionsData["brand"];
};

const FooterBrandSection = ({ data }: FooterBrandProps) => {
    const { description } = data;
    return (
        <motion.div
            variants={itemReveal}
            className="flex flex-col gap-6"
        >
            <div className="w-25 h-25 md:w-45 md:h-45">
                <img
                    src={logo}
                    draggable={false}
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition"
                />
            </div>

            <p className="text-sm text-text-70 leading-relaxed max-w-xs">
                {description}
            </p>
        </motion.div>
    );
};

export default FooterBrandSection;