import { aboutData } from "../../data/aboutData";
import ExperienceItem from "./ExperienceItem";
import { FiArrowRight } from "react-icons/fi";

const AboutExperience = () => {
    return (
        <div className="flex flex-col gap-8">

            <h3 className="flex items-center gap-2 group">
                Experience
                <FiArrowRight
                    className="
                    animate-[pulse_3s_ease-in-out_infinite]
                    group-hover:translate-x-1 group-hover:scale-110
                "
                />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {aboutData.map((item, index) => (
                    <ExperienceItem key={index} item={item} />
                ))}

            </div>
        </div>
    );
};

export default AboutExperience;