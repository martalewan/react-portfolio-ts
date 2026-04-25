import { motion } from "framer-motion"
import { itemReveal } from "../../animations"

type SectionTitle = {
    label: string,
    title: string,
    subtitle: string,
}

const SectionTitle = ({ label, title, subtitle }: SectionTitle) => {
    return (
        <motion.div variants={itemReveal} className="relative flex flex-col items-start gap-2 mt-40 mb-5">

            <span className="text-xs tracking-widest text-text-40 uppercase">
                {subtitle}
            </span>
            <h2 className="tracking-tight">
                <span className="text-neon numero-font">{label}</span>
                {title}
            </h2>
        </motion.div>
    )
}

export default SectionTitle