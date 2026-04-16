import { aboutData } from "../data/aboutData";
import ExperienceItem from "./ExperienceItem";
import { FiArrowRight } from "react-icons/fi";

const AboutExperience = () => {
    return (
        <div className="relative pt-50">

            <h3 className="mb-8 text-right flex items-center justify-end gap-2 group">
                Experience
                <FiArrowRight
                    className="
                    animate-[pulse_4s_ease-in-out_infinite]
                    group-hover:translate-x-1 group-hover:scale-110
                "
                />
            </h3>
            <div className="flex flex-col gap-8">

                {aboutData.map((item, index) => (
                    <ExperienceItem key={index} item={item} />
                ))}

            </div>
        </div>
    );
};

export default AboutExperience;