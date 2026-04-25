import { motion } from "framer-motion";
import { itemReveal } from "../../../animations";
import { ABOUT_PARAGRAPHS } from "../../../data/aboutData";

const AboutContent = () => {
    return (
        <div className="flex flex-col gap-6">

            {ABOUT_PARAGRAPHS.map((item) => (
                <motion.div key={item.id} variants={itemReveal}>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default AboutContent;