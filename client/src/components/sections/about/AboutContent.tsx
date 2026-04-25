import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";
import { ABOUT_PARAGRAPHS } from "../../../data/aboutData";

const AboutContent = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-16 font-medium">
            <div className="flex flex-col">

                {ABOUT_PARAGRAPHS.map((item) => (
                    <motion.div key={item.id} variants={itemReveal} className="pb-6">
                        <p className="text-base leading-relaxed text-muted-foreground">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutContent;